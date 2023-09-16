import React,{useEffect, useState} from 'react'
import Card from './Card';
import Footer from './Footer'
const Home = () => {
    const [data,setData]=useState([]);
  useEffect(()=>{
     
      fetch("https://api.spacexdata.com/v3/rockets")
     .then(res=>res.json())
     .then(data=>setData(data))
     .catch(err=>console.log(err));
    
      
  },[])
  return (<>
    <div>
       {
        data.map((item,i)=> <Card key={i} item={item} /> )
      }
    </div>
    <Footer/>
    </>
  )
}

export default Home
