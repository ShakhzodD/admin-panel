import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./userList.css";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dommyData";

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = id => {
    setData(data.filter(item => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "User",
      width: 160,
      renderCell: params => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: params => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        checkboxSelection
        columns={columns}
        pageSize={8}
      />
    </div>
  );
}
