import { Link } from "react-router-dom";

type LinkProps = {
  text: string;
  href: string;
};

function LinkNavbar(props: LinkProps) {
  
  return (
    <li className="nav-item">
      <Link className="nav-link" aria-current="page" to={props.href}>{props.text}</Link>
    </li>
  );
}

export default LinkNavbar;