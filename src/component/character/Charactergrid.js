import React from 'react'
import Characteritem from './Characteritem';
const Charactergrid=({items,isloading})=>{

return isloading ?(<h1>loading...</h1>):
    (<section className="cards">
    {items.map((items)=>(
          <Characteritem key={items.char_id} item={items}></Characteritem>
   
    ))}
  
    </section>
    )
}
export default Charactergrid