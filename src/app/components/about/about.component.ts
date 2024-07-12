import { Component, OnInit } from '@angular/core';
import { HideComponentService } from '../../services/hide-component.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  constructor(public hideComponentService: HideComponentService) {}

  ngOnInit(): void {
    this.hideComponentService.showAbout();
    this.hideComponentService.hideIntro();
    this.hideComponentService.hideWork();
    this.hideComponentService.hideContact();
  }
}
