import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Billboard = ({data}) => {
    const [loader, setLoader] = useState(true);
    const [firstFiveMovies, setFirstFiveMovies] = useState([]);
    const [secondFiveMovies, setSecondFiveMovies] = useState([]);

    useEffect(() => {
        
        if(data && data.length > 0){
            setFirstFiveMovies(data.slice(0,5));
            setSecondFiveMovies(data.slice(5));
            setLoader(false);
        }
    },[data])

    return ( 
        <main className="billboard">
            <img className="palomitas-tres" src="../../palomitasTres.png" alt="" />
            <h2>En cartelera</h2>
            <div className="billboard-content">
                <div className="first-row">
                    {loader ? (<div>Cargando...</div>) : (
                        firstFiveMovies.map((el) => (
                        <div className="card" key={el.id}>
                            <div>
                                <h3>{el.name.length <= 15 ? el.name : el.name.slice(0,12) + '...'}</h3><span>{el.lenguage}</span>
                            </div>
                            <img src={el.poster_img} alt={el.name} />
                            <Link to='/ticket'><button>Comprar ticket</button></Link>
                        </div>
                        ))
                    )}
                </div>
                <div className="second-row">
                    {loader ? (<div>Cargando...</div>) : (
                            secondFiveMovies.map((el) => (
                            <div className="card" key={el.id}>
                                <div>
                                    <h3>{el.name.length <= 15 ? el.name : el.name.slice(0,12) + '...'}</h3><span>{el.lenguage}</span>
                                </div>
                                <img src={el.poster_img} alt={el.name} />
                                <Link to='/ticket'><button>Comprar ticket</button></Link>
                            </div>
                            ))
                        )}
                </div>
            </div>
        </main>
     );
}
 
export default Billboard;