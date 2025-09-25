# Componentes

Esta carpeta contiene todos los componentes reutilizables de la aplicación.

## Estructura

```
components/
├── layout/           # Componentes de layout (Header, Footer)
├── sections/         # Secciones específicas (Hero)
├── ui/              # Componentes de interfaz reutilizables
└── README.md        # Esta documentación
```

## Convenciones

### Naming
- **PascalCase** para nombres de componentes
- **Motion** prefix para componentes con animaciones
- **Descriptivo** y claro sobre la funcionalidad

### Props
- Usar interfaces TypeScript para props
- Props opcionales marcadas con `?`
- Valores por defecto cuando sea apropiado

### Estilos
- Usar clases CSS semánticas (no inline)
- CSS organizado en archivos separados
- Responsive design con Tailwind

## Componentes Principales

### MotionContact
Formulario de contacto con validación y animaciones.

**Props:** Ninguna

**Features:**
- Validación en tiempo real
- Estados de carga
- Animaciones suaves
- Responsive design

### MotionPartners
Carousel infinito de logos de partners.

**Props:** Ninguna

**Features:**
- Scroll infinito automático
- Pausa en hover
- Animaciones de entrada
- Responsive design

### ServiceCard
Tarjeta individual de servicio.

**Props:**
- `service: Service` - Datos del servicio
- `delay?: number` - Delay para animación (opcional)

**Features:**
- Imagen con fallback
- Botón opcional
- Animaciones de hover
- Información estructurada

## Hooks Personalizados

### useForm
Hook para manejo de formularios con validación.

```typescript
const { formData, errors, isSubmitting, handleInputChange, handleSubmit } = useForm(initialData);
```

### useScrollPosition
Hook para detectar posición y dirección de scroll.

```typescript
const { x, y, direction, isScrolling } = useScrollPosition();
```

## Mejores Prácticas

1. **Separación de responsabilidades**: Cada componente tiene una responsabilidad específica
2. **Reutilización**: Componentes diseñados para ser reutilizables
3. **Accesibilidad**: Uso de semantic HTML y ARIA attributes
4. **Performance**: Lazy loading y optimizaciones
5. **Testing**: Componentes fáciles de testear
6. **Documentación**: Props y funcionalidad documentados
