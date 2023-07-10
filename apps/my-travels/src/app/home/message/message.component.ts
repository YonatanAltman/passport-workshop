import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'passport-workshop-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent {
  constructor(private authService:AuthService) {
  }
}
