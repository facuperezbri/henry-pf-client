import React from 'react'
import Card from '../uiComponents/Card';
import CardText from '../uiComponents/CardText';
import ProfileEpig from '../uiComponents/ProfileEpig';

const CardDataOfCharge = ({ amount, method, dataProfile }) => {

    return (
        <div>
            <ProfileEpig src={dataProfile?.profilepic} alt={dataProfile?.username} />
            {/* <div className='w-72 h-72 rounded-full overflow-hidden'><img src={dataProfile?.profilepic} alt={dataProfile?.username} /></div> */}
            <Card>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>

                    <CardText>DNI: {dataProfile?.dni}</CardText>
                    <CardText>Name: {dataProfile?.name}</CardText>
                    <CardText>Lastname: {dataProfile?.lastname}</CardText>
                    <CardText>Username: {dataProfile?.username}</CardText>
                    <CardText>CVU: {dataProfile?.accounts[0].cvu}</CardText>
                    {
                        amount && <CardText>Amount: ${amount}</CardText>
                    }
                    {
                        method && <CardText>Method: {method}</CardText>
                    }

                </div>
            </Card>
        </div>
    )
}

export default CardDataOfCharge