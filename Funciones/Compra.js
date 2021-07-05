function Añadirprod(){

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

const shoppingCartItemsContainer = document.querySelector(
   '.shoppingCartItemsContainer'
); 
 
function addToCartClicked(event){
   const button = event.target;
   console.log('SI: addToCartClicked -> button',button);
   const item = button.closest('.item');
 
   const itemTitle = item.querySelector('.item-title').textContent;
   const itemPrice = item.querySelector('.item-price').textContent;
   const itemImage = item.querySelector('.item-image').src;
 
   addItemToShoppingCart(itemTitle, itemPrice,itemImage);
}

 function addItemToShoppingCart(itemTitle, itemPrice,itemImage) {
   console.log(itemTitle, itemPrice);
   const shoppingCartRow = document.createElement('div');
   const shoppingCartContent = `
   <div class="row shoppingCartItem">
         <div class="col-6">
             <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
             <img width="50px" src=${itemImage} class="shopping-cart-image">
                 <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
             </div>
         </div>
         <div class="col-2">
             <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                 <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
             </div>
         </div>
         <div class="col-4">
            <div
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
     </div>`;
   shoppingCartRow.innerHTML = shoppingCartContent
   shoppingCartItemsContainer.append (shoppingCartRow)

   shoppingCartRow.querySelector('.buttonDelete')
   shoppingCartRow.addEventListener('click',removeShoppingCartItem)

   updateShoppingCartTotal();
}

 function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    total = total + shoppingCartItemPrice
  });
  shoppingCartTotal.innerHTML = `$${total}`;
}

 function removeShoppingCartItem(event) {
   const buttonClicked = event.target;
   buttonClicked.closest('.shoppingCartItem').remove();
   updateShoppingCartTotal();
}

 

//SCROLL CARRITO
 
 $(".addToCart").on("click", function () {
  $(".shopping-cart").show()
  let posicion = $(".shopping-cart").offset().top;
  $("html, body").animate({ scrollTop: posicion }, 2000);
});
  
 //<!--OCULTAR/VER CARRITO-->

 $("#hide").click(function(){
  $(".shopping-cart").fadeOut(2000);
});

$("#show").click(function(){
  $(".shopping-cart").fadeIn(2000);
});

$('.shopping-cart').hide();

}
