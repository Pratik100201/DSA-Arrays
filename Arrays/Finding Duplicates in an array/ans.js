// Finding Duplicates in an array
let arr = [ 1,3,2,1]

for(let i = 0 ; i<arr.length ; i++){
    for(let j=i+1 ; j< arr.length ; j++){
        if(arr[i]==arr[j]){
            console.log("True")
         
        }
     
       
    }
   
}
