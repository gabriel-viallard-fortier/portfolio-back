import type ProjectData from '../types/projects.types.js';
declare const getOne: (id: number) => Promise<ProjectData | null>;
declare const getAll: () => Promise<ProjectData[] | null>;
declare const create: (project: ProjectData) => Promise<[import("mysql2").QueryResult, import("mysql2").FieldPacket[]]>;
declare const update: (id: number, project: ProjectData) => Promise<[import("mysql2").QueryResult, import("mysql2").FieldPacket[]] | undefined>;
declare const deleteOne: (id: number) => Promise<boolean | null>;
export { getOne, getAll, create, update, deleteOne };
//# sourceMappingURL=projects.service.d.ts.map