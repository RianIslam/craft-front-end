import React from 'react'
import { data } from '../Data/Data'
import HexagonCard from './HexagonCard'

const Card = () => {
    return (
        <div  className="container">
            <div className="row ">
          {data.map((item, index) => (
            <HexagonCard index={index} item={item} />
          ))}
        </div>
        </div>
    )
}

export default Card
