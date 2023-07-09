class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const codeRepetido = this.products.find(p => p.code === code);
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: this.products.length + 1,
        };
        if (title && description && price && thumbnail && code && stock !== undefined && !codeRepetido) {
            this.products.push(product);
        } else {
            console.log('Complete all fields');
        }
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const productById = this.products.find(p => p.id === id);
        if (productById) {
            return productById;
        }
        console.error('Not Found');
    }
}

const productos1 = new ProductManager()
productos1.addProduct('RedBul Red','Energizante',6300,'url imagen','5555',100)
productos1.addProduct('RedBul Green','Energizante',7500,'url imagen','1042350',0)
productos1.addProduct('RedBul Black','Energizante',6300,'url imagen','58455',100)

const productById1 = productos1.getProductById(1);
const productById5 = productos1.getProductById(5);

console.log(productos1.getProducts());
console.log(productById1);