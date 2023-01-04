import React, {FC} from 'react';

const DefaultLayout: FC<{}> = ({ children }) => (
  <div className="default-container">
    <div className="main">{children}</div>
  </div>
);

export default DefaultLayout;
