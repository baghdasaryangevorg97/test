import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import EditUser from './EditUser';

function Users() {
    const navigate = useNavigate();
    const [user, setUser] = useState([
        {
            id: 1,
            name: "Mark",
            surname: 'Markosyan',
            email: "facebook@mail.ru",
            phone: "+37499556633",
            created_at: "22.05.1998",
        }
    ])
    const seeMore = (e, id) => {
        if (e.target.tagName.toLowerCase() !== 'button') {
            navigate(`/user-details/${id}`);
        }
    }

    const removeUser = (id) => {
        const newUser = user.filter(user => user.id !== id)
        setUser(newUser)
    }

    return (
        <>
         <div className="modal" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-mdb-ripple-init data-mdb-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-mdb-ripple-init data-mdb-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-mdb-ripple-init>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
            {user?.length === 0 ?
                <h1><span className="badge badge-secondary text-secondary">No user</span></h1> :
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Full name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Created</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user, index) => (
                                <tr key={user.id} onClick={(e) => seeMore(e, user.id)}>
                                    <th scope="row">1</th>
                                    <td>{user.name + " " + user.surname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.created_at}</td>
                                    <td>
                                        <EditUser user={user} />
                                        <button type="button" onClick={(e) => removeUser(user.id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
        </>
    )
}

export default Users