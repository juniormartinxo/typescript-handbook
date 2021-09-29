"use strict";
// @Component
// @Selector
// @useState('ops')
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function delay(ms) {
    return (target, key, descriptor) => {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            setTimeout(() => {
                original.apply(this, args);
            }, ms);
            return descriptor;
        };
    };
}
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    // espera um tempo e aí vai rodar o método
    greet() {
        console.log(`Hello ${this.greeting}`);
    }
}
__decorate([
    delay(1000)
], Greeter.prototype, "greet", null);
const greeter = new Greeter('Galera');
greeter.greet();
