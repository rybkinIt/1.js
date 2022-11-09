let a = new Map ([
    ["apple", "green"],

    ["strawberry", "red"],

    ["blueberry", "blue"]
])
for (let elem of a){
    let b = elem[0]+' - '+elem[1]
    console.log(b)
}

