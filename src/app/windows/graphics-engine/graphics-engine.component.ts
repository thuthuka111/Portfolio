import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'graphics-engine',
  templateUrl: './graphics-engine.component.html',
  styleUrls: ['../common-styles.css', './graphics-engine.component.css']
})
export class GraphicsEngineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openClassDiagram(): void {
    window.open('assets/images/Custom-Engine\ UML.svg', '_blank');
  }
}
