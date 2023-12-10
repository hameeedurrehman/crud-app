import React, { useState } from "react";

export default function Table({ data, setData }) {
    const [editForm, setEditForm] = useState({
        index: '',
        name: '',
        email: '',
        age: ''
    })

    const onDelete = (id) => {
        /*we can also use filter method to delete the data using email of the specific row as shown below
        const newData = data.filter(item => item.email !== email);
        setData(newData);*/
        // the splice method delete the id(index) of the whole row
        let data1 = data;
        data1 = data.splice(id, 1)
        console.log(data1)
        setData([...data])
    }
    const onUpdate = (items, index) => {
        setEditForm({
            index: index,
            name: items.name,
            email: items.email,
            age: items.age
        })
    }
    const handleChange = (e) => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        })
    }
    // populate updated data into the table
    const handleSubmit = () => {
        setEditForm(data[editForm.index].name = editForm.name,
            data[editForm.index].age = editForm.age,
            data[editForm.index].email = editForm.email)
    }
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                        <th scope='col'>Update / Delete Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((items, index) => (
                        <tr key={`${items.email}_${items.name}`}>
                            <th scope="row">{index + 1}</th>
                            <td>{items.name}</td>
                            <td>{items.age}</td>
                            <td>{items.email}</td>
                            <td>
                                <button onClick={() => onDelete(index)} type="button" class="btn btn-danger me-3">Delete</button>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={() => onUpdate(items, index)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="name" value={editForm.name} name="name" onChange={handleChange} />
                            <br />
                            <input type="email" value={editForm.email} name="email" onChange={handleChange} style={{ width: '250px', margin: '50px 0' }} />
                            <br />
                            <input type="number" value={editForm.age} name="age" onChange={handleChange} style={{ marginBottom: '50px' }} />
                            <br />
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}