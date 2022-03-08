import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent implements OnInit {
  posts:any;
  deletePost;
  interval;
  constructor(postService: PostsService) {
    this.posts = postService.posts;
    this.deletePost = function(id:number){
      postService.delPost(id);
    }
    this.interval = setInterval(()=>{this.updateChildrenTimeBy1s()},1000)
  }
  
  ngOnInit(): void {    
  }

  updateChildrenTimeBy1s(){
    this.posts.forEach((el: { time: number; }) => {
      el.time++;
    });      
  }
}
