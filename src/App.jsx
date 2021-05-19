/* global electron */

import React from 'react';

import Titlebar from './components/titlebar/Titlebar';

export default function App() {
  return (
    <>
      <Titlebar />
      <h1 className="text-blue-600">App Component</h1>
      <button type="button" onClick={() => { electron.notificationApi.sendNotification('Hello!'); }}>
        Say hi
      </button>
    </>
  );
}
