import style from 'styled-components';

const StyledHeader = style.header`
    position: fixed;
    width: 100%;
    padding: 30px 0px;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    z-index: 999;
    
  img {
    width: 292px;
    height: 63.5px;
  }
`;


export {
    StyledHeader
}