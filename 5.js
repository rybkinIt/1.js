let arr = [1,2,3,5]
arr.push(7)
let result = arr.map(function (item,index,array) {
    return item + 1

})
console.log(arr.length,result,arr)
console.log(arr[1],arr[2],arr[3],arr[4])