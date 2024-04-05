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
            if(!formData.name || !formData.email || !formData.phone){
                return setError('Todos los campos son obligatorios');
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

    console.log(formData);

    return ( 
        <main className="ticket">
            <div className="ticket-title">
                <h2>Comprar ticket</h2>
                <span>{currentIndex === 1 ? 'Completa tu información personal' : 'Selecciona una función'}</span>
            </div>
            <div className="ticket-form">
                {currentIndex === 1 ? 
                <form>
                <div className="div-input">
                    {error && <strong>{error}</strong>}
                    <label className="label-uno" htmlFor="uno">Nombre completo</label>
                    <input name="name" id="uno" type='text' onChange={handleChange}></input>
                </div>
                <div className="div-input">
                    <label className="label-dos" htmlFor="dos">E-mail</label>
                    <input name="email" id="dos" type='email' onChange={handleChange}></input>
                </div>
                <div className="div-input">
                    <label className="label-tres" htmlFor="tres">Teléfono</label>
                    <input maxLength={9} value={formData.phone.replace()} name="phone" id="tres" type="tel" onInput={handleChange}></input>
                </div>
            </form>
                : <form>
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
                            <option value={`${day}/${month}/${year}`}>{`${day}/${month}/${year} 14:20`}
                            </option>
                            <option value={`${day + 1}/${month}/${year} 23:00`} >{`${day + 1}/${month}/${year} 23:00`} 
                            </option>
                            <option value={`${day + 2}/${month}/${year} 12:00`} >{`${day + 2}/${month}/${year} 12:00`}
                            </option>
                            <option value={`${day + 3}/${month}/${year} 15:00`} >{`${day + 3}/${month}/${year} 15:00`}
                            </option>
                            <option value={`${day + 4}/${month}/${year} 19:00`} >{`${day + 4}/${month}/${year} 19:00`}
                            </option>
                            <option value={`${day + 5}/${month}/${year} 03:00`} >{`${day + 5}/${month}/${year} 03:00`}
                            </option>
                            <option value={`${day + 6}/${month}/${year} 23:00`} >{`${day + 6}/${month}/${year} 23:00`}
                            </option>
                            <option value={`${day + 7}/${month}/${year} 11:00`} >{`${day + 7}/${month}/${year} 11:00`}
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
                </form>}
                {currentIndex === 1 ? <div className='ticket-buttons'>
                    <button style={{backgroundColor: '#91C870', color: '#424242'}} type='submit' onClick={handleSubmit}>Finalizar</button>
                    <button onClick={handleBack}>Volver</button>
                </div> 
                : <div className='ticket-buttons'>
                    <button type='submit' onClick={handleSubmit}>Continuar</button>
                    <button onClick={handleReset}>Reiniciar</button>
                </div>}
            </div>
        </main>
     );
}
 
export default Ticket;