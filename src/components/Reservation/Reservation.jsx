import { useState } from "react";
import styles from "./Reservation.module.css";

 function Reservation (){
    const[nom, setNom]= useState("");
    const[email, setEmail]= useState("");
    const[telephone, setTelephone]= useState("");

    const[reservation, setReservation] = useState (null);
    const[erreurs, setErreurs] = useState ({});
    const[showPopup, setshowPopup] = useState (false);

    function effacerErreur(champ){
        setErreurs((prev) => 
        {
            const nouvellesErreurs = { ... prev};
            delete nouvelleErreur[champ];
            return nouvelleErreur;
        })
    }
    



    return (
        <section className={styles.container}>
            <h2>Réserver votre voyage</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>Nom et prénom :</label>
                    <input
                    type="text"
                    className={erreur.nom ? styles.inputError :""}
                    value={nom}
                    onChange={(e) => {
                        setNom(e.target.value);
                        effacerErreur("nom");
                    }}
                    placeholder="Votre nom et prénom"
                    />
                    {erreur.nom && (
                        <span className={styles.errorMessage}>
                            {erreur.nom}
                        </span>
                    )
                    }
                    <br />
                    <label>email:</label>
                    <input
                    type="text"
                    className={erreur.email ? styles.inputError :""}
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        effacerErreur("email");
                    }}
                    placeholder="Votre email"
                    />
                    {erreur.email && (
                        <span className={styles.errorMessage}>
                            {erreur.email}
                        </span>
                    )
                    }
                    <br />
                    <label>Telephone:</label>
                    <input
                    type="text"
                    className={erreur.telephone ? styles.inputError :""}
                    value={telephone}
                    onChange={(e) => {
                        setTelephone(e.target.value);
                        effacerErreur("telephone");
                    }}
                    placeholder="Votre telephone"
                    />
                    {erreur.telephone && (
                        <span className={styles.errorMessage}>
                            {erreur.telephone}
                        </span>
                    )
                    }



                </div>

            </form>

        </section>
    )
 }