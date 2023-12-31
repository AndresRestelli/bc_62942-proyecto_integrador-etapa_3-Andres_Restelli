import mongoose from 'mongoose';
import config from '../config.js';

const productSchema = mongoose.Schema({
    title: String,
    price: Number,
    stock: Number,
    brand: String,
    category: String,
    shortDescription: String,
    description: String,
    freeShipping: Boolean,
    ageFrom: Number,
    ageUpTo: Number,
    ageFromUnit: String,
    ageUpToUnit: String,
    image: String,
});

// Modelo del documento almacenado en la colección
const ProductsModel = mongoose.model('products', productSchema);

class ProductModelMongoDB {

    static connected = false;

    static async connectDB () {
        try {
            await mongoose.connect(config.MONGODB_CONNECTION_STR, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: config.MONGODB_TIMEOUT
            });
            console.log('Conexión con MongoDB exitosa.');
            ProductModelMongoDB.connected = true;
        } catch (error) {
            console.error(`Error al intentar establecer la conexión con MongoDB. Detalle: ${error.message}`);
        }
    }



    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - C: Create                              //
    ////////////////////////////////////////////////////////////////////////////////`

    async createProduct (product) {
        if (!ProductModelMongoDB.connected) {
            return {};
        }
        try {
            const newProduct = new ProductsModel(product);
            await newProduct.save();
            return newProduct;
        } catch (error) {
            console.error('Error al intentar dar de alta el producto:', error.message);
            return {};
        }

    }


    ////////////////////////////////////////////////////////////////////////////////
    //                               CRUD - R: Read                               //
    ////////////////////////////////////////////////////////////////////////////////

    async getProducts () {
        if (!ProductModelMongoDB.connected) {
            return [];
        }
        try {
            const products = await ProductsModel.find({});
            return products;
        } catch (error) {
            console.error('Error al intentar leer los productos:', error.message);
            return [];
        }
        
    }

    async getProduct (id) {
        if (!ProductModelMongoDB.connected) {
            return {};
        }
        try {
            const product = await ProductsModel.findById(id) || {};
            return product;
        } catch (error) {
            console.error(`Error al intentar leer el producto #:${id}`, error.message);
        }
        return {};
    }


    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - U: Update                              //
    ////////////////////////////////////////////////////////////////////////////////`

    async updateProduct (id, product) {
        if (!ProductModelMongoDB.connected) {
            return {};
        }
        try {
            const updatedProduct = await ProductsModel.findByIdAndUpdate(id, {$set: product}, {
                returnDocument: 'after'
            });
            return updatedProduct || {};
        } catch (error) {
            console.error(`Error al intentar actualizar el producto #:${id}`, error.message);
            return {};
        }
    }

    ////////////////////////////////////////////////////////////////////////////////
    //                              CRUD - D: Delete                              //
    ////////////////////////////////////////////////////////////////////////////////

    async deleteProduct (id) {
        if (!ProductModelMongoDB.connected) {
            return {};
        }
        try {
            const deletedProduct = await ProductsModel.findByIdAndDelete(id) || {};
            return deletedProduct;
        } catch (error) {
            console.error(`Error al intentar eliminar el producto #:${id}`, error.message);
            return {};
        }
    };

}

export default ProductModelMongoDB;
