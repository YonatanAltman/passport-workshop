import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'passport-workshop-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  navigations = [
    { label: 'Login', link: 'login' },
    { label: 'Feed', link: 'feed' },
  ];
  user = {
    fullname: 'Yonatan Altman',
    email: 'yonatan@e-square.io',
  };
}
