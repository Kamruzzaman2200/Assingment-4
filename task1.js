function calculateMoney(ticket){
    if(typeof ticket!=='number')
    {
        return "Error entre a Number";
    }
    else{
        var rev=ticket*120;
        var expense=500+(8*50);
        var remaining=rev-expense;
        return remaining;
    }
    
}