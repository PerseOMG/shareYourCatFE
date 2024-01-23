import { Component, Input, OnInit } from '@angular/core';
import { IMAGE_MOCK } from 'src/assets/app-consts/IMAGE_MOCK';

@Component({
  selector: 'app-cat-week',
  templateUrl: './cat-of-the-week.component.html',
  styleUrls: ['./cat-of-the-week.styles.scss'],
})
export class CatOfTheWeekComponent implements OnInit {
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
