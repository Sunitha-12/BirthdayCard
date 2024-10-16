import React, { useState } from 'react'
import Data from "../../src/db.json"

const BirthdayCard = () => {
    const[data,setData]=useState(Data)
    // console.log(Data);
    console.log(data);
    
  return (
    <>
    <div className='birthday-container'>
   <h1 className='head'>{data.length} Birthdays Today</h1>
   {
    data.map(x=>{
        return(
            <>
            <img className='img'
            src={x.image}
            alt=""
            style={{height:"100px",width:"100px",borderRadius:"500px"}}/>
            <div  className="con"style={{marginTop:"-40px"}}>
            <h1 className='age'>{x.age}</h1>
            <h1 className='name'>{x.name}</h1>
            </div>
            </>
        );
    })
   }
   <button className='btn' onClick={()=>setData([])}>Clear All</button>
   </div>
    </>
    
  )
}
export default BirthdayCard
