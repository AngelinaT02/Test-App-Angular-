import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {HttpClient, HttpHeaders } from "@angular/common/http";

import { Image } from "../models/Image";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imagesUrl:string = "https://jsonplaceholder.typicode.com/photos";

  imagesLimit = "?_limit=10";

  constructor(private http:HttpClient) { }

  getImages():Observable<Image[]>{
   
    return this.http.get<Image[]>(`${this.imagesUrl}${this.imagesLimit}`);
    
  }
}
