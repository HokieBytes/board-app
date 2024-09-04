import { Injectable } from '@angular/core';
import {Board} from './models/board';
import {List} from './models/list';
import {Card} from './models/card';
import { BOARDS } from './board-data';
import { BoardSummary } from './models/board-summary';


@Injectable({
  providedIn: 'root'
})

/* Mock service until we build a bakend http service */ 

export class BoardService {

    // getBoards(): BoardSummary[] {
    //   console.log(JSON.stringify(BOARDS));
    //     return BOARDS.map((board: { id: number; name: string; category: string; }) => ({
    //       id: board.id,
    //       name: board.name,
    //       category: board.category
    //     }));
    //   }
    

    getBoardById(id: number): Board{
        console.log(" %%%%%% getBoardById");
        return BOARDS.find((board: { id: number; }) => board.id === id)!;
    }

    // getListsForBoard(boardId: number): List[]{
    //   console.log(" %%%%%% getListsForBoard");
    //     return BOARDS.find((board: { id: number; }) => board.id === boardId)!.lists;
    // }

    // getCardsForList(boardId: number, listId: number): Card[]{
    //   console.log(" %%%%%% getCardsForList");
    //     const board = BOARDS.find((board: { id: number; }) => board.id === boardId)!;
    //     return board.lists.find((list: { id: number; }) => list.id === listId)!.cards;
    // }

    // updateCard(boardId: number, listId: number, card: Card): void{
    //     const board = BOARDS.find((board: { id: number; }) => board.id === boardId)!;
    //     const list = board.lists.find((list: { id: number; }) => list.id === listId)!;
    //     const cardIndex = list.cards.findIndex((c: { id: number; }) => c.id === card.id);
    //     list.cards[cardIndex] = card;
    // }

}