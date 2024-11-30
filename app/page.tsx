import Card, { CardProps } from "./components/card/Card";
import { useState } from 'react';

export default function Home() {
  const [cardCount, setCardCount] = useState(6);

  const listaTarjetas: CardProps[] = [
    {
      title: "Proyecto de Innovación",
      description: "Explorando nuevas tecnologías emergentes",
      likes: 124
    },
    {
      title: "Diseño UX/UI",
      description: "Mejorando la experiencia del usuario",
      likes: 256
    },
    {
      title: "Desarrollo Web",
      description: "Creando soluciones digitales modernas",
      likes: 398
    },
    {
      title: "Análisis de Datos",
      description: "Insights desde la información",
      likes: 212
    },
    {
      title: "Marketing Digital",
      description: "Estrategias de crecimiento online",
      likes: 345
    },
    {
      title: "Inteligencia Artificial",
      description: "Aplicaciones de aprendizaje automático",
      likes: 467
    },
    {
      title: "Ciberseguridad",
      description: "Protegiendo activos digitales",
      likes: 289
    },
    {
      title: "Cloud Computing",
      description: "Infraestructura escalable y flexible",
      likes: 376
    },
    {
      title: "Blockchain",
      description: "Tecnología de registro distribuido",
      likes: 201
    },
    {
      title: "IoT y Conectividad",
      description: "Dispositivos inteligentes interconectados",
      likes: 312
    },
    {
      title: "Realidad Virtual",
      description: "Experiencias inmersivas innovadoras",
      likes: 187
    }
  ];
  
  return (
    <div className="container mx-auto">
      <h1 className="text-custom-blue-900 text-5xl font-Montserrat font-bold mb-8 text-center">
        Dashboard de Proyectos
      </h1>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {listaTarjetas.slice(0, cardCount).map((tarjeta, index) => (
            <Card 
              key={index}
              title={tarjeta.title}
              description={tarjeta.description}
              likes={tarjeta.likes}
            />
          ))}
        </div>
        {cardCount < listaTarjetas.length && (
          <button 
            onClick={() => setCardCount(prev => prev + 3)}
            className="mt-6 px-6 py-3 bg-custom-blue-500 text-white rounded-lg hover:bg-custom-blue-900 transition-colors"
          >
            Cargar más proyectos
          </button>
        )}
      </div>
    </div>
  );
}