
import { DashboardData } from "../interfaces/types";

export class API {
    static api_url = "http://localhost.proxyman.io:8080";
    // static api_url = "http://localhost:8080";
    // static api_url = "https://wtzzyxiaiemubdozjmaj.supabase.co/rest/v1/"

  static getPath(path: string): string {
    return this.api_url + path
  }

  static flow_id = 'ccfe7f50-2f2e-4470-b145-5974d62189b6'

  static paths = [
    "/files/types.json",
    "/files/inputConfig.json",
    "/files/tellUsAboutYou.json",
    "/files/3nodes.json"
  ]

  static async getSession(id: string): Promise<DashboardData> {


    const requestOptions = {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjc5MDY4MDc1LCJzdWIiOiJkMWI2NDRiOS04OGYxLTQ5MjEtODBjOS0xYTAxNjc5ODJjYmMiLCJlbWFpbCI6InJvYmVydCsyQHNpZ3VlbGFvbGEuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2Nzg0NjMyNzV9XSwic2Vzc2lvbl9pZCI6ImY0NGE0Y2JmLTE3NDctNDgyOS05NmYwLTYwN2JjMzYyMzg2MSJ9.F5fltjQOC_4oKtkxjGM0oTWFGX_HtBDjepsfhOk2020`,
            'apikey': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0enp5eGlhaWVtdWJkb3pqbWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzMDkyMDEsImV4cCI6MTk5MTg4NTIwMX0.PQBtK4L-5HfsmqKR_zo8G_BNildRTy8JUIL90X64Jo4",
        },
        body: JSON.stringify({
            flow_id: id,
            external_id: "",
            data: null,
            expires_at: "2023-03-15T11:14:42.305Z"
        }),
      };

    const response = await fetch(API.getPath(API.paths[0]));
    // const response = await fetch(API.getPath("sessions"), requestOptions)
    // console.log("API: ", API.getPath("sessions"))
    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    const data: DashboardData = await response.json();

    console.log("response: ", data)
    return data;
  }

  static async updateSession(state: {[key: string]: any}): Promise<void> {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      };
      
    const response = await fetch(API.getPath("/updateSession"), requestOptions);
    if (!response.ok) {
        throw new Error(`Request failed with status code ${response.status}`);
    }
  }

  static async finish(): Promise<void> {
    
  }
}