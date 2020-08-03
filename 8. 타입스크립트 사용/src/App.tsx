import React from 'react';
import Counter from './Counter';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './SampleContext';

function App() {
  return (
    <SampleProvider>
      <Counter />
      <hr />
      <ReducerSample />
    </SampleProvider>
  );
}

export default App;
