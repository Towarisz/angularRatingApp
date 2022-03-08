import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  private _posts:{img : string, name:string, score:number, time:number}[];
  constructor() { 
    this._posts = [
    {img:"https://picsum.photos/200", name:"obrazek" ,score:5 ,time:40},
    {img:"https://picsum.photos/300", name:"obrazek" ,score:5 ,time:100},
    {img:"https://picsum.photos/400", name:"obrazek" ,score:5 ,time:10},
    {img:"https://picsum.photos/500", name:"obrazek" ,score:5 ,time:9},
    {img:"https://picsum.photos/600", name:"obrazek" ,score:5 ,time:3600},
    {img:"https://picsum.photos/700", name:"obrazek" ,score:5 ,time:2030495},
    {img:"https://picsum.photos/800", name:"obrazek" ,score:5 ,time:1237969},
  ]
  }
  get posts(){
    return this._posts;
  }
  addPost(post:{img : string, name:string, score:number, time:number}){
    this._posts.push(post);
  }
  delPost(id:number){
    this._posts.splice(id,1);
  }
}
