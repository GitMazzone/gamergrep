import React from 'react';

import './style.css';

class Titlebar extends React.PureComponent {
  render() {
    return (
      <div className="draggable w-100 bg-gray-600 flex justify-end">
        <button
          type="button"
          onClick={() => { electron.titlebarApi.minimizeApplication(); }}
          className="px-4 py-2 bg-gray-300"
        >
          -
        </button>
        <button
          type="button"
          onClick={() => { electron.titlebarApi.closeApplication(); }}
          className="px-4 py-2 bg-gray-300"
        >
          X
        </button>
      </div>
    );
  }
}

export default Titlebar;
