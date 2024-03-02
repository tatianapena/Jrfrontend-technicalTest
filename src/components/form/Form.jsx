import React, { useState, useEffect, useMemo } from "react";
import style from "./style.module.css"
import { Button, Input, Form } from 'antd';

const initailForm = {
  name: "",
  email: "",
  id: null,
};

export default function FormData ({ createData, updateData, dataToEdit, setDataToEdit }) {
  const [form, setForm] = useState(initailForm);
  const [ formD ] = Form.useForm()

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
      formD.setFieldsValue({
        name: dataToEdit?.name,
        email: dataToEdit?.email
      });
    } else {
      setForm(initailForm);
      formD.resetFields();
    }
  }, [dataToEdit]);



  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (value) => {
    console.log("value para revisar editar", value);

    const edit = {
      name : value?.name === "" ? dataToEdit?.name : value?.name,
      email : value?.email == "" ? dataToEdit?.email : value?.email,
      id : dataToEdit?.id
    }

    if (form?.id === null) {
      createData(value, formD);
    } else {
      updateData(edit);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEdit(null);
  };

  return (
    <div className={style.containerForm}>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <Form form={formD} layout="inline" onFinish={onSubmit} className={style.container}>
        <Form.Item name="name">
          <Input placeholder="Name" onChange={handleChange} />
        </Form.Item>

        <Form.Item  name="email" rules={[
            { type: "email", message: "Por favor, ingresa un correo electrónico válido" }
          ]}
>
          <Input placeholder="Email" onChange={handleChange} />
        </Form.Item>

        <Form.Item shouldUpdate>
          {()=> (
            <Button type="primary" htmlType="submit" disabled={!formD.isFieldsTouched(true) ||
              !!formD.getFieldsError().filter(({ errors }) => errors.length).length}>
              Crear
            </Button>
          )}
        </Form.Item>
      </Form>
     {/* <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
        <Input
          type="text"
          {...register("name", {required : true} )}
          placeholder="Name"
          onChange={handleChange}
          value={form.name}
          className={style.input}
        />
        {errors.name && <span className={style.error}>Campo requerido</span>} 
        <Input
          type="email"
          {...register("email", {required : true, pattern : /^\S+@\S+$/i})}
          placeholder="Email"
          onChange={handleChange}
          value={form.email}
          className={style.input}
        />
        {errors.email && <span className={style.error}>email valido</span>} 


        <Button type="primary" htmlType="submit"> Crear </Button>
        <Button danger  onClick={handleReset}> Limpiar </Button>
      </form> */}
    </div>
  );
};

