import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  baseUrl: "http://localhost:3001/api";

  constructor(private http: HttpClient) {}

  register(data) {
    return this.http.post("http://localhost:3001/api/register/new", data);
  }

  ttt() {
    console.log("sssss");
  }
}
