import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CellClickedEvent, ColDef, GridReadyEvent} from "ag-grid-community";
import {GenericTableService} from "./generic-table.service";

@Component({
  selector: 'passport-workshop-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericTableComponent {

  @Input() columnDefs!: ColDef[];
  @Input() defaultColDef!: ColDef;
  @Input() rowData!: any[] | null;

  constructor(private genericTableService: GenericTableService) {
  }

  onGridReady($event: GridReadyEvent<any>) {
    this.genericTableService.onGridReady()
  }

  onCellClicked($event: CellClickedEvent<any>) {
    this.genericTableService.onCellClicked()
  }
}
