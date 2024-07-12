import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { AboutComponent } from './components/about/about.component';
import { ThemeService } from './services/theme.service';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { HeaderComponent } from './components/header/header.component';
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from './components/contact/contact.component';
import { HideComponentService } from './services/hide-component.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    IntroductionComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    ThemeSwitcherComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  state = 'loading';

  constructor(
    public themeService: ThemeService,
    public hideComponentService: HideComponentService,
  ) {}

  ngOnInit(): void {
    this.state = 'loading';
    this.hideComponentService.showIntro();
    this.state = 'loaded';
  }
}
