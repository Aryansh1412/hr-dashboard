'use client';

import React from 'react';
import { useBookmarks } from '@/app/context/BookmarkContext';
import UserCard from '@/app/components/UserCard';

const BookmarksPage = () => {
  const { bookmarks } = useBookmarks();

  return (
    <div className="min-h-screen p-6 sm:p-10 bg-gray-50 dark:bg-black">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">📌 Bookmarked Employees</h1>
      
      {bookmarks.length === 0 ? (
        <p className="text-gray-500">No bookmarked employees yet.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {bookmarks.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onPromote={() => alert(`Promoted ${user.firstName}`)}
              onView={() => alert(`Viewing ${user.firstName}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookmarksPage;
