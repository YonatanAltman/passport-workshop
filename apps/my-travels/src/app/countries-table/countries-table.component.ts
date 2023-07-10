import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CountriesService} from "./countries.service";
import {Observable} from "rxjs";
import {Country} from "./country.interface";
import {CellClickedEvent, ColDef, GridReadyEvent} from "ag-grid-community";

@Component({
  selector: 'passport-workshop-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountriesTableComponent {

  all$!: Observable<Country[]>;

  constructor(private countriesService: CountriesService) {
    this.all$ = this.countriesService.getAll();
  }
  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    {field: 'name.common'},
    {field: 'flag'},
    {field: 'capital'},
    {field: 'flags.svg'},
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
