import type { Request, Response } from 'express';
declare const getAllProjects: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const getOneProject: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const createProject: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const updateProject: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const deleteOneProject: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { getOneProject, getAllProjects, createProject, updateProject, deleteOneProject };
//# sourceMappingURL=projects.controller.d.ts.map