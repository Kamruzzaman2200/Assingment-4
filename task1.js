function calculateMoney(ticket){
    if(ticket>=0)
    {
        var rev=ticket*120;
        var expense=500+(8*50);
        var remaining=rev-expense;
        return remaining;
        
    }
    else{

        return "Error entre a Number";

    }
    
}
console.log(calculateMoney(-30))