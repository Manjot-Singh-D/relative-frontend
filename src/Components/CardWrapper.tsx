import React,{useState} from 'react'
import { ICard } from '../Model/ICard';
import { CardServices } from '../Services/CardServices';
import Card from './Card';

interface ISTATE{
    cardDetails:ICard[];
};

const CardWrapper:React.FC = () => {
    const [state,setState]=useState<ISTATE>({
       cardDetails: CardServices.getCardDetails()
    });
    return (
        <div className="flex justify-start align-middle flex-wrap cardWrapper">
            {
                (state.cardDetails.length>0) && state.cardDetails.map((card)=>{
                    return <Card key={card.id} cardDetails={card}/>
                })
            }
        </div>
    )
}

export default CardWrapper;