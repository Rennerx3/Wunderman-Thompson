import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTicket } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Featured = () => {
    const [renderTitle, setRenderTitle] = useState(false);

    useEffect(() => {
        const handleWidth = () => {
            const width = window.innerWidth;
            if(width < 950){
                setRenderTitle(true);
            }else{
                setRenderTitle(false);
            }
        }

        handleWidth();

        window.addEventListener('resize', handleWidth);

        return () => {
            window.removeEventListener('resize', handleWidth);
        }
    },[]);


    return ( 
        <main className="featured">
            <div className="backdrop">
                <div className="sub-featured">
                    <div className="image">
                        <div className="punctuation">
                            <FontAwesomeIcon icon={faStar} style={{color: "#ffffff", height: '17px', width: '17px'}} />
                            <span><strong style={{fontSize: '18px'}}>8</strong>/10</span>
                            <p style={{margin: '0', fontWeight: 'bold'}}>IMDB</p>
                        </div>
                        <img src="https://play-lh.googleusercontent.com/5efxbApfVAa9R1fStcVvSHqDhyXI40jLCd78b2NEuqNcC0McWceLAQGYnz0rFKZz7lywTdKNzfsXidP97A" alt="John Wick 4" />
                        {renderTitle && <h1 style={{fontSize: '2.5rem'}}>John Wick 4</h1>}
                    </div>
                    <div className="text-icons">
                        <div className="text">
                            <h1>John Wick 4</h1>
                            <hr />
                            <p>
                            John Wick 4 comienza con el personaje del título (Keanu Reeves)
                            huyendo de nuevo mientras tiene a cientos de asesinos pisándole los talones.
                            </p>
                            <p>El villano principal de la serie es el Marqués de Gramont (Bill Skarsgård), 
                            un líder de la Alta Mesa que sigue aumentando la recompensa por la cabeza de 
                            Wick mientras también arregla algunos asuntos dentro de la organización, incluyendo
                            la posible eliminación de Winston Scott (Ian McShane) 
                            y algunas de las decisiones que tomó en el pasado.</p>
                        </div>
                        <div className="icons">
                            <div>
                                <div></div>
                                <i className="fa-brands fa-square-youtube" style={{color: "#ffffff"}}></i>
                                <p>Ver trailer</p>
                            </div>
                            <div>
                                <div style={{height: '60px',width: '85px',  position: 'absolute', backgroundColor: '#554F95', borderRadius: '6px', top: '-4px', left: '13px', zIndex: '-1'}}></div>
                                <FontAwesomeIcon icon={faTicket} style={{color: "#ffffff"}} />
                                <p>Comprar ticket</p>
                            </div>
                        </div>
                    </div>
                    <div className="pointers">
                        <button>
                            <img src="../../public/arrow.png" alt="" />
                        </button>
                        <button>
                            <img src="../../public/arrow.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default Featured;