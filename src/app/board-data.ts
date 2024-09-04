import { B, L } from "@angular/cdk/keycodes";

export const BOARD_CATEGORIES: string[] = ["work", "school", "home"];
export const LIST_TYPES: string [] = ["todo", "done", "inprogress"];

export const CARD_THUMBNAILS: any[] = ["https://material.angular.io/assets/img/examples/shiba2.jpg", "", "https://material.angular.io/assets/img/examples/shiba2.jpg"];
export const CARD_PICS: any[] = ["https://material.angular.io/assets/img/examples/shiba2.jpg", "" , "https://material.angular.io/assets/img/examples/shiba2.jpg"];

export const BOARDS: any = [
    {
        id: 1,
        name: 'Board 1',
        category: BOARD_CATEGORIES[0],
        lists: [
            {
                id: 1,
                name: 'List 1',
                type: LIST_TYPES[0],
                cards: [
                    {
                        id: 1,
                        thumbnail: CARD_THUMBNAILS[0],
                        pic: CARD_PICS[0],
                        title: 'Card 1',
                        subtitle: 'Card 1 subtitle',
                        description: 'Card 1 description'
                    },
                    {
                        id: 2,
                        thumbnail: CARD_THUMBNAILS[1],
                        pic: CARD_PICS[1],
                        title: 'Card 2',
                        subtitle: 'Card 2 subtitle',
                        description: 'Card 2 description'
                    }
                ],
            },
            {
                id: 2,
                name: 'List 2',
                type: LIST_TYPES[1],
                cards: [
                    {
                        id: 3,
                        thumbnail: CARD_THUMBNAILS[2],
                        pic: CARD_PICS[1],
                        title: 'Card 3',
                        subtitle: 'Card 3 subtitle',
                        description: 'Card 3 description'
                    },
                    {
                        id: 4,
                        thumbnail: CARD_THUMBNAILS[0],
                        pic: CARD_PICS[0],
                        title: 'Card 4',
                        description: 'Card 4 description'
                    },
                    {
                        id: 5,
                        thumbnail: CARD_THUMBNAILS[1],
                        pic: CARD_PICS[1],
                        title: 'Card 5',
                        description: 'Card 5 description'
                    }
                ],
            },
            {
                id: 3,
                name: 'List 3',
                type: LIST_TYPES[2],
                cards: [
                    {
                        id: 6,
                        thumbnail: CARD_THUMBNAILS[0],
                        pic: CARD_PICS[0],
                        title: 'Card 6',
                        subtitle: 'Card 6 subtitle',
                        description: 'Card 6 description'
                    }
                ]
            },
            {
                id: 4,
                name: 'List 4',
                type: LIST_TYPES[0],
                cards: [
                    {
                        id: 7,
                        thumbnail: CARD_THUMBNAILS[0],
                        pic: CARD_PICS[0],
                        title: 'Card 7',
                        subtitle: 'Card 7 subtitle',
                        description: 'Card 7 description'
                    }
                ]
            },
            {
                id: 5,
                name: 'List 5',
                type: LIST_TYPES[1],
                cards: [
                    {
                        id: 8,
                        thumbnail: CARD_THUMBNAILS[0],
                        pic: CARD_PICS[0],
                        title: 'Card 8',
                        subtitle: 'Card 8 subtitle',
                        description: 'Card 8 description'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Board 2',
        category: BOARD_CATEGORIES[1],
        lists: [
            {
                id: 6,
                name: 'List 6',
                cards: [
                    {
                        id: 9,
                        title: 'Card 9',
                        subtitle: 'Card 9 subtitle',
                        pic: CARD_PICS[0],
                        thumbnail: CARD_THUMBNAILS[0],
                        description: 'Card 9 description'
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'Board 3',
        category: BOARD_CATEGORIES[2],
        lists: [
            {
                id: 7,
                name: 'List 7',
                cards: [
                    {
                        id: 10,
                        title: 'Card 10',
                        subtitle: 'Card subtitle',
                        pic: CARD_PICS[1],
                        thumbnail: CARD_THUMBNAILS[1],
                        description: 'Card description'
                    }
                ]
            }
        ]
    }
];
