module.exports = function check(str, bracketsConfig) {
  const brackets = str.replace(/\s/g, '');
   let result = [];

   const testBrackets = (i = 0, j = 0) => {
     let isMatch = false;

     if (bracketsConfig[j][1] ===  bracketsConfig[j][0]) {
       if (brackets[i] === bracketsConfig[j][0]) {
         isMatch = true;

         if (!result.includes(brackets[i])) {
           result.push(bracketsConfig[j][1]);
         } else {
           if (result[result.length - 1] !== brackets[i]) {
             result.push(bracketsConfig[j][1]);
           } else {
               result.pop();
           }
         }
       }
     } else {
       if (brackets[i] === bracketsConfig[j][0]) {
         isMatch = true;
         result.push(bracketsConfig[j][1]);
       }

       if (brackets[i] === bracketsConfig[j][1]) {
         isMatch = true;

         if(result.pop() !== brackets[i]){
           result.push(false);
           console.log(result);
           return false
         }
       }
     }

     if (!isMatch && j < bracketsConfig.length - 1) {
       return testBrackets(i, j + 1);
     } else if (i < brackets.length - 1) {
       return testBrackets(i + 1, 0);
     } else {
       return true;
     }
   };

   testBrackets();
   return result.length < 1
}
