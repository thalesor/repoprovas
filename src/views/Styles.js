import style from 'styled-components';
import { Link } from 'react-router-dom';

const Container = style.div`
    background-color: #E5E5E5;
    display: flex;
    padding-top: 123.5px;
    min-height: 100vh;
    height: auto;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

const Form = style.form`
    justify-self: center;
    width: 464px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

const Legend = style.h1`
    font-size: 24px;
    color: #323232;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
`;

const Input = style.input`
    width: 100%;
    padding: 10px;
    height: 46px;
    background-color: ${(props) => props.disabled ?
    "#F2F2F2" : "#FFFFFF"};
    color: ${(props) => props.disabled ?
    "#AFAFAF" : "#666666"};
    border: 1px solid #C1C1C1;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    outline: 0;
    cursor: ${(props) => props.disabled && "not-allowed"};
    &::placeholder {
        color: #666666;
    }

    &:focus {
        border: 2px solid #3F61D7;
    }

`;

const Button = style.button`
    width: ${(props) => props.width ? props.width : 'auto'};
    max-height: 36px;
    padding: 6px 16px 6px 16px;
    background-color: ${(props) => {
        if(props.color === 'light')
        return  "#3F61D7"
        else if(props.color === 'dark')
        return  "#424445"
        else
        return "#E5E5E5"
    }
    };
    border-radius: 4.63636px;
    outline: 0;
    border: ${(props) => !props.color && 'solid 1px #3F61D7'};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => !props.color ? '#3F61D7' : '#FFFFFF'};
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    opacity: ${(props) => props.disabled && "0.7"};
    font-size: 15px;
    cursor: ${(props) => props.disabled ? "not-allowed" : "pointer"};
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
`;

const LinkTag = style(Link)`
    font-size: 14px;
    text-align: center;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    margin-top: 25px;
    display: flex;
    justify-content: center;
    text-decoration-line: underline;
    color: #3F61D7;
`

export {
    Container,
    Form,
    Legend,
    Input,
    Button,
    LinkTag
}