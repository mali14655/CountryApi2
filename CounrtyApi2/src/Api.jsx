import { useEffect, useState } from "react";
import axios from 'axios'


function Api(){
    const[counrty,setcountry]=useState('')
    const[flag,setflag]=useState('');
    const[name,setname]=useState('Pakistan');
    
    
    
    useEffect(()=>{
        if(name){
        axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        .then(function(response){
            // console.log(response.data[0]);
            setflag(response.data[0].flags.png)
            setcountry(response.data[0].name.official)
        })
        .catch(function(error){
            console.log(error)
            alert('Invalid Country Name')
        })
    }},[name])
    
    
    let onInput=(e)=>{
        e.preventDefault();
        setname(e.target[0].value)
    }

    return(
        <div>
            <form action="" onSubmit={onInput}>
                <input type="text" name="input" required />
                <button>Enter</button>
            </form>

            <div>
                <h1>{counrty}</h1>
                <img src={flag} alt="" />
            </div>
        </div>
    )
}

export default Api;