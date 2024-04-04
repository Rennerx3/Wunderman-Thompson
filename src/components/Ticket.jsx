const Ticket = () => {
    return ( 
        <main className="ticket">
            <div className="ticket-title">
                <h2>Comprar ticket</h2>
                <span>Selecciona una función</span>
            </div>
            <div className="ticket-form">
                <form>
                    <div className="div-input">
                        <label htmlFor="uno">Seleccione pelicula</label>
                        <select name="" id="uno">
                            <option value="John Wick 4" selected>John Wick 4</option>
                        </select>
                    </div>
                    <div className="div-input">
                        <select name="" id="">
                            <option value="John Wick 4" selected>John Wick 4</option>
                        </select>
                    </div>
                    <div className="div-input">
                        <select name="" id="">
                            <option value="John Wick 4" selected>John Wick 4</option>
                        </select>
                    </div>
                </form>
            </div>
        </main>
     );
}
 
export default Ticket;