import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTicket } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Featured = ({data}) => {
    const [renderTitle, setRenderTitle] = useState(false);
    const [loader, setLoader] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    const firstThreeMovies = data.slice(0,3);

    console.log(currentIndex);

    useEffect(() => {
        if(firstThreeMovies.length > 0){
            setLoader(false);
        }

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
    },[data]);

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex -1 : firstThreeMovies.length - 1));
    }

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex < firstThreeMovies.length -1 ? prevIndex + 1 : 0));
    }

    return ( 
        <main className="featured">
            <div className="backdrop">
                <div className="sub-featured">
                    {loader ? (<div>Cargando...</div>) : 
                    firstThreeMovies.map((el, index) => (
                        (<div key={el.id} className={currentIndex === index ? 'main-div active' : 'main-div'}>
                            <div className="image">
                                <div className="punctuation">
                                    <FontAwesomeIcon icon={faStar} style={{color: "#ffffff", height: '17px', width: '17px'}} />
                                    <span><strong style={{fontSize: '18px'}}>{el.punctuation}</strong>/10</span>
                                    <p style={{margin: '0', fontWeight: 'bold'}}>IMDB</p>
                                </div>
                                <img src={el.poster_img} alt="John Wick 4" />
                                {renderTitle && <h1 style={{fontSize: '2.5rem'}}>{el.name}</h1>}
                            </div>
                            <div className="text-icons">
                                <div className="text">
                                    <h1>{el.name}</h1>
                                    <hr />
                                    <p>{el.sinopsis}</p>
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
                        </div>)
                    ))
                    }
                    <div className="pointers">
                        <button onClick={() => handlePrev()}>
                            <img src="../../public/arrow.png" alt="" />
                        </button>
                        <button onClick={() => handleNext()}>
                            <img src="../../public/arrow.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default Featured;