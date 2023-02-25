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






