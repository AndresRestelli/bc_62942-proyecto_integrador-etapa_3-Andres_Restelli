import config from '../config.js';
import Model from '../models/products.js';
const model = Model.get(config.PERSISTENCE_TYPE);

/*creates PARA TESTING:

await model.createProduct({
    "title": "Aaaauto A Radio Control Remoto 4x4",
    "brand": "Rock Crawler",
    "shortDescription":"Vehículo a batería recargable.",
    "description": "Auto a Radio Control 4x4 Tecnología Rock Crawler. Alto rendimiento y velocidad, disfruta de giros y saltos. Capacidad de sortear obstáculos (Escalador). Tracción en las 2 ruedas traseras. Amortiguadores de impacto. El control remoto funciona con 2 pilas AA (NO INCLUIDAS). Máximo alcance del control remoto 5 metros.",
    "price": 12999,
    "stock": 30,
    "category": "Control Remoto",
    "freeShipping": true,
    "ageFrom": 3,
    "ageUpTo": 99,
    "ageFromUnit": "meses",
    "ageUpToUnit": "años",
    "image": "Auto A Radio Control Remoto 4x4 Camioneta Juguete Luz Led Rc.PNG",
    "id": "1"
  });
  await model.createProduct({
    "title": "Bloques para armar Duravit Balde de 240 piezas",
    "brand": "Duravit",
    "shortDescription":"Set contiene 240 piezas.",
    "description": "El set contiene 240 piezas. Recomendado a partir de 3 años. Contiene piezas en forma de bloque. Horas de diversión aseguradas con este juguete. Fomenta la actividad en familia.",
    "price": 9953,
    "stock":10,
    "category": "Para armar",
    "freeShipping": false,
    "ageFrom": 3,
    "ageUpTo": 99,
    "ageFromUnit": "años",
    "ageUpToUnit": "meses",
    "image": "Bloques para armar Duravit Balde de 240 piezas en balde.PNG",
    "id": "2"
  });
  await model.createProduct({
    "title": "Espadas Armas Minecraft X6 A Eleccion",
    "brand": "Minecraft",
    "shortDescription":"Set de armas.",
    "description": "Combo minecraft !! Arma tu combo como vos quieras con las armas que vos quieras y color",
    "price": 7599,
    "stock": 40,
    "category": "De Goma",
    "freeShipping": true,
    "ageFrom": 3,
    "ageUpTo": 99,
    "ageFromUnit": "años",
    "ageUpToUnit": "años",
    "image": "Espadas Armas Minecraft X6 A Eleccion.PNG",
    "id": "3"
  });
  await model.createProduct({
    "title": "Peluche Pokemon Varios Personajes Especiale",
    "brand": "PokeCorp",
    "shortDescription":"Peluche Pokemon",
    "description": "-Excelente calidad y diseño Premium. Ojos bordados y relleno de vellón súper soft. Muy suave y más hermoso que nunca!! 17 a 25cm de alto según el modelo. Muy suave al tacto",
    "price": 2280,
    "stock": 550,
    "category": "Peluches",
    "freeShipping": true,
    "ageFrom": 0,
    "ageUpTo": 99,
    "ageFromUnit": "años",
    "ageUpToUnit": "años",
    "image": "Peluche Pokemon Varios Personajes Especiales Pikachu 22cm.PNG",
    "id": "4"
  });
  await model.createProduct({
    "title": "Hot-wheels-autos",
    "brand": "Hotwheels",
    "shortDescription":"Autos Hotwheels",
    "description": "Autos Hot Wheels. Desde su aparición en 1968, los vehículos Hot Wheels han sido los preferidos de coleccionistas, entusiastas del automovilismo y seguidores de las carreras de coches de todas las edades. - Escala 1:64 / 7 Cm",
    "price": 2499,
    "stock": 350,
    "category": "Autitos",
    "freeShipping": true,
    "ageFrom": 1,
    "ageUpTo": 99,
    "ageFromUnit": "años",
    "ageUpToUnit": "años",
    "image": "hot-wheels-auto-x-1-art-c4982 (1).jpg",
    "id": "5"
  });
  await model.createProduct({
    "title": "Figuras Tortugas Ninja Pop Set X 4 Batalla",
    "brand": "Pop",
    "shortDescription":"Tortugas Ninja Pop Set",
    "description": "Tortugas Pop x 4 unidades. Colecciona a todos personajes favoritos: Raphael, Leonardo, Donatello y MiguelAngelo. El precio de la publicación es por unidad 4 unidades. Caja blister cerrado",
    "price": 11880,
    "stock": 1500,
    "category": "Figuras",
    "freeShipping": false,
    "ageFrom": 1,
    "ageUpTo": 99,
    "ageFromUnit": "años",
    "ageUpToUnit": "años",
    "image": "Figuras Tortugas Ninja Pop Set X 4 Batalla.PNG",
    "id": "6"
  });
  await model.createProduct({
    "title": "Hot Wheels Autos Surtido Colección",
    "brand": "Hotwheels",
    "shortDescription":"Autos Hotwheels",
    "description": "Autos Hot Wheels Originales Surtidos. Desde su aparición en 1968, los vehículos Hot Wheels han sido los preferidos de coleccionistas, entusiastas del automovilismo y seguidores de las carreras de coches de todas las edades.",
    "price": 5499,
    "stock": 1090,
    "category": "Autitos",
    "freeShipping": false,
    "ageFrom": 1,
    "ageUpTo": 99,
    "ageFromUnit": "años",
    "ageUpToUnit": "años",
    "image": "Hot Wheels Autos Surtido Colección.PNG",
    "id": "7"
  });
  await model.createProduct({
      "title": "Muñeco Figura De Acción Trafalgar D. Water Law One Piece",
      "brand": "One Piece",
        "shortDescription":" Trafalgar D. Water Law One Piece",
      "description": "Muñecos One Piece Blister Trafalgar D. Water Law One Piece: 17 cms de alto.Material: Plástico.No es articulado.",
      "price": 4599,
      "category": "Coleccionables",
      "freeShipping": false,
      "stock": 999,
        "ageFrom": 7,
        "ageUpTo": 99,
      "ageFromUnit": "años",
    "ageUpToUnit": "años",
      "image": "Muñeco Figura De Acción Trafalgar D. Water Law One Piece.PNG",
      "id": "8"
    });
    await model.createProduct({
      "title": "Muñecos One Piece Monkey D.luffy Eustass Kid",
      "brand": "One Piece",
        "shortDescription":"Monkey D.luffy Eustass Kid",
      "description": "Muñecos One Piece Blister Monkey D.luffy Eustass Kid: 17 cms de alto.Material: Plástico.No es articulado.",
      "price": 4999,
      "category": "Coleccionables",
      "freeShipping": false,
      "stock": 999,
        "ageFrom": 7,
        "ageUpTo": 99,
      "ageFromUnit": "años",
    "ageUpToUnit": "años",
      "image": "Muñecos One Piece Monkey D.luffy Eustass Kid.PNG",
      "id": "9"
    });
    await model.createProduct({
      "title": "Muñecos One Piece Blister Dracule Mihawk",
      "brand": "One Piece",
        "shortDescription":"Dracule Mihawk",
      "description": "Muñecos One Piece Blister Dracule Mihawk Medida: 17 cms de alto.Material: Plástico.No es articulado.",
      "price": 4999,
      "category": "Coleccionables",
      "freeShipping": false,
      "stock": 999,
        "ageFrom": 7,
        "ageUpTo": 99,
      "ageFromUnit": "años",
    "ageUpToUnit": "años",
      "image": "Muñecos One Piece Blister Monkey D.luffy, Dracule Mihawk.PNG",
      "id": "10"
    });
    await model.createProduct({
      "title": "Muñecos One Piece Blister Bartholomew Kuma",
      "brand": "One Piece",
        "shortDescription":"Dracule Mihawk",
      "description": "Muñecos One Piece Blister Bartholomew Kuma Medida: 17 cms de alto.Material: Plástico.No es articulado.",
      "price": 4999,
      "category": "Coleccionables",
      "freeShipping": false,
      "stock": 999,
        "ageFrom": 7,
        "ageUpTo": 99,
      "ageFromUnit": "años",
    "ageUpToUnit": "años",
      "image": "Muñecos One Piece Blister Monkey D.luffy, Bartholomew Kuma.PNG",
      "id": "11"
    });
    await model.createProduct({
      "title": "Set 3 Muñecos One Piece - De 18cm C/u - Colección Completa",
      "brand": "One Piece",
        "shortDescription":"Set 3 Muñecos One Piece",
      "description": "Pelota de fútbol Adidas Tiro. Diseño duradero y resistente. Tamaño y peso oficial. Adecuada para entrenamientos y partidos. Excelente agarre y precisión en el juego. Ideal para jugadores de todas las edades.",
      "price": 7599,
      "category": "Coleccionables",
      "freeShipping": false,
      "stock": 750,
        "ageFrom": 7,
        "ageUpTo": 99,
      "ageFromUnit": "años",
    "ageUpToUnit": "años",
      "image": "Set 3 Muñecos One Piece - De 18cm  - Colección Completa.PNG",
      "id": "12"
    });
    await model.createProduct({
      "title": "Muñeco Jujutsu Kaisen Yuji Itadori Relax Movie",
      "brand": "Bandai",
        "shortDescription":"Muñeco Jujutsu Kaisen",
      "description": "Producto: Figura de acción  Personaje: Yuji Itadori (Relax) Medida: 17cm Aprox",
      "price": 17500,
      "category": "Coleccionables",
      "freeShipping": false,
      "stock": 550,
        "ageFrom": 7,
        "ageUpTo": 99,
      "ageFromUnit": "años",
    "ageUpToUnit": "años",
      "image": "banpresto Jujutsu Kaisen Yuji Itadori Relax Movie Muñeco.PNG",
      "id": "13"
    });
    await model.createProduct({
      "title": "Muñeco Roronoa Zoro One Piece Anime",
      "brand": "One Piece",
        "shortDescription":"Set 3 Muñecos One Piece",
      "description": "Figura articulada de Roronoa Zoro, protagonista de la serie anime “One Piece” Fabriante: Bandai",
      "price": 17500,
      "category": "Coleccionables",
      "freeShipping": false,
      "stock": 750,
        "ageFrom": 7,
        "ageUpTo": 99,
      "ageFromUnit": "años",
    "ageUpToUnit": "años",
      "image": "Muñeco Roronoa Zoro One Piece Anime Heroes Bandai M4e.PNG",
      "id": "14"
    });
    
    await model.createProduct({
      "title": "Muñeco Shanks One Piece Anime<",
      "brand": "One Piece",
        "shortDescription":"Muñeco One Piece",
      "description": "Figura articulada de Shanks de la serie anime “One Piece” Fabriante: Bandai",
      "price": 17500,
      "category": "Coleccionables",
      "freeShipping": false,
      "stock": 750,
        "ageFrom": 7,
        "ageUpTo": 99,
      "ageFromUnit": "años",
    "ageUpToUnit": "años",
      "image": "Figura De Accion Anime Heroes One Piece Shanks 17cm.PNG",
      "id": "15"
    });
    await model.createProduct({
      "title": "LEGO® Technic Moto “2 en 1",
      "brand": "LEGO®",
        "shortDescription":"LEGO® Technic",
      "description": "LEGO® Technic Moto “2 en 1”, que se convierte en una moto tuneada de aventura.A los niños de 7 años o más les encantará construir esta realista maqueta de estilo chopper.La Moto está equipada con motor de 3 cilindros accionado por cadena, pistones móviles, cadena giratoria y dirección.",
      "price": 12899,
      "category": "Coleccionables",
      "freeShipping": false,
      "stock": 387,
        "ageFrom": 9,
        "ageUpTo": 99,
      "ageFromUnit": "años",
    "ageUpToUnit": "años",
      "image": "LEGO® TECHNIC - MOTO (42132).PNG",
      "id": "16"
    });
    await model.createProduct({
      "title": "LEGO® Technic Chevrolet Camaro Nascar Next Gen",
      "brand": "LEGO®",
        "shortDescription":"LEGO® Technic",
      "description": "Deja que tu peque de 9 años o más construya su propio coche de carreras de juguete Chevrolet Camaro Nascar",
      "price": 109979,
      "category": "Coleccionables",
      "freeShipping": false,
      "stock": 487,
        "ageFrom": 9,
        "ageUpTo": 99,
      "ageFromUnit": "años",
    "ageUpToUnit": "años",
      "image": "Lego Technic 42153 Auto Chevrolet Camaro Nascar Next Gen.PNG",
      "id": "17"
    });
    await model.createProduct({
      "title": "LEGO® Technic McLaren Senna GTR™",
      "brand": "LEGO®",
        "shortDescription":"LEGO® Technic",
      "description": "¡El set LEGO® Technic McLaren Senna GTR™ (42123) es una magnífica elección que también fascinará a los fans de McLaren adultos! Equipado con infinidad de características de gran realismo inspiradas en el icónico supercoche de carreras de verdad, este juguete en maqueta coleccionable seguro que disparará las pulsaciones de más de uno.",
      "price": 109899,
      "category": "Coleccionables",
      "freeShipping": true,
      "stock": 587,
        "ageFrom": 9,
        "ageUpTo": 99,
      "ageFromUnit": "años",
    "ageUpToUnit": "años",
      "image": "LEGO® TECHNIC - MCLAREN SENNA GTR (42123).PNG",
      "id": "18"
    });
    await model.createProduct({
      "title": "LEGO® Technic 42082 Grúa Roja",
      "brand": "LEGO®",
        "shortDescription":"LEGO® Technic",
      "description": "LEGO® Technic Grúa roja completamente articulable",
      "price": 494144,
      "category": "Coleccionables",
      "freeShipping": true,
      "stock": 587,
        "ageFrom": 9,
        "ageUpTo": 99,
      "ageFromUnit": "años",
    "ageUpToUnit": "años",
      "image": "Lego Technic 42082 Grúa Roja.PNG",
      "id": "19"
    });
    await model.createProduct({
      "title": "LEGO® Technic Speed Champions 76909 564 piezas",
      "brand": "LEGO®",
        "shortDescription":"LEGO® Technic",
      "description": "LEGO® Technic Speed Champions está repleto de detalles que encantarán a los peques. Incluye 564 piezas, arma tus 2 autos y empieza la mejor carrera de tu vida!",
      "price": 40592,
      "category": "Coleccionables",
      "freeShipping": true,
      "stock": 996,
        "ageFrom": 9,
        "ageUpTo": 99,
      "ageFromUnit": "años",
    "ageUpToUnit": "años",
      "image": "Lego Speed Champions 76909 564 piezas.PNG",
      "id": "20"
    });*/


////////////////////////////////////////////////////////////////////////////////
//                                 API Get All                                //
////////////////////////////////////////////////////////////////////////////////

const getProducts = async () => {
    const products = await model.getProducts();
    return products;
};

////////////////////////////////////////////////////////////////////////////////
//                                 API Get One                                //
////////////////////////////////////////////////////////////////////////////////

const getProduct = async id => {
    const product = await model.getProduct(id);
    return product;
}

////////////////////////////////////////////////////////////////////////////////
//                                 API Create                                 //
////////////////////////////////////////////////////////////////////////////////

const createProduct = async product => {
    const createdProduct = await model.createProduct(product);
    return createdProduct;
};

////////////////////////////////////////////////////////////////////////////////
//                                 API  Update                                //
////////////////////////////////////////////////////////////////////////////////

const updateProduct = async (id, product) => {
    const updatedProduct = await model.updateProduct(id, product);
    return updatedProduct;
};

////////////////////////////////////////////////////////////////////////////////
//                                 API  Delete                                //
////////////////////////////////////////////////////////////////////////////////

const deleteProduct = async id => {
    const deletedProduct = await model.deleteProduct(id);
    return deletedProduct;
};

export default {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};