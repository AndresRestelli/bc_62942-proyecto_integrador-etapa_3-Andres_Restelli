
class Main {

    async ajax(url, method = 'get') {
        return await fetch(url, { method: method }).then(r => r.text());
    }

    getIdFromHash() {
        let id = location.hash.slice(1);
        if (id[0] === '/') {
            id = id.slice(1);
        }
        return id || 'home';
    }

    getViewUrlFromId(id) {
        return `views/${id}.html`;
    }

    getModuleUrlFromId(id) {
        return `./modules/${id}.js`;
    }

    setActiveLink(id) {
        const links = document.querySelectorAll('.main-nav__link');
        links.forEach(link => {
            if (link.getAttribute('href') === `#/${id}`) {
                link.classList.add('main-nav__link--active');
                link.ariaCurrent = 'page';
            } else {
                link.classList.remove('main-nav__link--active');
                link.removeAttribute('aria-current');
            }
        });
    }

    async initJS(id) {
        const moduleUrl = this.getModuleUrlFromId(id);
        try {
            const {default: module} = await import(moduleUrl);
            if (typeof module.init !== 'function') {
                console.error(`El módulo ${id} no posee un método init().`);
                return;
            }
            module.init();
        } catch (error) {
            console.error(`No se pudo importar el módulo ${moduleUrl}.`);
        }
    }

    async loadTemplate() {
        const id = this.getIdFromHash();
        
        const viewUrl = this.getViewUrlFromId(id);
        const viewContent = await this.ajax(viewUrl);
        document.querySelector('main').innerHTML = viewContent;

        this.setActiveLink(id);

        this.initJS(id);
    }

    async loadTemplates() {
        this.loadTemplate();
        window.addEventListener('hashchange', () => this.loadTemplate());
    }

    async start() {
        await this.loadTemplates();
    }
}

const main = new Main();
main.start();


function getYear(){
    const date = new Date();
    const year = date.getFullYear();
    return year;
};
/////////////////////////////////////////////////////////////////////////

const copyright = document.querySelector('.copyright');
copyright.innerHTML = 'Copyright © '+ getYear() + '- Todos los derechos reservados';


const backToTop = document.querySelector('.back-to-top'); 
backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});

function cart(){
    let flag=true; 
    const btnCart = document.querySelector('.btn-cart-toggle');
    console.log(btnCart)
    console.log("DENTRO DEL CARRITO");
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

cart();