import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {
  @Input()
  name!: string;
  @Input()
  img!: string;
  @Input()
  score!: number;
  @Input()
  time!: number;
  @Input()
  index!: number;
  constructor() {} 

  ngOnInit(): void {
  }

}
