import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()

export class ServiceLogin {
    
    url = environment.urlApiPlantilla;

    constructor(private _http: HttpClient) {}

    async login(username: string, password: string): Promise<any> {
        let json = JSON.stringify({ username: username, password: password });
        let header = new HttpHeaders();
            header = header.set("Content-Type", "application/json");
        let request = "api/auth/login";
        return firstValueFrom(this._http.post(this.url + request, json, { headers: header }));
    }
}