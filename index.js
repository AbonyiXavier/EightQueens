function EightQueens(strArr) { 
    // code goes here  
    // declare an empty array of x and y
    // loop through  the strArr
    // remove the brackets and push each  number in array of x and y respectively
    
      let x = [];
      let y = [];
      
      strArr.forEach((elem) => {
      let removeBracketForX =  elem.replace('(','').replace(')','').split(',')[0] 
      x.push(Number(removeBracketForX))
  
      let removeBracketForY =  elem.replace('(','').replace(')','').split(',')[1] 
      y.push(Number(removeBracketForY))
  
      });
  
      let flag = true;
      let output = '';
      for (let i = 0; i < strArr.length; i++) {
        for (let k = 0; k < strArr.length; k++) {
          if (k != i) {
            if (flag && (x[k] - x[i] === y[k] - y[i] || x[i] === x[k] || y[i] === y[k])) {
              output = `(${x[i]},${y[i]})`;
              flag = false;
            }
          }
        }
      }
    
      if (!output.length) {
        return "true";
      } else {
        return output;
      }
    }
     
  // keep this function call here 
  console.log('Test 1 passing: ' + (EightQueens(["(2,1)", "(4,3)", "(6,3)", "(8,4)", "(3,4)", "(1,6)", "(7,7)", "(5,8)"]) == '(2,1)'));
  console.log('Test 2 passing: ' + (EightQueens(["(2,1)", "(5,3)", "(6,3)", "(8,4)", "(3,4)", "(1,8)", "(7,7)", "(5,8)"]) == '(5,3)'));