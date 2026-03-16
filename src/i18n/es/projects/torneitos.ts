import type { ProjectData } from '../../types';

export const torneitos: ProjectData = {
  summary: {
    id: 2,
    slug: 'torneitos',
    title: 'Torneitos',
    category: 'Caso de Estudio 02',
    description: 'Una aplicación web moderna para la gestión de torneos de fútbol, fixtures y tablas de clasificación.',
    tags: ['React', 'Vite', 'Supabase'],
    image: "/images/torneitos/hero.webp"
  },
  detail: {
    id: 2,
    slug: 'torneitos',
    title: 'Torneitos',
    category: 'Caso de Estudio 02',
    subtitle: 'Plataforma Full-Stack de Gestión Deportiva',
    tags: ['React', 'Vite', 'Supabase'],
    overview: {
      title: 'Visión General del Proyecto',
      paragraphs: [
        'Torneitos nace para resolver la fricción real de organizar competencias entre amigos. Antes de esta plataforma, el proceso era caótico y fragmentado: debíamos saltar entre múltiples páginas para sortear equipos de forma aleatoria y luego utilizar otras herramientas externas o planillas de cálculo para crear el fixture y registrar los puntos. En ese ida y vuelta, el historial de las temporadas solía perderse en grupos de chat u hojas de Excel olvidadas.',
        'Esta solución centraliza todo el ciclo de vida de una competencia en una única herramienta <bold>Full Stack</bold>. Lo que antes requería gestionar tres o cuatro pestañas abiertas, ahora se resuelve en un entorno unificado que permite pasar del sorteo inicial al pitido de inicio en cuestión de minutos.',
      ]
    },
    features_structured: {
      sectionTitle: 'La Solución',
      sectionSubtitle: 'Simple por fuera, robusta por dentro.',
      items: [
        {
          title: 'Flexibilidad de Formatos',
          description: 'Desde [bold]Torneos Rápidos[/bold] para una tarde de juego hasta complejas [bold]Tablas Anuales[/bold] que agrupan múltiples competiciones.',
        },
        {
          title: 'Colaboración Real-Time',
          description: 'Enlaces de solo lectura vs. edición. Múltiples administradores pueden cargar resultados simultáneamente con recálculo instantáneo.',
        },
        {
          title: 'Cero Fricción',
          description: 'Sin registro de cuentas. Diseño [bold]Mobile-First[/bold] perfecto para un uso rápido y sencillo.',
        }
      ]
    },
    flowSteps: [
      {
        step: '1',
        title: 'Registro de Jugadores',
        desc: 'Ingreso rápido de nombres para identificar a cada competidor en la base de datos.',
        image: '/images/torneitos/flow/flow-1.webp'
      },
      {
        step: '2',
        title: 'Selección de Equipos',
        desc: 'Selección de equipos manual o automática y carga de equipos personalizados vía API.',
        image: '/images/torneitos/flow/flow-2.1.webp',
        image2: '/images/torneitos/flow/flow-2.2.webp'
      },
      {
        step: '3',
        title: 'Asignación Aleatoria',
        desc: 'Una herramienta de ruleta integrada que vincula automáticamente a cada participante con su equipo.',
        image: '/images/torneitos/flow/flow-3.1.webp',
        image2: '/images/torneitos/flow/flow-3.2.webp'
      },
      {
        step: '4',
        title: 'Configuración de Reglas',
        desc: 'Definición del formato de competición (Ida o Ida y Vuelta) y nombre del torneo.',
        image: '/images/torneitos/flow/flow-4.webp'
      },
      {
        step: '5',
        title: 'Lanzamiento',
        desc: 'Un resumen final de validación antes de generar el fixture y la tabla de posiciones en vivo.',
        image: '/images/torneitos/flow/flow-5.webp'
      }
    ],
    flowTitle: 'El Flujo',
    flowSection: {
      sectionSubtitle: '/// De la idea al torneo',
      sectionTitle: 'El Flujo',
      steps: []
    },
    techStack_structured: {
      sectionTitle: 'Inmersión Técnica',
      sectionDesc: 'Torneitos no es solo una cara bonita; está construido sobre una arquitectura sólida diseñada para la escalabilidad.',
      frontend: {
        label: 'Frontend',
        items: [
          { key: 'Core:', value: 'React + TypeScript + Vite' },
          { key: 'UI:', value: 'Radix UI + Tailwind CSS' },
          { key: 'Forms:', value: 'React Hook Form + Zod' },
        ]
      },
      backend: {
        label: 'Backend',
        items: [
          { key: 'Core:', value: 'Node.js + Express 5.1 (ES Modules)' },
          { key: 'DB:', value: 'PostgreSQL sobre Supabase' },
          { key: 'Seguridad:', value: 'Validación estricta con Zod' },
        ]
      }
    }
  }
};
