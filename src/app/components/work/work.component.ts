import { Component, OnInit } from '@angular/core';
import { HideComponentService } from '../../services/hide-component.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent implements OnInit {
  protected band = 'Fading Hell';

  constructor(public hideComponentService: HideComponentService) {}

  ngOnInit(): void {
    this.hideComponentService.showWork();
    this.hideComponentService.hideIntro();
    this.hideComponentService.hideAbout();
    this.hideComponentService.hideContact();
  }
}
