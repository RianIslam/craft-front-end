import React from 'react'
import { coffee } from '../Data/CoffeeData'
import CoffeeRow from './CoffeeRow'

const Coffee = () => {
    return (
        <div className="bg-info">
        <div className="container">
            <div className="row">
           <div className="col-md-6">
                <img className="img-fluid" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="" />
           </div>
           <div className="col-md-6">
           {coffee.map((item, index) => (
              <CoffeeRow index={index} item={item} />
            ))}
           </div>
            </div>
        </div>
        </div>
    )
}

export default Coffee
