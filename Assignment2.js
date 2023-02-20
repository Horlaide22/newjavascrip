function sum(x,y){
    let additon=(x+y)
    return additon
}
console.log(sum(3,2))
console.log(sum(-3,-6))
console.log(sum(7,3))

function number(x){
    let nextNumber=(x+1)
    return nextNumber

}
console.log(number(0))
console.log(number(9))
console.log(number(-3))

function calcAge(age){
    let ageInDays=(age*365)
    return ageInDays
}
console.log(calcAge(65))
console.log(calcAge(0))
console.log(calcAge(20))

function circuitPower(voltage,current){
    let calculatedPower=(voltage*current)
    return calculatedPower
}
console.log(circuitPower(230,10))
console.log(circuitPower(110,3))
console.log(circuitPower(480,20))

function giveMeSomething(statement){
    let string=("something " + statement)
    return string
}
console.log(giveMeSomething("is better than nothing"))
console.log(giveMeSomething("Bob Jane"))
console.log(giveMeSomething("is better than nothing"))

function contactName(firstName,lastName){
    let intoOneString= " \" " + lastName+ ","+firstName + " \" " 
    return intoOneString
}
console.log(contactName("Johnny","Bravo"))
console.log(contactName("John","Doe"))
console.log(contactName("Mary","Jane"))
  

function remainder(x,y){
    let number =(x%y)
    return number
}
console.log(remainder(1,3))
console.log(remainder(3,4))
console.log(remainder(-9,45))

function returnNegative(x){
    let negative=(-x)
    return negative
}
console.log(returnNegative(4))
console.log(returnNegative(15))
console.log(returnNegative(-4))
console.log(returnNegative(0))

function carNeeded(n){
    let seat =Math.ceil(n/5)
    return seat   
}
console.log(carNeeded(5))
console.log(carNeeded(11))
console.log(carNeeded(0))

function stutter(word){
    let result= "eerrm.... "+"errrm...."+word + " ?"
    return result 
}
console.log(stutter("incredible"))
console.log(stutter("enthusiastic"))
console.log(stutter("outstanding"))


function intToString(n){
    let number= string(n)
    return number
}
console.log(intToString(4))

function stringToInt(valueinString){
    let response= number(valueinString)
    return response
}
console.log(stringToInt("4"))

function statement(x){
    let result= typeof(x)
    return result 
}
console.log(statement(1))
console.log(statement("a"))

function squareRoot(x){
    let result= Math.sqrt(x)
    return result
}
console.log(squareRoot(9))
console.log(squareRoot(16))
console.log(squareRoot(24))

function numberArgs(){
    let result=arguments.length
    return result
}
console.log(numberArgs("a", "b", "c"))
console.log(numberArgs(10,20,30,40,50))
console.log(numberArgs("x", "y"))
console.log(numberArgs())

function wordCharWord(x,y){
    let output = " \" " + x +" " + y + " " +x  + " \""  
    return output
   
}
console.log(wordCharWord( "R", "Javascript is fun"))
console.log(wordCharWord( "#", "Hello world!"))
console.log(wordCharWord( "#", "lets jump on code"))