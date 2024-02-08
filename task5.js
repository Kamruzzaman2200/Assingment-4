function monthlySavings(arr,Cost){
    if (typeof arr !== 'array' && typeof Cost !== 'number'){
        return 'invalid input'
    }

    let totalPayment=0;
    for (let payment of arr){
        if (payment >=3000){
            payment=payment-payment*.2;
            totalPayment+=payment;
        }
        else{
            totalPayment+=payment;
        }
    }
    const savings = totalPayment - Cost;
    if (savings < 0 ){
        return 'earn more';
    }
    return savings
}
console.log(monthlySavings([1000, 2000, 3000], 5400)); // Output: 0
console.log(monthlySavings([1000, 2000, 2500], 5000)); // Output: 500