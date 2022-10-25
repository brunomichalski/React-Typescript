import { createContext, useCallback } from "react";

interface IUsuarioLogadoContext {
    nomeUsuario: string,
    logout: () => void;
}

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode;
}

export const UsuariologadoContext = createContext<IUsuarioLogadoContext>({} as IUsuarioLogadoContext);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {

    const handleLogout = useCallback(() =>{
        console.log('Logout Executou');
        
    }, []);

    return (
        <UsuariologadoContext.Provider value={{ nomeUsuario: 'Bruno', logout: handleLogout}}>
            {children}
        </UsuariologadoContext.Provider>
    );
}