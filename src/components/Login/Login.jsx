
import { useState } from "react";
import "./Login.module.css";

function Login() {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [error, SetError] = useState({});

    function handleSubmit(e) {
        e.preventDefault();

        let newError = {};

        // Vérification de l'email
        if (!email.trim()) {
            newError.email = "Veuillez introduire votre email";
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            newError.email = "Email invalide";
        }

        // Vérification du mot de passe
        if (!password.trim()) {
            newError.password = "Veuillez introduire votre mot de passe";
        }
        else if (password.length < 8) {
            newError.password = "Le mot de passe doit contenir au moins 8 caractères";
        }
        else if (!/[A-Z]/.test(password)) {
            newError.password = "Le mot de passe doit contenir au moins une lettre majuscule";
        }
        else if (!/[0-9]/.test(password)) {
            newError.password = "Le mot de passe doit contenir au moins un chiffre";
        }
        else if (!/[^a-zA-Z0-9]/.test(password)) {
            newError.password = "Le mot de passe doit contenir au moins un caractère spécial";
        }

        SetError(newError);

        if (Object.keys(newError).length === 0) {
            alert("Connexion valide !");
            console.log("Email:", email);
            console.log("Password:", password);
        }
    }

    return (
        <div className="login-container">

            <form onSubmit={handleSubmit}>

                <h2>Welcome Back</h2>

                <label htmlFor="email">Email :</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Saisir votre email"
                    value={email}
                    onChange={(e) => SetEmail(e.target.value)}
                />
                

                {error.email && (
                    <p className="error-message">{error.email}</p>
                )}

                <label htmlFor="password">Mot de passe :</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Saisir votre mot de passe"
                    value={password}
                    onChange={(e) => SetPassword(e.target.value)}
                />

                {error.password && (
                    <p className="error-message">{error.password}</p>
                )}

                <button type="submit">
                    Se connecter
                </button>

            </form>

        </div>
    );
}

export default Login;
