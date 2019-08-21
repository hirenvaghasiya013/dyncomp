import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
import { StudentInfoComponent } from './student-info/student-info.component';
import { ParentInfoComponent } from './parent-info/parent-info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dyncomp';
  ComponentRef: any;
  msgFromComp: string;
  @ViewChild('newContainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  data = [
    {
      id : 1,
      name: 'Student Info'
    },
    {
      id : 2,
      name: 'Parent Info'
    }
  ];
  constructor( private resolver: ComponentFactoryResolver ) { }
  createComponent(id: number) {
    console.log(this.entry);
    this.entry.clear();
    if (Number(id) === 1) {
      const factory = this.resolver.resolveComponentFactory(StudentInfoComponent);
      this.ComponentRef = this.entry.createComponent(factory);
      this.msgFromComp = 'Student Component';
    } else if (Number(id) === 2) {
      const factory = this.resolver.resolveComponentFactory(ParentInfoComponent);
      this.ComponentRef = this.entry.createComponent(factory);
      this.msgFromComp = 'Parent Component';
    }
    this.ComponentRef.instance.message = this.msgFromComp;
    this.ComponentRef.instance.getData.subscribe(data => this.getDf(data));
  }
  destroyComponent() {
    this.ComponentRef.destroy();
  }
  selectName(id: number) {
    this.createComponent(id);
  }
  getDf(childData) {
    console.log(childData);
  }
}
