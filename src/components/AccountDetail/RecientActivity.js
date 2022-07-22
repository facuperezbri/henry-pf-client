import React from 'react'

const RecientActivity = ({ activities }) => {
  return (
    <div>
        {
            activities.map((activitie) => (
                <div key={activitie.id}>
                    <div>
                    <span>
                        {
                            activitie.name
                        }
                    </span>
                    <span>
                        {
                            activitie.date
                        }
                    </span>
                    </div>

                    <span>
                        {
                            activitie.amount
                        }
                    </span>
                    
                </div>
            ))
        }
    </div>
  )
}

export default RecientActivity