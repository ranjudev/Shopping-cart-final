const product=[
    {
        id: 0,
        image: 'images/samsung.png',
        title: 'Samsung Galaxy M14 5G',
        price: 14990,
    },
    {
        id: 1,
        image: 'images/headphone.jpg',
        title: 'boAt Rockerz Ear Headphones',
        price: 1699,
    },
    {
        id: 2,
        image: 'images/earbud.jpg',
        title: 'Wireless Noise Earbuds',
        price: 3499,
    },
    {
        id: 3,
        image: 'images/asus.jpg',
        title: 'ASUS Vivobook 14',
        price: 40990,
    },
    {
        id: 4,
        image: 'images/gear.jpg',
        title: 'Aspire 30L Medium Office Laptop Bag',
        price: 1125,
    },
    {
        id:5,
        image: 'images/titan.webp',
        title: 'TITAN RAGA METAL STRAP WATCH',
        price: 18445,
    },
];
const categories=[...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML=categories.map((item)=>
    {
        var{image, title, price}=item;
        return(
            `<div class='box'>
                 <div class='img-box'>
                     <img class='images' src=${image}></img>
                 </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2><i class="fa-solid fa-indian-rupee-sign"></i> ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join('')

    var cart=[];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }
    function delElement(a){
        cart.splice(a,1);
        displaycart();
    }

    function displaycart(){
        let j=0, total=0;
        document.getElementById("count").innerHTML=cart.length;
        if(cart.length==0)
        {
            document.getElementById('cartItem').innerHTML="Your cart is empty";
            document.getElementById("total").innerHTML='<i class="fa-solid fa-indian-rupee-sign"></i> '+0+".00";
        }
        else{
            document.getElementById("cartItem").innerHTML=cart.map((items)=>
            {
                var {image,title,price}=items;
                total=total+price;
                document.getElementById("total").innerHTML='<i class="fa-solid fa-indian-rupee-sign"></i> '+total+".00";
                return(
                    `<div class='cart-item'>
                    <div class='row-img'>
                    <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'><i class="fa-solid fa-indian-rupee-sign"></i> ${price}.00</h2>` + 
                    "<i class='fa-solid fa-trash'  onclick='delElement("+ (j++) +")'></i></div>"
                );
            }).join('');
        }
    
    }

    /*-------checkout--------------*/