let cart = []; let total = 0;
function addToCart(name, price){
  cart.push({name, price}); total += price;
  document.getElementById('cartCount').innerText = cart.length;
  document.getElementById('toast').classList.add('show');
  setTimeout(()=>document.getElementById('toast').classList.remove('show'),1500);
  renderCart();
}
function renderCart(){
  let html = ""; cart.forEach(item => { html += `<div><span>${item.name}</span><b>Rs.${item.price}</b></div>`; });
  document.getElementById('cartItems').innerHTML = html || "Cart is empty";
  document.getElementById('totalPrice').innerText = total;
}
document.getElementById('cartBtn').onclick = () => document.getElementById('cartModal').classList.add('show');
document.getElementById('closeCart').onclick = () => document.getElementById('cartModal').classList.remove('show');
document.getElementById('checkoutBtn').onclick = () => {
  if(cart.length==0){ alert("Pehle kuch add karo!"); return; }
  let name = document.getElementById('custName').value || "Customer";
  let addr = document.getElementById('custAddress').value || "No address";
  let msg = `Hello ZAIKA, New Order:%0AName: ${name}%0AAddress: ${addr}%0A%0A`;
  cart.forEach(i => msg += `- ${i.name} Rs.${i.price}%0A`);
  msg += `%0ATotal: Rs.${total}`;
  window.open(`https://wa.me/923000000000?text=${msg}`, "_blank");
};
document.querySelectorAll('.filter').forEach(btn=>{
  btn.onclick = ()=>{
    document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    let cat = btn.dataset.filter;
    document.querySelectorAll('.food-card').forEach(card=>{
      card.style.display = (cat=="all" || card.dataset.cat==cat) ? "block" : "none";
    });
  }
});