import { createSingleProduct } from "./create-dom.js";
import { productData } from './product-data.js';


// createSingleProduct('images', 'c1.jpg', 'confectionery', 'Body beauty for here', '$25');



// const productInfo = ['images', 'c1.jpg', 'confectionery', 'Body beauty for here', '$25'];


// createSingleProduct(...productInfo);

// for (let i = 0; i < 12; i++) {
//     createSingleProduct(...productInfo);
// }

//Product load from product-data api and show this.
const productAdd = () => {

    let imageFileLocation = 'images';
    let productInfo = null;

    for (let i = 0; i < productData.length; i++) {
        productInfo = [
            imageFileLocation,
            productData[i].img,
            productData[i].alt,
            productData[i].title,
            productData[i].range
        ];

        createSingleProduct(...productInfo);

    }

}

productAdd();

//Product search and show this
const searchInput = document.getElementById('search-item');
searchInput.addEventListener('input', searchItem, false);

function searchItem() {
    const searchBox = this.value.toUpperCase();
    const product = document.querySelectorAll('.product');
    const pName = document.getElementsByTagName('h2');

    for (let i = 0; i < pName.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];

        if (match) {
            let textValue = match.textContent || match.innerHTML
            if (textValue.toUpperCase().indexOf(searchBox) > -1) {
                product[i].style.display = '';
            } else {
                product[i].style.display = 'none';
            }
        }
    }
}