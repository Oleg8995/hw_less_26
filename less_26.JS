// *********************************** LESS 26 ********************************************

// # 1

const url = new URL('https://dummyjson.com/products');

class ProductsService {
    constructor(url) {
        this.url = url
    }
    
    getAllProduct = async () => {
        await fetch(url)
            .then(res => res.json())
            .then((data) => console.log(data))
            .catch((err) => {
                console.log(err);
        });
    }

    getSingleProduct = async (idnum) => {
        await fetch(`${url}/${idnum}`)
            .then(res => res.json())
            .then((data) => console.log(data))
            .catch((err) => {
                console.log(err);
        });
    }

    searchProducts = async (prod) => {
        const params = new URLSearchParams();
        params.append("q", prod);
        const reps = await fetch(`${url}/search?${params}`);
        const data = await reps.json();
        console.log(data);
    }
    
    getAllProductsCategories = async () => {
        await fetch(`${url}/categories`)
            .then(res => res.json())
            .then((data) => console.log(data))
            .catch((err) => {
                console.log(err);
        });
    }

    getProductsOfCategory = async (categoryName) => {
            await fetch(`${url}/categories/${categoryName}`)
            .then(res => res.json())
            .then((data) => console.log(data))
            .catch((err) => {
                console.log(err);
        });
    }

    addNewProduct = async (titleName) => {
        const reps = await fetch(`${url}/add`, {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: titleName,
            }),
          });
          const data = await reps.json();
        
          console.log(data);
    }

    updateProduct = async (idNum, titleName) => {
        const reps = await fetch(`${url}/${idNum}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: titleName,
            }),
          });
          const data = await reps.json();
        
          console.log(data);
    }

    deleteProduct = async (idNum) => {
        const reps = await fetch(`${url}/${idNum}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
          });
          const data = await reps.json();
        
          console.log(data);
    }

};

const products = new ProductsService(url);

console.log(products.getAllProduct());
console.log(products.getSingleProduct(5));
console.log(products.searchProducts('phone'));
console.log(products.getAllProductsCategories());
console.log(products.getProductsOfCategory('tops'));
console.log(products.addNewProduct("Pencil"));
console.log(products.updateProduct(1, 'car'));
console.log(products.deleteProduct(1));

