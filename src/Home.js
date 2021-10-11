import React,{useState} from 'react'
import { IoIosBasket} from "react-icons/io";

import { BiMessageSquareAdd } from "react-icons/bi";
import Actions from './Actions';
import { ImCross } from "react-icons/im";
import {store} from './store';

export default function Home() {

    const [bucket,setBucket] = useState([])
   
    const [grocery,setGrocery] = useState({
        className:'actions disabled',
        item_name:'',
        item_price:0
    })

    
    const onGrocrySelect=(name,price)=>{
        window.scrollTo({
            top:0,
        behavior:'smooth'        })
        console.log(name,price);
        setGrocery({
            ...grocery,
            className:'actions',
            item_name:name,
            item_price:price
        })
    }
    const totalPrice =()=>{
        let total_price = 0
        if(bucket.length > 0){
            bucket.map((j,i)=>{
                total_price = total_price + j.price
                return total_price
            })
            return total_price
        }else{
            total_price = 0
        }
    }
    const removeFromBucket=(item)=>{
        let demoBucket = [...bucket]
        let check =demoBucket.filter(j=>j.item_name !== item)
        setBucket(check)
            
    }
    const emptyFullBucket=()=>{
        setBucket([])
    }

    return (
        <section>
            <div className="header">
               <div className="title">
                   <IoIosBasket />
                   <h1>Hello, Basket</h1>
               </div>
               </div>
               <div className="shop">
                   <div className="groceries">
                       <div className="about">
                       <h2>Grocery</h2>
                       </div>
                       
                       {store.map((j,i)=>(
                        <div key={i} className="grocery">
                           <div className="select">
                               <button onClick={()=>onGrocrySelect(j.name,j.single_price)} title='Click to Buy' > <BiMessageSquareAdd /> </button>
                                 
                           </div>
                           <div className="item_name">
                                    <h2>{j.name}</h2>
                           </div>
                           
                       </div>
    ))}
                       
                   </div>
                   <div className="basket">
                       <div className="headerr">
                       <h2>Bucket</h2>
                       <button onClick={emptyFullBucket}>Empty Bucket</button>
                       </div>
                       
                       <div className="bucket-div">
                           {bucket.length > 0 ? (
                               bucket.map((j,i)=>(
                               <div key={i} className="item-choosen">
                                  <h4>{j.quantity} {j.item_name}</h4>
                                  <h4>Rs. {j.price}</h4>
                                  < ImCross onClick={()=>removeFromBucket(j.item_name)} />
                               </div>
                               ))
                           ):(<div></div>)}
                           
                       </div>
                       <div className="total">
                           <h2>Total</h2>
                           <h2>Rs. {totalPrice()}</h2>
                       </div>
                   </div>
               </div>
  <Actions grocery_details={grocery} setChanger ={setGrocery} bucket={bucket} setBucketChanger={setBucket} />

          
        </section>
    )
}

