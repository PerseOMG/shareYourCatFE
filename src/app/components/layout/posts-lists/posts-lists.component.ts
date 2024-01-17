import { Component, Input, OnInit } from '@angular/core';
import { IMAGE_MOCK } from 'src/assets/app-consts/IMAGE_MOCK';

@Component({
  selector: 'app-posts-lists',
  templateUrl: './posts-lists.component.html',
  styleUrls: ['./posts-lists.component.scss'],
})
export class PostsListsComponent implements OnInit {
  @Input() posts = [
    {
      postHeading: 'THIS IS A',
      postDescription: 'POST',
      image: IMAGE_MOCK,
      totalLikes: 1021011,
      userLike: true,
      postedBy: 'IsraCum',
    },
    {
      postHeading: 'THIS IS A',
      postDescription: 'POST',
      image: IMAGE_MOCK,
      totalLikes: 1021011,
      userLike: false,
      postedBy: 'IsraCum',
    },
    {
      postHeading: 'THIS IS A',
      postDescription: 'POST',
      image: IMAGE_MOCK,
      totalLikes: 1021011,
      userLike: false,
      postedBy: 'IsraCum',
    },
    {
      postHeading: 'THIS IS A',
      postDescription: 'POST',
      image: IMAGE_MOCK,
      totalLikes: 1021011,
      userLike: true,
      postedBy: 'IsraCum',
    },
    {
      postHeading: 'THIS IS A',
      postDescription: 'POST',
      image: IMAGE_MOCK,
      totalLikes: 1021011,
      userLike: true,
      postedBy: 'IsraCum',
    },
    {
      postHeading: 'THIS IS A',
      postDescription: 'POST',
      image: IMAGE_MOCK,
      totalLikes: 1021011,
      userLike: true,
      postedBy: 'IsraCum',
    },
    {
      postHeading: 'THIS IS A',
      postDescription: 'POST',
      image: IMAGE_MOCK,
      totalLikes: 1021011,
      userLike: true,
      postedBy: 'IsraCum',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}