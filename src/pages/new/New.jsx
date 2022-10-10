import "./new.scss";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { idID } from "@mui/material/locale";

const New = ({ source, title }) => {
  const [img, setImg] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                img
                  ? URL.createObjectURL(img)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="userInput">
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  onChange={(e) => setImg(e.target.files[0])}
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              {source.map((src) => {
                return (
                  <div className="userInput">
                    <label>{src.label}</label>
                    <input type={src.type} placeholder={src.placeholder} />
                  </div>
                );
              })}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
