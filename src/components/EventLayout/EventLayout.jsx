import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const EventLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="register">Register</Link>
          </li>
          <li>
            <Link to="participants">Participants</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default EventLayout;
