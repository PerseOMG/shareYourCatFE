import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  navigationItems = [
    [
      {
        icon: 'cat-paws.svg',
        type: 'logo',
        isDraggable: false,
        redirect: '/',
      },
      {
        icon: 'cat-dav.svg',
        type: 'icon',
        isDraggable: true,
        redirect: '/favs',
      },
      {
        icon: 'cat-tendencies.svg',
        type: 'icon',
        isDraggable: true,
        redirect: '/tendencies',
      },
    ],
    [
      {
        icon: 'plus.svg',
        type: 'icon',
        isDraggable: true,
        redirect: '/new-post',
      },
    ],
    [
      {
        icon: 'user.svg',
        type: 'icon',
        isDraggable: true,
        redirect: '/profile',
      },
      {
        icon: 'language.svg',
        type: 'icon',
        isDraggable: true,
      },
    ],
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(url: string | undefined) {
    if (url) this.router.navigateByUrl(url);
  }
}
