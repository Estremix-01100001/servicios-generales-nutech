# Servicios Generales Pro

Landing page profesional para empresa de servicios generales construida con Astro y Tailwind CSS.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Rendimiento Optimizado**: Construido con Astro para máxima velocidad
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- **SEO Optimizado**: Meta tags y estructura semántica
- **Modular**: Estructura de código escalable y mantenible

## 🛠️ Tecnologías

- [Astro](https://astro.build/) - Framework web moderno
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS utilitario
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Vite](https://vitejs.dev/) - Herramienta de construcción

## 📁 Estructura del Proyecto

```
src/
├── assets/                 # Recursos estáticos
│   ├── images/            # Imágenes del proyecto
│   ├── videos/            # Videos promocionales
│   └── icons/             # Iconos personalizados
├── components/            # Componentes reutilizables
│   ├── layout/            # Componentes de layout
│   ├── sections/          # Secciones de la página
│   └── ui/                # Componentes de interfaz
├── database/              # Datos y esquemas
│   ├── schema.ts          # Tipos y interfaces
│   └── data.ts            # Datos de ejemplo
├── layouts/               # Layouts de página
├── pages/                 # Páginas de la aplicación
├── styles/                # Estilos personalizados
│   ├── animations.css     # Animaciones CSS
│   ├── components.css     # Estilos de componentes
│   └── global.css         # Estilos globales
├── types/                 # Definiciones de tipos
└── utils/                 # Utilidades y helpers
```

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd landing-General-services
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run preview` - Vista previa de la construcción
- `npm run astro` - CLI de Astro

## 🎨 Personalización

### Colores
Los colores se pueden personalizar en `tailwind.config.mjs`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Colores primarios
      },
      secondary: {
        // Colores secundarios
      }
    }
  }
}
```

### Contenido
El contenido se puede modificar en `src/database/data.ts`:

- Información de la empresa
- Servicios ofrecidos
- Testimonios de clientes
- Información del equipo

### Estilos
Los estilos personalizados se encuentran en:

- `src/styles/animations.css` - Animaciones CSS
- `src/styles/components.css` - Estilos de componentes
- `src/styles/global.css` - Estilos globales

## 📱 Responsive Design

El diseño está optimizado para:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Despliegue

### Netlify
1. Conectar repositorio a Netlify
2. Configurar build command: `npm run build`
3. Configurar publish directory: `dist`

### Vercel
1. Conectar repositorio a Vercel
2. Framework preset: Astro
3. Deploy automático

### GitHub Pages
1. Habilitar GitHub Pages en el repositorio
2. Configurar source: GitHub Actions
3. Usar workflow de Astro

## 📊 SEO

El proyecto incluye:

- Meta tags optimizados
- Open Graph tags
- Twitter Card tags
- Estructura semántica HTML
- Sitemap automático

## 🔧 Desarrollo

### Estructura Modular
- **Componentes**: Reutilizables y modulares
- **Layouts**: Estructura base de páginas
- **Estilos**: Organizados por funcionalidad
- **Datos**: Separados de la lógica de presentación

### Mejores Prácticas
- Código limpio y documentado
- Componentes pequeños y enfocados
- Estilos consistentes con Tailwind
- Tipado fuerte con TypeScript

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📞 Soporte

Para soporte, contacta a:
- Email: info@serviciosgenerales.com
- Teléfono: +1 (813) 595-4933

---

Desarrollado con ❤️ para Servicios Generales Pro