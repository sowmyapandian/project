import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url='https://99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudantnosqldb.appdomain.cloud/'
  dbUserName ='apikey-v2-237a9fx60g51gyopiewwx5pb339t2r1xw085fzt3skgx';
  dbPassword='85e4a7e36372ac1e47c80f4b81a78d62';
  Auth='Basic '+btoa(this.dbUserName + ':' + this.dbPassword);
  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'content-Type':'application/json',
      'Authorization':this.Auth
    })
  };
  add(db:string, doc:object): Observable<{}> {
    const url=this.url+db;
    return this.http.post(url, doc, this.httpOptions)
  }
  get(db:string): Observable<{}>{
    const url = this.url+db+'/_all_docs?include_docs=true';
    return this.http.get(url, this.httpOptions)
  }
//   productService(){
//     return [
//       {
//         id:1, 
//         name:"Tomato",
//         price:40
//       },
//       {
//         id:2,
//       name:"Potato",
//         price:80
//       },
//       {
//         id:3,
//       name:"Carrot",
//       price:120,
//       },
//       {
//         id:4,
//       name:"Beans",
//       price:160
//       },
//     ]
//   }


}
