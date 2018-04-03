import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('post') post = {
    liked: false,
    likes: 0
  };
  likes: number = this.post.likes;
  isLiked: boolean = this.post.liked;
  constructor() { }

  ngOnInit() {
  }

  liked() {
    this.isLiked = !this.isLiked;
    this.likes += 1;
    this.post.liked = this.isLiked;
    this.post.likes = this.likes;
  }

}
