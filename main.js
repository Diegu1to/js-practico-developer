const menuEmail = document.querySelector(".navbar-email");
const iconMobMenu = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");



menuEmail.addEventListener("click", toggleDesktopMenu)
iconMobMenu.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoAside)


function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }
    

    desktopMenu.classList.toggle("inactive");

}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }


    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const desktopMenuClosed = desktopMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    if (!desktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }


    aside.classList.toggle("inactive")

}

const productList = [];

productList.push({
    name: "Bike",
    price: "1´000.000",
    Image: "https://images.pexels.com/photos/127016/pexels-photo-127016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "Pelota de Rugby",
    price: "98.000",
    Image: "https://images.pexels.com/photos/13583551/pexels-photo-13583551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "Scooter clásica",
    price: "12´000.000",
    Image: "https://http2.mlstatic.com/D_NQ_NP_863904-MCO71473435313_092023-O.webp",
});

productList.push({
    name: "Set licorera y copas Negro",
    price: "110.000",
    Image: "https://casacardenal.com/wp-content/uploads/2023/08/Licorera-1.jpg",
});

productList.push({
    name: "Perfume Moschino 100ml",
    price: "280.000",
    Image: "https://madeira.com.co/cdn/shop/products/8011003845132_1_2000x.jpg?v=1625352316",
});


function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-cards");
    
        // product = {name, price, image} -> product.image
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.Image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement("figure");
    
        const productImgCard = document.createElement("img");
        productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
        
    
    }
}

renderProducts(productList);