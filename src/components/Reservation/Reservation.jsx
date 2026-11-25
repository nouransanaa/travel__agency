import { useState } from "react";
import styles from "./Reservation.module.css";

function Reservation() {
    const[nom, setNom]= useState("");
    const[email, setEmail]= useState("");
    const[telephone, setTelephone]= useState("");

    const[reservation, setReservation] = useState (null);
    const[erreurs, setErreurs] = useState ({});
    const [showPopup, setShowPopup] = useState(false);

    function effacerErreur(champ){
        setErreurs((prev) => 
        {
            const nouvellesErreurs = { ... prev};
            delete nouvellesErreurs[champ];
            return nouvellesErreurs;
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const nouvellesErreurs = {};

        if (!nom.trim()) nouvellesErreurs.nom = "Veuillez entrer votre nom.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            nouvellesErreurs.email = "Veuillez entrer une adresse email valide.";
        }
        if (!telephone.trim()) nouvellesErreurs.telephone = "Veuillez entrer votre téléphone.";

        setErreurs(nouvellesErreurs);
        if (Object.keys(nouvellesErreurs).length === 0) {
            setReservation({ nom, email, telephone });
            setShowPopup(true);
        }
    }
    



    return (
        <section className={styles.container}>
            <h2>Réserver votre voyage</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>Nom et prénom :</label>
                    <input
                    type="text"
                    className={erreurs.nom ? styles.inputError : ""}
                    value={nom}
                    onChange={(e) => {
                        setNom(e.target.value);
                        effacerErreur("nom");
                    }}
                    placeholder="Votre nom et prénom"
                    />
                    {erreurs.nom && (
                        <span className={styles.errorMessage}>
                            {erreurs.nom}
                        </span>
                    )
                    }
                    <br />
                    <label>email:</label>
                    <input
                    type="text"
                    className={erreurs.email ? styles.inputError : ""}
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        effacerErreur("email");
                    }}
                    placeholder="Votre email"
                    />
                    {erreurs.email && (
                        <span className={styles.errorMessage}>
                            {erreurs.email}
                        </span>
                    )
                    }
                    <br />
                    <label>Telephone:</label>
                    <input
                    type="text"
                    className={erreurs.telephone ? styles.inputError : ""}
                    value={telephone}
                    onChange={(e) => {
                        setTelephone(e.target.value);
                        effacerErreur("telephone");
                    }}
                    placeholder="Votre telephone"
                    />
                    {erreurs.telephone && (
                        <span className={styles.errorMessage}>
                            {erreurs.telephone}
                        </span>
                    )
                    }



                </div>

                <button type="submit">Confirmer la réservation</button>
            </form>
            {showPopup && reservation && (
                <p role="status">Merci {reservation.nom}, votre demande de réservation est enregistrée.</p>
            )}

        </section>
    )
}

export default Reservation;