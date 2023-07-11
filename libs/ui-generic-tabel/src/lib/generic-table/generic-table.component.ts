import { ChangeDetectionStrategy, Component, inject, Input } from "@angular/core";
import { CellClickedEvent, ColDef, GridReadyEvent } from "ag-grid-community";
import { GenericTableService } from "./generic-table.service";
import { FormBuilder, FormGroup } from "@angular/forms";


@Component({
  selector: 'passport-workshop-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class GenericTableComponent {
  private readonly genericTableService: GenericTableService = inject(GenericTableService);

  readonly formGroup:FormGroup = inject(FormBuilder).group({});
  @Input() columnDefs!: ColDef[];
  @Input() defaultColDef!: ColDef;
  @Input() rowData!: any[] | null;

  constructor() {
    this.formGroup = this.fb.group({});
  }

  onGridReady($event: GridReadyEvent<any>) {
    this.genericTableService.onGridReady()
  }

  onCellClicked($event: CellClickedEvent<any>) {
    this.genericTableService.onCellClicked()
  }

}
