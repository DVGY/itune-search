import React from 'react';
import { Pagination } from 'antd';
const PaginationBox = ({
  defaultCurrent,
  total,
  defaultPageSize,
  onChange,
}) => {
  return (
    <React.Fragment>
      <Pagination
        defaultCurrent={defaultCurrent}
        total={total}
        defaultPageSize={defaultPageSize}
        onChange={onChange}
      ></Pagination>
    </React.Fragment>
  );
};

export default PaginationBox;
