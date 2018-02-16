import React from 'react';
import './PageHeader.scss';

export function PageHeaderClass() {
  return (
    <div className="page-header">
      <header>
        <p className="name-header">Hi, I&apos;m Ariel Salem</p>
      </header>
      <hr />
      <div>
        <p className="description-header">FULL STACK DEVELOPER & UI/UX DESIGNER</p>
      </div>
    </div>
  );
}

export default PageHeaderClass;
