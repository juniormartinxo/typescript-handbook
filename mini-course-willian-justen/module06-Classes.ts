abstract class UserAccount {
  name: string
  protected email: string
  public password?: string

  constructor(name: string, email: string, password?: string) {
    this.name = name
    this.email = email
    this.password = password
  }

  logDetails(): void {
    console.log(`The player ${this.name} have an email ${this.email}`)
  }
}

class CharAccount extends UserAccount {
  private nickname: string
  readonly level: number

  constructor(
    name: string,
    email: string,
    nickname: string,
    level: number,
    password?: string
  ) {
    super(name, email, password)
    this.nickname = nickname
    this.level = level
  }

  logDetails(): void {
    super.logDetails()
    console.log(`The player ${this.name} have a nickname ${this.nickname}`)
  }

  get getLevel() {
    console.log('------- LEVEL -------')
    return this.level
  }
}

/*
// error - class UserAccount is abstract and can not be instantiated

const willian = new UserAccount(
  'Willian',
  'willianjustenqui@gmail.com',
  '123456'
)
// console.log(willian)
// console.log(willian.name)
// console.log(willian.email) // Error - protected
// console.log(willian.password)

// willian.logDetails()

*/

const johnDoe = new CharAccount('John', 'johndoe@gmail.com', 'JohnDoe', 1)

console.log(johnDoe)
console.log(johnDoe.name)
//console.log(johnDoe.email) // Error - protected
console.log(johnDoe.level)

console.log(johnDoe.getLevel)
