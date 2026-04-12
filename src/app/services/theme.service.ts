import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _isLight = false;

  get isLight(): boolean { return this._isLight; }

  init(): void {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      this.setLight(true);
    }
  }

  toggle(): void {
    this.setLight(!this._isLight);
  }

  private setLight(light: boolean): void {
    this._isLight = light;
    document.body.classList.toggle('light', light);
    localStorage.setItem('theme', light ? 'light' : 'dark');
    const meta = document.getElementById('themeColorMeta');
    if (meta) meta.setAttribute('content', light ? '#f5f4f0' : '#0a0a0f');
  }
}
