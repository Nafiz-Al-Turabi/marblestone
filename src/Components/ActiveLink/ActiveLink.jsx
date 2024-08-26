import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({title,to,children}) => {
    return (
        <NavLink
            to={to}
            title={title}
            className={({ isActive }) =>
                isActive ? "text-[#990a05]"  : ""
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;