import { List } from './list';

export interface Board {
    id: number;
    name: string;
    category: string;
    lists: List[];
}