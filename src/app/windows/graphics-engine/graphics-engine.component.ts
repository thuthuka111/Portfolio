import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'graphics-engine',
  templateUrl: './graphics-engine.component.html',
  styleUrls: ['./graphics-engine.component.css', '../common-styles.css']
})
export class GraphicsEngineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClassDiagram(): void {
    window.open('../../../assets/images/Custom-Engine\ UML.svg', '_blank');
  }
}
