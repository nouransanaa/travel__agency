import styles from "./Destination.module.css";
import{useState} from "react";

function Destination(props){
    const {afficher,setAfficher} = useState(false);
    function genererDetail(){
        setAfficher(!afficher)
    }

    return (
        <div className={styles.destination}>
            <img
            className={styles.image}
            src={props.image}
            alt={props.nom} 
        />
        <div className={styles.content}>
                <h2 className={styles.nom}>{props.nom}</h2>
                <h3 className={styles.pays}>{props.pays}</h3>
                <p className={styles.description}>{props.description}</p>
                <h3 className={styles.prix}>${props.prix}</h3>

                <button onClick={genererDetail}>
                    {afficher ? "Cacher details" : "Afficher details"}
                </button>

            </div>
        
     </div>
    );
} 
export default Destination;