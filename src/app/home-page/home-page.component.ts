import { PostsService } from './../posts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent {
  posts:any;
  visible=false;
  postTitle:string="";
  postImage:string="";
  constructor(public postService: PostsService) {
    this.posts = postService.posts;
  }

  deletePost(id:number){
    this.postService.delPost(id);
  };
  
  show(){
    this.visible = true;
  }

  hide(){
    this.visible=false;
    this.clearForm()
  }

  add(){
    this.postService.addPost({img : this.postImage, name:this.postTitle, score:0, time:0})
    this.hide();
  }

  clearForm(){
    this.postImage="";
    this.postTitle="";
  }
}
