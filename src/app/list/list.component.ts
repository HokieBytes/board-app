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
    this.setConnectedLists();
  }

  setConnectedLists(): void {
    this.connectedTo = this.allLists.map(list => `list-${list.id}`);
  }

  drop(event: CdkDragDrop<Card[]>): void {
    // Log relevant parts of the event object
    console.log('drop event:', {
      previousIndex: event.previousIndex,
      currentIndex: event.currentIndex,
      previousContainerId: event.previousContainer.id,
      currentContainerId: event.container.id,
    });

    const sourceListId = +event.previousContainer.id.replace('list-', '');
    const targetListId = +event.container.id.replace('list-', '');

    const sourceList = this.allLists.find(list => list.id === sourceListId)?.cards || [];
    const targetList = this.allLists.find(list => list.id === targetListId)?.cards || [];

    // Calculate the relative indices within the source and target lists
    const sourceIndex = event.previousIndex;
    const targetIndex = event.currentIndex;

    console.log('sourceIndex:', sourceIndex, 'targetIndex:', targetIndex);

    if (event.previousContainer === event.container) {
      moveItemInArray(targetList, sourceIndex, targetIndex);
    } else {
      transferArrayItem(sourceList, targetList, sourceIndex, targetIndex);
    }

    // Update the lists to reflect the changes
    this.allLists = this.allLists.map(list => {
      if (list.id === sourceListId) {
        return { ...list, cards: [...sourceList] }; // Ensure a new array is created
      } else if (list.id === targetListId) {
        return { ...list, cards: [...targetList] }; // Ensure a new array is created
      }
      return list;
    });

    // Log the updated lists for debugging
    console.log('Updated allLists:', this.allLists);
  }

  // Helper method to get the start index of a list within the board
  getListStartIndex(listId: number): number {
    let startIndex = 0;
    for (const list of this.allLists) {
      if (list.id === listId) {
        break;
      }
      startIndex += list.cards.length;
    }
    return startIndex;
  }
}