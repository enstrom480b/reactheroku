import React ,{useState} from 'react'


const Search=({getquery})=>{
const [text,settext]=useState('')
const onChange=(q)=>{
    settext(q)
    getquery(q)
}
    return(
<section className="search">
<form>
<input type="text" className="form-control"
onChange={(e)=>onChange(e.target.value)}
placeholder='Search'autoFocus/>
</form>
</section>

    )
}
export default Search