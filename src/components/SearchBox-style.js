import styled from 'styled-components';
import { Input } from 'antd';
const { Search } = Input;
export const RoundSearch = styled(Search)`
  .ant-input {
    border-radius: 25px;
  }
  width: 70%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;
