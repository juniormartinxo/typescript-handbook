interface JQuery {
  a: string
}

interface JQuery {
  b: string
}

const $: JQuery = {
  a: 'a',
  b: 'b',
}

console.log($)

type iJQuery = {
  a: string
}
/* error TS2345: Argument of type '{ a: string; b: string; }' is not assignable to parameter of type 'iJQuery'.
type iJQuery = {
    b: string
}
*/

const jq: iJQuery = {
  a: 'a',
}

console.log(jq)

// Interface Tuple
//Não é possível criar uma interface como um tipo de dado tupla
interface Tuple {
  0: number
  1: string
}

;[1, '2', 3, 4] as Tuple

type tTuples = [number, string, number, number]
//;[1, 2, 3] as tTuples // error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'tTuples'.
;[1, 'casa', 3, 4] as tTuples
