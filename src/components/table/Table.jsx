import React, { useState } from "react";
import { Table } from "antd"
import { dataFormated } from "./utils/index"
import { ModalDelete } from "./components/modalDelete/index"

export default function TableData({ data, setDataToEdit, deleteData, setIdData }) {
  console.log("dataLLega", data);

  const [ showModal, setShowModal ] = useState(false)
  const [ dataId, setDataId ] = useState(null)

  const dataTable = data && dataFormated(data, setShowModal, setDataId, setDataToEdit, setIdData) 

  return (
    <div>
      <h3>Tabla de Datos</h3>
      <Table columns={dataTable?.columns} dataSource={dataTable?.rows} pagination={false} />
    
      <ModalDelete showModal={showModal} cancel={()=> setShowModal(false)} dataId={dataId} deleteData={deleteData}  />
    </div>
  );
};

