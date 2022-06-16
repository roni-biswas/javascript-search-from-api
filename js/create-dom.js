const createSingleProduct = (...arg) => {
    const [imgFileLocation, images, photoSeo, productTitle, productRange] = arg;
    const productItems = document.getElementById('show-products');

    //First create div in class name is product
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    //Create img tag an attribuites
    const imgTag = document.createElement('img');
    // imgTag.src = "images/c1.jpg";
    imgTag.src = `${imgFileLocation}/${images}`;
    imgTag.setAttribute('alt', `${photoSeo}`);

    //create one another element
    const productInfo = document.createElement('div');
    productInfo.classList.add('p-info');

    //create to tag for title and range. which input in productInfo tag.
    const title = document.createElement('h2');
    title.innerText = `${productTitle}`;
    const range = document.createElement('h3');
    range.innerText = `${productRange}`;

    //Now append all element in productElement
    productElement.appendChild(imgTag);
    productElement.appendChild(productInfo);
    productInfo.appendChild(title);
    productInfo.appendChild(range);

    // At last show in product div in show-product id tag
    productItems.appendChild(productElement);



    //Create under this format using javascript Dom
    // `<div class="product">
    //                     <img src="images/c1.jpg" alt="confectionery">
    //                     <div class="p-info">
    //                         <h2>Body beauty for here</h2>
    //                         <h3>$25</h3>
    //                     </div>
    // </div>`;

}

export { createSingleProduct };