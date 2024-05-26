async function get() {
    const response = await fetch('https://captindelivary-fastfood.onrender.com/menu/data/all');
    const data = await response.json();
    return data;
}

const displaySections = async () => {
    const data = await get();
    printSections(data);
};

const printSections = (data) => {
    const menuItems = document.getElementById('menu-items');
    data.data.map((element) => {
        const menu = document.createElement('div');
        menu.classList.add("menu-item");
        menu.innerHTML =
            `
            <img src="./pics/${element.image}" alt="${element.title}">
            <h3>${element.title}</h3>
            <p>${element.paragraph}</p>
            <p>Price: $${element.price}</p>
            <button onclick="addToCart('${element.title}', ${element.price})">Add to Cart</button>
        `;
        menuItems.appendChild(menu);
    });
};

displaySections();



///////////////////////////////////////////////////////////////////////
let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    cartItemsElement.innerHTML = '';

    let totalPrice = 0;
    cart.forEach((cartItem) => {
        const li = document.createElement('li');
        li.textContent = `${cartItem.item} - $${cartItem.price}`;
        cartItemsElement.appendChild(li);

        totalPrice += cartItem.price;
    });

    cartTotalElement.textContent = totalPrice.toFixed(2);

}

function placeOrder() {
    alert('Order Placed! Total amount: $' + document.getElementById('cart-total').textContent);
    cart = []; // Clear cart after placing order
    updateCart();
}

// function cancel() {
//     cartItemsElement.innerHTML = '';
//     cartTotalElement.innerHTML = '';
//     cart = [];
// }