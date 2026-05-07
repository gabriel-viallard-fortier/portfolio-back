import type ProjectData from '../types/projects.types.js';
declare const findAll: () => Promise<any>;
declare const findOne: (id: number) => Promise<any>;
declare const addOne: (projectData: ProjectData) => Promise<[import("mysql2").QueryResult, import("mysql2").FieldPacket[]]>;
declare const updateOne: (id: number, projectData: ProjectData) => Promise<[import("mysql2").QueryResult, import("mysql2").FieldPacket[]]>;
declare const removeOne: (id: number) => Promise<boolean | null>;
export { findAll, findOne, addOne, updateOne, removeOne };
//# sourceMappingURL=projects.model.d.ts.map