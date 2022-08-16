import styled from "styled-components";
const Loader = styled.span`


    width: 1.5em;
    height: 1.5em;
    border: 5px solid #0e0e0e;
    border-bottom-color: #FF3D00;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
   

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
`

const Divloader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`


const Nav = styled.div`
    padding-top:1em;

    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    text-align: center;
    span{
    
    }
`
export {Loader,Divloader, Nav}