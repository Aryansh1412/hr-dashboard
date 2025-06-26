'use client';

import React from 'react';
import { User } from '@/app/types/user';
import { useBookmarks } from '@/app/context/BookmarkContext';
import { Star } from 'lucide-react';
import classNames from 'classnames';

type Props = {
  user: User;
  onView?: () => void;
  onPromote?: () => void;
};

const UserCard: React.FC<Props> = ({ user, onView, onPromote }) => {
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();
  const isBookmarked = bookmarks.some((b) => b.id === user.id);
  const stars = user.rating;

  const toggleBookmark = () => {
    if (isBookmarked) {
      removeBookmark(user.id);
    } else {
      addBookmark(user);
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col gap-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {user.firstName} {user.lastName}
        </h3>
        <p className="text-gray-500 text-sm">{user.email}</p>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-300">
        <p>Age: {user.age}</p>
        <span className="inline-block mt-1 bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100 px-3 py-1 text-xs rounded-full">
          {user.department}
        </span>
      </div>

      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={classNames('w-4 h-4', {
              'fill-yellow-400 text-yellow-400': i < stars,
              'text-gray-300': i >= stars,
            })}
          />
        ))}
        <span className="text-xs text-gray-500 ml-1">{stars}/5</span>
      </div>

      <div className="flex gap-2 mt-2">
        <button
          onClick={onView}
          className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded"
        >
          View
        </button>
        <button
          onClick={toggleBookmark}
          className={`px-3 py-1 text-sm rounded ${
            isBookmarked
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-yellow-400 hover:bg-yellow-500 text-black'
          }`}
        >
          {isBookmarked ? 'Remove' : 'Bookmark'}
        </button>
        <button
          onClick={onPromote}
          className="px-3 py-1 text-sm bg-green-500 hover:bg-green-600 text-white rounded"
        >
          Promote
        </button>
      </div>
    </div>
  );
};

export default UserCard;
