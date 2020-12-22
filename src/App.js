import './Container.css';
import Header from './component/ui/Header';
import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import Charactergrid from './component/character/Charactergrid'
import Search from './component/ui/Search';
const App=()=> {
  const [items,setitems]=useState([])
const [isloading,setloading]=useState(true)
const [query,setquery]=useState("")
useEffect(()=>{
const fetchitems=async()=>{
const result=await Axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
console.log(result)
setitems(result.data)
setloading(false)
}
fetchitems()
},[query]) 
return(<div>
  <header className="container">
   <Header/>
   <Search getquery={(q)=>setquery(q)}/>
   <Charactergrid isloading={isloading} items={items}/>
   </header>
    </div>)
}

export default App;
