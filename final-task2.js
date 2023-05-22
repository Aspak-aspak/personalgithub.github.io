function Order()
{
item = document.getElementById("items").value;
product = "15.97";
cost = parseFloat(product)*parseFloat(item);
document.getElementById("itemcost").innerHTML = "$" + cost.toFixed(2);
ship = "4.99";
tbefore = parseFloat(cost)+parseFloat(ship);
document.getElementById("totalbefore").innerHTML = "$" + tbefore.toFixed(2);
tax = Math.round(parseFloat(tbefore)*10)/100;
document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
total = parseFloat(tbefore)+parseFloat(tax);
document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}