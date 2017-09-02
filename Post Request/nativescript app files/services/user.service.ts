import { Injectable } from "@angular/core";
import { Config } from "../shared/Config";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {

//    private serverUrl = "https://httpbin.org/post";
  constructor(private http: Http) {}
  postData(data: any) 
  {
       let options = this.createRequestOptions();
       console.dir(data);
        return this.http.post(Config.apiUrl, { data }, options)
            .map(res =>  res.json());
  }

   private createRequestOptions() {
        let headers = new Headers();
        headers.append("AuthKey", "my-key");
        headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");
        // headers.append("Content-Type","application/x-www-form-urlenc‌​oded");
        // headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        let options = new RequestOptions({ headers: headers });
        return options;
    }
}