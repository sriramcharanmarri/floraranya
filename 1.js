function checkout() {
    document.getElementById("checkout-form").style.display = "block";
}
function proceedToPayment() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    if(name!="" && email!="" && address!=""){
        alert(`Payment successful!\n\nName: ${name}\nEmail: ${email}\nAddress: ${address}`);
        let id = Math.floor(Math.random()*1000000);
        document.getElementById("order-id").innerHTML = id;
        document.getElementById("confirmation-message").style.display = "block";
        document.getElementById("cm").style.display="none";
        clearcart();
    }
    else{
        alert("Please enter the details");
    }
}
function abcd()
{
    let total=0;
    const arr = ["Apple","Banana","Bougainvillea","Grapes","Guva","Orange","Mango","Rose","Papaya","Lemon","Pomegranate","Marigold","Jasmine","Lotus","Hibiscus","Sunflower"];
    let de=`
    <div class="item">
            <img class="item-image" src="images/planticon.png" alt="plant-icon">
            <span class="item-name"><b>Product Name</b></span>
            <span class="item-price"><b>Cost</b></span>
            <span class="item-quantity"><b>Quantity</b></span>
            <span class="item-total"><b>Sub Total</b></span>
        </div>`;
    document.getElementsByClassName("cart-items")[0].innerHTML=de;
    for(let i=0;i<arr.length;i++)
    {
        let j =arr[i];
        if(localStorage.getItem(j)!=0)
        {
            let n=Number(localStorage.getItem(j));
            total=total+n*25;
            let s =  `
            <div class="item">
            <img class="item-image" src="images/${j}.png" alt="${j}">
            <span class="item-name">${j}</span>
            <span class="item-price">$25</span>
            <span class="item-quantity">${n}</span>
            <span class="item-total">${n*25}</span>
        </div>`
            document.getElementsByClassName("cart-items")[0].innerHTML += s;
        }
    }
    let t=
        `<span class="total-text">Total : </span>
        <span class="total-price">${total}</span>`;
    document.getElementsByClassName("total")[0].innerHTML = t;
}
function clearcart(){
    localStorage.clear();
    sessionStorage.clear();
}
function oderid(){

}