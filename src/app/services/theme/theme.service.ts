import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  loadTheme(themeName: string) {
    const head = this.document.getElementsByTagName('head')[0];
    const themeSrc = this.document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;

    if (themeSrc) {
      themeSrc.href = `/assets/themes/${themeName}.scss`;
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `/assets/themes/${themeName}.scss`;

      head.appendChild(style);
    }
  }
}
