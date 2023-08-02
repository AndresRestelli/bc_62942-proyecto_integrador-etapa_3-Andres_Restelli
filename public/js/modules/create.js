import productController from '/js/controllers/product.js';
console.warn('🆗: Módulo PageCreate cargado.');

class PageCreate {
    static productsTableContainer;

    static async deleteProduct(e) {
        if (!confirm('¿Estás seguro de querer eliminar el producto?')) {
            return false;
        }
        const row = e.target.closest('tr');
        const _id = row.querySelector('td[data-product-property="_id"]').innerHTML;
        const deletedProduct = await productController.deleteProduct(_id);
        alert(`El producto ${deletedProduct.title} [ID: ${deletedProduct._id}] ha sido eliminado correctamente.`);
        PageCreate.reloadTable();
        return deletedProduct;
    }

    static async addTableEvents() {
        PageCreate.productsTableContainer.addEventListener('click', async e => {
            if (e.target.classList.contains('btn-delete')) {
                const deletedProduct = await PageCreate.deleteProduct(e);
                console.log('deletedProduct:', deletedProduct);
                return;
            }
        });
    }

    static async renderTemplateTable(products) {
        const hbsFile = await fetch('templates/products-table.hbs').then(r => r.text());
        const template = Handlebars.compile(hbsFile);
        const html = template({ products });
        PageCreate.productsTableContainer.innerHTML = html;
    }
//
    static async loadTable() {
       
        const products = await productController.getProducts();
      
     PageCreate.renderTemplateTable(products);
  }

    static async reloadTable() {              
        const products = await productController.getProducts();
        console.log(`Se encontraron ${products.length} productos.`);
        PageCreate.renderTemplateTable(products);
    }

    static async prepareTable() {
        PageCreate.productsTableContainer = document.querySelector('.products-table-container');
        await PageCreate.loadTable();
        PageCreate.addTableEvents();
    }

    static async init () {
        console.log('PageCreate.init()');

        PageCreate.prepareTable();

        
        const input_Id = document.getElementById('_id');
        const inputTitle = document.getElementById('title');
        const inputPrice = document.getElementById('price');
        const inputStock = document.getElementById('stock');
        const selectBrand = document.getElementById('brands');
        const selectCategory = document.getElementById('categorys');
        const inputAgeFrom = document.getElementById('ageFrom');
        const inputAgeUpTo = document.getElementById('ageUpTo');
        const ageFromMonthUnit = document.getElementById('ageFromMonthUnit');
        const ageFromYearUnit = document.getElementById('ageFromYearUnit');
        const ageUpToMonthUnit = document.getElementById('ageUpToMonthUnit');
        const ageUpToYearUnit = document.getElementById('ageUpToYearUnit');        
        const freeShipping = document.getElementById('freeShipping');
        const inputShortDescription = document.getElementById('shortDescription');
        const inputLongDescription = document.getElementById('description');
        const inputMainPhoto = document.getElementById('image');

        document.getElementById('btn-get-one-product').addEventListener('click', async e => {
            const _id = prompt('Ingresar id:');
            const product = await productController.getProduct(_id);
            if (product._id) {
                console.log(product);
                input_Id.value = product._id;
                inputTitle.value = product.title;
                inputPrice.value = product.price;
                inputStock.value = product.stock;
                inputShortDescription.value = product.shortDescription;
                inputLongDescription.value = product.description;
                inputAgeFrom.value = product.ageFrom;
                inputAgeUpTo.value = product.ageUpTo;
                freeShipping.checked = product.freeShipping;
                selectBrand.value = product.brand;
                selectCategory.value = product.category;
                
            if (product.ageFromUnit === "meses") {
                ageFromMonthUnit.checked = true;
            }
            else{
                ageFromYearUnit.checked = true;
            }
            if (product.ageUpToUnit === "meses") {
                ageUpToMonthUnit.checked = true;
            }
            else{
                ageUpToYearUnit.checked = true;
            }
                
            } else {
                alert('Producto no encontrado');
            }
        });


        const getUniqueSuffix = () =>{
            const extension = inputMainPhoto.value.split('.').pop();;
            
            const uniqueSuffix = 'product_' + Math.floor(Date.now() / 15000) + '.' + extension.toLowerCase(); 
            return uniqueSuffix 
        }

        document.getElementById('btn-delete').addEventListener('click', async e => {
            if (!input_Id.value) {
                alert('Debes ingresar un ID');
                return false;
            }

            if (confirm(`¿Estás seguro de querer eliminar el producto ID: ${input_Id.value}?`)) {
                const _id = input_Id.value;
                const deletedProduct = await productController.deleteProduct(_id);
                console.log(deletedProduct);
                alert(`El producto ${deletedProduct.title} [ID: ${deletedProduct._id}] ha sido eliminado correctamente.`);
                PageCreate.reloadTable();
            } else {
                return false;
            }
        });

        const getAgeFromUnit = () =>{
            return ageFromMonthUnit.checked ? 'meses' : 'años';
        };

        const getAgeUpToUnit = () =>{
            return ageUpToMonthUnit.checked ? 'meses' : 'años';
        };

        document.getElementById('btn-create').addEventListener('click', async e => {
            
            const title = inputTitle.value;
            const price = inputPrice.value;
            const stock = inputStock.value;
            const brand = selectBrand.value;
            const category = selectCategory.value;
            const ageFrom = inputAgeFrom.value;
            const ageUpTo = inputAgeUpTo.value;
            const shortDescription = inputShortDescription.value;
            const description = inputLongDescription.value;
            const ageFromUnit =  getAgeFromUnit();
            const ageUpToUnit = getAgeUpToUnit();
            const image = getUniqueSuffix()
               
                
            const product = {
                title,
                price,
                stock,
                brand,
                category,
                ageFrom,
                ageUpTo,
                freeShipping: freeShipping.checked,
                shortDescription,
                description,
                ageFromUnit,
                ageUpToUnit,
                image,
            };
            const newProduct = await productController.saveProduct(product);
            console.log(newProduct);
            alert(`El producto ${newProduct.title} [ID: ${newProduct._id}] ha sido creado correctamente.`);
            PageCreate.reloadTable();
        });

        document.getElementById('btn-edit').addEventListener('click', async e => {
            const title = inputTitle.value;
            const price = inputPrice.value;
            const stock = inputStock.value;
            const brand = selectBrand.value;
            const category = selectCategory.value;
            const ageFrom = inputAgeFrom.value;
            const ageUpTo = inputAgeUpTo.value;
            const shortDescription = inputShortDescription.value;
            const description = inputLongDescription.value;
            const ageFromUnit =  getAgeFromUnit();
            const ageUpToUnit = getAgeUpToUnit();

            const _id = input_Id.value;
            if (!_id) {
                alert('Debes ingresar un ID');
                return false;
            }

            if (!confirm(`¿Estás seguro de querer modificar el producto ID: ${input_Id.value}?`)) {
                return false;
            }

            const product = {
                title,
                price,
                stock,
                brand,
                category,
                ageFrom,
                ageUpTo,
                freeShipping: freeShipping.checked,
                shortDescription,
                description,
                ageFromUnit,
                ageUpToUnit,
                image: getUniqueSuffix(),
            };

            const updatedProduct = await productController.updateProduct(_id, product);
            console.log(updatedProduct);
            alert(`El producto ${updatedProduct.title} [ID: ${updatedProduct._id}] ha sido actualizado correctamente.`);
            PageCreate.reloadTable();
        });
    }    
}

export default PageCreate;
