import { useRef, useState } from "react";

import { useUsuarioLogado } from "../../shared/hooks";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { nomeUsuario } = useUsuarioLogado()
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const handleEntrar = () => {
        console.log(email);
        console.log(password);
    };

    return (
        <div>
            <form action="">
                <InputLogin
                    label="Email"
                    value={email}
                    onChange={(newValue) => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    label="Senha"
                    value={password}
                    type="password"
                    ref={inputPasswordRef}
                    onChange={(newValue) => setPassword(newValue)}
                />

                <ButtonLogin
                    type="button"
                    onClick={handleEntrar}
                    children="Entrar"
                />
            </form>
        </div>
    );
};
