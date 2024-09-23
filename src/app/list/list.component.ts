import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Card } from '../models/card';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    @Input() list?: { id: number; name: string; cards: Card[] };
    @Input() allLists?: any[];

    constructor(private cdr: ChangeDetectorRef) {}

    get connectedTo(): (string | CdkDropList<any>)[] {
        return this.allLists ? this.allLists.map(list => `list-${list.id}`) : [];
    }

    drop(event: CdkDragDrop<Card[]>) {
      console.log('Drop event:', event);

      // Check if event.item.data is correct
      console.log('Dragged Item:', event.item.data);

      // Extra verification - Ensure `item` data correctness:
      console.log('Item Element Data:', event.item.element.nativeElement);

      if (!event.item.data) {
        console.error('event.item.data is undefined');
        return;
      }

      // Log initial state
      console.log('Initial Previous Container Data:', event.previousContainer.data);
      console.log('Initial Current Container Data:', event.container.data);

      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      }

      // Log after state change
      console.log('Updated Previous Container Data:', event.previousContainer.data);
      console.log('Updated Current Container Data:', event.container.data);

      // Manually trigger change detection to update the UI
      this.cdr.detectChanges();
    }
}
