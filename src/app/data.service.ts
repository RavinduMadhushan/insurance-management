import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  baseUrl: "http://localhost:3001/api";

  constructor(private http: HttpClient) {}

  register(data) {
    return this.http.post(this.baseUrl + "/register/new", data);
    console.log(data);
  }

  ttt() {
    console.log("sssss");
  }
}
