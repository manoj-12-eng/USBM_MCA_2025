//const greeting=(name,hour)=>{
  //if(hour<12){
 //   return `good Morning ${name}`;
 // }
 // else if(hour<18){
 //   return`good afternoon ${name}`;
 // }
 // else{
 //   return`good evening ${name}`
  //}

//}
//const output=greeting("dipti",12);
//console.log(output);


//Calculetor:-

//const Calculetor = (a,b,operator)=>{
  //  switch(operator){
  //      case '+':
 //       return a+b;
//        break;
 //       case '-':
 //           return a-b;
//            break;
 //           case '*':
  //              return a*b;
 //               break;
 //               case '/':
  //                  return a/b;
   //                 break;
   //                 default:
    //                    return 'invalid operator';
  //  }

//}
//const result= Calculetor(a,b,'+');
//console.log(result);

//TERNARY FUNCTION:-

//const add = (a,b)=>console.log(add(5,6));
//add();


//CREATE A BMI CALCULATER:-
const calculateBMI = (weight, height) => {
    // Calculate BMI using the formula: weight (kg) / (height (m) * height (m))
    return weight / (height * height);
};

const weight = 73; // weight in kilograms
const height = 1.75; // height in meters
const bmi = calculateBMI(weight, height);

console.log(`Your BMI is: ${bmi.toFixed(2)}`);


//CALLBACK FUNCTION:- When a function is called as an argument of another function.

//Syntax: function say(name,callback)=>{
    
//}





//Anony


