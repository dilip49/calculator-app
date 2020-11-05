//state = this.state.value (i.e. 12+3)
//value = newValue (i.e. '=')
function calculation (value, state) {

  //combines the arguments (i.e. 12+3=)
  let result = state.concat(value);
  let num1;
  let num2;
  let finalNum;

  //checks first decimal
  if (value === '.') {
    //checks second decimal. If there is another decimal, to return the current state
    //state = 1.1+1.
    if(state[state.length - 1] === '.') {
      return {
        value: state
      }
    }
    //else return result 1.1+1.1=
     return {
       value: result
     }
   }

  //running a for loop to get i for our index
 for (let i = 0; i < result.length; i++) {
   if ( (isNaN(parseFloat(result[i]))) && (result[i] !== '.') && (i !== result.length -1)) {
//last condition: makes sure that i is not the =.
     let operator = result[i];
     //last operator may not necessarily be an =, user can press another math operator (i.e. 1+1+2)
     let finalOperator = result[result.length - 1];
     //slice includes start index, but not the end index
     num1 = result.slice(0, i);
     num2 = result.slice(i + 1, result.length - 1);

     //if user happens to press '=' in between num1 and num2
     if (operator === '=') {
       finalNum = num2;
     }

     if (operator === "+") {
       finalNum = parseFloat(num1) + parseFloat(num2);
     }

     else if (operator === "-") {
       finalNum = parseFloat(num1) - parseFloat(num2);
     }

     else if (operator === "/") {
       finalNum = parseFloat(num1) / parseFloat(num2);
     }

     else if (operator === "x") {
       finalNum = parseFloat(num1) * parseFloat(num2);
     }

     //if the finalOperator is actually an '='
     if (finalOperator === '=') {
       //reassigning the current state (from parameter)
       //once it has finished the for/if conditions, then we want it to render finalNum --> this.setState({value: finalNum.toString()}). toString() because we are continually using .concat (only for strings).
       state = finalNum.toString();
       return {
         value: state
       }
       //if the user presses 1+2 and then presses another operator ('+') then, it renders the finalNum (of 1+2) --> 3+ --> and then continues along
     } else {
       state = finalNum.toString().concat(finalOperator);
       return {
         value: state
       }
     }

   }
 }
 //if it DOESN'T meet the for/if conditions, we return the result (i.e. 12+ or 12+3, this is why it renders on the page --> this.setState({value: result})
 return {
   value: result
 }

}

export default calculation;