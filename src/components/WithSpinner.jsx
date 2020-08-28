import React from 'react';
import { Spin, Row} from 'antd';

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
      <div>
        <h1>Search Something</h1>
      </div>
    );
  };
  return Spinner;
};

export default WithSpinner;
