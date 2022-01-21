import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  followed: boolean = false;
  dataFollowers: number = 100500;
  textButton: string = 'follow';

  onClick() {
    if (this.followed) {
      this.dataFollowers--;
      this.textButton = 'follow';
      this.followed = false;
    } else {
      this.dataFollowers++;
      this.textButton = 'following';
      this.followed = true;
    }
  }

}
