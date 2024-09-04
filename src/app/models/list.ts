
import { Card } from './card';
export class List {
    constructor(public id: number, public name: string, public type: string, public cards: Card[]) {}
}
