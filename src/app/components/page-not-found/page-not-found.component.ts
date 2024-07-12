import { Component, OnInit } from '@angular/core';
import { HideComponentService } from '../../services/hide-component.service';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent implements OnInit {

  constructor(public hideComponentService: HideComponentService) {}

  ngOnInit(): void {
      this.hideComponentService.hideHeader();
  }
}
