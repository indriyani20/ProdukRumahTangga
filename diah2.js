// Simpan data produk dalam array
const products = [
    { name: "Produk 1", price: 10000 },
    { name: "Produk 2", price: 20000 },
    { name: "Produk 3", price: 30000 },
];

// Simpan data keranjang belanja dalam array
let cart = [];

// Fungsi untuk menambahkan produk ke keranjang belanja
function addToCart(product) {
    cart.push(product);
    updateCart();
}

// Fungsi untuk mengupdate keranjang belanja
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let totalPrice = 0;
    cart.forEach((product) => {
        const item = document.createElement("li");
        item.textContent = `${product.name} - Rp ${product.price}`;
        cartItems.appendChild(item);
        totalPrice += product.price;
    });
    document.getElementById("total-price").textContent = `Total: Rp ${totalPrice}`;
}

// Fungsi untuk melakukan checkout
function checkout() {
    alert("Checkout berhasil!");
    cart = [];
    updateCart();
}

// Tambahkan event listener ke tombol "Tambah ke Keranjang"
document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
        const productName = button.parentNode.dataset.name;
        const productPrice = parseInt(button.parentNode.dataset.price);
        const product = { name: productName, price: productPrice };
        addToCart(product);
    });
});

// Tambahkan event listener ke tombol "Checkout"
document.getElementById("checkout").addEventListener("click")