import React from 'react'
import './HexagonCard.css'
const HexagonCard = ({ item: { title,id, img, btnContent ,index} }) => {

    return (
       
            <div className="col-md-3 col-sm-12 col-lg-3">
                <div className="box-container">
                    
                <div className={`${(id+1)%2 === 0 ? "box": "box-upper"}`}>
               <div>
               <h3 className="title">{title}</h3>
                <span className="counter">hel</span>
               </div>
                </div>

                
                </div>
            </div>
        
    )
}

export default HexagonCard
