//  return the index if the target is found. If not, return the index 
//where it would be if it were inserted in order.
let arr = [1,2,3,4,5,5]
let s = 4
for(let i = 0 ; i<arr.length ;i++){
    if(s> arr.length){
        console.log("It is not present also gretater than length of array")
        
    }
   else if(arr[i]==s){
        console.log(i)
        break
    }
    else if(arr[i]==arr[i+1]){
        console.log(arr[i+1])
    }
}
