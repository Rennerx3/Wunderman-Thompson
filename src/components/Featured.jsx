import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTicket } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                                    <FontAwesomeIcon icon={faStar} style={{color: "#ffffff"}} />
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
                                        <a href={el.trailer} target="_blank" rel="noopener noreferrer"><p>Ver trailer</p></a>
                                    </div>
                                    <div>
                                        <div style={{height: '60px',width: '85px',  position: 'absolute', backgroundColor: '#554F95', borderRadius: '15px', top: '-3%', left: '10%', zIndex: '-1', margin: '0'}}></div>
                                        <FontAwesomeIcon icon={faTicket} style={{color: "#ffffff"}} />
                                        <Link to='/ticket'>
                                            <p style={{width:'160%'}}>Comprar ticket</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    ))
                    }
                    <div className="pointers">
                        {currentIndex === 0 ? '' : <button onClick={() => handlePrev()} style={currentIndex === 2 ? {transform: 'rotate(180deg)'} : {}}>
                            <img src="../../public/arrow.png" alt=""/>
                        </button>}
                        {
                            currentIndex === 2 ? '' : <button onClick={() => handleNext()} style={currentIndex === 0 ? {position:'absolute',right: '0%'} : {}}>
                            <img src="../../public/arrow.png" alt="" />
                        </button>
                        }
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default Featured;