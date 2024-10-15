// Dữ liệu sản phẩm
const product = {
    image: "images/products/product-3.jpg",
    name: "Lồng chim hút mật nhật Quảng Nam",
    price: 2700.000
};

// Khởi tạo giỏ hàng từ localStorage hoặc một mảng trống nếu chưa có giỏ hàng
let cart = JSON.parse(localStorage.getItem('cart')) || [];


// Hàm cập nhật nội dung sản phẩm trong HTML
function updateProductInfo(product) {
    const productImage = document.getElementById('product-image');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');

    if (productImage) {
        productImage.src = product.image;
        productImage.alt = product.name;
    }
    if (productName) {
        productName.textContent = product.name;
    }
    if (productPrice) {
        productPrice.textContent = `₫${product.price.toFixed(3)}`;
    }
}

// Hàm lưu giỏ hàng vào localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Hàm hiển thị giỏ hàng
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = ''; // Xóa nội dung hiện tại
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.alignItems = 'center';

        // Tạo phần tử hình ảnh
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.style.width = "100px"; // Điều chỉnh kích thước hình ảnh
        img.style.marginRight = "10px"; // Khoảng cách giữa hình ảnh và văn bản

        // Tạo phần tử tên, giá và số lượng sản phẩm
        const productInfo = document.createElement('span');
        productInfo.textContent = `${item.name} - ₫${item.price.toFixed(3)} x ${item.quantity}`;
        productInfo.style.marginRight = "10px"; // Khoảng cách giữa thông tin sản phẩm và các nút

        // Tạo nút giảm số lượng
        const decreaseButton = document.createElement('button');
        decreaseButton.textContent = '-';
        decreaseButton.onclick = () => {
            updateQuantity(index, item.quantity - 1);
        };

        // Tạo nút tăng số lượng
        const increaseButton = document.createElement('button');
        increaseButton.textContent = '+';
        increaseButton.onclick = () => {
            updateQuantity(index, item.quantity + 1);
        };

        // Tạo nút xóa sản phẩm
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Xóa';
        removeButton.onclick = () => {
            removeFromCart(index);
        };

        // Thêm các phần tử vào li
        li.appendChild(img);
        li.appendChild(productInfo);
        li.appendChild(decreaseButton);
        li.appendChild(increaseButton);
        li.appendChild(removeButton);

        cartItemsContainer.appendChild(li);
        total += item.price * item.quantity;
    });

    cartTotalContainer.textContent = `Tổng cộng: ₫${total.toFixed(3)}`;
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(product) {
    const existingProductIndex = cart.findIndex(item => item.name === product.name);

    if (existingProductIndex !== -1) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng
        cart[existingProductIndex].quantity += 1;
    } else {
        // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới vào giỏ hàng
        cart.push({...product, quantity: 1}); // Thêm thuộc tính quantity
    }

    saveCart(); // Lưu giỏ hàng vào localStorage
    displayCart(); // Hiển thị giỏ hàng
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
}

// Hàm cập nhật số lượng sản phẩm trong giỏ hàng
function updateQuantity(index, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(index);
    } else {
        cart[index].quantity = newQuantity;
        saveCart();
        displayCart();
    }
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    displayCart();
}



// Gọi hàm để cập nhật thông tin sản phẩm khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
    updateProductInfo(product);

    // Hiển thị giỏ hàng khi trang được tải
    displayCart();

    // Thêm sự kiện click cho nút "Add To Cart"
    document.getElementById('add-to-cart-btn').addEventListener('click', function() {
        addToCart(product);
    });
});
