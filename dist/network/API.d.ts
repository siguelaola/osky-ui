import { DashboardData } from "../interfaces/types";
export declare class API {
    static api_url: string;
    static getPath(path: string): string;
    static getSession(id: string): Promise<DashboardData>;
    static updateSession(state: {
        [key: string]: any;
    }): Promise<void>;
    static finish(): Promise<void>;
}
