import React from "react";
import styled from 'styled-components';
// import {Card, CardTitle, CardText, CardImg, CardImgOverlay} from 'reactstrap'

// const Backg = styled.img`
// width:100%;
// height:85vh;
// opacity:0.9;
// `

// const NasaImg = styled.img`
// border-radius:10px;
// width:45%;
// height: 70vh;

// `
// const Flex = styled.h1`
// display:flex;
// flex-direction:column;
// align-items:center;
// `
// const Explain =styled.p`
// width:25%;
// `

function Card  (props) {
  return(
    <div className = "background-image">
      
   <div className="card">
      <div className="card-info">
      <p>{props.data.date}</p>
      <p>{props.data.title}</p>
      </div>
      <div className="describe">
      <p>{props.data.explanation}</p>
      <p>{props.data.copyright}</p>
      </div>
      <div>
      <img className="pic-of-day" alt={props.data.title} src= {props.data.hdurl} />
      </div>
      </div>
    
    </div>
  )
}

export default Card;