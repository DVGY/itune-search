import React from 'react';
import { Spin, Row, Title } from 'antd';

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ ...otherProps }) => {
    const { loading, musics } = otherProps;

    return musics ? (
      <WrappedComponent {...otherProps} />
    ) : loading ? (
      <Row justify="center" align="center">
        <Spin size="large" />
      </Row>
    ) : (
      <div>Search something dude</div>
    );
  };
  return Spinner;
};

export default WithSpinner;
