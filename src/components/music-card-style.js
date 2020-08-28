import styled, { css } from 'styled-components';
import { Card, Image } from 'antd';
export const MusicCardContainer = styled(Card)``;

export const Button = styled.button`
  background-color: rgb(18, 18, 18);
  cursor: pointer;
  font-weight: 700;
  color: rgb(209, 209, 209);
  border-radius: 4px;
  padding: 6px 14px;
  font-size: 20px;
  border-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 12px 0px;
  min-height: 40px;
  margin-right: 1rem;

  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: rgb(18, 18, 18);
      border: 2px solid rgb(18, 18, 18);
    `}
`;
export const CardContentRow = styled.div`
  display: flex;

  ${(props) =>
    props.alignCenter &&
    css`
      justify-content: center;
    `}
`;

export const Image100x100 = styled(Image)`
display:flex;   
height:100px
    width:100px

   

`;
