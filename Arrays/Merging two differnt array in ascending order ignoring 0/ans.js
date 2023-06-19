//Merging two differnt array in ascending order ignoring 0
let a = [ 1,2,3,0,0,0]
let b = [2,6,7,4,0,5,6]
let c = []
let d = []
for(let i = 0 ;  i<a.length ;i++){
    if(a[i]!==0){
        c.push(a[i])
    }
}
for(let i = 0 ;  i<b.length ;i++){
    if(b[i]!==0){
        d.push(b[i])
    }
}
let e = c.concat(d)
console.log(e.sort(function(a,b){ return a-b}));