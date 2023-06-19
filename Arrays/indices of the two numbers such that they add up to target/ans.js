
// Given an array of integers nums and an integer target, return indices of the 
//two numbers such that they add up to target.
let a = [2,11,7,15,5,4]
let target = 9
for(let i=0 ;i<a.length ;i++){
   for(let j = i+1 ; j<a.length ; j++){
      if(a[i]+a[j]==target){
          console.log(i,j)
      
      } 
      
       
   }   
   
}
