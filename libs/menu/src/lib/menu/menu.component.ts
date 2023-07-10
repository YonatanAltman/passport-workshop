import {Component} from '@angular/core';
import {HeaderComponent} from "@passport-workshop/home";

@Component({
  selector: 'passport-workshop-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [HeaderComponent]
})
export class MenuComponent {
}
