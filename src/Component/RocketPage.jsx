import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Footer from './Footer'

const RocketPage = () => {
  const { rocket_id } = useParams();
  const [rocket, setRocket] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/rockets/" + rocket_id)
      .then(res => res.json())
      .then(data => setRocket(data))
      .catch(err => console.log(err));
  }, [rocket_id])
  
  return (<>
    <div className='bg-black text-white  p-10'>
      <div className="pt-16">
        <img src={rocket?.flickr_images} alt={rocket.rocket_name} className='lg:w-full lg:h-screen md:w-full object-fit mb-10' />
      </div>
      <div className='lg:pl-10'>
        <div className='text-xl text-gray-500 pb-5'>{rocket.first_flight}</div>
        <div className='text-3xl font-bold'>{rocket.rocket_name}</div>
        <p className='text-2xl mt-4'>{rocket?.active ? <span className='text-green-500'>Active</span>:<span className='text-red-400'>Retired</span>}</p>
      </div>
      <div className='lg:m-10  sm:m-5 pt-4'>
        <p className='text-xl'>{rocket.description}</p>
        <p className='text-lg mt-4'> Height : {rocket?.height?.meters} Meters</p>
      </div>


    </div>
    <Footer />
    </>
  )
}

export default RocketPage
