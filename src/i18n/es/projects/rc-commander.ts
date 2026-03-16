import type { ProjectData } from '../../types';

export const rcCommander: ProjectData = {
  summary: {
    id: 6,
    slug: 'rc-commander',
    title: 'RC Commander',
    category: 'Open Source Utility',
    description: 'Controla tu colección de coches RC Bluetooth con esta App Universal. Incluye Replay Studio y es 100% Open Source.',
    tags: ['React Native', 'Bluetooth BLE', 'Open Source'],
    image: '/images/rc-commander/hero.webp'
  },
  detail: {
    id: 6,
    slug: 'rc-commander',
    title: 'RC Commander',
    subtitle: 'App de Control RC Bluetooth Universal',
    category: 'Open Source Utility',
    tags: ['React Native', 'Bluetooth BLE', 'Open Source'],
    challenge: {
      title: 'El Problema',
      text: 'Muchos juguetes "inteligentes" dependen de apps propietarias que dejan de actualizarse o desaparecen de las tiendas, dejando los vehículos Bluetooth inutilizables.'
    },
    solution: {
      title: 'La Solución',
      text: 'Una aplicación universal que utiliza ingeniería inversa para comunicarse con múltiples protocolos Bluetooth Low Energy (BLE), permitiendo controlar una amplia gama de vehículos desde un solo lugar.'
    },
    techStack: [
      { name: 'React Native', description: 'Framework multiplataforma para iOS y Android.' },
      { name: 'Expo', description: 'Ecosistema de desarrollo y despliegue rápido.' },
      { name: 'React Native BLE PLX', description: 'Librería robusta para comunicación Bluetooth Low Energy.' }
    ],
    featuresSection: {
      sectionTitle: 'Características Principales',
      sectionSubtitle: 'Todo lo que necesitas para tomar el control total de tus vehículos RC.',
      cards: [
        {
          title: 'Control Universal',
          desc: 'Compatible con toda la colección Ferrari de Shell Motorsport y múltiples protocolos BLE estándar.',
          image: '/images/rc-commander/global.webp',
          alt: 'Control Universal Interface'
        },
        {
          title: 'Replay Studio',
          desc: 'Graba, edita, reproduce y comparte tus mejores maniobras con una precisión milimétrica.',
          image: '/images/rc-commander/replay.webp',
          alt: 'Editor UI'
        }
      ],
      openSource: {
        badge: 'Open Source',
        title: 'Tu hardware, tus reglas.',
        desc: 'Sin publicidad, sin rastreadores y sin obsolescencia programada. RC Commander está diseñado para preservar la funcionalidad de tus juguetes incluso si las apps oficiales desaparecen.'
      }
    },
    compatibilitySection: {
      sectionSubtitle: 'Diseñado para ser el estándar universal de control Bluetooth en juguetes de colección. [br] Sin suscripciones, sin anuncios, solo control puro.',
      modelsTitle: 'Vehículos Probados',
      protocolsTitle: 'Protocolos Activos'
    },
    compatibility: {
      title: 'Protocolos de Comunicación',
      models: [
        'Ferrari F1-75 (QCAR)',
        'Ferrari 488 GTE (SL)',
        'Ferrari 296 GTB (SL)',
        'Ferrari Daytona SP3 (SL)',
        'Ferrari SF-24 (SL)',
        'Ferrari SF90 Spider (SL)',
        'Ferrari Purosangue (SL)',
        'Porsche 911 GT3 (QCAR)',
        'Shell Motorsport Collection',
        'Generic BLE RC Cars'
      ],
      protocols: [
        {
          name: 'SL (Shell Racing Legends)',
          description: 'Protocolo estándar de 8 bytes usado en la gran mayoría de coches promocionales de Shell entre 2020 y 2025. Simple y robusto.'
        },
        {
          name: 'QCAR (Shell Racing)',
          description: 'Protocolo usado en modelos como el F1-75. Soporta comandos de 16 bytes y requiere "heartbeats" constantes.'
        }
      ]
    },
    branding: {
      sectionTitle: 'Identidad Visual',
      sectionIntro: 'Una estética inspirada en la velocidad y la precisión. El "Rojo Ferrari" define cada interacción.',
      logo: {
        title: 'El Logotipo',
        desc: 'Hecho con Inkscape y Affinity, disponible en formato .svg y .af.',
        downloadBtn: 'Descargar Assets'
      },
      colors: {
        sectionTitle: 'Paleta de Color'
      },
      ai: {
        sectionTitle: 'Generación por IA',
        desc: 'Todas las imágenes de vehículos utilizan Nano Banana para consistencia visual. Usa el prompt proporcionado en el repo para contribuir con nuevos modelos.'
      }
    },
    install: {
      sectionTitle: 'Empieza a Construir',
      sectionSubtitle: 'Únete al desarrollo o prueba la última versión de RC Commander en tu dispositivo Android.',
      developer: {
        title: 'Para Desarrolladores',
        desc: 'Clona el repositorio, instala las dependencias y contribuye al código fuente.',
        clickHint: 'Haz click para copiar el comando'
      },
      user: {
        title: 'Para Usuarios',
        desc: 'Descarga la última versión compilada (.APK), instálala en tu dispositivo y empieza a controlar tus vehículoss.',
        downloadBtn: 'Descargar v1.0.0',
        requirement: 'Requiere Android 8.0+'
      }
    },
    techStack_rc: {
      sectionTitle: 'Stack Tecnológico'
    }
  }
};
