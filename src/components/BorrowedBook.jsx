import React from 'react';

const ProfileListItem = ({ label, value }) => {
    return (
        <li>
            <span>{label}: </span>
            <span>{value}</span>
        </li>
    );
};

export default ProfileListItem;