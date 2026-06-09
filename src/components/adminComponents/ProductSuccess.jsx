import { Link, useParams } from "react-router-dom";

export const ProductSuccess = () => {
  const { id } = useParams();

  return (
    <section className="success-page">
      <div className="success-icon">✅</div>
      <h2>Reloj cargado con éxito</h2>
      <p>ID de producto: {id}</p>
      <p>Podés cargar otro haciendo clic en el botón.</p>
      <Link className="btn bg-primary primary" to="/admin" replace>
        Agregar otro reloj
      </Link>
    </section>
  );
};
