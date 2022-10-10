import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editBtn">Edit</div>
            <h1 className="mainTitle">Information</h1>
            <div className="information">
              <img
                src="https://i.insider.com/5dcc135ce94e86714253af21?width=1000&format=jpeg&auto=webp"
                alt=""
              />
              <div className="info">
                <h1 className="title">Tony Stark</h1>
                <div className="infoItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">tonystark@avenger.in</span>
                </div>
                <div className="infoItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">7390831290</span>
                </div>
                <div className="infoItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Elton st. 120 New York, USA</span>
                </div>
                <div className="infoItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart height={210} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="mainTitle">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
