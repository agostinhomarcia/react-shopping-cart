import styled from "styled-components";

export const Wrapper = styled.aside`
    font-family: Arial, Helvetica, sans-serif;
    width: 500px;
    padding: 20px;


    

    button{
        background-color:#479aa3;
        border-radius:7px;
        font-weight: bold;
        font-size:16px;
        color:#fff;
        margin:8px;
        

    }
    button:hover{
        background-color:#a9d5d9;
    }
    button:active{
        background-color: #a9d5d9;
    }
    .find-cart{
        display:flex;
        justify-content:space-between;
    }
    .btn-end{
        border:none;
        cursor: pointer;
    }
    
    @media(max-width: 650px){
        width: 300px
    }
    .info-cart{
        font-size: 18px;
    }
    
    

`;