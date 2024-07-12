import { Component, OnInit } from '@angular/core';
import { HideComponentService } from '../../services/hide-component.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
  animations: [
    trigger('transformLetter', [
      state('begin', style({ bottom: '-10vw' }))
    ])
  ]
})
export class IntroductionComponent implements OnInit {

  constructor(public hideComponentService: HideComponentService) {}

  ngOnInit(): void {
    this.hideComponentService.showIntro()
    this.hideComponentService.hideWork();
    this.hideComponentService.hideAbout();
    this.hideComponentService.hideContact();

  }
}
