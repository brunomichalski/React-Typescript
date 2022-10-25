import { useContext } from "react";
import { UsuariologadoContext } from "../contexts";


export const useUsuarioLogado = () => {
    const context = useContext(UsuariologadoContext);
    return context;
}