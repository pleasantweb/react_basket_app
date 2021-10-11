import React,{ useState} from 'react'
import { AiOutlinePlus ,AiOutlineMinus} from "react-icons/ai";
import { ImCross } from "react-icons/im";

export default function Actions(props) {

    const grocery_item = props.grocery_details
    
    const [quantity,setQuantity] = useState(0)
    
    const onCrossClick =()=>{      
         props.setChanger({
            className:'actions disabled',
            item_name:'',
            item_price:0
         })
          setQuantity(0)
    }

    const onQuantityChange=(n)=>{
      setQuantity(quantity + n)
    }
    
    const fillBucket=()=>{      
        let demoBucket = [...props.bucket]
      let check =  demoBucket.filter(e=>e.item_name === grocery_item.item_name )
      console.log(check);
      if(check.length > 0){
          check[0].price = check[0].price +(quantity * grocery_item.item_price)
          check[0].quantity = check[0].quantity + quantity 
          
          
      }else{
        demoBucket.push({
            quantity:quantity,
            price:quantity * grocery_item.item_price,
            item_name:grocery_item.item_name
        })
    }
        
        props.setBucketChanger(demoBucket)
        props.setChanger({
            className:'actions disabled',
            item_name:'',
            item_price:0
         })
          setQuantity(0)
    }
    
    return (
        <div  className={grocery_item.className}>
            <div className="action">
                <div className="select-grocery">
                    <div className="cross">
                        <button onClick={onCrossClick}><ImCross /></button>
                    </div>
                    <div className="menu">
                        <h2>{grocery_item.item_name}</h2>
                    </div>
                    <div className="quantity-price">
                        <div className="quantity">
                            <div className="title"><h4>Quantity</h4></div>
                            <div className="button-input">
                                {quantity === 0 ? (
                                    <button disabled onClick={()=>onQuantityChange(-1)}><AiOutlineMinus /></button>
                                ):(<button onClick={()=>onQuantityChange(-1)}><AiOutlineMinus /></button>)}
                            
                            <input type="number" value={quantity} name="" readOnly />
                            <button onClick={()=>onQuantityChange(1)}><AiOutlinePlus /></button>
                            </div>
                           
                        </div>
                        <div className="price">
                        <div className="title"><h4>Price</h4></div>
                            <h3>Rs. {quantity * grocery_item.item_price}</h3>
                        </div>
                    </div>
                    <div className="add-to-basket">
                        {quantity === 0 ? (
                            <button className='btn-disable' disabled >ADD TO BASKET</button>
                        ):(<button onClick={fillBucket}>ADD TO BASKET</button>)}
                        
                    </div>
                </div>
            </div> 
        </div> 
    )
}
