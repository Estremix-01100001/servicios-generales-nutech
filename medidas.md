# 📐 Medidas y Guías de Diseño - Nutech

## 1. 🎯 Logo Sizes

### Header Logo
- **Mobile (0-767px)**: 56x56px
- **Tablet (768px-1023px)**: 80x80px
- **Desktop (1024px+)**: 128x128px
- **Clase CSS**: `w-[56px] h-[56px] md:w-[80px] md:h-[80px] lg:w-[128px] lg:h-[128px]`

### Favicon
- **Formato**: PNG
- **Ubicación**: `/favicon.png`
- **Uso**: Pestaña del navegador y logo del header

## 2. 📦 Container Dimensions

### Max Width
- **Desktop**: `container mx-auto` (máximo 1280px)
- **Padding horizontal**: `px-4 sm:px-6 md:px-8 lg:px-36 xl:px-44 2xl:px-52` (16px → 24px → 32px → 144px → 176px → 208px)

### Section Containers
- **Padding vertical**: `py-8 sm:py-12 lg:py-16` (32px → 48px → 64px)

## 3. 🔲 Borders and Border Radius

### Border Radius
- **Botones**: `rounded-lg` (8px)
- **Cards**: `rounded-xl` (12px)
- **Inputs**: `rounded-lg` (8px)

### Borders
- **Thickness**: `border-2` (2px)
- **Color**: `border-white/20` (blanco con 20% opacidad)

## 4. 📏 Margins per Device

### Vertical Margins
- **Mobile**: `mb-4` (16px)
- **Tablet**: `mb-6` (24px)
- **Desktop**: `mb-8` (32px)

### Horizontal Margins
- **Mobile**: `mx-4` (16px)
- **Desktop**: `mx-6` (24px)

## 5. 📝 Text Content Padding

### Headings
- **H1**: `py-4` (16px vertical)
- **H2**: `py-3` (12px vertical)
- **H3**: `py-2` (8px vertical)

### Paragraphs
- **Mobile**: `px-4 py-2` (16px horizontal, 8px vertical)
- **Desktop**: `px-6 py-3` (24px horizontal, 12px vertical)

## 6. 🎨 Color Palette

### Primary Colors
- **Primary**: `#3B82F6` (blue-500)
- **Secondary**: `#1E40AF` (blue-800)
- **Accent**: `#F59E0B` (amber-500)

### Background Colors
- **Header**: `bg-secondary-900/90` (gris oscuro con 90% opacidad)
- **Sections**: `bg-white` o `bg-gray-50`
- **Cards**: `bg-white`

### Text Colors
- **Primary text**: `text-gray-900`
- **Secondary text**: `text-gray-600`
- **White text**: `text-white`
- **Accent text**: `text-blue-600`

### Border Colors
- **Light borders**: `border-gray-200`
- **Dark borders**: `border-white/20`

## 7. 🔤 Typography

### Font Family
- **Primary**: `Inter` (Google Fonts)
- **Fallback**: `font-sans`

### Font Sizes
- **H1**: `text-4xl sm:text-5xl lg:text-6xl` (36px → 48px → 60px)
- **H2**: `text-3xl sm:text-4xl` (30px → 36px)
- **H3**: `text-2xl sm:text-3xl` (24px → 30px)
- **H4**: `text-xl sm:text-2xl` (20px → 24px)
- **Base text**: `text-base` (16px)
- **Small text**: `text-sm` (14px)

### Font Weights
- **Bold**: `font-bold` (700)
- **Semibold**: `font-semibold` (600)
- **Medium**: `font-medium` (500)
- **Normal**: `font-normal` (400)

## 8. 🎯 Content and Icon Alignment

### Grid Systems
- **Services grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- **Partners grid**: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6`
- **Cards gap**: `gap-6` (24px)

### Text Alignment
- **Headers**: `text-center`
- **Cards**: `text-left`
- **Buttons**: `text-center`

### Icon Sizes
- **Small icons**: `w-6 h-6` (24x24px)
- **Medium icons**: `w-8 h-8` (32x32px)
- **Large icons**: `w-12 h-12` (48x48px)

## 9. 🖼️ Image Behavior and Dimensions

### Hero Video/Image
- **Height**: `min-h-[70vh]` en mobile, `h-screen` (100vh) en tablet, `min-h-[120vh]` en desktop (más alto)
- **Alineación**: `items-start sm:items-center` (contenido arriba en mobile, centrado en desktop)
- **Padding contenido**: `pt-2 sm:pt-0 lg:pt-[-200px]` (8px mobile, 0px tablet, -200px desktop - contenido muy cerca del header en PC)
- **Object fit**: `object-cover`
- **Dark overlay**: `bg-black/40` (40% opacidad negra para reducir brillo)
- **Gradient overlay**: `bg-gradient-to-br from-blue-900/30 via-transparent to-orange-900/30`
- **Z-index layers**: Video (z-1) → Dark overlay (z-2) → Gradient overlay (z-3) → Content (z-10)

### Service Images
- **Card images**: `h-48 sm:h-52` (192px → 208px)
- **Object fit**: `object-cover`
- **Border radius**: `rounded-t-xl`

### Partner Logos
- **Size**: `h-12 w-auto` (48px height)
- **Object fit**: `object-contain`
- **Filter**: `grayscale hover:grayscale-0 transition-all`

## 10. 📋 Header Dimensions

### Header Position & Style
- **Position**: `fixed top-0 left-0 right-0` (fijo en la parte superior)
- **Background**: `bg-secondary-900/40` (40% opacidad - muy transparente)
- **Backdrop**: `backdrop-blur-sm` (efecto blur sutil)
- **Z-index**: `z-50` (capa superior)

### Header Height
- **Padding vertical**: `py-4 lg:py-1` (16px mobile / 4px desktop)
- **Total height**: ~88px (mobile con favicon 56px) / ~136px (desktop con favicon 128px - más compacto)

### Hero Section Compensation
- **Padding top**: `pt-24 lg:pt-32` (96px mobile / 128px desktop para compensar header fixed)

### Navigation
- **Link spacing**: `space-x-6 xl:space-x-8` (24px → 32px)
- **Mobile menu**: `space-y-3` (12px vertical)

### Logo Container
- **Spacing**: `space-x-3` (12px entre logo y texto)
- **Logo sizes**: Ver sección 1

## 11. 🎨 Visual Effects and Interactions

### Box Shadows
- **Cards**: `shadow-lg` (0 10px 15px -3px rgba(0, 0, 0, 0.1))
- **CTA Cards**: `shadow-xl` (0 20px 25px -5px rgba(0, 0, 0, 0.1))
- **Hover effects**: `hover:shadow-2xl` (0 25px 50px -12px rgba(0, 0, 0, 0.25))

### Transitions
- **Duration**: `transition-all duration-300` (300ms)
- **Easing**: `ease` (default)
- **Hover states**: `hover:scale-105` (5% scale increase)

### Z-Index Layers
- **Header**: `z-50` (fijo superior)
- **Hero content**: `z-10` (sobre video/background)
- **Background**: `z-0` (fondo)
- **Modal/Overlay**: `z-40` (entre header y fondo)

## 12. 🎭 Animation and Loading States

### Animation Delays
- **Staggered animations**: `0.1s`, `0.2s`, `0.3s` (incrementales)
- **Letter animations**: `120ms` por letra
- **Cycle pause**: `2000ms` (2 segundos)

### Loading States
- **Skeleton loading**: `animate-pulse` (Tailwind)
- **Spinner**: `animate-spin` (Tailwind)
- **Fade in**: `animate-fade-in-up` (custom)

## 13. 📱 Responsive Breakpoints

### Tailwind Defaults
- **Mobile**: 0-639px (default)
- **Tablet**: 640px+ (`sm:`)
- **Desktop**: 768px+ (`md:`)
- **Large**: 1024px+ (`lg:`)
- **XL**: 1280px+ (`xl:`)
- **2XL**: 1536px+ (`2xl:`)

### Custom Breakpoints
- **Hero text**: `xl:text-7xl` (1280px+)
- **Logo sizes**: `sm:w-[40px]` (640px+)
- **Grid columns**: `lg:grid-cols-3` (1024px+)

## 14. 🔧 Component States

### Button States
- **Default**: `bg-white text-blue-600`
- **Hover**: `hover:bg-blue-50`
- **Active**: `active:scale-95`
- **Disabled**: `opacity-50 cursor-not-allowed`

### Form States
- **Focus**: `focus:ring-2 focus:ring-blue-500`
- **Error**: `border-red-500 text-red-600`
- **Success**: `border-green-500 text-green-600`

### Interactive Elements
- **Hover lift**: `hover:-translate-y-1` (4px up)
- **Click feedback**: `active:scale-95` (5% down)

---

## 📋 Uso de estas Medidas

1. **Consistencia**: Todas las secciones deben seguir estas medidas
2. **Responsive**: Siempre considerar mobile, tablet y desktop
3. **Actualización**: Si cambias algo aquí, confirma antes de aplicar globalmente
4. **Referencia**: Usar este archivo como guía para nuevos componentes
5. **Simetría**: Mantener proporciones y espaciado uniforme
6. **Performance**: Optimizar animaciones y transiciones

---

*Última actualización: Enero 2025*
*Proyecto: Nutech - Servicios Generales*
