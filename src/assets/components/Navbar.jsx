import Button from 'react-bootstrap/Button';
const Navbar = () =>{
    const total = 25000;
    const token = false;
    return(
        <>
            <div className="navbar">           
                <div className='botones-izquierda'>
                    <h2>"Pizzería Mamma Mia"</h2>
                    <Button variant="outline-light">Home</Button>
                    {token == false ?(
                        <>
                            <Button variant="outline-light">Login </Button>
                            <Button variant="outline-light">Register </Button>
                        </>
                    ):(
                        <>
                            <Button variant="outline-light">Profile </Button>
                            <Button variant="outline-light">Logout </Button>
                        </>
                    )
                    }
                </div>
                <Button className='boton-total' variant='outline-info'>Total: ${total.toLocaleString()} </Button>
            </div>
        </>
    );
};

export default Navbar;