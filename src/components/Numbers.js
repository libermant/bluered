import React from 'react'
import { useState } from 'react';


let color=''
function classNunber(number){
   if((number)%2==0){
    color="green";
    }    
    else if((number)%2==1){
        color="yellow"
    }  
    return color
}


const Numbers = ({num,color}) => {
    const[numbery,numberChange]=useState(num)
    const[classy,classChange]=useState(color)
    const table=()=>{    
    numberChange([Math.ceil((Math.random() * 100))+parseInt (numbery)])
    classChange(classNunber(num)+" n")
  }
  return (
    <button className={classy} onClick={table}>
        {numbery}
    </button>
  )
}

    
      


export {Numbers,classNunber}

