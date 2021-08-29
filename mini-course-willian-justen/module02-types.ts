// boolean (true/ false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number () int, float, hex, binary)
let total: number
total = 0xff0

// array (type[])
let items: string[]
items = ['foo', 'bar']

// generic
let values: Array<number>
values = [1, 2, 3]

// tupla
let title: [number, string]
title = [1, 'foo']

// enum
enum Colors {
  white = '#fff',
  black = '#000',
}

// any (never use)
let anything: any
anything = 1
anything = '1'
anything = [8]

// void
function logger(): void {
  console.log('foo')
}

// null | undefined
type Bla = string | undefined

// never
function error(): never {
  throw new Error('error')
}

// object
let cart: object
cart = {
  key: '001',
}
