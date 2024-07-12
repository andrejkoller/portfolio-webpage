import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HideComponentService {
  headerVisible: boolean;
  introVisible: boolean;
  workVisible: boolean;
  aboutVisible: boolean;
  contactVisible: boolean;

  constructor() {
    this.headerVisible = true;
    this.introVisible = false;
    this.workVisible = false;
    this.aboutVisible = false;
    this.contactVisible = false;
  }

  showHeader() {
    this.headerVisible = true;
  }

  hideHeader() {
    this.headerVisible = false;
  }

  showIntro() {
    this.introVisible = true;
  }

  hideIntro() {
    this.introVisible = false;
  }

  showWork() {
    this.workVisible = true;
  }

  hideWork() {
    this.workVisible = false;
  }

  showAbout() {
    this.aboutVisible = true;
  }

  hideAbout() {
    this.aboutVisible = false;
  }

  showContact() {
    this.contactVisible = true;
  }

  hideContact() {
    this.contactVisible = false;
  }
}
