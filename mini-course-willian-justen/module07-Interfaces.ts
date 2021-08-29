// Interfaces
interface Game {
  title: string
  price: number
  releaseDate: Date
  genre: string
  publisher: string
  developer: string
  platform?: string[]
  tags?: string[]
  getSimilar?: (title: string) => void
}

const theLastOfUs: Game = {
  title: 'The Last of Us',
  price: 59.99,
  releaseDate: new Date('2019-09-14'),
  genre: 'Action',
  publisher: 'Naughty Dog',
  developer: 'Naughty Dog',
  platform: ['PS4', 'XBOX One'],
  tags: ['Action', 'Horror', 'Survival'],
  getSimilar: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`)
  },
}

interface DLC extends Game {
  originalGame: Game
  newContent: string[]
}

console.log(theLastOfUs)
//theLastOfUs.getSimilar('The Last of Us') - Error - Property 'getSimilar' does not exist on type 'Game'

const theLastOfUsLeftBehind: DLC = {
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
  getSimilar: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`)
  },
}

class CreateGame implements Game {
  title: string
  price: number
  releaseDate: Date
  genre: string
  publisher: string
  developer: string
  platform?: string[]

  constructor(
    title: string,
    price: number,
    releaseDate: Date,
    genre: string,
    publisher: string,
    developer: string,
    platform?: string[]
  ) {
    this.title = title
    this.price = price
    this.releaseDate = releaseDate
    this.genre = genre
    this.publisher = publisher
    this.developer = developer
    this.platform = platform
  }
}
