import type { Request, Response, NextFunction } from 'express';
declare const validate: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export default validate;
//# sourceMappingURL=validate.d.ts.map