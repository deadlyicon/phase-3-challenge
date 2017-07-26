var count = 0;
var totalPrice = 0;
var cartList = document.querySelector('.modal-list');

var cartButton = document.getElementById('cart-button')
var span = document.getElementsByClassName("close")[0];

cartButton.addEventListener('click', toggleModal);
span.addEventListener('click', toggleModal)

function toggleModal() {
  document.querySelector("#modal").classList.toggle("modal-toggle")
}

var addItem = document.querySelectorAll('#add-item');
addItem.forEach(function(item) {
  item.addEventListener('click', function(event) {
    var itemPrice = Number(event.target.previousElementSibling.innerHTML.slice(1))
    var itemName = event.target.previousElementSibling.previousElementSibling.innerHTML

    totalPrice += itemPrice;
    count += 1;
    
    var li = document.createElement('li')
    li.innerHTML = itemName + ' ' + itemPrice;
    cartList.append(li)
    document.querySelector('.total').innerHTML = '$' + totalPrice.toFixed(2)

    countItems();
  })
})

function countItems() {
  var itemCount = document.querySelector('#count')
  itemCount.innerHTML = '(' + count + ')';
}

var clear = document.querySelector('.clear')
clear.addEventListener('click', function(event) {
  count = 0;
  countItems()

  cartList.innerHTML = ''
  document.querySelector('.total').innerHTML = '$' + 0.00
})
