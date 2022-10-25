import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";

export const Dashboard = () => {

    const {nomeUsuario} = useUsuarioLogado()

    return (
        <div>
            <p>Dashboard</p>
            <p>{nomeUsuario}</p>
            <Link to="/entrar">Login</Link>
        </div>
    );
};
