import { Component, OnInit } from '@angular/core';
import { HideComponentService } from '../../services/hide-component.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  protected emailPersonal = 'andrejkoller@outlook.com';
  protected emailBand = 'fadinghell@outlook.com';
  protected personal = '@andrejkoller';
  protected band = '@fadinghell';

  constructor(public hideComponentService: HideComponentService) {}

  ngOnInit(): void {
    this.hideComponentService.showContact();
    this.hideComponentService.hideIntro();
    this.hideComponentService.hideWork();
    this.hideComponentService.hideAbout();
  }
}
