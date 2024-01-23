import { Component, Input, OnInit } from '@angular/core';
import { IMAGE_MOCK } from 'src/assets/app-consts/IMAGE_MOCK';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  @Input() postData = {
    image: IMAGE_MOCK,
    postedBy: 'PerseoDMG',
    userId: 0,
    date: new Date(),
    post: 'Lol, look ad dis',
    isLikedByUser: true,
    likes: [
      {
        userId: 1,
        userName: 'IsraCum',
      },
      {
        userId: 2,
        userName: 'Chris',
      },
    ],
    comments: [
      {
        userId: 0,
        userName: 'PerseoDMG',
        comment: 'dis nuts',
      },
      {
        userId: 0,
        userName: 'IsraCum',
        comment: 'Nice Dog',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  onFav() {
    this.postData.isLikedByUser = !this.postData.isLikedByUser;
  }
}
