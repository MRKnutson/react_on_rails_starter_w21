import React from 'react'
import useToggle from '../Hooks/useToggle';

const Home = () => {
  const { Toggler, showToggle } = useToggle(true)


  return (
    <div>
      <h1>Home</h1>
      {showToggle && <p>Test Toggler</p>}
      <button onClick = {Toggler}>Toggle</button>
    </div>
  );
};

export default Home;