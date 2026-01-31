let productName = "Ice Cream";

let costPerUnit = 0.99;
let basePrice = 4.99;
let discountRate = 0.15;
let salesTaxRate = 0.07;
let fixedMonthlyCosts = 100; 

let discountedPrice = basePrice * (1-discountRate); 
let finalPriceWithTax = discountedPrice * (1+salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0; 

console.log("Product Name: " + productName);
console.log("Discounted Price: $" + (discountedPrice).toFixed(2));
console.log("Final Price with Tax: $" + (finalPriceWithTax).toFixed(2));
console.log("Profit per Unit: $" + (profitPerUnit).toFixed(2));
console.log("Breakeven Units: " + breakEvenUnits);
console.log("This is profitable: " + isProfitablePerUnit);
