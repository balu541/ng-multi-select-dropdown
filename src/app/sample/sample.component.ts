import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  selectedradioButtonValue:string='All'

  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string>=new EventEmitter<string>();
  constructor() { }
  @Input() all:number;
  @Input() male:number;
  @Input() female:number;

  OnRadioButtonSelectionChanged()
  {
    this.countRadioButtonSelectionChanged.emit(this.selectedradioButtonValue);
  }
  ngOnInit(): void {
  }

}
