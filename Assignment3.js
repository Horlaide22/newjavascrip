function leapYear(year){
    if(year %  4 === 0){
        return true 

    }else{
        return false
    }
}
console.log(leapYear(2000))
console.log(leapYear(1998))

function isSquareOrRectangle(L,B){
    if(L === B){
        return "This is a square"
    }else{
        return "This is a rectangle"
    }
}
console.log(isSquareOrRectangle(5,9))
console.log(isSquareOrRectangle(8,8))

function shopDiscount(quantity) {
    const DISCOUNT = 0.1
    const UNIT_COST = 100
    const MINIMUM_AMOUNT_TO_BE_SPENT = 1000 

    let totalCost = quantity * UNIT_COST

    if (totalCost > MINIMUM_AMOUNT_TO_BE_SPENT) {
        let discountToBeEarned = totalCost * DISCOUNT 
        let reducedAmount = totalCost - discountToBeEarned 
        
        return reducedAmount
    }

    return totalCost
 
}
console.log(shopDiscount(800))
console.log(shopDiscount(1200))

function profitableGamble(prob, prize, pay){
    if ((prob * prize) > pay){
        return true
    }else{
        return false
    }
}
console.log(profitableGamble(0.2, 50, 9))
console.log(profitableGamble(0.9, 1, 2))
console.log(profitableGamble(0,9, 3, 2))

function makesTen(a,b){
    let sum = a+b
    if ( sum ||(a,b=== 10)){
        return true
    }else{
        return false
    }
}
console.log(makesTen(9,10))
console.log(makesTen(9,9))
console.log(makesTen(1,10))

function comp(string1 , string2) {
    if (string1.length === string2.length){
        return true
    }else{
        return false
    }
}
console.log(comp("AB","CD"))
console.log(comp("ABC","DE"))
console.log(comp("hello","edabit"))

function acceptIntoMovie(age, isSupervised) {
    if (age >= 15 || isSupervised === true) {
        return true
    } else {
        return false
    }
}
console.log(acceptIntoMovie(14,true))
console.log(acceptIntoMovie(14, false))
console.log(acceptIntoMovie(16,false))

function oddOrEven(string){
    let str= string.length
    if(str % 2 === 0){
        return true 
    }else{
        return false
    }
}
console.log(oddOrEven("apples"))
console.log(oddOrEven("pears"))

function isPlural(text){
    let newText = text.charAt(text.length-1)
    if (newText === "s"){
        return true
    }else{
        return false
    }
}
    
    
    console.log(isPlural("changes"))
    console.log(isPlural("changes"))
    console.log(isPlural("dudes"))
    console.log(isPlural("magic"))

 function isLastCharacterN(text){
        let textOne =  text.charAt(text.length-1)
        if (textOne === "n"|| textOne==="N" ){
            return true
        }else{
            return false
        }
 }
 console.log(isLastCharacterN("Aiden"))
 console.log(isLastCharacterN("Piet"))
 console.log(isLastCharacterN("Bert"))
 console.log(isLastCharacterN("Dean"))


 function fifth() {
    let argsLength = arguments.length
    if(argsLength < 5){
        return "Not enough arguments"
    }else{
       return typeof(arguments[4])
    }
   
}    console.log(fifth(1,2,3,4,5))
    console.log(fifth("a",2,3,true,"five"))
    console.log(fifth())

    function  days(year, month)  {
       let output= new Date(year, month, 0).getDate()
       return output
    }
    
    
    console.log(days(2,2018))
    console.log(days(4,654))
    console.log(days(2,200)) 
    console.log(days(2,1000))  

    function  firstLast(text){
        let textOne = text.charAt(0)
        let newText = text.charAt(text.length-1)
        let output = "\"" + textOne + newText + "\"" 
        
        return output
        
      }
      console.log(firstLast("ganesh"))
      console.log(firstLast("kali"))
      console.log(firstLast("shiva"))
      console.log(firstLast("salman"))
      console.log(firstLast("adeyemi"))

      function newWord(word){
        let wordOne= "\"" + word.substring(1) + "\""
            return wordOne
      }
    
      console.log(newWord("apple"))
      console.log(newWord("cherry"))
      console.log(newWord("plum"))


      function checkEnding(str1,str2){
        if (str2.lastIndexOf(str1) === str2.length - str1.length){
          return true 
        }else {
          return false
        }
      }
      console.log(checkEnding("abc","bc"))
      console.log(checkEnding("abc","d"))
      console.log(checkEnding("samurai","zi"))
      console.log(checkEnding("convention","tio"))

      function getMiddle(str){
        let output= "\"" + str.substr(str.length -1 >>> 1, (~str.length & 1) +1) + "\""
        return output
      }

    //   function getMiddle(word) {
    //     if (word.length % 2 != 0) {
    //         let middleCharacterIndex = Math.floor(word.length / 2)
    //         let theMiddleCharacter =  `${word.charAt(middleCharacterIndex)}}`
    //         return theMiddleCharacter
    //     } else {
    //         let middleCharacterIndex = Math.floor(word.length / 2)
    //         let theMiddleCharacter =  `${word.charAt(middleCharacterIndex-1)}${word.charAt(middleCharacterIndex)}`
    //         return theMiddleCharacter
    //     }
    // }
      
      console.log(getMiddle("middle"))
      console.log(getMiddle("A"))
      console.log(getMiddle('testing'))
      console.log(getMiddle("test"))
      
      
      function reverseString(str) {
        let output = "\"" + str.split("").reverse().join("") + "\""
          return output
      }
      console.log(reverseString("Hello World"))
      console.log(reverseString("The quick brown fox"))
      console.log(reverseString("Edabit is really helpful"))
      
      

    
    // function wumbo(statement){
    //     let output = statement.toUpperCase
    //     return output
    // }    
    // console.log(wumbo("I LOVE "))

    // function moodToday(sentence){
    //     let mood = "today , I am feeling happy" + statement
    //     return mood 
    //     if(moodToday === ()){
    //     return "today,  i"
    //     }
    // }






