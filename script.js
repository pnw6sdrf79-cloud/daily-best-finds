fetch("products.json")
    .then(res => res.json())
    .then(products => {
        const container = document.getElementById("product-list");
        container.innerHTML = products.map(product => `
            <div class="product-card">
                <img src="${product.image}" class="product-image">
                <div class="product-details">
                    <div class="product-title">${product.title}</div>
                    <div class="product-price">${product.price}</div>
                    <a href="${product.link}" target="_blank" class="buy-btn">View Deal</a>
                </div>
            </div>
        `).join("");
    });
