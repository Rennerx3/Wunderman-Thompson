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

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const scrollBottom = () => {
        window.scrollTo({
            top: 790,
            behavior: 'smooth'
        })
    }
    
    return ( 
        <header>
            <div className="left">
                <Link to='/'><img src="../../public/image.png" alt="" /></Link>
            </div>
            <nav className="right">
                <ul>
                    <Link to='/' onClick={scrollTop}><li>Destacadas</li></Link>
                    <Link to='/' onClick={scrollBottom}><li>Cartelera</li></Link>
                    <Link to='/ticket'><li>Comprar Ticket</li></Link>
                </ul>
                {renderIcon && <>
                    <div style={{height: '33px',width: '59px',  position: 'absolute', backgroundColor: '#554F95', borderRadius: '6px', top: '20px', right: '52px', zIndex: '-1'}}></div>
                    <Link to='/ticket'><FontAwesomeIcon icon={faTicket} style={{color: "#ffffff",width: '58px', height: '52px'}} /></Link>
                </>}
            </nav>
        </header>
     );
}
 
export default Header;