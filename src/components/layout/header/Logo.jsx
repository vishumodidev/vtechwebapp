import logo from "../../../assets/images/logo.jpg";

export default function Logo() {
  return (
    <div className="flex items-center">
      <img
        src={logo}
        alt="VTech Logo"
        className="h-8 w-auto"
      />
    </div>
  )
}
