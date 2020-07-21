// var x = [];
// alert(x.length);

// Notes: Length property of array is used to display size of array. From the above example the size is empty so the output is 0 in this example.
 
// Example2: we can also create an array by using array constructor. below is the example 

// var x = new Array(10);
// alert(x.length);

// in this example new array is the array constructor.

// var x = new Array('apple','banana');
//  alert(x.length); This proprty is used to display the size
// alert(x[1]); this propeerty is used to display the specific elements from the set of arrays.

// Example3: to print the first and last elements below is the code

// var x = ['apple','mango','banana'];
// document.write('First Element = ' + x[0]+ "</br>");
// document.write('First Element = ' + x[1]+ "</br>");
// document.write('First Element = ' + x[2]+ "</br>"); This code is equal to below line code 
// document.write('third Element = ' + x[x.length-1]+ "</br>");

// Example4: populating an array. we can populate an array by declaring the array first and then populating using array index.

// var x = [];
// x[0] = 10;
// x[1] = "banana";
// alert(x);

// Example5: populating an array using for loop.
//  var x = [];
//  for( var i=0; i<10; i++)
//  {
//      x[i]= i * 2;
//  }
// alert(x);

// Example6: retrieving the elements from the array
//  var x = [];
//  for( var i=0; i<=10; i++){
//      x[i]= i * 2;
//  }
//  for(var i=0; i<x.length; i++){
//      document.write(x[i]+ '</br>');
//  }



// example 7: push and Pop
 var x = [];
 for (let i=0; i<=5; i++) {
     x[i] = i * 2+1;
     document.write(x[i]+ '</br>');
      
 }
 alert(x.length) 

 // example 8: o
 


