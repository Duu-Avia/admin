import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

export function Card(props) {
  return (
    <div key={props.user.id} className="CardContainer">
      <div className="NameContainer">
        <h1 className="FirstName">{props.user.firstName}</h1>
        <h1 className="LastName">{props.user.lastName}</h1>
      </div>
      <h2>Designer </h2>
      <div className="logo"></div>
      <div className="BarCode"></div>
      <div className="CompanyName">{props.user.companyName}</div>
      <div className="text">
        <p>
          <FiPhone /> {props.user.phoneNumber}{" "}
        </p>
        <p>
          <MdOutlineMailOutline /> {props.user.email}
        </p>
        <p>
          <GrLocation /> {props.user.address}
        </p>
      </div>
    </div>
  );
}
