import React, { useContext } from "react";
import { Link } from "react-router-dom";
//import { AddressBook } from "phosphor-react";
import "../hoja-de-estilos/navbar.css";
import { ShopContext } from "../context/shop-context";


export const Navbar = () => {
    const context = useContext(ShopContext);
    console.log(context.logged);
    return (
        <div className="navbar">
        { !context.admin ? 
            !context.logged ?
                <div className="links"> 
                    <Link to="/"> TiendaVirtual </Link> 
                    <Link to="/login">Iniciar sesión</Link>
                </div>
                :
                <div className="links">
                    <div >
                        <p className="bienvenido">Bienvenido {context.nombreUser} </p>
                    </div>
                    <div className="links">
                        <Link to="/shop"> Seguir Comprando </Link>
                        <Link to="/cart"> Pagar</Link>
                    </div>
                </div>
                
            :
            <div className="links">
                    <Link to="/editarInventario"> Editar inventario </Link>
                    <Link to="/editarPerfiles"> Administrar usuarios </Link>
            </div>
        }
        </div>
    )
};