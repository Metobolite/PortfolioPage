import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

    const [fix, setFix] = useState(false)

    function setFixed() {
        if (window.scrollY > 100){
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener("scroll",setFixed)
    const goTop = () => {
        window.scrollTo({
          top: (0, 0),
          behavior: "smooth",
    });
};

    return (
        <nav className={fix ? 'navbar fixed' : 'navbar'}>
            <div className="links">
                <Link to="/"><h1 onClick={goTop}>Metin Nabiyev</h1></Link>
                <ul>
                    <a href="#home">Home</a>
                    <a href="#project">Projects</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </ul>
            </div>
        </nav>

    );
}
 
export default Navbar;