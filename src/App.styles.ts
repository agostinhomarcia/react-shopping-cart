import styled from "styled-components";
import IconButton from "@mui/material/IconButton";


export const Container = styled.div`
    display: flex;
    margin: 100px;

    
    
`;
export const StyledButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: -2px;
    top: 20px;
    width: 75px;
    color: #001;
`;

export const Button = styled.button`
    background-color:#479aa3;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:5px;
    margin: 0 auto;
    border: none;
    width: 350px;
    height: 40px;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 25px;

`;




