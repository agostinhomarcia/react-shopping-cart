import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    width:350px;
    max-width: 100%;
    margin-top:30px;
    border: 2px solid #666;
    border-radius: 20px;
    margin: 0 auto;
    height: 100%;

    @media(max-width:650px){
        border: none;
        .container-price .span-price{
            font-size:15px;
        }
        
    }

    .stars{
        display:flex;
        justify-content:center;
        align-items:center;

        
    p{
        margin-top:60px;
    }
    .span-uni{
        color: #20B2AA;
        font-size:12px;
    }
    }

    img{
        width:95%;
        height:50%;
        margin: 20px auto;
        max-width:190px;
        max-height: 170px;
        


        
    }

    
    h3{
        padding: 5px 20px;
        margin: 0 auto;
    }
    p{
        padding: 5px 20px ; 
        width: 80%;
        

    }
    .container-price{
        display: flex;
        justify-content: space-between;
        margin: 20px 10px;

    button{
        background-color:#bee1e5;
        color: #479aa3;
        width:100px;
        border-radius: 10px;
        border: none;
        height: 30px;
    }
    span{
        color:#479aa3;
        font-weight: bold;
        font-size: 24px;
    }
    
    @media(max-width: 650px){
        button{
                width: 65px;
                height: 20px
        }
    }

    }

`;
