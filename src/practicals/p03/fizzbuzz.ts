const num3 = Number(process.argv[2])

if(isNaN(num3)){
    process.exit()
}
if(num3 <= 0){
    process.exit()
}
if(num3 % 15 === 0){
    console.log("FizzBuzz")
}
else if(num3 % 3 === 0){
    console.log("Fizz")
} 
else if(num3 % 5 === 0){
    console.log("Buzz")
}
else{
    console.log(num3)
}