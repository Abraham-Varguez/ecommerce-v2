//A utilities js file where we will store some logic functions 


//Helper Function to make sure we return a valid price
export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

//Function that sets the prices for each category and adds it up at the end
export const updateCart = (state) => {
  //calculate the items prices
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  //shipping price (If Order is over 100 then free, ELSE $10 shipping)
  state.shippingPrice = addDecimals(state.itemsPrice > 1000 ? 0 : 150);
  //tax price( NC 7.25% Tax)
  state.taxPrice = addDecimals(Number(0.0725 * state.itemsPrice).toFixed(2));
  //total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));

  return state
}