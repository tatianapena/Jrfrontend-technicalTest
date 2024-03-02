import { UserOutlined, EyeOutlined, HourglassOutlined, SearchOutlined, ApartmentOutlined, CloseOutlined, EditOutlined, FormOutlined, DeleteOutlined, EyeFilled } from '@ant-design/icons';
import { Button } from "antd"

export const dataFormated = (data, setShowModal, setDataId, setDataToEdit, setIdData) => {
    const columns = [
        {
            key : "name",
            title : "Name",
            dataIndex : "name"
        },
        {
            key : "email",
            title : "Email",
            dataIndex : "email"
        },
        {
            key : "actions",
            title : "",
            dataIndex : "actions",
            render: (_, row) => 
            <div style={{ display : "flex", gap : "1rem" }}>
                <Button type="primary" icon={<EditOutlined />} onClick={()=> setDataToEdit(row)} />
                <Button type='primary' icon={<DeleteOutlined />}  onClick={()=> {setShowModal(true); setDataId(row?.id)}} />
            </div>
        },
    ]

    const rows = []

    if (data !== undefined) {
        data.forEach(el => {
            rows.push({
                name : el?.name,
                email : el?.email,
                id : el?.id
            })
        });
    }


    return { columns, rows }
}
