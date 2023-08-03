function abcd()
{
    const arr = ["Apple","Banana","Bougainvillea","Grapes","Guva","Orange","Mango","Rose","Papaya","Lemon","Pomegranate","Marigold","Jasmine","Lotus","Hibiscus","Sunflower"];
    for(let i=0;i<arr.length;i++)
    {
        let j =arr[i];
        if(localStorage.getItem(j)!=0)
        {
            let s =  `
                <div class="plant" data-name="${j}" data-price="25">
                <img src="images/${j}.png" alt="${j} Plant">
                    <h3>${j}</h3>
                    <p class="cost">$25</p>
                    <p class="total-cost">0</p>
                <div class="qbutton">
                    <button onclick="sub('${j}')">-</button>
                    <span class="quantity">0</span>
                    <button onclick="add('${j}')">+</button>
                </div>
                <button class="add-to-cart" onclick="removefromcart('${j}')">remove from cart</button>
            </div>`
            document.getElementsByClassName("featured")[0].innerHTML += s;
        }
    }
    xyz();
}

function xyz()
{
    document.getElementById('cart-count').innerText = sessionStorage.getItem("cartCount");
    let x = document.getElementsByClassName('plant');
    for(let i=0;i<x.length;i++)
    {
        let name = x[i].getElementsByTagName("h3")[0].innerText;
        let q = localStorage.getItem(name);
        x[i].getElementsByClassName("quantity")[0].innerText = q;
        let p = x[i].getElementsByClassName("cost")[0].innerText;
        x[i].getElementsByClassName("total-cost")[0].innerText = "$"+(Number(p.slice(1,p.length))*q);
    }
}

function removefromcart(name)
{
    let z = Number(sessionStorage.getItem("cartCount"))-1;
    sessionStorage.setItem("cartCount",z);
    document.getElementsByClassName("featured")[0].innerHTML = ""; 
    localStorage.setItem(name,0);
    abcd();
}

function emptycart(){
    if((Number(sessionStorage.getItem("cartCount")))!=0){
    document.getElementById('cart-count').innerText = 0;
    for(let i in localStorage)
    {
        localStorage.setItem(i,0);
    }
    sessionStorage.setItem("cartCount", 0);
    document.getElementsByClassName("featured")[0].innerHTML = "";
}
else{
    alert("your cart is empty");
}
}

function add(name)
{
    localStorage.setItem(name,Number(localStorage.getItem(name))+1);
    xyz();
}

function sub(name)
{
    localStorage.setItem(name,Number(localStorage.getItem(name))-1);
    if(localStorage.getItem(name)==0)
    {
        document.querySelectorAll('.plant').forEach(plant => {
            let ab_name = plant.getAttribute('data-name');
            if(name == ab_name) {
                plant.style.display = "none";
            }
        });
        let z = Number(sessionStorage.getItem("cartCount"))-1;
        sessionStorage.setItem("cartCount",z);
        document.getElementById('cart-count').innerText = z;
    }
    xyz();
}
function valid(){
    if((Number(sessionStorage.getItem("cartCount")))!=0){
        window.location.href = "checkout.html";
    }
    else{
        alert("your cart is empty please add some items");
    }
}