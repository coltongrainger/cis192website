import React from 'react';

import '../styles/styles.sass';

const Nav = () => {
  return (
    <div>
      <nav>
        <a href="/">
          {' '}
          <span style={{ marginTop: '2rem' }} className="tag is-light">
            {' '}
            Syllabus{' '}
          </span>{' '}
        </a>
        <a href="/lectures">
          {' '}
          <span className="tag is-light"> Lectures </span>{' '}
        </a>
        <a href="/assignments">
          {' '}
          <span className="tag is-light"> Assignments </span>{' '}
        </a>
        <a href="/staff">
          {' '}
          <span className="tag is-light"> Staff </span>{' '}
        </a>
      </nav>
      <br />
    </div>
  );
};

export default Nav;
