import React from "react";

interface IButtonLogin {
    type?: "button" | "submit" | "reset";
    onClick: () => void;
    children: React.ReactNode;
}

export const ButtonLogin: React.FC<IButtonLogin> = ({
    type,
    onClick,
    children,
}) => {
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    );
};
