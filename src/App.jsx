import React from 'react';

export default function App() {
  return (
    <>
      <h1 className="text-blue-600">App Component</h1>
      <button type="button" onClick={() => { electron.notificationApi.sendNotification('Hello!'); }}>
        Say hi
      </button>
    </>
  );
}
