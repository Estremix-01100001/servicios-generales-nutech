export interface Service {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  description: string;
  features: string[];
  hasButton?: boolean;
}

export const services: Service[] = [
  {
    id: "rpa",
    title: "RPA",
    subtitle: "Robotic Process Automation",
    image: "/rpa.png",
    description: "SERVICIOS DE RPA E IA QUE AUMENTARÁN LA PRODUCTIVIDAD",
    features: [
      "Automatización robótica de procesos empresariales",
      "Eliminación de tareas repetitivas y monótonas", 
      "Aumento de productividad y eficiencia",
      "Reducción de errores humanos"
    ]
  },
  {
    id: "human-robot",
    title: "Colaboración Humano-Robot",
    image: "/human-robot.png",
    description: "SOLUCIONES DE AUTOMATIZACIÓN PARA DIFERENTES INDUSTRIAS",
    features: [
      "Colaboración entre humanos y robots en procesos industriales",
      "Optimización de flujos de trabajo híbridos",
      "Interfaces intuitivas para operación conjunta",
      "Capacitación para equipos de trabajo mixtos"
    ],
    hasButton: true
  },
  {
    id: "ai",
    title: "Inteligencia Artificial", 
    image: "/automatización.png",
    description: "PIONEROS EN LA AUTOMATIZACIÓN DE PROCESOS EMPRESARIALES",
    features: [
      "Inteligencia artificial para toma de decisiones",
      "Machine Learning y análisis predictivo",
      "Chatbots y asistentes virtuales inteligentes",
      "Procesamiento de lenguaje natural"
    ]
  }
];
