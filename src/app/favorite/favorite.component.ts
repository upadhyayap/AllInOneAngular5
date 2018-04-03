import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
// import { Component, OnInit } from '@angular/core';

// Component Metadata
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
  // encapsulation: ViewEncapsulation.Emulated
  // Declare all the input fields in this array
  // inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {
  @Input("is-Favorite") isFavorite: boolean;
  @Output() change = new EventEmitter();
  // isFavorite: boolean;
  para = 'This is span';
  constructor() { }

  ngOnInit() {
  }

  raiseEvent() {
    this.isFavorite = !this.isFavorite;
    this.change.emit('From Favorite Component');
  }
}
