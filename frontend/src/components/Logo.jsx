import { Link } from "react-router";

const Logo = () => {
  return (
    <h2>
      <Link to={"/"} className="text-blue-500 text-xl">
        Kilimanjaro Express
      </Link>
    </h2>
  );
};

export default Logo;
