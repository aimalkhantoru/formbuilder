import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'frontend';
  inputsFields: any;

  ngOnInit() {
    this.inputsFields = [{name: 'Text field'}, {name: 'Checkbox'}, {name: 'Select'}];
  }
}
