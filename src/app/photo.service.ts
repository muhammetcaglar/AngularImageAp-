import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface CallResponse{
  urls:{
    regular:string
  };
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  imageurl : string='https://api.unsplash.com/photos/random';
  constructor(private http:HttpClient) {  }

  getPhotos()
  {
    return this.http.get<CallResponse>(this.imageurl,{
      headers:{
        Authorization: 'Client-ID zr6CcMiPs6zAp0lERfw6U7MHCkqG3kwcmZD_wwC11AE'
      }
  }
  );
  }
}
