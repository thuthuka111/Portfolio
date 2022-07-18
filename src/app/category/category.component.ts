import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() marginLeft: string = '0%';
  @Input() background: string = 'radial-gradient(#d6eef6, #e5d7f4)';

  constructor() { }

  ngOnInit(): void {
  }

}
