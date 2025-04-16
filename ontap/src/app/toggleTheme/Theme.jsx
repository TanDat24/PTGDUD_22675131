import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './themeSlice';

function Theme() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const isDarkMode = theme === 'dark';

  return (
    <div className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} style={{ minHeight: '100vh' }}>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl mb-4">Toggle Theme (Dark/Light Mode)</h1>

        <button
          onClick={() => dispatch(toggleTheme())}
          className="px-6 py-2 bg-blue-500 text-white rounded-md"
        >
          Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  );
}

export default Theme;
