import { Component } from '@angular/core';
import { BoardService } from '../board-service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  
  board: any;
  
  constructor(boardService: BoardService) {
     this.board =  boardService.getBoardById(1) as any;  
  }

  public dropGrid(event: CdkDragDrop<string[]>): void {
    moveItemInArray(
      this.board.lists,
      event.previousIndex,
      event.currentIndex
    );
  }
  
}
