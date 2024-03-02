import React from 'react'
import { Modal, Button } from "antd"
import style from "./style.module.css"
import { ExclamationCircleFilled } from '@ant-design/icons'

export const ModalDelete = ({ showModal, cancel, dataId, deleteData }) => {
  return (
    <Modal visible={showModal} onCancel={cancel} style={{ padding : "0 2rem" }} 
      footer={[
        <Button type="primary" onClick={()=> deleteData(dataId, cancel)}>Eliminar </Button>
      ]}
    >
      <div className={style.containerTitle}>
          <ExclamationCircleFilled className={style.icon} />

          <p>Estas intentanto borrar este usuario</p>
      </div>

      <p>¿Estás seguro de eliminar el registro con el id '${dataId}'?</p>
    </Modal>
  )
}
