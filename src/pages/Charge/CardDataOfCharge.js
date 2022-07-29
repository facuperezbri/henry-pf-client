import React from 'react'

const CardDataOfCharge = ({ cvu, amount, method }) => {
  return (
    <div>
    <div>
        <div>
            <span>{cvu}</span>
        </div>
        <div>
            <span>{amount}</span>
        </div>
        <div>
            <span>{method}</span>
        </div>

    </div>
</div>
  )
}

export default CardDataOfCharge