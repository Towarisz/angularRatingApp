import { PostsService } from './../posts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent {
  posts:any;
  deletePost;
  constructor(postService: PostsService) {
    this.posts = postService.posts;
    this.deletePost = function(id:number){
      postService.delPost(id);
    }
  }
  
}
