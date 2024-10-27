//for loop:
            //used for iteration.
            //Syntax: for(initializetion;condition;increment/decrement)
         //   {
                 //   Statement;
          //  }

    // //print the no from 1 to 5.
    // for(let i=1;i<=5;i++){
    //     console.log(i);
    // }


    // //print 5 to 1.
    // for(let i=5;i>=1;i--){
    //     console.log(i);
    // }

    //create random nos add five times it.
    
  // let sum=0;
   
  // for(let t=0;t<5;t++){
   //    let randomNo=Math.floor(Math.random()*10);
   //    console.log(randomNo);
   //   sum+=randomNo;

 //  }
 //  console.log(`the random nos are ${sum}`);

     
   


    //nested for loop.

//     for(let i=1;i<=5;i++){
//       for(let j=1;j<=2;j++){
//     console.log("the nos of j are " ,j);
//       }
//        console.log("the nos of i are " ,i);
//    }
// //pattern print
// for(let m=1;m<=5;m++){
//     let pattern="";
//     for(let p=1;p<=m;p++){
//         let pattern="🤝";
//     }
//     console.log(pattern);
// }


//task 1:
//for(let i=1;i<=5;i++){
  //  pattern=" ";

    //for(let j=1;j<=i;j++)
    //{
   //      pattern +="*";
   // }
//console.log(pattern);
//}


//TASK 2 :-

//let n=5;
//for(let i=n;i>=1;i--){
//    let pattern="";
 //   for(let j=1;j<=i;j++){
 //       pattern+="*";

  //  }
 //   console.log(pattern);
//}


//TASK 3:-

let n=5;
for(let i=1;i<=n;i++){
    let pattern="";
    for(let j=1;j<n-i;j++){

    }
    for(let j=1;j<=i;j++){
        pattern+="*";
    }
    console.log(pattern);
}



 
