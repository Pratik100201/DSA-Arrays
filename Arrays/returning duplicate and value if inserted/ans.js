// returning repeating number first
// then value it should have if inserted
let arr = [ 1,2,3,4,4,6]
let a =[]
let b = arr[1]-arr[0]
for(let i = 0 ; i<arr.length ; i++){
    for(let j=i+1 ; j< arr.length ; j++){
        if(arr[i]==arr[j]){
            a.push(arr[i], arr[i]+b)
        }
     
       
    }
   
}

console.log(a);