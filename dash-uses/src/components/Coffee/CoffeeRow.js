import React from 'react'

const CoffeeRow = ({item:{img,content,buttonContent}}) => {
    return (
        <div className="col-md-6">
            <h2>{content}</h2>
            <button>{buttonContent}</button>
        </div>
    )
}

export default CoffeeRow
