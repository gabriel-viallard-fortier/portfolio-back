import { loginUser } from '../services/auth.service.js';
const login = async (req, res, next) => {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    if (!token)
        next();
    return res.json({ token });
};
export { login };
//# sourceMappingURL=auth.controller.js.map