"use strict";
// S => State |  T => Type |  K => Key |  V => Value |  P => Property | E => Element |  R => Return |  A => Array
// O => Object | F => Function |  M => Method |  C => Class | B => Boolean |  N => Number | I => Integer | S => String | U => Undefined
function useState() {
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
const newState = useState();
/*
Error: Type 'number' is not assignable to type 'string'.
newState.setState(456)
console.log(newState.getState())
*/
newState.setState('Hello');
console.log(newState.getState());
