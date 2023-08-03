document.addEventListener('DOMContentLoaded', (event) => {
    
    if(sessionStorage.getItem("cartCount")==null)
        sessionStorage.setItem("cartCount", 0);
    
    document.getElementById('cart-count').innerText = sessionStorage.getItem("cartCount");
    const cartCountElement = document.getElementById('cart-count');

    if(sessionStorage.getItem("cartCount")==0)
    {
        document.querySelectorAll('.plant').forEach(plant => {
        localStorage.setItem(plant.getAttribute('data-name'), 0);
    });
    }

    document.querySelectorAll('.add-to-cart').forEach(addToCartButton => {
        addToCartButton.addEventListener('click', () => {
            let name = addToCartButton.getAttribute('data-name');
            if(localStorage.getItem(name)==0)
            {
                sessionStorage.setItem("cartCount", Number(sessionStorage.getItem("cartCount"))+1);
                cartCountElement.textContent = sessionStorage.getItem("cartCount");
            }
            localStorage.setItem(name, Number(localStorage.getItem(name))+1);
        });
    });
    
    const search = document.getElementById('search');
    search.addEventListener('keyup', () => {
        let value = search.value.toLowerCase();
        document.querySelectorAll('.plant').forEach(plant => {
            let name = plant.getAttribute('data-name').toLowerCase();
            if(name.indexOf(value) > -1) {
                plant.style.display = "";
            } else {
                plant.style.display = "none";
            }
        });
    });
});
