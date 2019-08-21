import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  @Input() message: string;
  @Output() getData: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    alert(this.message);
    this.getData.emit('Student Component');
  }

}
