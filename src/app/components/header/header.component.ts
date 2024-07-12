import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { HideComponentService } from '../../services/hide-component.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeSwitcherComponent, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  constructor(
    public themeService: ThemeService,
    public hideComponentService: HideComponentService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    protected router: Router
  ) {}

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      this.themeService.currentTheme =
        localStorage.getItem('activeTheme') || 'light-theme';
      this.renderer.addClass(
        this.document.body,
        this.themeService.currentTheme
      );
      const someValue = localStorage.getItem('someKey');
      console.log(someValue);
    } else {
      console.warn('localStorage is not available');
    }
  }

  callSwitchMode(isDarkMode: boolean) {
    this.themeService.switchMode(isDarkMode);
  }
}
