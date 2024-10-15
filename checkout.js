document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.getElementById('checkout-btn');

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            // Xử lý sự kiện khi nhấn nút "Thanh toán"
            window.location.href = 'checkout.html';
        });
    } else {
        console.error('Element with id "checkout-btn" not found.');
    }

    // Các phần còn lại của mã liên quan đến việc hiển thị sản phẩm trong trang thanh toán...
});



// hiển thị lấy sản phẩm từ giỏ hàng sang trang checkout
document.addEventListener('DOMContentLoaded', function() {
    // Lấy giỏ hàng từ localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Lấy các phần tử DOM để hiển thị sản phẩm và tổng cộng
    const checkoutProductsContainer = document.querySelector('.checkout__totals-products');
    const subtotalContainer = document.querySelector('.checkout__totals-subtotals tr:nth-child(1) td');
    const totalContainer = document.querySelector('.checkout__totals-footer td');

    if (cart.length === 0) {
        checkoutProductsContainer.innerHTML = '<tr><td colspan="2">Giỏ hàng của bạn trống.</td></tr>';
        subtotalContainer.textContent = '₫0.000';
        totalContainer.textContent = '₫0.000';
        return;
    }

    checkoutProductsContainer.innerHTML = ''; // Xóa nội dung hiện tại
    let subtotal = 0;

    cart.forEach(item => {
        const productRow = document.createElement('tr');

        // Tên sản phẩm và số lượng
        const productName = document.createElement('td');
        productName.textContent = `${item.name} × ${item.quantity}`;

        // Tổng tiền cho sản phẩm đó (giá × số lượng)
        const productTotal = document.createElement('td');
        const itemTotal = item.price * item.quantity;
        productTotal.textContent = `₫${itemTotal.toFixed(3)}`;

        productRow.appendChild(productName);
        productRow.appendChild(productTotal);

        checkoutProductsContainer.appendChild(productRow);

        subtotal += itemTotal;
    });

    // Cập nhật tổng phụ (subtotal)
    subtotalContainer.textContent = `₫${subtotal.toFixed(3)}`;

    // Giả định store credit và phí vận chuyển
    const storeCredit = 20.000; // Giả định có store credit là 20.000
    const shipping = 25.000;    // Giả định phí vận chuyển là 25.000
    const total = subtotal - storeCredit + shipping;

    // Cập nhật tổng tiền cuối cùng
    totalContainer.textContent = `₫${total.toFixed(3)}`;
});
