import type { ProjectData } from '../../types';

export const dilegno: ProjectData = {
  summary: {
    id: 4,
    slug: 'dilegno',
    title: 'Dilegno',
    category: 'Caso de Estudio 04',
    description: 'Rediseño integral de una web de venta de maderas. Transformación de una experiencia obsoleta a una identidad digital premium y funcional.',
    tags: ["E-commerce", "Digital Transformation", "UX/UI Design"],
    image: "/images/dilegno/hero.webp"
  },
  detail: {
    id: 4,
    slug: 'dilegno',
    title: 'Dilegno',
    category: 'Caso de Estudio 04',
    subtitle: 'De la obsolescencia técnica a la excelencia digital.',
    overview: {
      title: 'Visión General',
      paragraphs: [
        'Transformación digital completa para una empresa maderera líder con 30 años de trayectoria.'
      ]
    },
    origin: {
      spanSection: '01. El Origen',
      title: 'Honrando un legado de [italic-style]30 años[/italic-style].',
      paragraph: 'Dilegno no es una startup; es una institución en la industria maderera con tres décadas de historia. Sin embargo, su presencia digital estaba atrapada en el pasado. El sitio anterior sufría de tiempos de carga abismales, un sistema de login roto que frustraba a los carpinteros y una estética que no reflejaba la trayectoria en el mercado.',
      problem: {
        title: 'El Problema',
        desc: 'Fricción alta. Clientes abandonando carritos por procesos de registro obligatorios y lentos.'
      },
      mission: {
        title: 'La Misión',
        desc: 'Crear una herramienta utilitaria accesible. Tecnología que se siente tan natural como lijar madera.'
      }
    },
    impact: {
      sectionTitle: '03. Impacto',
      title: 'Transformación Radical',
      items: [
        {
          category: 'DISEÑO & PERCEPCIÓN',
          before: 'Estética desfasada. No reflejaba la trayectoria ni la calidad de la empresa.',
          afterTitle: 'Identidad Premium',
          afterDesc: 'Diseño moderno que posiciona a la marca como líder.',
          badge: 'Impacto: Mayor Confianza Visual'
        },
        {
          category: 'RETENCIÓN & SEO',
          before: 'Lentitud exasperante (+8s). Rebote alto por espera.',
          afterTitle: 'Velocidad Instantánea',
          afterDesc: 'Next.js + Server Components. Carga en milisegundos.',
          badge: 'Impacto: Mayor Retención'
        },
        {
          category: 'CALIDAD DE DATOS',
          before: 'Datos falsos permitidos. Registros "basura" sin validar.',
          afterTitle: 'Validación Robusta',
          afterDesc: 'Formularios inteligentes con Zod. Datos reales y útiles.',
          badge: 'Impacto: Base de Datos Limpia'
        }
      ]
    },
    techStack_dilegno: {
      sectionTitle: '05. Arquitectura',
      title: 'Tecnología al Servicio de la Madera',
      sectionDesc: 'Para lograr la velocidad instantánea que requerían los catálogos, se utiliza la última versión de [bold]Next.js 16[/bold] con [bold]React 19[/bold]. Se utiliza [bold]Radix UI[/bold] para prototipo y [bold]Tailwind 4[/bold] para diseño.[br]La calidad está garantizada por [bold]TypeScript 5[/bold] para tipado estricto y [bold]Biome[/bold], reduciendo tiempos de build y asegurando una arquitectura limpia y escalable.',
    },
    comparisons_structured: {
      sectionTitle: 'Transformación Total',
      sectionSubtitle: 'Análisis Visual [italic-style]Detallado[/italic-style]',
      sectionDesc: 'Desliza para explorar la evolución pantalla por pantalla.',
      items: [
        {
          id: 'home',
          title: '1. El Hero & Recorrido del Cliente',
          subtitle: 'Impacto inicial + Experiencia de usuario completa.',
          before: {
            label: '2019 - Inicio sin Identidad',
            points: [
              '[bold]Estatismo:[/bold] Banner estático (imagen única).',
              '[bold]SEO Nulo:[/bold] Texto "quemado" en la imagen.',
              '[bold]Caos:[/bold] Lista de productos desordenada.',
              '[bold]Diseño:[/bold] Sin jerarquía visual clara.'
            ]
          },
          after: {
            label: '2025 - Recorrido Estratégico',
            points: [
              '[bold]Composición:[/bold] Imagen + Texto + SVG.',
              '[bold]Recorrido:[/bold] Categorías → Placas Destacadas.',
              '[bold]Servicios:[/bold] Sección dedicada e informativa.',
              '[bold]Conversión:[/bold] Productos Destacados + CTA Final.'
            ]
          }
        },
        {
          id: 'navegacion',
          title: '2. Navegación Intuitiva',
          subtitle: 'De perderse en menús a encontrar todo en un clic.',
          before: {
            label: '2019 - Información Invasiva',
            points: [
              '[bold]Navbar:[/bold] Estático (obliga al scroll).',
              '[bold]Footer:[/bold] Confuso y mal estructurado.',
              '[bold]WhatsApp:[/bold] Intrusivo (tapa contenido).',
              '[bold]Layout:[/bold] Desordenado, mucho "ruido".'
            ]
          },
          after: {
            label: '2025 - Navegación Clean',
            points: [
              '[bold]Navbar:[/bold] Organizado + Dropdowns claros.',
              '[bold]Footer:[/bold] Estructurado + Iconos + Botones reales.',
              '[bold]UX:[/bold] WhatsApp circular no intrusivo.',
              '[bold]Contacto:[/bold] Movido a CTA principal.'
            ]
          }
        },
        {
          id: 'quienes-somos',
          title: '3. Quiénes Somos',
          subtitle: 'De "Texto de relleno" a "Identidad de Marca".',
          before: {
            label: '2019 - Texto Plano',
            points: [
              '[bold]Contenido:[/bold] Texto plano "Misión / Visión" genérico.',
              '[bold]Formato:[/bold] Bloques densos de difícil lectura.',
              '[bold]Enfoque:[/bold] Impersonal, sin historia de origen.'
            ]
          },
          after: {
            label: '2025 - Identidad Real',
            points: [
              '[bold]Storytelling:[/bold] Historia real (30 años) primero.',
              '[bold]Misión/Visión:[/bold] Estructurada en bloques visuales.',
              '[bold]Identidad:[/bold] Foco humano y trayectoria real.'
            ]
          }
        },
        {
          id: 'catalogo',
          title: '4. Catálogo de Productos',
          subtitle: 'La diferencia entre "mirar" y "comprar".',
          before: {
            label: '2019 - Paginación Básica',
            points: [
              '[bold]Navegación:[/bold] Paginación tediosa y vista de lista básica.',
              '[bold]Visual:[/bold] Falta de jerarquía, los elementos se mezclan con el fondo.',
              '[bold]UX:[/bold] Sin filtros, difícil encontrar algo específico.'
            ]
          },
          after: {
            label: '2025 - Experiencia de Compra',
            points: [
              '[bold]Filtrado:[/bold] Avanzado (Breadcrumbs + Sidebar).',
              '[bold]Impacto:[/bold] Alto contraste y jerarquía visual clara.',
              '[bold]Conversión:[/bold] Precios claros y stock visible.'
            ]
          }
        },
        {
          id: 'servicios',
          title: '5. Servicios',
          subtitle: 'Tangibilizando la experiencia.',
          before: {
            label: '2019 - Lista Plana',
            points: [
              '[bold]Contenido:[/bold] Lista plana de servicios (texto puro).',
              '[bold]Proceso:[/bold] Oculto, generaba dudas al contratar.',
              '[bold]Visual:[/bold] Diseño monótono que no invita a leer.'
            ]
          },
          after: {
            label: '2025 - Proceso Claro',
            points: [
              '[bold]Educación:[/bold] Infografía "Paso a Paso" interactiva.',
              '[bold]Claridad:[/bold] Iconos representativos por servicio.',
              '[bold]Acción:[/bold] CTAs contextuales ("Comenzar Ahora").'
            ]
          }
        },
        {
          id: 'contacto',
          title: '6. Contacto',
          subtitle: 'Menos adornos, más datos.',
          before: {
            label: '2019 - Distracción',
            points: [
              '[bold]Ausencia de Datos:[/bold] Falta total de información de contacto (teléfono, mail, horarios).',
              '[bold]Layout:[/bold] Solo cuenta con un formulario y un mapa.',
              '[bold]Formulario:[/bold] Genérico, sin validaciones visibles.'
            ]
          },
          after: {
            label: '2025 - Conexión Real',
            points: [
              '[bold]Estructura:[/bold] Tarjeta de datos clara (Horarios, Dirección).',
              '[bold]Foco:[/bold] Formulario limpio que invita a conectar.',
              '[bold]UX:[/bold] Validaciones en tiempo real (Zod) y feedback.'
            ]
          }
        },
        {
          id: 'trabajo',
          title: '7. Únete al Equipo',
          subtitle: 'Employer Branding real.',
          before: {
            label: '2019 - Formulario Oculto',
            points: [
              '[bold]Reutilización:[/bold] Mismo layout que Contacto (con mapa innecesario).',
              '[bold]Propuesta:[/bold] Sin razón para unirse.',
              '[bold]Visual:[/bold] Genérico, no transmitía cultura.'
            ]
          },
          after: {
            label: '2025 - Employer Branding',
            points: [
              '[bold]Employer Branding:[/bold] "Vendemos" la empresa al talento.',
              '[bold]Contenido:[/bold] Sección de Beneficios (Trayectoria, Ambiente).',
              '[bold]UX:[/bold] Formulario dedicado sin distracciones.'
            ]
          }
        }
      ]
    }
  }
};
