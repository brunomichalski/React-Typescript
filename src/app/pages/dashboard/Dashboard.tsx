import { useContext } from "react";
import { Link } from "react-router-dom";
import { UsuariologadoContext } from "../../shared/contexts";

export const Dashboard = () => {

    const usuarioLogadoContext = useContext(UsuariologadoContext)

    return (
        <div>
            <p>Dashboard</p>
            <Link to="/entrar">Login</Link>
        </div>
    );
};
