import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();


const Ticket = () => {
    const [formData, setFormData] = useState({
        film: '',
        date: '',
        seat: '',
        name: '',
        email: '',
        phone: ''
    });
    const [error, setError] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [renderImage, setRengerImage] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        const formattedValue = name === 'phone' ? value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})/, '$1 - $2 - $3')
        : value;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: formattedValue
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentIndex === 0){
            if(!formData.film || !formData.date || !formData.seat){
               return setError('Algo ha fallado, ingrese un valor valido');
            }else{
                setError('');
                setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1);
            }
        }

        if(currentIndex === 1){
            const regExPhone = /^\d{3} - \d{3} - \d{3}$/;
            const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if(!formData.name || !formData.email || !formData.phone){
                return setError('Todos los campos son obligatorios');
             }else if(formData.name.length < 4){
                return setError('El nombre debe de ser mayor a 3 caracteres');
            }else if(!regEx.test(formData.email)){
                return setError('Eso no parece una dirección de Email valida');
            }else if(!regExPhone.test(formData.phone)){
                return setError('Eso no parece un número de teléfono valido');
            }else{
                setError('');
                setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1);
             }

            
        }
    }

    const handleBack = (e) => {
        setCurrentIndex(prevCurrentIndex => prevCurrentIndex - 1);
    }

    const handleReset = (e) => {
        setFormData({
            film: '',
            date: '',
            seat: '',
            name: '',
            email: '',
            phone: ''
        });
    }

    useEffect(() => {

        const handleWidth = () => {
            const width = window.innerWidth;
            if(width < 700){
                setRengerImage(true);
            }else{
                setRengerImage(false);
            }
        }

        handleWidth();

        window.addEventListener('resize', handleWidth);

        return () => {
            window.removeEventListener('resize', handleWidth);
        }
    },[]);

    return ( 
        <main className="ticket">
            {currentIndex === 0 && 
            <>
                {renderImage ? '' : <img className='palomita' src="../../public/palomitas.png" alt="" />}
                <img className='palomitaDos' src="../../public/palomitasDos.png" alt="" />
            </>
            }
            <div className="ticket-title">
                <h2>{(currentIndex === 0 || currentIndex === 1) ? 'Comprar ticket' : ''}</h2>
                <span>{currentIndex === 1 ? 'Completa tu información personal' : currentIndex === 0 ? 'Selecciona una función' : ''}</span>
            </div>
            <div className="ticket-form">
                {currentIndex === 1 ? 
                <form>
                <div className="div-input">
                    {error && <strong>{error}</strong>}
                    <label className="label-uno" htmlFor="uno">Nombre completo</label>
                    <input minLength={4} required name="name" id="uno" type='text' onChange={handleChange}></input>
                </div>
                <div className="div-input">
                    <label className="label-dos" htmlFor="dos">E-mail</label>
                    <input required name="email" id="dos" type='email' onChange={handleChange}></input>
                </div>
                <div className="div-input">
                    <label className="label-tres" htmlFor="tres">Teléfono</label>
                    <input maxLength={9} value={formData.phone.replace()} name="phone" id="tres" type="tel" onInput={handleChange}></input>
                </div>
            </form>
                : currentIndex === 0 ? <form>
                <div className="div-input">
                    {error && <strong>{error}</strong>}
                    <label className="label-uno" htmlFor="uno">Seleccione pelicula</label>
                    <FontAwesomeIcon className='ticket-icon' icon={faCaretDown} />
                    <select name="film" id="uno" value={formData.film} onChange={handleChange}>
                        <option value="">...</option>
                        <option value="John Wick 4">John Wick 4</option>
                        <option value="The Dark Knight" >The Dark Knight </option>
                        <option value="Inception" >Inception </option>
                        <option value="Interstellar" >Interstellar </option>
                        <option value="The Shawshank Redemption" >The Shawshank Redemption </option>
                        <option value="The Matrix" >The Matrix </option>
                        <option value="The Godfather" >The Godfather </option>
                        <option value="Pulp Fiction" >Pulp Fiction </option>
                    </select>
                </div>
                <div className="div-input">
                    <label className="label-dos" htmlFor="dos">Seleccione función</label>
                    <FontAwesomeIcon className='ticket-icon' icon={faCaretDown} />
                    <select name="date" id="dos" value={formData.date} onChange={handleChange}>
                        <option value="">...</option>
                        <option value={`${day}/${month}/${year} a las 14:20`}>{`${day}/${month}/${year} 14:20`}
                        </option>
                        <option value={`${day + 1}/${month}/${year} a las 23:00`} >{`${day + 1}/${month}/${year} 23:00`} 
                        </option>
                        <option value={`${day + 2}/${month}/${year} a las 12:00`} >{`${day + 2}/${month}/${year} 12:00`}
                        </option>
                        <option value={`${day + 3}/${month}/${year} a las 15:00`} >{`${day + 3}/${month}/${year} 15:00`}
                        </option>
                        <option value={`${day + 4}/${month}/${year} a las 19:00`} >{`${day + 4}/${month}/${year} 19:00`}
                        </option>
                        <option value={`${day + 5}/${month}/${year} a las 03:00`} >{`${day + 5}/${month}/${year} 03:00`}
                        </option>
                        <option value={`${day + 6}/${month}/${year} a las 23:00`} >{`${day + 6}/${month}/${year} 23:00`}
                        </option>
                        <option value={`${day + 7}/${month}/${year} a las 11:00`} >{`${day + 7}/${month}/${year} 11:00`}
                        </option>
                    </select>
                </div>
                <div className="div-input">
                    <label className="label-tres" htmlFor="tres">Seleccione asiento</label>
                    <FontAwesomeIcon className='ticket-icon' icon={faCaretDown} />
                    <select name="seat" id="tres" value={formData.seat} onChange={handleChange}>
                        <option value="">...</option>
                        <option value="Fila 1 - Asiento 1">Fila 1 - Asiento 1</option>
                        <option value="Fila 2 - Asiento 4">Fila 2 - Asiento 4</option>
                        <option value="Fila 3 - Asiento 1">Fila 3 - Asiento 1</option>
                        <option value="Fila 8 - Asiento 2">Fila 8 - Asiento 2</option>
                        <option value="Fila 4 - Asiento 10">Fila 4 - Asiento 10</option>
                        <option value="Fila 1 - Asiento 3">Fila 1 - Asiento 3</option>
                        <option value="Fila 4 - Asiento 9">Fila 4 - Asiento 9</option>
                        <option value="Fila 10 - Asiento 1">Fila 10 - Asiento 1</option>
                    </select>
                </div>
            </form> : <div class="final-div">
                    <span>Comprar ticket</span>
                    <h3>¡Felicitaciones {formData.name}!</h3>
                    <div>
                        <svg width="235"
                        height="125"
                        viewBox="0 0 235 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M235.325 30.6766L235.344 12.9982C229.465 12.7622 223.801 7.59048 223.821 1.23886C223.821 0.904563 223.624 0.255636 223.664 0.255636L168.524 0.196645C168.524 0.314632 168.544 0.452281 168.544 0.570267C168.544 7.0792 163.254 12.3689 156.745 12.3689C150.236 12.3689 144.947 7.0792 144.947 0.570267C144.947 0.432616 144.966 0.294967 144.966 0.157316L13.8241 0C13.8438 0 13.8634 0.648923 13.8634 0.983219C13.8634 7.47249 8.37706 12.7426 1.86812 12.7229C1.35685 12.7229 0.117987 12.6836 0.117987 12.6049L0.0983227 30.4602C0.0983227 30.4012 1.31752 30.3423 1.84846 30.3423C8.33773 30.3423 13.7061 35.632 13.7061 42.1213C13.7061 48.6105 8.25907 53.8806 1.7698 53.861C1.25853 53.861 0.0786578 53.8216 0.0786578 53.743L0.0589928 71.5983C0.0589928 71.5393 1.27819 71.4803 1.80913 71.4803C8.2984 71.4803 13.6668 76.77 13.6668 83.2593C13.6668 89.7486 8.21974 95.0187 1.73047 94.999C1.2192 94.999 0.0393289 94.9597 0.0393289 94.881L0 112.795C0 112.736 1.2192 112.677 1.75014 112.677C8.23941 112.677 13.6078 117.967 13.6078 124.456C13.6078 124.791 13.6865 125.44 13.6668 125.44L144.986 125.597C145.399 119.462 150.492 114.604 156.745 114.604C162.999 114.604 168.092 119.462 168.505 125.617L223.506 125.676C223.487 125.676 223.664 125.027 223.683 124.692C223.683 118.341 229.366 113.189 235.246 112.953L235.266 95.2743C229.386 95.0383 223.939 89.8666 223.958 83.515C223.978 77.1633 229.425 72.0112 235.305 71.7949L235.325 54.1166C229.445 53.8806 223.998 48.7089 224.017 42.3572C224.037 36.0056 229.445 30.8929 235.325 30.6766ZM156.726 96.2772C150.217 96.2772 144.927 90.9874 144.927 84.4785C144.927 77.9696 150.217 72.6798 156.726 72.6798C163.235 72.6798 168.524 77.9696 168.524 84.4785C168.524 90.9874 163.254 96.2772 156.726 96.2772ZM156.726 54.3132C150.217 54.3132 144.927 49.0235 144.927 42.5146C144.927 36.0056 150.217 30.7159 156.726 30.7159C163.235 30.7159 168.524 36.0056 168.524 42.5146C168.524 49.0235 163.254 54.3132 156.726 54.3132Z" fill="#554F95"/>
                            <path d="M30.5784 22.8304L208.07 23.0467L207.972 103.396L30.4801 103.179L30.5784 22.8304ZM26.6652 18.8975L26.5669 107.112L211.924 107.348L212.022 19.1334L26.6652 18.8975Z" fill="#453E8F"/>
                            <path d="M83.279 51.2455H50.4787C47.352 51.2455 44.8153 48.7088 44.8153 45.5822C44.8153 42.4555 47.352 39.9188 50.4787 39.9188H83.279C86.4056 39.9188 88.9423 42.4555 88.9423 45.5822C88.9423 48.7088 86.4056 51.2455 83.279 51.2455Z" fill="#C7C7C7"/>
                            <path d="M193.006 91.243H188.13C185.003 91.243 182.466 88.7063 182.466 85.5796C182.466 82.453 185.003 79.9163 188.13 79.9163H193.006C196.133 79.9163 198.67 82.453 198.67 85.5796C198.67 88.7063 196.133 91.243 193.006 91.243Z" fill="#453E8F"/>
                            <path d="M107.093 67.3113H48.0993C46.2901 67.3113 44.8153 65.8365 44.8153 64.0274C44.8153 62.2182 46.2901 60.7434 48.0993 60.7434H107.093C108.902 60.7434 110.377 62.2182 110.377 64.0274C110.357 65.8365 108.902 67.3113 107.093 67.3113Z" fill="#D9D9D9"/>
                            <path d="M107.093 88.6081H48.0993C46.2901 88.6081 44.8153 87.1333 44.8153 85.3241C44.8153 83.515 46.2901 82.0402 48.0993 82.0402H107.093C108.902 82.0402 110.377 83.515 110.377 85.3241C110.357 87.1333 108.902 88.6081 107.093 88.6081Z" fill="#767676"/>
                            <path opacity="0.2" d="M17.5014 3.93289L141.387 4.09021C143 11.0711 149.253 16.3018 156.726 16.3018C164.179 16.3018 170.432 11.0908 172.044 4.12954L220.163 4.18853C221.343 9.83223 225.787 14.6107 231.392 16.2822L231.372 27.3926C224.942 29.359 220.026 35.514 220.026 42.3966C220.026 49.2791 224.902 55.4538 231.333 57.4399L231.313 68.5503C224.883 70.5167 219.967 76.6717 219.967 83.5543C219.967 90.4368 224.843 96.6115 231.274 98.5976L231.254 109.708C225.65 111.379 221.186 116.138 220.006 121.782L171.69 121.723C169.685 115.312 163.667 110.711 156.686 110.711C149.725 110.711 143.728 115.312 141.702 121.703L17.2064 121.546C16.6165 118.478 15.122 115.647 12.8212 113.385C10.3632 110.947 7.25618 109.413 3.8739 108.941L3.89356 98.8532C11.5824 97.7717 17.521 91.2234 17.521 83.338C17.521 75.4329 11.6217 68.8453 3.93289 67.7834L3.95256 57.6955C11.6414 56.614 17.58 50.0657 17.58 42.1803C17.58 34.2751 11.6807 27.7072 3.99188 26.6257L4.01155 16.5378C10.8155 15.5939 16.2232 10.4812 17.5014 3.93289ZM156.726 58.2461C165.398 58.2461 172.457 51.1866 172.457 42.5146C172.457 33.8425 165.398 26.783 156.726 26.783C148.054 26.783 140.994 33.8425 140.994 42.5146C140.994 51.1866 148.054 58.2461 156.726 58.2461ZM156.726 100.21C165.398 100.21 172.457 93.1505 172.457 84.4785C172.457 75.8065 165.398 68.7469 156.726 68.7469C148.054 68.7469 140.994 75.8065 140.994 84.4785C140.994 93.1505 148.054 100.21 156.726 100.21ZM13.8241 0C13.8438 0 13.8634 0.648923 13.8634 0.983219C13.8634 7.47249 8.37706 12.7229 1.88779 12.7229H1.86812C1.35685 12.7229 0.117987 12.6836 0.117987 12.6049L0.0983227 30.4602C0.0983227 30.4012 1.29785 30.3423 1.82879 30.3423H1.84846C8.33773 30.3423 13.7061 35.632 13.7061 42.1213C13.7061 48.6105 8.27874 53.861 1.78947 53.861C1.25852 53.861 0.0983227 53.8216 0.0983227 53.743L0.0786577 71.5983C0.0786577 71.5393 1.27819 71.4803 1.80913 71.4803H1.82879C8.31806 71.4803 13.6865 76.77 13.6865 83.2593C13.6865 89.7486 8.25907 94.999 1.7698 94.999H1.75014C1.23886 94.999 0.0589928 94.9597 0.0589928 94.881L0 112.795C0 112.736 1.19953 112.677 1.73047 112.677C8.23941 112.677 13.5881 117.967 13.5881 124.456C13.5881 124.791 13.6668 125.44 13.6471 125.44L144.966 125.597C145.379 119.462 150.472 114.604 156.726 114.604C162.979 114.604 168.072 119.462 168.485 125.617L223.487 125.676C223.467 125.676 223.644 125.027 223.664 124.692C223.664 118.341 229.347 113.189 235.226 112.953L235.246 95.2743C229.366 95.0383 223.919 89.8666 223.939 83.515C223.958 77.1633 229.406 72.0112 235.285 71.7949L235.305 54.1166C229.425 53.8806 223.978 48.7089 223.998 42.3572C223.998 36.0056 229.465 30.8535 235.344 30.6372L235.364 12.9589C229.484 12.7229 223.821 7.55115 223.84 1.19953C223.84 0.865234 223.644 0.216306 223.683 0.216306L168.544 0.157316C168.544 0.275302 168.564 0.412951 168.564 0.530937C168.564 7.03987 163.274 12.3296 156.765 12.3296C150.256 12.3296 144.966 7.03987 144.966 0.530937C144.966 0.393286 144.986 0.255637 144.986 0.117986L13.8241 0ZM156.726 54.3132C150.217 54.3132 144.927 49.0235 144.927 42.5146C144.927 36.0056 150.217 30.7159 156.726 30.7159C163.235 30.7159 168.524 36.0056 168.524 42.5146C168.524 49.0432 163.254 54.3132 156.726 54.3132ZM156.726 96.2772C150.217 96.2772 144.927 90.9874 144.927 84.4785C144.927 77.9696 150.217 72.6798 156.726 72.6798C163.235 72.6798 168.524 77.9696 168.524 84.4785C168.524 90.9874 163.254 96.2772 156.726 96.2772Z" fill="#424242"/>
                        </svg>  
                    </div>
                    <p style={{marginTop:'40px'}}>Tu entrada para la función {formData.date} ha sido canjeada.</p>
                    <p style={{marginTop:'40px'}}>¡Te esperamos!</p>
                </div>}
                {currentIndex === 1 ? <div className='ticket-buttons'>
                    <button style={{backgroundColor: '#91C870', color: '#424242'}} type='submit' onClick={handleSubmit}>Finalizar</button>
                    <button onClick={handleBack}>Volver</button>
                </div> 
                : currentIndex === 0 ? <div className='ticket-buttons'>
                <button type='submit' onClick={handleSubmit}>Continuar</button>
                <button onClick={handleReset}>Reiniciar</button>
            </div> : ''}
            </div>
        </main>
     );
}
 
export default Ticket;