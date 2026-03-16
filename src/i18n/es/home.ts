export const home = {
  nav: {
    work: "PROYECTOS",
    services: "SERVICIOS",
    identity: "IDENTIDAD",
    inquire: "CONTACTO"
  },
  hero: {
    subtitle: "ARQUITECTURA Y DISEÑO",
    title: "[italic]Full-Stack[/italic][br]Developer",
    description: "Construyendo excelencia digital donde la luminosidad estética se encuentra con la ingeniería de alto rendimiento."
  },
  works: {
    title: "La Galería",
    subtitle: "/// Proyectos Seleccionados 2025-2026",
    explore: "Explorar Caso"
  },
  services: {
    title: "Servicios",
    subtitle: "/// Diseño e Ingeniería",
    items: [
      {
        id: "01",
        title: "Desarrollo",
        subtitle: "Interfaces visuales y lógica funcional",
        description: "Me encargo de la creación integral del sitio: desde el diseño visual (UX/UI) hasta la programación de la lógica interna. Construyo experiencias donde la estética profesional se une con una navegación intuitiva, asegurando que el usuario final encuentre lo que busca de forma sencilla.",
        items: ["DISEÑO UI/UX", "DESARROLLO FULL-STACK", "INTERFACES INTERACTIVAS"]
      },
      {
        id: "02",
        title: "Autonomía",
        subtitle: "Control total sobre tu contenido",
        description: "Implemento paneles de administración personalizados que te permiten actualizar textos, imágenes o catálogos de productos al instante. El objetivo es que el equipo tenga el control total de la información sin depender de soporte técnico para los cambios diarios, algo vital en proyectos de crecimiento constante.",
        items: ["PANELES INTUITIVOS", "CATÁLOGOS DINÁMICOS", "INDEPENDENCIA TÉCNICA"]
      },
      {
        id: "03",
        title: "Infraestructura",
        subtitle: "Despliegue, seguridad y puesta en marcha",
        description: "Hago que tu proyecto cobre vida en internet. Me ocupo de la configuración de servidores, dominios y bases de datos, además del monitoreo constante y la documentación. Es el trabajo \"invisible\" que garantiza que tu web sea rápida, segura y esté siempre disponible.",
        items: ["DESPLIEGUE Y DOMINIOS", "MIGRACIÓN DE DATOS", "MONITOREO Y SOPORTE"]
      },
      {
        id: "04",
        title: "Identidad",
        subtitle: "Recursos visuales y optimización técnica",
        description: "Potencio la identidad actual de tu marca creando recursos gráficos de alta precisión. No se trata de crear una identidad desde cero, sino de asegurar que la marca se traduzca correctamente al entorno digital a través de iconos, variantes de logotipos y recursos vectoriales optimizados.",
        items: ["ICONOGRAFÍA VECTORIAL", "OPTIMIZACIÓN DE IMÁGENES", "APOYO DE MARCA"]
      }
    ]
  },
  quote: {
    text: "'Creo en el objeto digital como una pieza de artesanía.'",
    tags: ["Nativo del Usuario", "Código Abierto", "Enfoque Tipográfico"]
  },
  contact: {
    title: "Construyamos [br] la solución[br][italic-style]definitiva.[/italic-style]",
    role: "Líder Digital",
    availability: "Disponible para Q4 2025",
    formTitle: "Formulario de Consulta",
    name: "Nombre",
    email: "Correo Electrónico",
    details: "Detalles del Proyecto",
    send: "Enviar Breve",
    time: "Toma <2min",
    direct: "Contacto directo",
    emailValue: "hello@brunoarias.dev",
    githubLabel: "GitHub",
    githubValue: "https://github.com/ariasbruno"
  },
  common: {
    back: "Volver",
    prev: "Anterior",
    next: "Siguiente",
    dragHint: "Arrastra",
    expandTitle: "Expandir vista",
    legacyLabel: "Legacy",
    modernLabel: "Modern"
  },
  footer: {
    rights: "© 2025 Minimalist Arch. Todos los derechos reservados."
  },
  manifesto: {
    command: "cat manifesto.txt",
    title: "Sobre mí",
    body: [
      "Soy Bruno Arias, un artesano digital. Construyo arquitecturas web a medida donde la ingeniería robusta sostiene un diseño con propósito.",
      "Desde la optimización del servidor hasta el trazado de un vector, mi enfoque es metódico. Analizo el problema de raíz para entregarte un ecosistema que funcione con la precisión de un reloj. Nada de plantillas, solo control total."
    ],
    badges: [
      { label: "Código Limpio", icon: "check" as const },
      { label: "Diseño Adaptable", icon: "responsive" as const },
      { label: "Privacidad", icon: "lock" as const },
      { label: "Accesibilidad", icon: "a11y" as const },
    ]
  }
};
