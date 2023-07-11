import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GenericTableComponent } from '../generic-table/generic-table.component';

@Component({
  selector: 'passport-workshop-generic-table-not-base',
  templateUrl: './generic-table-not-base.component.html',
  styleUrls: ['./generic-table-not-base.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GenericTableNotBaseComponent extends GenericTableComponent {}
