import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from "../common/user.interface";
import {UserMock} from "../common/user.mock";

@Component({
  selector: 'passport-workshop-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {

  @Input() user: User = UserMock[0];
  userForm: FormGroup;
  readOnly: boolean = true;

  constructor() {
    this.userForm = this.getUserForm();
  }


  toggleReadOnly() {
    if (this.readOnly) {
      this.userForm.enable();
    } else {
      this.userForm.disable();
    }
    this.readOnly = !this.readOnly;
  }

  private getUserForm(): FormGroup {
    return new FormGroup({
      username: new FormControl(this.user.username, Validators.required),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email
      ]),
      firstName: new FormControl(this.user.firstName, Validators.required),
      lastName: new FormControl(this.user.lastName, Validators.required),
      age: new FormControl(this.user.age, Validators.required)
    });
  }
}
