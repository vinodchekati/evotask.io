import React from 'react'
function Header(props)
{
    console.log(props.data,"data")
    const cartData=props.data
    const cartItem=()=>{
        console.log("work")
    }
    return(
        <>
        <div>
             <div className="add-to-cart">
             <span className="cart-count">{props.data.length}</span>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"  onClick={cartItem}/>
            </div>
        </div>
        <div>
        {cartData.map((item)=>(
            <>
            <p>{item.name}</p>
            <p>{item.price}</p>
            {/* <p>{item.img}</p> */}
            <a href={item.img} target='blank'/>

</>
        ))} 
        </div>
</>
    )
}

export default Header