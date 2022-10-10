export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://i.insider.com/5dcc135ce94e86714253af21?width=1000&format=jpeg&auto=webp",
    status: "active",
    email: "jon@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Snow",
    img: "https://i.insider.com/5dcc135ce94e86714253af21?width=1000&format=jpeg&auto=webp",
    status: "passive",
    email: "jon@gmail.com",
    age: 35,
  },
  {
    id: 3,
    username: "Snow",
    img: "https://i.insider.com/5dcc135ce94e86714253af21?width=1000&format=jpeg&auto=webp",
    status: "active",
    email: "jon@gmail.com",
    age: 35,
  },
  {
    id: 4,
    username: "Snow",
    img: "https://i.insider.com/5dcc135ce94e86714253af21?width=1000&format=jpeg&auto=webp",
    status: "active",
    email: "jon@gmail.com",
    age: 35,
  },
  {
    id: 5,
    username: "Snow",
    img: "https://i.insider.com/5dcc135ce94e86714253af21?width=1000&format=jpeg&auto=webp",
    status: "passive",
    email: "jon@gmail.com",
    age: 35,
  },
  {
    id: 6,
    username: "Snow",
    img: "https://i.insider.com/5dcc135ce94e86714253af21?width=1000&format=jpeg&auto=webp",
    status: "pending",
    email: "jon@gmail.com",
    age: 35,
  },
  {
    id: 7,
    username: "Snow",
    img: "https://i.insider.com/5dcc135ce94e86714253af21?width=1000&format=jpeg&auto=webp",
    status: "active",
    email: "jon@gmail.com",
    age: 35,
  },
  {
    id: 8,
    username: "Snow",
    img: "https://i.insider.com/5dcc135ce94e86714253af21?width=1000&format=jpeg&auto=webp",
    status: "pending",
    email: "jon@gmail.com",
    age: 35,
  },
  {
    id: 9,
    username: "Snow",
    img: "https://i.insider.com/5dcc135ce94e86714253af21?width=1000&format=jpeg&auto=webp",
    status: "active",
    email: "jon@gmail.com",
    age: 35,
  },
  {
    id: 10,
    username: "Snow",
    img: "https://i.insider.com/5dcc135ce94e86714253af21?width=1000&format=jpeg&auto=webp",
    status: "pending",
    email: "jon@gmail.com",
    age: 35,
  },
];
