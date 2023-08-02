//Funcion Carrito
function cart(){
    let flag=true; 
    const btnCart = document.querySelector('.btn-cart-toggle');
    console.log(btnCart)
    const cartContainer = document.querySelector('section');
    console.log(btnCart);
    console.log(cartContainer);
    
    btnCart.addEventListener('click', function (){
        if (flag){
            //Muestro carrito
            cartContainer.classList.add('cart-container-open');
            btnCart.classList.add('btn-cart-toggle-active');
            document.addEventListener('click', function (ev) {
                if (ev.target.closest('.cart-container') || (ev.target.classList.contains('btn-cart-toggle')) )
                {
                }
                else
                {
                    cartContainer.classList.remove('cart-container-open');
                    btnCart.classList.remove('btn-cart-toggle-active');    
                    flag = true;
                }
      
            } );
                window.addEventListener('keydown',function(ev){
                console.log('Tecla presionada:', ev.key);
                if (ev.key==='Escape'){
                    cartContainer.classList.remove('cart-container-open');
                    btnCart.classList.remove('btn-cart-toggle-active');
                }
            });
            flag =false;
        }
        else{
            cartContainer.classList.remove('cart-container-open');
            btnCart.classList.remove('btn-cart-toggle-active');
        }
        flag = true;
    })
    document.querySelector('.icon-cart-close').addEventListener('click', function(){
        cartContainer.classList.remove('cart-container-open');
        btnCart.classList.remove('btn-cart-toggle-active');
    });
    var tableItemClose = document.querySelectorAll('.tableItemClose');
    for (let i=0;i<tableItemClose.length;i++){
        tableItemClose[i].addEventListener('click', function () {
                console.log('Producto eliminado');
            }
            );
    }

};


