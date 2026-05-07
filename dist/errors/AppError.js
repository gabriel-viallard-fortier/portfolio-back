import { colorize } from '../utils/Colorize.js';
class AppError extends Error {
    status;
    constructor(message, status = 500) {
        super(message);
        this.status = status;
        this.name = 'AppError';
    }
}
export default AppError;
//# sourceMappingURL=AppError.js.map