import type { Request, Response } from 'express';
declare const getOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const getAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const create: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { getOne, getAll, create };
//# sourceMappingURL=categories.controller.d.ts.map