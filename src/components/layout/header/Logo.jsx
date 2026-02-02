import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.jpg";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={logo}
        alt="VTech Logo"
        className="h-[70px] md:h-[80px] w-auto object-contain"
      />
    </Link>
  );
}
