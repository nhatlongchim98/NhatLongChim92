const products = [
    {
        name: "Lồng chim hút mật tre già",
        price: "2,700.000 VND",
        availability: "In Stock",
        imageUrl: "images/products/longhutmat.jpg",
        features: ["Chiều Dài: 25cm", "Chiều Rộng: 25cm", "Chiều cao: 37cm", "Chất liệu: Tre già và Gỗ Mun vs Gỗ trắc", "Kỹ Thuật: Máy tiện và đan tay"],
        rating: "110 Đánh giá"
    },
    {
        name: "Xiên chuối lồng chim chào mào và khuyên hàng víp",
        price: "5.000 - 12.000 VND",
        availability: "In Stock",
        imageUrl: "images/products/xienchuoi.jpg",
        features: ["Chiều Dài: 3cm", "Chiều Rộng: 3cm", "Chiều cao: 3cm", "Chất liệu: Tre già và Gỗ Mun vs Gỗ trắc", "Kỹ Thuật: Máy tiện và đan tay"],
        rating: "70 Đánh giá"
    },
    {
        name: "Cống sương chim hút mật chim khuyên",
        price: "150.000 - 200.000 VND",
        availability: "In Stock",
        imageUrl: "images/products/congxuong.jpg",
        features: ["Chiều Dài: 4cm", "Chiều Rộng: 4cm", "Chiều cao: 4cm", "Chất liệu: Tre già và Gỗ Mun vs Gỗ trắc", "Kỹ Thuật: Máy tiện và đan tay"],
        rating: "55 Đánh giá"
    },
    {
        name: "Đợ cầu lồng chim khuyên xương ép cao cấp",
        price: "40.000 - 95.000 VND",
        availability: "In Stock",
        imageUrl: "images/products/docau.jpg",
        features: ["Chiều Dài: 7cm", "Chiều Rộng: 4cm", "Chiều cao: 7cm", "Chất liệu: Tre già và Gỗ Mun vs Gỗ trắc", "Kỹ Thuật: Máy tiện và đan tay"],
        rating: "60 Đánh giá"
    },
    {
        name: "Nậm bầu bí lồng chim hút mật",
        price: "150.000 - 300.000 VND",
        availability: "In Stock",
        imageUrl: "images/products/nambau.jpg",
        features: ["Chiều Dài: 3cm", "Chiều Rộng: 3cm", "Chiều cao: 3cm", "Chất liệu: Tre già và Gỗ Mun vs Gỗ trắc", "Kỹ Thuật: Máy tiện và đan tay"],
        rating: "20 Đánh giá"
    },
    {
        name: "Xiên trái cây cho lồng hút mật và khuyên",
        price: "5.000 - 12.000 VND",
        availability: "In Stock",
        imageUrl: "images/products/xientraicay.jpg",
        features: ["Chiều Dài: 3cm", "Chiều Rộng: 3cm", "Chiều cao: 3cm", "Chất liệu: Tre già và Gỗ Mun vs Gỗ trắc", "Kỹ Thuật: Máy tiện và đan tay"],
        rating: "30 Đánh giá"
    },
    // Add more products here
];
function generateProductHTML(product, id) {
    return `
        <div class="block-products__list-item" id="product-${id}">
            <div class="product-card">
                <button class="product-card__quickview" type="button">
                    <svg width="16px" height="16px">
                        <use xlink:href="images/sprite.svg#quickview-16"></use>
                    </svg>
                    <span class="fake-svg-icon"></span>
                </button>
                <div class="product-card__badges-list">
                    <div class="product-card__badge product-card__badge--hot">Hot</div>
                </div>
                <div class="product-card__image">
                    <a href="product.html"><img src="${product.imageUrl}" alt=""></a>
                </div>
                <div class="product-card__info">
                    <div class="product-card__name"><a href="product.html">${product.name}</a></div>
                    <div class="product-card__rating">
                        <div class="rating">
                            <div class="rating__body">
                                <!-- Your rating stars here -->
                            </div>
                        </div>
                        <div class="product-card__rating-legend">${product.rating}</div>
                    </div>
                    <ul class="product-card__features-list">
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="product-card__actions">
                    <div class="product-card__availability">Availability: <span class="text-success">${product.availability}</span></div>
                    <div class="product-card__prices">${product.price}</div>
                    <div class="product-card__buttons">
                        <a href="https://zalo.me/0785-835-265"><button class="btn btn-primary product-card__addtocart" type="button">Liên Hệ Trực tiếp</button> </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}
function displayProducts() {
    const productContainer = document.querySelector('.block-products__list');
    productContainer.innerHTML = ''; // Clear existing content

    products.forEach((product, index) => {
        const productHTML = generateProductHTML(product, index + 1);
        productContainer.innerHTML += productHTML;
    });
}

// Run the displayProducts function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', displayProducts);
