const products = [
    {
        id: 0,
        name: "Samsung s26 ultra",
        category: "Electronics",
        oldPrice: 999,
        newPrice: 849,
        image: "https://www.techspecs.info/_next/image/?url=https%3A%2F%2Fwww.techspecs.info%2Fuploads%2FSAMSUNG_GALAXY_S26_ULTRA_5_G_9232e2ad7e.png&w=640&q=75"
    },
    {
        id: 1,
        name: "iPhone 14",
        category: "Electronics",
        oldPrice: 1099,
        newPrice: 949,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJRdUizW7c2P8RUtRpvTp4jFmfltfNJPpGzE5Kfh6R6qcywpVjtTr6OCl-Y0NTlvuzKCfGAl_HYCHQ03LpSyhawCabIOQ_nXgR4rEZg-9NIDRzgQqxXzaDzQ"
    },
    {
        id: 2,
        name: "Samsung Galaxy Book",
        category: "Electronics",
        oldPrice: 1299,
        newPrice: 1099,
        image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/317312_0_wz3n1OCgV.png?updatedAt=1762329454256"
    },
    {
        id: 3,
        name: "Gaming Laptop",
        category: "Electronics",
        oldPrice: 1499,
        newPrice: 1249,
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS9oHyT6pkP2k-Qr792XmI4gitEmdcSOoP0GmW4ogorne0Y0dTC6R7VVfn4DfAMdgxV68NYmzdN96pOfKoI3rb2Qb4v6eubbQ"
    },
    {
        id: 4,
        name: "Perfume Oil",
        category: "Beauty",
        oldPrice: 49,
        newPrice: 29,
        image: "https://m.media-amazon.com/images/I/81IONn1jI9L.jpg"
    },
    {
        id: 5,
        name: "Brown Perfume",
        category: "Beauty",
        oldPrice: 79,
        newPrice: 55,
        image: "https://rukminim2.flixcart.com/image/480/480/xif0q/perfume-bottle/q/u/n/wh-pf-03-wild-hook-100-original-imagtkkhudhhtszt.jpeg?q=90"
    },
    {
        id: 6,
        name: "Mens Shirt",
        category: "Fashion",
        oldPrice: 59,
        newPrice: 39,
        image: "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-1-1610963787.jpg"
    },
    {
        id: 7,
        name: "Womens Dress",
        category: "Fashion",
        oldPrice: 89,
        newPrice: 69,
        image: "https://images.unsplash.com/photo-1611042553484-d61f84d22784?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        id: 8,
        name: "Running Shoes",
        category: "Fashion",
        oldPrice: 120,
        newPrice: 89,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT9VeDOOEJsfnazR4dBW7WKm2R3qBbX10rFrYyK_BHFMO9xLxMhZhj21xXAkVUijgZbv67KA48oz3RotIiUZcs23jGlNgN5Dw"
    },
    {
        id: 9,
        name: "Sneakers",
        category: "Fashion",
        oldPrice: 140,
        newPrice: 99,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSH4spdpyeplwLjB0q3xVt6m4f0RAsC-MhIG46_ozkkeGOUmz31WGX0pB2NiLZCzePxIXbBayHvDorHzrxQYGh5da6go3mf"
    },
    {
        id: 10,
        name: "Furniture Chair",
        category: "Furniture",
        oldPrice: 199,
        newPrice: 149,
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR70QHhz0RyA71V1-WgLOoODYCnSJEKnpifI2nDQ0SZiwhb6Hj6mEWyE4oAr8_dgZ4V-JNqOYKtODRntC4EFlAYWUsx5fDDpsTEyRADxGYJe5lT__o_T29_7p_F"
    },
    {
        id: 11,
        name: "Wooden Table",
        category: "Furniture",
        oldPrice: 299,
        newPrice: 229,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSHx5NSEwZJyYIlcOpsRVq9MHx0Zb_h69GcqSaR9E7QukDNd46cJdjdVduhaBb_3CGq-4QBwQBbHi_GbHRuchrxFMAhxEfhP5uNQzZNxoH4"
    },
    {
        id: 12,
        name: "Plant Pot",
        category: "Home",
        oldPrice: 39,
        newPrice: 25,
        image: "https://www.ikea.com/in/en/images/products/klarbaer-plant-pot-with-saucer-in-outdoor-grey-brown__1156489_pe887113_s5.jpg?f=s"
    },
    {
        id: 13,
        name: "Kitchen Set",
        category: "Home",
        oldPrice: 159,
        newPrice: 119,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTJGicz6r-JTODPUuxnkwzgCeUyfhcELss3oIGuweBu_CfMAmYvRb6rbJtoIF4PKMP8csKtrxyHP5HWVdjofTzezQDweXWQBrmUX8jDBsqbL_UZuFtz9863"
    },
    {
        id: 14,
        name: "Wall Decor",
        category: "Home",
        oldPrice: 69,
        newPrice: 45,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTj3CkNeCSqNj5m8w_zEHj_IOXAFrnuk2M7Eh8n0_MztVqwlpKofs3XxzdTu46NRpUeuuJ-jd19eLn0LzPOPEU_sKa1Z3NFTA"
    },
    {
        id: 15,
        name: "Watch",
        category: "Accessories",
        oldPrice: 199,
        newPrice: 149,
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSpyq34Lm4sEeSdcOLZJeYBRI_KcalsvJ-fm1QjCRlwcRmtcioGU5W4f0adS8TP3dgelzZoqil1pI0R0aGjBGFM-D7KKMkWNNa0KVsdl1wRO3zBaEZrdkIVq34"
    },
    {
        id: 16,
        name: "Handbag",
        category: "Accessories",
        oldPrice: 149,
        newPrice: 109,
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRV69gx3GraByMZs2c7jz2O_ewtXVt7tSbAS-SXC3Rh4afr0-yJpAoOCGVyyZtkV3S6429MyyXycWWqCyBiCf7YpCoODm1duF1osK7o7wgqI93VqujqyumQ"
    },
    {
        id: 17,
        name: "Sunglasses",
        category: "Accessories",
        oldPrice: 89,
        newPrice: 59,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRMiHywvPxV6DWSukk7Xgt46RKyVeBQ_9pIBqeOPS-tFN4Efhz8WYl325jdNuOIvGcsZYqPpfo1I2QcOwZjD9qyBQmquE2qKp5aqFmQfDD3JaH85OS3ImhCsH_1"
    },
    {
        id: 18,
        name: "Skincare Kit",
        category: "Beauty",
        oldPrice: 129,
        newPrice: 89,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSzIx7ukATbz6oAYKtBUhrspSZC4JJnuA185XuXXI4HAB07X-PJG1Vp0Ec-0coXEvtkwIWBqvlb5Y0OsvUhzVH9eQpzmxDnUeIINryabbBf"
    },
    {
        id: 19,
        name: "Foundation Cream",
        category: "Beauty",
        oldPrice: 59,
        newPrice: 39,
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQeiRBb_5xJF5VJ0VKDWxLcpRDeso0Qra9Hc0Ny5N-nshUNxT13afA8kS5tLn_XnrGQJ5tNLZZH-hhWVK8DLXQRSVGZW7ids57GSho9YWts_D2NyThQoqNv8r0"
    },
    {
        id: 20,
        name: "Laptop",
        category: "Electronics",
        oldPrice: 1399,
        newPrice: 1199,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTWFAnBKx7Jij0FSPRZInT6CcqyiZepdrpKK8_E-Y4uONkfanlzEVUZtfKcPoJkFBv58cNSY2UpewLQPdemH_esMhWL2j-CcE5FWLC2vYRCYQDo-y6QWmIR"
    },
    {
        id: 21,
        name: "Tablet",
        category: "Electronics",
        oldPrice: 799,
        newPrice: 649,
        image: "https://cdn.grofers.com/da/cms-assets/cms/product/5decdb57-ad66-4ac3-8c23-7228211c5f4f.jpg"
    },
    {
        id: 22,
        name: "Camera",
        category: "Electronics",
        oldPrice: 999,
        newPrice: 849,
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxwIkcCaob1mX6Vo4qg9TDSYdwRIkR6z9daZgoi6dDwVI4RWjo7n-YFCju1QAGvBkRjn-6ge-gbc_I42-bo1pspl-7q4YPiFgF9qxWKVP9kM6riggZ2Xe2gBA"
    },
    {
        id: 23,
        name: "Headphones",
        category: "Electronics",
        oldPrice: 199,
        newPrice: 149,
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZ-j1GFscnKaslBPo4YKeMRQgCtQNWp93S2VIOGhQmCNNL9uh3O79PkAnwfXa37_-0zRV02hxVNUyHfgdpn24Z9slI45mgGYp4gL7-kNsXRs-mdZwqGnpFxOE"
    },
    {
        id: 24,
        name: "Smartphone",
        category: "Electronics",
        oldPrice: 899,
        newPrice: 749,
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcReG9OUJMFZ24a4vpI4NYrwB565WxHLyRQaxAO0HNPUH5bMql_Pa2DHwzGzUNAxeCeimPLJFrs0JRUthz5nPZ5MnhMzCK8T1RsYKhxXbBphZj_xSZA1p7Lgujc"
    },
    {
        id: 25,
        name: "Gaming PC",
        category: "Electronics",
        oldPrice: 1999,
        newPrice: 1699,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-9zjccI4J4tv6n2mcNIQ475_hgUxXh-fV4k04n0kgbKZQ0RuNamaLDvAkzcFLcQCJCoX_2OPg4BpvaDs2-ZgnWc1rDoZAlyqb9GKpBbWW"
    },
    {
        id: 26,
        name: "Backpack",
        category: "Fashion",
        oldPrice: 89,
        newPrice: 65,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTkGjWi5VSLMW_Cd2Vj4QveusGStfGff5Zfh3fSODRL0lbdXCurHIXW4w0mqqVUknnsfWn54sHuiI6mHkM7zKHCpyxH9-zhiWlu9x3VcqsLW8LL71OI8gYq"
    },
    {
        id: 27,
        name: "Office Lamp",
        category: "Home",
        oldPrice: 59,
        newPrice: 39,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTRtaHD9dd6wSHgaF22xNib1Q4qGXGZm2n4VMK9otZb5wPCzyxekagfMoRhkb1LnetvT-uJ9CqpNhrieX9FT2-Op3N8EGM2w3xROccuA3pOhsmtKYCzSzb8"
    },
    {
        id: 28,
        name: "Desk Organizer",
        category: "Home",
        oldPrice: 49,
        newPrice: 29,
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTRf6qkaacvO80UXOwIzHHwDRjwpqOe5VUBM4extDbaYf49ca_Vmka4dBsxhHkJEba3WtWlkc8hgsJdV2Xj8nJhnvs0GHbdg5FQBk7nqy4"
    },
    {
        id: 29,
        name: "Bluetooth Speaker",
        category: "Electronics",
        oldPrice: 149,
        newPrice: 99,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTbRjfFWADaHRsVACKhWEirPeZ3n19uCZWWNMezYXU2ezG5UjP5cDZeYmCf15rUFEFy2yH5tYIyLAIH6XNNpIK5zaTyJF8HWp48jp6RE0sUegBGJOS990St-A"
    }
];

const cards = document.getElementById('cards');
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('other');
let cart = [];
let wishlist = [];
getFromStorage();


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('close');
    navbar.classList.toggle('open');
});

function renderWish() {
    cards.innerHTML = "";
    wishlist.forEach((elem, idx) => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.id = idx;
        let wish = wishlist.find((item) => item.id == elem.id);
        let cartinc = cart.find((item) => item.id == elem.id);

        card.innerHTML = `
                <div class="prodImg">
                    <img src="${elem.image}" alt="Product Image">
                </div>
                <div class="content">
                    <h2 class="name">${elem.name}</h2>
                    <p class="rate">${elem.category}</p>
                    <div class="price">
                        <div class="oldPrice">$${elem.oldPrice}</div>
                        <div class="newPrice">$${elem.newPrice}</div>
                    </div>
                </div>
                <div onClick="cartFunc(${elem.id})" class="cart">
                    <i class="${cartinc == undefined ? 'ri-shopping-cart-2-line' : 'ri-shopping-cart-2-fill'}"></i>
                    <!-- <i class="ri-shopping-cart-2-fill"></i> -->
                </div>
                <div onClick="wishlistFunc(${elem.id})" class="wishlist">
                    <i class="${wish == undefined ? 'ri-poker-hearts-line' : 'ri-poker-hearts-fill'}"></i>
                    <!-- <i class="ri-poker-hearts-fill"></i> -->
                </div>
    `;

        cards.appendChild(card);
    });
}

renderWish();

function cartFunc(idx) {
    let item = cart.find((elem) => {
        return elem.id == idx;
    });
    let removePos;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == idx) {
            removePos = i;
            break;
        }
    };

    if (item == undefined) {
        cart.push(products[idx])
        // let currentCard = document.querySelectorAll('.cart')[removePos];
        // currentCard.children[0].classList.add('ri-shopping-cart-2-fill');
        // currentCard.children[0].classList.remove('ri-shopping-cart-2-line');
    } else {

        cart.splice(removePos, 1);
        // let currentCard = document.querySelectorAll('.cart')[removePos];
        // currentCard.children[0].classList.remove('ri-shopping-cart-2-fill');
        // currentCard.children[0].classList.add('ri-shopping-cart-2-line');
    }
    
    saveToStorage();
    renderWish();
}

function wishlistFunc(idx) {
    let item = wishlist.find((elem) => {
        return elem.id == idx;
    });
    let removePos;
    for (let i = 0; i < wishlist.length; i++) {
        if (wishlist[i].id == idx) {
            removePos = i;
            break;
        }
    };
    
    if (item == undefined) {
        wishlist.push(products[idx])
        // let currentCard = document.querySelectorAll('.wishlist')[removePos];
        // currentCard.children[0].classList.add('ri-poker-hearts-fill');
        // currentCard.children[0].classList.remove('ri-poker-hearts-line');
    } else {
        
        wishlist.splice(removePos, 1);
        // let currentCard = document.querySelectorAll('.wishlist')[removePos];
        // currentCard.children[0].classList.remove('ri-poker-hearts-fill');
        // currentCard.children[0].classList.add('ri-poker-hearts-line');
    }
    
    renderWish();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function getFromStorage() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
}