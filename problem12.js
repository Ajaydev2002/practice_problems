const shoppingcart ={
 "cartitems" : [
    {"name" : "apple", "price" : 120, "quantity" : 4},
    {"name" : "mango", "price" : 80, "quantity" : 2},
    {"name" : "orange", "price" : 160, "quantity" :3}
]}

let totalcost = 0;
for(i=0;i<shoppingcart.cartitems.length;i++){
for(key in shoppingcart){
    totalcost = totalcost + shoppingcart.cartitems[i].price * shoppingcart.cartitems[i].quantity
}}
console.log(totalcost)
