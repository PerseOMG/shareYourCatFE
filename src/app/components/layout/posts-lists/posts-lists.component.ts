import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { POSTS } from 'src/assets/app-consts/posts.const';
import { IPost } from 'src/assets/types/posts.types';

@Component({
  selector: 'app-posts-lists',
  templateUrl: './posts-lists.component.html',
  styleUrls: ['./posts-lists.component.scss'],
})
export class PostsListsComponent implements OnInit {
  @Input() posts: IPost[] = POSTS;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLike(post: IPost) {
    post.userLike = !post.userLike;
    if (post.userLike) {
      post.totalLikes += 1;
    } else {
      post.totalLikes -= 1;
    }
  }

  onClick(postId: string) {
    this.router.navigate(['/post', postId]);
  }
}
