//Returning all non-zero numbers to left and zero to right
let arr = [ 1,0,2,0,3,4,0,5,6]
let a = []
let b = []
for(let i = 0 ; i<arr.length;i++){
    if( arr[i]!==0){
        a.push(arr[i])
    }
    else{
        b.push(arr[i])
    }
}
console.log(a.concat(b));