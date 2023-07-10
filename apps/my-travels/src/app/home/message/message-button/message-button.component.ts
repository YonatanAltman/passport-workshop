import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AuthService} from "../../../auth.service";

@Component({
  selector: 'passport-workshop-message-button',
  templateUrl: './message-button.component.html',
  styleUrls: ['./message-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageButtonComponent {
  constructor(private authService: AuthService) {
  }

  click() {
    this.authService.buttonClick()
  }
}
