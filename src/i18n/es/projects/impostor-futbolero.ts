import type { ProjectData } from '../../types';

export const impostorFutbolero: ProjectData = {
  summary: {
    id: 3,
    slug: 'impostor-futbolero',
    title: 'Impostor Futbolero',
    category: 'Caso de Estudio 03',
    description: 'Una experiencia social multijugador en tiempo real que digitaliza el fenómeno viral "El Impostor". Diseñado para grupos de amigos, pone a prueba tu intuición y capacidad de engaño.',
    tags: ["Next.js 15", "Firebase", "Realtime"],
    image: "/images/el-impostor/hero.webp"
  },
  detail: {
    id: 3,
    slug: 'impostor-futbolero',
    title: 'El Impostor Futbolero',
    subtitle: 'El Juego Definitivo de Deducción',
    category: 'Caso de Estudio 03',
    stats: [
      { label: 'Tiempo Real', value: '< 100ms' },
      { label: 'Jugadores', value: '3-16' },
      { label: 'Diversión', value: '100%' },
    ],
    challenge: {
      title: 'El Problema',
      text: 'Cualquiera que haya intentado jugar "El Impostor" con papel y lápiz conoce la gran limitación: siempre alguien tiene que quedarse afuera como moderador. Además, la logística manual de repartir papeles y la imposibilidad de jugar a distancia hacían que la experiencia fuera tediosa y limitada.',
      points: [
        '[bold]El Dilema del Moderador:[/bold] Alguien siempre se queda sin jugar.',
        '[bold]Logística Manual:[/bold] Repartir papeles es lento y aburrido.'
      ]
    },
    solution: {
      title: 'La Solución',
      text: 'Una plataforma web que actúa como moderador imparcial, permitiendo que todos jueguen. Elimina los papelitos, gestiona los roles y tiempos automáticamente, y permite jugar tanto presencialmente como a distancia con sincronización en tiempo real.'
    },
    solutionCards: [
      { title: '¡Juegan Todos!', desc: 'El sistema es el moderador.' },
      { title: 'Realtime', desc: 'Sincronización instantánea.' }
    ],
    techStack: [
      { name: 'Next.js 15', description: 'App Router y Server Actions para máximo rendimiento.' },
      { name: 'Firebase', description: 'Firestore para sincronización de estados en tiempo real.' },
      { name: 'TypeScript', description: 'Tipado estricto para lógica de juego robusta.' },
      { name: 'Tailwind CSS', description: 'Diseño rápido y consistente.' },
      { name: 'ShadCN/UI', description: 'Componentes accesibles y modernos.' },
      { name: 'Zod', description: 'Validación de datos y seguridad en formularios.' }
    ],
    features: [
      {
        title: 'Multiplayer en Tiempo Real',
        description: 'Sincronización instantánea de estados de juego, votos y chat gracias a Firestore. Todo ocurre al mismo tiempo para todos los jugadores.',
        imageUrl: ''
      },
      {
        title: 'Sistema de Roles Automático',
        description: 'El sistema asigna secretamente los roles de "Tripulación" e "Impostor", eliminando la necesidad de un moderador humano.',
        imageUrl: ''
      },
      {
        title: 'Fases de Juego Gestionadas',
        description: 'Desde el Lobby hasta la Votación, el servidor controla los tiempos y las transiciones de fase para garantizar partidas justas y fluidas.',
        imageUrl: ''
      }
    ],
    flowSection: {
      sectionLabel: 'Game Loop',
      sectionTitle: 'Flujo de Juego',
      sectionSubtitle: 'Un ciclo tenso y emocionante diseñado para maximizar la interacción social y la paranoia.',
      steps: [
        {
          step: "01",
          title: "Lobby y Preparación",
          desc: "Anfitrión configura la partida. Jugadores se unen con código. Espera en el 'Vestuario'."
        },
        {
          step: "02",
          title: "El Sorteo",
          desc: "Asignación secreta de roles: Tripulación (reciben futbolista) vs Impostor (no recibe nada)."
        },
        {
          step: "03",
          title: "Declaración",
          desc: "Por turnos, cada uno da un dato real. El Impostor debe ser creativo para no ser descubierto."
        },
        {
          step: "04",
          title: "Discusión",
          desc: "Se revelan los datos. Debate intenso: '¿Quién dijo ese dato tan vago?', '¡Eso es mentira!'."
        },
        {
          step: "05",
          title: "Votación",
          desc: "Si el Impostor es el más votado, ganan los tripulantes. Si no, se juega otra ronda."
        }
      ]
    },
    features_structured: {
      sectionTitle: 'Key Features',
      sectionSubtitle: 'Todo lo necesario para jugar',
      items: []
    },
    techStack_impostor: {
      sectionTitle: 'Stack Tecnológico',
      sectionSubtitle: 'Seleccionado para rendimiento y escalabilidad.',
    },
    logic: {
      sectionLabel: 'Architecture',
      sectionTitle: 'El Cerebro del Juego',
      sectionSubtitle: 'Separación clara entre Vista y Estado para garantizar seguridad y sincronización.',
      blocks: [
        { title: 'Server Actions (actions.ts)', desc: 'Gestionan operaciones críticas y atómicas como el sorteo y limpieza de jugadores. Nadie puede manipular el azar desde el cliente.' },
        { title: 'Room Actions', desc: 'Control de flujo. Verifican turnos y fases antes de permitir envíos de datos o votos.' },
        { title: 'RoomContext (Client State)', desc: 'Escucha cambios en Firestore (onSnapshot) y actualiza la UI instantáneamente.' }
      ],
      security: {
        title: 'Seguridad y Reglas',
        items: [
          { title: 'Lectura Restringida', desc: 'Nadie puede leer el rol de otro jugador.' },
          { title: 'Autoridad del Host', desc: 'Solo el anfitrión puede avanzar fases críticas.' },
          { title: 'Inmutabilidad de Votos', desc: 'Votos confirmados no pueden ser modificados.' }
        ]
      }
    }
  }
};
