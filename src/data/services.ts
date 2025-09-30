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
    title: "",
    subtitle: "",
    image: "/servicios-generales-nutech/rpa.png",
    description: "",
    features: []
  },
  {
    id: "human-robot",
    title: "",
    subtitle: "",
    image: "/servicios-generales-nutech/human-robot.png",
    description: "",
    features: [],
    hasButton: true
  },
  {
    id: "ai",
    title: "",
    subtitle: "",
    image: "/servicios-generales-nutech/automatización.png",
    description: "",
    features: []
  }
];
