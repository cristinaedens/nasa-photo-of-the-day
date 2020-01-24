import React from "react";
import styled from 'styled-components';
// import {Card, CardTitle, CardText, CardImg, CardImgOverlay} from 'reactstrap'





const NasaImg = styled.img`

    height: 50vh;
    border-radius: 24px;
    width:100%;
`

// `
// const Flex = styled.h1`
// display:flex;
// flex-direction:column;
// align-items:center;
// `
const Explain =styled.p`
margin-top: 0 0 0 0;
background-color:#706c61; 
color:#e8d4b4;
opacity: 0.8;
`
const ExplainTwo =styled.p`
background-color:#706c61; 
color:#e8d4b4;
opacity: 0.8;
`

function Card  (props) {
  return(
    <div className = "background-image">
      
   <div className="card">
     
      <div className="card-info">
      <p>{props.data.date}</p>
      <p>{props.data.title}</p>
      </div>

      <div className="card-des">

      <div className="describe">
      <Explain>{props.data.explanation}</Explain>
      <ExplainTwo>&#169;{props.data.copyright}</ExplainTwo>
      </div>
      
      <div className="pic-container">
      <NasaImg className="pic-of-day" alt={props.data.title} src= {props.data.hdurl} />
      </div>
      </div>
      </div>

    
    </div>
  )
}

export default Card;