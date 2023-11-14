import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  NAV_ITEMS_CONST,
  SQUARED_ICONS_CONST,
} from 'src/assets/app-consts/sidenav.consts';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  squaredIcons = SQUARED_ICONS_CONST;
  navigationItems = NAV_ITEMS_CONST;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(url: string | undefined) {
    if (url) this.router.navigateByUrl(url);
  }
}
