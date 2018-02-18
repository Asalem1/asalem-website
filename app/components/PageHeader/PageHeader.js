import React from 'react';
import * as styles from './PageHeader.scss'; // eslint-disable-line

export function PageHeaderClass() {
  return (
    <div className="page-header">
      <div className="name-header">
        Hi, I&apos;m Ariel Salem
      </div>
      <hr />
      <div className="description-header">
        Full Stack Developer & UI/UX Designer
      </div>
    </div>
  );
}

export default PageHeaderClass;
