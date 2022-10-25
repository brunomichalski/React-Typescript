import { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContext {
    nomeUsuario: string,
    logout: () => void;
}

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode;
}

export const UsuariologadoContext = createContext<IUsuarioLogadoContext>({} as IUsuarioLogadoContext);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {

    const [nome, setNome] = useState('');

    useEffect(()=>{
        setTimeout(()=>{
            setNome('Bruno')
        })
    })

    const handleLogout = useCallback(() =>{
        console.log('Logout Executou');
    }, []);

    return (
        <UsuariologadoContext.Provider value={{ nomeUsuario: nome, logout: handleLogout}}>
            {children}
        </UsuariologadoContext.Provider>
    );
}