import Modal from './components/Modal';
import Table from './components/Table';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  // we used state to get the data from the Form which is in Modal.
  return (
    <>
      <Table data={data} setData={setData} />
      <Modal setData={setData} data={data} />
    </>
  );
}

export default App;
