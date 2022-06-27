import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <h1 className='number'>{count}</h1>
      <button onClick={() => setCount(count => count + 1)}>+</button>
      <button onClick={() => setCount(count => count - 1)}>-</button>
      <button onClick={() => setCount(count => count = 0)}>Reset</button>
    </div>
  );
}

export default App;
