import React from 'react'

const Info = ({info}) => {
  console.log(info);
  return (
    <div className='info'>
      <div className="info-left"><img src={info.image} /></div>
      <div className="info-right">
        <div className="name">Name : <span>{info.name}</span></div>
        <div className="type">Type : <span>{info.type}</span></div>
        <div className="breed">Breed : <span>{info.breed}</span></div>
        <div className="weight">Weight : <span>{info.weight}</span></div>
        <div className="color">Color : <span>{info.color}</span></div>
      </div>
    </div>
  )
}

export default Info