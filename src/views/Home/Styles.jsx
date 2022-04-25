import style from 'styled-components';

const ButtonBox = style.div`
    display: flex;
    justify-content: space-between;
    width: 700px;
    margin-top: 45px;
`;


const Box = style.div`
    height: 100px;
    width: 700px;

    display: flex;
    flex-direction: column;
    margin-top: 35px;
    background: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
`;

const EmptyRow = style.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export {
    ButtonBox,
    Box,
    EmptyRow
}