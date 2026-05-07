import 'dotenv/config'; // Charger les variables d'environnement
import connect from './config/database.js'; // Importer la fonction de connexion à la base de données
import express, {} from 'express'; // Importer Express
import cors, {} from 'cors'; // Pour gérer les requêtes CORS
import errorHandler from './middlewares/errorHandler.js';
import validate from './middlewares/validate.js';
import { colorize } from './utils/Colorize.js';
import { hostname } from 'node:os';
import authRoutes from './routes/auth.routes.js';
import projectsRoutes from './routes/projects.routes.js';
import categoriesRoutes from './routes/categories.routes.js';
// Initialiser l'application Express
const app = express();
const PORT = process.env.PORT || 3000; // Utiliser le port de l'environnement ou 3000 par défaut
// Middlewares globaux
app.use(express.json());
// Configuration CORS
const whitelist = [process.env.FRONT_URL, 'http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'];
const corsOptions = {
    origin: (origin, callback) => {
        // Autoriser les requêtes sans origine (Postman, apps mobiles)
        if (!origin)
            return callback(null, true);
        // Vérifier si l'origine est dans la liste blanche
        if (whitelist.includes(origin))
            return callback(null, true);
        // Autoriser les adresses IP locales pour le développement
        if (origin.startsWith('http://localhost') ||
            origin.startsWith('http://192.168.'))
            return callback(null, true);
        callback(new Error('Not allowed by CORS')); // Bloquer les autres origines
    },
    credentials: true // Autoriser les cookies et les en-têtes d'authentification
};
// Appliquer le middleware CORS
app.use(cors(corsOptions));
// Définir les routes
app.use('/auth', authRoutes);
app.use('/categories', categoriesRoutes);
app.use('/projects', projectsRoutes);
// Fonction principale pour démarrer le serveur
async function startServer() {
    console.log(colorize(`
==================================================================
                      PORTFOLIO STARTING
==================================================================
`).magenta);
    // Étape 1 : Connexion à la base de données
    console.log(colorize(`Connexion à la base de données...`).yellow);
    await connect.connect(); // Attendre que la connexion soit réussie
    // Étape 2 : Démarrer le serveur
    console.log(colorize('Démarrage du serveur...').yellow);
    app.listen(PORT, () => {
        console.log(colorize(`Serveur démarré sur http://${hostname}:${PORT}`).green);
    });
}
// Lancer le serveur
startServer();
// Gestionnaire d'erreurs — toujours EN DERNIER
app.use(errorHandler);
//# sourceMappingURL=server.js.map