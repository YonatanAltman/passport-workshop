import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'passport-workshop-feed',
  standalone: true,
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, LayoutComponent, NgForOf],
})
export class FeedComponent {
  readonly list: number[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.list.push(i);
    }
  }
}
