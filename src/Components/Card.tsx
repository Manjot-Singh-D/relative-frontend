import React from 'react'
import { ICard } from '../Model/ICard'
import "../Stylesheets/Card.css"
import Vector from "../Assets/Images/Vector.js"


interface IPROPS{
    cardDetails:ICard;
};
const Card:React.FC<IPROPS> = (props) => {
  return (
    <div className="card flex justify-center">
        <Vector/>
        <div className="iconWrapper">
          <img src={require(`../Assets/Images/${props.cardDetails.icon}`)} alt={props.cardDetails.name}/>
        </div>
        <div className="viewDetails">
            <div className='labelField mb-2' style={{color:"#737BAE"}}>
                {props.cardDetails.name}
            </div>
            <div className="detailsField">
                <p>{props.cardDetails.price}</p>
                <div className='percField' style={{width:"64px",position:"absolute",right:"1.75rem",color:`${props.cardDetails.percentage[0]==='-'?"#FF4D4D":"#00FFA3"}`}}>
                    {props.cardDetails.percentage}
                </div>
            </div>
            <div className='labelField'>
                Price
            </div>
            <div className="detailsField">
                {props.cardDetails.total_val_locked}
            </div>
            <div className='labelField'>
                TVL
            </div>
            <div className="detailsField mt-3 flex flex-row" style={{width:"120px", alignItems:"center",justifyContent:"space-evenly"}}>
                {
                    props.cardDetails.pairs.length>0 && props.cardDetails.pairs.map((pair,key)=>{
                        return(
                            <img key={key} style={{width:"22px"}} src={require(`../Assets/Images/${pair}`)} alt={`pair_${key}`}/>
                        );
                    })
                }
            </div>
            <div className='labelField'>
                Popular Pairs
            </div>
        </div>
    </div>
  )
}

export default Card;