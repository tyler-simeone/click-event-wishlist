const container = document.getElementById("displayWishlist");

const renderDOM = () => {
    const item = document.getElementById("favoriteItem");
    const store = document.getElementById("whereToBuy");
    container.innerHTML += `
        <h2>I can purchase ${item.value} at ${store.value}</h2>
    `
}

document.getElementById("wishlist").addEventListener("click", renderDOM);