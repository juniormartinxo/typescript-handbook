// @Component
// @Selector
// @useState('ops')

// Factory
/*
function logger(prefix: string) {
  return target => console.log(`${prefix} - ${target}`)
}

//Class decorator I
@logger('awesome')
class Foo {}
*/

/*
function setAPIVersion(apiVersion: string) {
  return constructor => {
    return class extends constructor {
      version = apiVersion
    }
  }
}

// Class decorator II - anotar a versão da API
@setAPIVersion('1.0.0')
class API {}

console.log(new API())
*/

/*
// Property decorator
function minLength(length: number) {
  return (target: any, key: string) => {
    let val = target[key]

    const getter = () => val
    const setter = (value: string) => {
      if (value.length < length) {
        //throw new Error(`${key} must have at least ${length} characters`)
        console.log(`${key} must have at least ${length} characters`)
      } else {
        val = value
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    })
  }
}
class Movie {
  // validação
  @minLength(5)
  title: string

  constructor(t: string) {
    this.title = t
  }
}

const movie = new Movie('Avengers')

console.log(movie.title)
*/

// Method decorator

function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const original = descriptor.value

    descriptor.value = function (...args: any[]) {
      setTimeout(() => {
        original.apply(this, args)
      }, ms)

      return descriptor
    }
  }
}

class Greeter {
  greeting: string

  constructor(message: string) {
    this.greeting = message
  }

  // espera um tempo e aí vai rodar o método
  @delay(1000)
  greet() {
    console.log(`Hello ${this.greeting}`)
  }
}

const greeter = new Greeter('Galera')
greeter.greet()
