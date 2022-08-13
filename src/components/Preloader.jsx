import React from 'react';
import styled from "styled-components";

const Loader = styled.div`
  width: 80px;
  height: 80px;
  margin: 50px auto;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #c91010;
    border-color: #cb0707 transparent #da0606 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const Preloader = () => {

   return(
       <>
           <Loader/>
       </>
   )
};

