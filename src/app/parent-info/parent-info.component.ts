import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent-info',
  templateUrl: './parent-info.component.html',
  styleUrls: ['./parent-info.component.css']
})
export class ParentInfoComponent implements OnInit {
  @Input() message: string;
  @Output() getData: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    alert(this.message);
    this.getData.emit('Parent Component');
  }

}
