// ChildComponent.js (or any child component)
import React, { useContext } from 'react';
import { CustomContext } from './CustomWrapper';

const ChildComponent = () => {
  // Access the data from the custom context using useContext
  const contextData = useContext(CustomContext);

  const { data, setData } = contextData;

  return (
    <div>
      <h1>Child Component</h1>
      <p>Data from Custom Context: {data}</p>
      <button onClick={() => setData('New data')}>Update Data</button>
    </div>
  );
};

export default ChildComponent;
