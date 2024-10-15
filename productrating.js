const productr = [
    {
        id: "product-1",
        name: "Lồng chim hút mật tre già",
        price: "2,700.000 VND",
        availability: "In Stock",
        imageUrl: "images/products/longhutmat.jpg",
        features: [
            "Speed: 750 RPM",
            "Power Source: Cordless-Electric",
            "Battery Cell Type: Lithium",
            "Voltage: 20 Volts",
            "Battery Capacity: 2 Ah"
        ],
        rating: "120 Đánh giá"
    },
    {
        id: "product-2",
        name: "Lồng chim hút mật nhật Quảng Nam",
        price: "₫2,499.00",
        availability: "In Stock",
        imageUrl: "images/products/product-1.jpg",
        features: [
            "Speed: 750 RPM",
            "Power Source: Cordless-Electric",
            "Battery Cell Type: Lithium",
            "Voltage: 20 Volts",
            "Battery Capacity: 2 Ah"
        ],
        rating: "11 Reviews"
    },
    // Thêm các sản phẩm khác nếu cần
];

// Chọn sản phẩm cụ thể bằng ID
const selectedProductId = "product-1";
// const selectedProductId = "product-2";
const selectedProduct = productr.find(product => product.id === selectedProductId);

document.addEventListener('DOMContentLoaded', function() {
    if (selectedProduct) {
        const productCard = document.getElementById('product-card');

        productCard.innerHTML = `
            <button class="product-card__quickview" type="button">
                <svg width="16px" height="16px">
                    <use xlink:href="images/sprite.svg#quickview-16"></use>
                </svg>
                <span class="fake-svg-icon"></span>
            </button>
            <div class="product-card__image">
                <a href="product.html"><img src="${selectedProduct.imageUrl}" alt="${selectedProduct.name}"></a>
            </div>
            <div class="product-card__info">
                <div class="product-card__name"><a href="product.html">${selectedProduct.name}</a></div>
                <div class="product-card__rating">
                    <div class="rating">
                        <div class="rating__body">
                            <!-- Hiển thị các ngôi sao đánh giá -->
                            ${Array.from({length: 5}, (_, index) => `
                                <svg class="rating__star ${index < 5 ? 'rating__star--active' : ''}" width="13px" height="12px">
                                    <g class="rating__fill">
                                        <use xlink:href="images/sprite.svg#star-normal"></use>
                                    </g>
                                    <g class="rating__stroke">
                                        <use xlink:href="images/sprite.svg#star-normal-stroke"></use>
                                    </g>
                                </svg>
                            `).join('')}
                        </div>
                    </div>
                    <div class="product-card__rating-legend">${selectedProduct.rating}</div>
                </div>
                <ul class="product-card__features-list">
                    ${selectedProduct.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="product-card__actions">
                <div class="product-card__availability">Availability: <span class="text-success">${selectedProduct.availability}</span></div>
                <div class="product-card__prices">${selectedProduct.price}</div>
                <div class="product-card__buttons">
                 <a href="https://zalo.me/0785-835-265"><button class="btn btn-primary product-card__addtocart" type="button">Liên Hệ Trực tiếp</button></a>
                </div>
            </div>
        `;
    } else {
        document.getElementById('product-card').innerHTML = "<p>Product not found.</p>";
    }
});
