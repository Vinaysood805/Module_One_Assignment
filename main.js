/*Module 1 Assignment
Name: Vinay Sood
Student Number: 200447158
Section: COMP1073 - Client-Side JavaScript - 02
*/

// Take it Further 2- Using Constructor Function instead of Object Literals.
function order (fullName, typeOfDrink, sizeOfCoffee, drizzle, whippedCream, sweetener, coldFoam, dairy) {
  this.fullName = fullName;
  this.typeOfDrink = typeOfDrink;
  this.sizeOfCoffee = sizeOfCoffee;
  this.drizzle = drizzle;
  // 2. Method to show drizzle, whippedCream, sweetener and coldFoam in order, only if its included (i.e. yes).
  if (this.drizzle === "yes"){
    this.drizzle = "drizzle";
  }
  else if (this.drizzle === "no"){
    this.drizzle = "";
  }
  this.whippedCream = whippedCream;
  if (this.whippedCream === "yes"){
    this.whippedCream = "whipped Cream";
  }
  else if(this.whippedCream === "no"){
    this.whippedCream = "";
  }
  this.sweetener = sweetener;
  if (this.sweetener === "yes"){
    this.sweetener = "sweetener";
  }
  else if (this.sweetener === "no"){
    this.sweetener = "";
  }
  this.coldFoam = coldFoam;
  if (this.coldFoam === "yes"){
    this.coldFoam = "coldFoam";
  }
  else if (this.coldFoam === "no"){
    this.coldFoam = "";
  }
  this.dairy = dairy;
}

// 1 & 3. Object customerOrder and friendOrder representing the coffee order of customer and friend respectively.
var customerOrder = new order("Selena Gomez", "coffee", "tall", "yes", "no", "yes", "no", "2% Milk");
var friendOrder = new order("Justin Bieber", "latte", "grande", "no", "yes", "yes", "no", "almond Milk");

// Take it Further 1- Users coffee order displayed in the browser window (not in an alert) without using document.write.
document.getElementById("customer_order").innerHTML =
`The customer name is ${customerOrder.fullName}. The order details are ${customerOrder.sizeOfCoffee} ${customerOrder.typeOfDrink} with: ${customerOrder.drizzle} ${customerOrder.whippedCream} ${customerOrder.sweetener} ${customerOrder.coldFoam} and ${customerOrder.dairy}. Thankyou for your order!`;

document.getElementById("friend_order").innerHTML =
`The friend name is ${friendOrder.fullName}. The order details are ${friendOrder.sizeOfCoffee} ${friendOrder.typeOfDrink} with: ${friendOrder.drizzle} ${friendOrder.whippedCream} ${friendOrder.sweetener} ${friendOrder.coldFoam} and ${friendOrder.dairy}. Thankyou for your order!`;

document.getElementById("customer_welcome").innerHTML =
`Hey there ${customerOrder.fullName}! Wecome to UN Caffé!`;

document.getElementById("friend_welcome").innerHTML =
`Hey there ${friendOrder.fullName}! Wecome to UN Caffé, My friend!`;