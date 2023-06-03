//Percent ==> Per century 10 ปี

//1st year
//balance = 100000
//newBalance = 100000 + interest
//newBalance = 100000 + 100000 * (2.5/100) == 100000 + 2500

//2nd year
//balance = 102500
alert("Hello");
let balance = 100000;
for(let i = 0; 1< 10; i++) {

    balance = balance + balance*(2.5/100);
    
}
console.log(balance.toFixed(2));