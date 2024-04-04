import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    const [renderIcon, setRenderIcon] = useState(false);

    useEffect(() => {
        const handleWidth = () => {
            const width = window.innerWidth;
            if(width < 950){
                setRenderIcon(true);
            }else{
                setRenderIcon(false);
            }
        }

        handleWidth();

        window.addEventListener('resize', handleWidth);

        return () => {
            window.removeEventListener('resize', handleWidth);
        }
    }, [])
    
    return ( 
        <header>
            <div className="left">
                <img src="../../public/image.png" alt="" />
            </div>
            <nav className="right">
                <ul>
                    <Link><li>Destacadas</li></Link>
                    <Link><li>Cartelera</li></Link>
                    <Link to='/ticket'><li>Comprar Ticket</li></Link>
                </ul>
                {renderIcon && <>
                    <div style={{height: '50px',width: '75px',  position: 'absolute', backgroundColor: '#554F95', borderRadius: '6px', top: '11px', right: '59px', zIndex: '-1'}}></div>
                    <FontAwesomeIcon icon={faTicket} style={{color: "#ffffff"}} />
                </>}
            </nav>
        </header>
     );
}
 
export default Header;