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

function discount( costOfPurchased){
    if (costOfPurchased > 1000){
    let discount = ((10/100)*costOfPurchased)
    let newCostOfPurchased =   costOfPurchased - discount
    return `Thanks for shopping with us 
            you,re eligble to 10% discount. 
            The cost oof your purchased is ${newCostOfPurchased}`
    }else{
        return `Thanks for shopping with us. 
        The cost of your purchased is ${costOfPurchased} `
    }
   
}
console.log(discount(800))
console.log(discount(1200))

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
    if ((a+b)===10 ||(a,b=== 10)){
        return true
    }else{
        return false
    }
}
console.log(makesTen(9,10))
console.log(makesTen(9,9))
console.log(makesTen(1,10))

function comp(string1 , string2) {
    if (string1 === string2){
        return true
    }else{
        return false
    }
}
console.log(comp("AB","CD"))
console.log(comp("ABC","DE"))
console.log(comp("hello","edabit"))

function acceptIntoMovies(x , y){
    let acceptable = true  
    if(x <=15 || y === acceptable ){
        return true
    }else{
        return false
    }
}
console.log(acceptIntoMovies(14,true))
console.log(acceptIntoMovies(14, false))
console.log(acceptIntoMovies(16,false))

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

function isPlural(x){
    if ((x.length-1) === "s"){
        return true
    }else{
        return false
    }
}
    
    
    console.log(isPlural("changes"))
    console.log(isPlural("change"))
    console.log(isPlural("dude"))
    console.log(isPlural("magic"))


// function fifth(arguments)
//     if (arguments < 5 ){
//         return "not enough agruments"
//     }else{
//         return typeof(arguments)
//     }
//     console.log(fifth(1,2,3,4,5))
//     console.log(fifth("a",2,3,true,"five"))
//     console.log(fifth())

    function  days  (year, month)  {
        return new Date(year, month, 0).getDate()
    }
    
    
    console.log(days(2,2018))
    console.log(days(4,654))
    console.log(days(2,200)) 
    console.log(days(2,1000))  




