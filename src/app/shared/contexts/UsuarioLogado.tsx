import { createContext } from "react";

interface IUsuarioLogadoContext {
    nomeUsuario: string,

}

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode;
}

export const UsuariologadoContext = createContext<IUsuarioLogadoContext>({} as IUsuarioLogadoContext);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {


    return (
        <UsuariologadoContext.Provider value={{ nomeUsuario: 'Bruno' }}>
            {children}
        </UsuariologadoContext.Provider>
    );
}