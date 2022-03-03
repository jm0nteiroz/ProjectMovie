import "./Header.css";
import "./pictures/tmdb.png"

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      ⠀⠀⠀⠀TMDB 
    </span>
  );
};

export default Header;



