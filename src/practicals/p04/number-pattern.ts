
let n = Number(process.argv[2])

if(isNaN(n) || n <= 0){
    process.exit()
}

let re = ""
for(let row = 1; row <= n; row++){
    for(let col = 0; col < n-row; col++){
        re += " "
    }
    for(let coll = 0; coll < n; coll ++){
        re += row
    }

    re += "\n"
}
console.log(re)