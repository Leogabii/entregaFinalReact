import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./Footer.css";

export const Footer = () => {
  const [nosotros, setNosotros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const nosotrosDB = collection(db, "nosotros");

    getDocs(nosotrosDB)
      .then((resp) => {
        setNosotros(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      })
      .catch((err) => console.log("Hubo un error:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <footer className="footer">
      <div className="footer__info">
        <span className="footer__empresa">⌚ Relojería Cronos</span>
        <span>Belgrano, CABA · cronos@relojeria.com</span>
        <span>+54 11 4444-5555</span>
      </div>

      <div className="footer__personas">
        {loading && <p>Cargando equipo...</p>}
        {nosotros.map((persona) => (
          <div key={persona.id} className="footer__persona">
            <img src={persona.foto} alt={persona.nombre} width="50" height="50" />
            <strong>{persona.nombre}</strong>
            <span>{persona.puesto}</span>
            <span>{persona.email}</span>
          </div>
        ))}
      </div>
    </footer>
  );
};
