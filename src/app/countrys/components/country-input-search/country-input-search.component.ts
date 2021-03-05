import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input-search',
  templateUrl: './country-input-search.component.html',
  styles: [
  ]
})

export class CountryInputSearchComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject;

  public country: string;

  constructor() { }

  ngOnInit() {
    this.debouncer.pipe(debounceTime(100)).subscribe( value => {
      //console.log(value);
      this.onDebounce.emit(value);
    })
  }

  // Buscar country.
  search() {
    this.onEnter.emit(this.country);
  }

  keyPress(e: any) {
    /* const v = e.target.value;
    console.log(v); */
    this.debouncer.next(this.country);
  }

}
