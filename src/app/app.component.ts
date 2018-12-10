import { Component } from '@angular/core';
import { NgGuideWalkLibService } from '../../dist/ng-guide-walk-lib';
import { TestCompComponent } from './test-comp/test-comp.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  customStyle = {
    'background-color': 'red',
    'color' : 'green',
    'border-radius': '50%'
  };
  constructor(private guideSerivce: NgGuideWalkLibService) {
    setTimeout(() => this.guideSerivce.startGuide(), 2000);
  }
  getComp(){
    return TestCompComponent
  }
  
}
