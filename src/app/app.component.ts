import { Component } from '@angular/core';
// @ts-ignore
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngmodule-dependency-injection';
  constructor(public authService: AuthService) {}
}
