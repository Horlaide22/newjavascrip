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









