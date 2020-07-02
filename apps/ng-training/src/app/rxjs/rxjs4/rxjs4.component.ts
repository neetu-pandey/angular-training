import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map, debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { NgTrainingService } from '../../services/ng-training.service';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();
  console.log('filtervalue...', filterValue);
  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

/**
 * @title Option groups autocomplete
 */
@Component({
  selector: 'fis-rxjs4',
  templateUrl: './rxjs4.component.html',
  styleUrls: ['./rxjs4.component.css']
})

export class Rxjs4Component implements OnInit {
  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [];
  stateGroupOptions$: Observable<StateGroup[]>;

  constructor(private _formBuilder: FormBuilder, private http: HttpClient, private service: NgTrainingService) {}

  ngOnInit() {
    this.service.getStates().subscribe(res => this.stateGroups = res['States']);

    // tslint:disable-next-line: no-non-null-assertion
    this.stateGroupOptions$ = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      console.log('value...', value);
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }
}
