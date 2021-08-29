type AccountInfo = {
  id: number
  name: string
  email?: string // optional
  password?: string // optional
}

const accountInfo: AccountInfo = {
  id: 1,
  name: 'Willian Justen',
  email: 'willianjustenqui@gmail.com',
}

type CharInfo = {
  nickname: string
  level: number
  class: string
}

const charInfo: CharInfo = {
  nickname: 'willian',
  level: 100,
  class: 'Warrior',
}

// Type aliases with intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  id: 1,
  name: 'Willian Justen',
  //email: '',
  nickname: 'willian',
  level: 100,
  class: 'Warrior',
}
