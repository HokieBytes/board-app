import { Component, Input, OnInit } from '@angular/core';
import { List } from '../models/list';
import { Card } from '../models/card';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { BoardService } from '../board-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  
  @Input() list!: List;

  @Input() allLists: List[] = [];
  
  connectedTo: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.connectedTo = this.allLists.map((list) => list.id.toString());
  }

  drop(event: CdkDragDrop<Card[]>) {

    console.log('Drop event:', event);

    const previousIndex = event.previousIndex;
    const currentIndex = event.currentIndex;

    // Check if previousIndex is within bounds
    if (previousIndex < 0 || previousIndex >= event.previousContainer.data.length) {
      console.error('Invalid previous index:', previousIndex, 'Data length:', event.previousContainer.data.length);
      //return;
    }

    // Check if currentIndex is within bounds
    if (currentIndex < 0 || currentIndex > event.container.data.length) {
      console.error('Invalid current index:', currentIndex, 'Data length:', event.container.data.length);
      //return;
    }

    if (event.previousContainer === event.container) {
      // Move item within the same container
      moveItemInArray(event.container.data, previousIndex, currentIndex);
    } else {
      // Transfer item between containers 
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    console.log('Updated previous container data:', event.previousContainer.data);
    console.log('Updated current container data:', event.container.data);
  }
}