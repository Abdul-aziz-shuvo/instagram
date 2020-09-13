import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ username }) {
  return (
    <div className="post__header flex border-b border-gray-primary h-4 p-4 py-8">
      <div className="post__header-user flex items-center">
        <Link to={`/p/${username}`} className="flex items-center">
          <img
            className="rounded-full h-8 w-8 flex mr-3"
            src={`/images/avatars/${username}.jpg`}
            alt=""
          />
          <p className="font-bold">{username}</p>
        </Link>
      </div>
    </div>
  );
}
