import { Link } from "react-router-dom";
import "../../stylesheet/Notfound.scss";
import PropTypes from "prop-types";

const Notfound = () => {
  return (
    <div className="notfound">
      <p>You may have made a typing error. This character does not exist </p>
      <img
        className="notfound_img"
        src="https://media2.giphy.com/media/3o7TKuAfCHifvPdcxG/200.gif?cid=6104955ee217f4e7cd4aa21708ff12d11c326ef5d3f38193&rid=200.gif&ct=g&cid=6104955ee217f4e7cd4aa21708ff12d11c326ef5d3f38193&rid=200.gif&ct=g"
        alt="Character not found"
      />
      <Link to="/">
        <i className="home_icon fas fa-reply" />
      </Link>
    </div>
  );
};

Notfound.propTypes = {
  Notfound: PropTypes.func,
};

export default Notfound;
