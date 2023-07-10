import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CellClickedEvent, ColDef, GridReadyEvent} from "ag-grid-community";
import {UserService} from "../user.service";
import {Observable, of} from "rxjs";
import {User} from "../common/user.interface";
import {UserMock} from "../common/user.mock";

@Component({
  selector: 'passport-workshop-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTableComponent {
  readonly rowData$: Observable<User[]> = of(UserMock);

  constructor(private userService: UserService) {
  }

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    {field: 'username'},
    {field: 'email'},
    {field: 'firstName'},
    {field: 'lastName'},
    {field: 'age'},
    {field: 'isActive'},
    {field: 'createdAt'},
    {field: 'updatedAt'},
    {field: 'imageUrlProfile'},
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  onGridReady($event: GridReadyEvent<any>) {

  }

  onCellClicked($event: CellClickedEvent<any>) {

  }
}
