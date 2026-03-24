import Button from 'react-bootstrap/Button';

var CardPizza = ({img,name, price, ingredients}) =>{
    return(
        <>
            <div className='card'>
                <img src={img} alt={name}></img>
                <h2 className='borde'>{name}</h2>
                <div className='ingredientes, borde'>
                    <p>Ingredientes: </p>
                    <h4>{ingredients.join(", ")}</h4>
                </div>
                <div className='precios'>
                    <h3>Precio: ${price.toLocaleString('es-CL')}</h3>  
                    <div className='botones-card'>
                        <Button variant='light'>Ver más</Button>
                        <Button variant='dark'>Añadir</Button>
                    </div>
                </div>
            </div>
        </>   
    );
};

export default CardPizza;