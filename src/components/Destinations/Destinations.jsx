import Destination from "../Destination/Destination";
import DestinationList from "../../Data/DestinationList";

import styles from "./Destinations.module.css";

function Destinations() {
  const destinations = DestinationList;

 

  return (
    <section className={styles.container}>

      <h1 className={styles.title}>
        Nos destinations
      </h1>

      <div className={styles.destinations}>

        {destinations.map((destination) => (
          <Destination
            key={destination.id}
            image={destination.image}
            nom={destination.nom}
            pays={destination.pays}
            description={destination.description}
            prix={destination.prix}
          />
        ))}

      </div>

    </section>
  );
}

export default Destinations;