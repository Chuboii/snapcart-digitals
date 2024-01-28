import { FC } from "react";
import './Menu.scss'
const Menu: FC = () => {
  return (
    <>
      <nav className="nav">
        <div className="item">
          <div className="icon"></div>
          Supermarket
        </div>
        <div className="item">
          <div className="icon"></div>Health & Beauty
        </div>
        <div className="item">
          {" "}
          <div className="icon"></div>Home & Office
        </div>
        <div className="item">
          {" "}
          <div className="icon"></div>Appliances
        </div>
        <div className="item">
          {" "}
          <div className="icon"></div>Phones & Tablets
        </div>
        <div className="item">
          {" "}
          <div className="icon"></div>Computing
        </div>
        <div className="item">
          {" "}
          <div className="icon"></div>Electronics
        </div>
        <div className="item">
          {" "}
          <div className="icon"></div>Fashion
        </div>
        <div className="item">
          {" "}
          <div className="icon"></div>Baby Products
        </div>
        <div className="item">
          {" "}
          <div className="icon"></div>Gaming
        </div>
        <div className="item">
          {" "}
          <div className="icon"></div>Sporting Goods
        </div>
        <div className="item">
          {" "}
          <div className="icon"></div>Other categories
        </div>
      </nav>
    </>
  );
};

export default Menu;
