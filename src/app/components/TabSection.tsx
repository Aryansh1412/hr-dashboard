'use client';

import React, { useState } from 'react';

const mockProjects = ['HR Revamp Plan', 'Annual Reviews', 'Diversity Training'];
const mockFeedback = ['Great communicator!', 'Needs to improve punctuality.', 'Strong leadership skills.'];

const TabSection = ({}: { userId: number }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return (
          <ul className="list-disc list-inside">
            {mockProjects.map((p, idx) => <li key={idx}>{p}</li>)}
          </ul>
        );
      case 'feedback':
        return (
          <ul className="list-disc list-inside">
            {mockFeedback.map((f, idx) => <li key={idx}>{f}</li>)}
          </ul>
        );
      case 'overview':
      default:
        return (
          <p>This employee has been performing consistently with above-average metrics in the last 6 months.</p>
        );
    }
  };

  return (
    <div>
      <div className="flex gap-4 mb-4">
        {['overview', 'projects', 'feedback'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="bg-gray-50 p-4 rounded shadow">{renderContent()}</div>
    </div>
  );
};

export default TabSection;
