import { colorize } from '../utils/Colorize.js';
const errorHandler = (err, req, res, next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    // Afficher l'erreur dans la console
    console.error(colorize(`[${err.name || 'Error'}] ${message}`).red);
    res.status(status).json({
        status: 'error',
        statusCode: status,
        message
    });
};
export default errorHandler;
//# sourceMappingURL=errorHandler.js.map