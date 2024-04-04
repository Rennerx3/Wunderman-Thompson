import { useEffect, useState } from "react";

let firstFiveMovies,
    secondFiveMovies

const Billboard = ({data}) => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        
        if(data && data.length > 0){
        firstFiveMovies = data.slice(0,5);
        secondFiveMovies = data.slice(5);
            setLoader(false);
        }
    })

    return ( 
        <main className="billboard">
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
                            <button>Comprar ticket</button>
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
                                <button>Comprar ticket</button>
                            </div>
                            ))
                        )}
                </div>
            </div>
        </main>
     );
}
 
export default Billboard;