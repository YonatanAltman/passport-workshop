import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { LayoutComponent } from "./layout/layout.component";

@Component({
  standalone: true,
  imports: [RouterModule, LayoutComponent],
  selector: 'passport-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'responsive-app';
}
