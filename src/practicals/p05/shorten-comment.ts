const comment = "TypeScript is a strongly typed programming language"

function shortenComment(comment: string): string {
  let output = ""

  for(let index = 0; index < comment.length; index ++ ){
  if(comment[index].length >= 5 && comment[index].length <= 10){
    output += comment[index]
  }
  output += " "
}

  return output
}

console.log(shortenComment(comment))