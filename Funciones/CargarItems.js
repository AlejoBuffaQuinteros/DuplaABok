const items = () => {

   $('.items').html('')

   $.getJSON( "../Data/productos.json", function( data ) {
      var itemsrender = [];
      $.each( data, function( key, val ) {
        itemsrender.push( ` <div class="row" id = ${'card-product' + val.id}>
          <div class="col-12 col-md-6">
             <div class="item shadow - mb-4">
                  <h3 class="item-title">${val.nombre}</h3>
                  <img class="item-image" width="170px" height="100px" src="${val.imagen}">
                  <p class="Desprod"><strong>${val.descripcion}</strong></p>
                  <div class="item-details">
                  <h4 class="item-price">$${val.precio}</h4>
                  <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
             </div>
          </div>
          </div>`);
      });

$('.items').html(itemsrender);
   
   Añadirprod()
   
   });
};