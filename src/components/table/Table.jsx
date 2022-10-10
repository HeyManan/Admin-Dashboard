import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    id: 1,
    product: "Macbook M2 Pro",
    img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1634725282/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245232_qstvbv.png/mxw_2048,f_auto",
    customer: "Manan",
    date: "27 Feb",
    amount: 699,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2,
    product: "Macbook M2 Pro",
    img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1634725282/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245232_qstvbv.png/mxw_2048,f_auto",
    customer: "Manan",
    date: "27 Feb",
    amount: 699,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 3,
    product: "Macbook M2 Pro",
    img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1634725282/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245232_qstvbv.png/mxw_2048,f_auto",
    customer: "Manan",
    date: "27 Feb",
    amount: 699,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 4,
    product: "Macbook M2 Pro",
    img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1634725282/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245232_qstvbv.png/mxw_2048,f_auto",
    customer: "Manan",
    date: "27 Feb",
    amount: 699,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 5,
    product: "Macbook M2 Pro",
    img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1634725282/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245232_qstvbv.png/mxw_2048,f_auto",
    customer: "Manan",
    date: "27 Feb",
    amount: 699,
    method: "Cash on Delivery",
    status: "Approved",
  },
];

const List = () => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
