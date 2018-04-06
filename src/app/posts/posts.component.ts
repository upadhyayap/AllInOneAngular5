import { AppError } from './../errors/AppError';
import { PostService } from './../services/post.service';
import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll()
    .subscribe(allPosts => this.posts = allPosts);
  }

  createPost(title: HTMLInputElement) {
    const post = {title: title.value};
    this.service.create(post)
    .subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
    },
    (appError: AppError) => {
      if (appError.error.status === 400) {
        console.log('Error');
      }
      console.log('Error');
    });
  }

  updatePost(post: HTMLInputElement) {
    this.service.update(post)
    .subscribe(response => {
      console.log('updated');
    });
  }

}
