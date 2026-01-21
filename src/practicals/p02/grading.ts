const score = Number(process.argv[2])

if(isNaN(score)){
    console.log("Invalid input")
}
if(score < 0 || score > 100){
    console.log("Invalid input")
}

if(49 >= score && score >= 0){
    console.log("Grade is F")
}
if(score >= 50 && score <= 59){
    console.log("Grade is D")
}
if(score >= 60 && score <= 69){
    console.log("Grade is C")
}
if(score >= 70 && score <= 79){
    console.log("Grade is B")
}
if(score >= 80 && score <= 100){
    console.log("Grade is A")
}