import React, { useContext } from 'react';
import { CustomProvider, CustomContext } from './CustomWrapper';
import ChildComponent from './ChildComponent';

export default function App() {
  return (
    <CustomProvider>
      <ChildComponent />
    </CustomProvider>
  );
}
