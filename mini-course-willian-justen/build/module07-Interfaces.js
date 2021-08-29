"use strict";
const theLastOfUs = {
    title: 'The Last of Us',
    price: 59.99,
    releaseDate: new Date('2019-09-14'),
    genre: 'Action',
    publisher: 'Naughty Dog',
    developer: 'Naughty Dog',
    platform: ['PS4', 'XBOX One'],
    tags: ['Action', 'Horror', 'Survival'],
    getSimilar: (title) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    },
};
console.log(theLastOfUs);
//theLastOfUs.getSimilar('The Last of Us') - Error - Property 'getSimilar' does not exist on type 'Game'
const theLastOfUsLeftBehind = {
    title: 'The Last of Us: Left Behind',
    price: 59.99,
    releaseDate: new Date('2019-09-14'),
    genre: 'Action',
    publisher: 'Naughty Dog',
    developer: 'Naughty Dog',
    platform: ['PS4', 'XBOX One'],
    tags: ['Action', 'Horror', 'Survival'],
    originalGame: theLastOfUs,
    newContent: ['New content', 'New content 2'],
    getSimilar: (title) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    },
};
class CreateGame {
    constructor(title, price, releaseDate, genre, publisher, developer, platform) {
        this.title = title;
        this.price = price;
        this.releaseDate = releaseDate;
        this.genre = genre;
        this.publisher = publisher;
        this.developer = developer;
        this.platform = platform;
    }
}
