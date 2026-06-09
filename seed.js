import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSqQVJl1jm0JUZw8wnnMFt27Xa9TZjIpE",
  authDomain: "paintnumbers-2c99b.firebaseapp.com",
  projectId: "paintnumbers-2c99b",
  storageBucket: "paintnumbers-2c99b.firebasestorage.app",
  messagingSenderId: "185047203794",
  appId: "1:185047203794:web:327c112151543f7a68120b",
  measurementId: "G-H0G9T51440"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const products = [
  { name: "Cronos Classic", description: "Reloj de acero inoxidable con correa de cuero genuino. Movimiento automático suizo.", price: 85000, image: "https://i.ibb.co/gFm4yWk9/reloj-Pulsera.jpg" },
  { name: "Aqua Diver 200m", description: "Reloj sumergible hasta 200 metros. Ideal para buceo y deportes acuáticos.", price: 120000, image: "https://i.ibb.co/C33NxhLk/reloj-Oro.jpg" },
  { name: "Heritage Gold", description: "Reloj de oro 18k con esfera de nácar. Edición limitada de colección.", price: 310000, image: "https://i.ibb.co/4Z4pBQS7/reloj-Plata.jpg" },
  { name: "Sport Chrono", description: "Cronógrafo deportivo con funciones de cuenta regresiva y alarma.", price: 65000, image: "https://i.ibb.co/zH6jzmSv/cronometro.jpg" },
  { name: "Slim Elegance", description: "Diseño ultra delgado con malla milanesa. Perfecto para ocasiones formales.", price: 95000, image: "https://i.ibb.co/gFm4yWk9/reloj-Pulsera.jpg" },
  { name: "SmartTime Pro", description: "Reloj inteligente con monitor cardíaco, GPS y 7 días de batería.", price: 75000, image: "https://i.ibb.co/4ZyM2gPF/reloj-Inteligente.jpg" },
];

const nosotros = [
  { nombre: "Carlos Méndez", puesto: "Fundador", email: "carlos@cronos.com", foto: "https://i.ibb.co/wr60mygP/carlos.jpg" },
  { nombre: "Laura Gómez", puesto: "Diseñadora", email: "laura@cronos.com", foto: "https://i.ibb.co/CszMFrLR/laura.jpg" },
  { nombre: "Martín Ríos", puesto: "Técnico Relojero", email: "martin@cronos.com", foto: "https://i.ibb.co/Wp7bxq8H/martin.jpg" },
  { nombre: "Sofía Torres", puesto: "Atención al cliente", email: "sofia@cronos.com", foto: "https://i.ibb.co/xK8MJHxj/sofia.jpg" },
];

const cargarColeccion = async (nombreColeccion, datos) => {
  const col = collection(db, nombreColeccion);
  for (const item of datos) {
    await addDoc(col, item);
    console.log(`✅ ${nombreColeccion} - cargado:`, item.name || item.nombre);
  }
};

const main = async () => {
  await cargarColeccion("products", products);
  await cargarColeccion("nosotros", nosotros);
  console.log("🎉 Todo cargado correctamente");
};

main();