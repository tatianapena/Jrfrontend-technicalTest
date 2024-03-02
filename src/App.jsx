"use client"
import React, { useEffect, useState } from "react";
import FormData from './components/form/Form';
import TableData from './components/table/Table';
import style from "./style.module.css"


function App() {
  
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [ idData, setIdData ] = useState()



  const createData = (data, form) => {
    console.log("create data", data);
    data.id = Date.now();
    setDb([...db, data]);
    form.resetFields()
  };

  const updateData = (data) => {
    console.log("data editar", data);
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id, cancel) => {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
      cancel()
  };

  return (
    <div className={style.container}>
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <FormData
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <TableData
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
          setIdData={setIdData}
        />
      </article>
    </div>
  );
}

export default App;
