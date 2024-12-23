import { useState } from 'react';
import './App.css';

function App() {
  const [c, setC] = useState('bg-blue-500');

  const handleChange = (color) => {
    setC(`bg-${color}-500`);
  };

  return (
    <>
      <div className={c + ' h-screen flex flex-col items-center justify-center text-white'}>
        <h1 className="text-2xl mb-6">Hiii.....BgChanger</h1>
        <div className="bg-white rounded-2xl p-4 flex space-x-3">
          <button
            className="bg-red-500 text-white rounded-2xl px-4 py-2"
            onClick={() => handleChange('red')}
          >
            Red
          </button>
          <button
            className="bg-black text-white rounded-2xl px-4 py-2"
            onClick={() => handleChange('black')}
          >
            Black
          </button>
          <button
            className="bg-blue-500 text-white rounded-2xl px-4 py-2"
            onClick={() => handleChange('blue')}
          >
            Blue
          </button>
          <button
            className="bg-yellow-500 text-white rounded-2xl px-4 py-2"
            onClick={() => handleChange('yellow')}
          >
            Yellow
          </button>
          <button
            className="bg-green-500 text-white rounded-2xl px-4 py-2"
            onClick={() => handleChange('green')}
          >
            Green
          </button>
          <button
            className="bg-violet-500 text-white rounded-2xl px-4 py-2"
            onClick={() => handleChange('violet')}
          >
            Violet
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
