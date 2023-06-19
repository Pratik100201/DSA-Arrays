// Returning array except given number
let arr = [1,2,3,4,5,6,4]
let num = 4
let s = []
for(let i =0 ; i<arr.length ; i++){
    if(arr[i] !==num){
        s.push(arr[i])
    }
    else{
        console.log("All are Same Numbers")
    }
}
console.log(s)