import { FaGlobe, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaBox, FaReact, FaPaintBrush, FaTools, FaCubes, FaVial, FaShieldAlt, FaPuzzlePiece, FaCode, FaServer, FaDatabase, FaMobile, FaDesktop, FaBolt } from "react-icons/fa";

const roadmapData = [
  {
    sectionNumber: 1,
    icon: FaGlobe,
    title: "Internet",
    description:
      "Internet es la red de computadoras que permite a las personas y organizaciones hacer que sus sitios web sean accesibles a Internet. Implica almacenar los archivos del sitio web en potentes computadoras llamadas servidores, que están conectadas a una red de alta velocidad.",
    iconColor: "text-blue-500",
    subsections: [
      {
        title: "Cómo funciona Internet",
        content:
          "Internet funciona mediante una red global de cables físicos, incluyendo cables de cobre telefónicos, cables de TV y fibra óptica. Los datos viajan a través de esta infraestructura usando protocolos estandarizados que definen cómo la información debe ser transmitida.",
      },
      {
        title: "¿Qué es HTTP?",
        content:
          "HTTP (Protocolo de Transferencia de Hipertexto) es el protocolo fundamental de la World Wide Web. Define cómo se formatean y transmiten los mensajes entre navegadores y servidores web. Incluye métodos como GET, POST, PUT y DELETE.",
      },
      {
        title: "Hosting",
        content:
          "El hosting web es un servicio que permite a individuos y organizaciones hacer sus sitios web accesibles a través de Internet. Los proveedores de hosting mantienen servidores donde se almacenan los archivos y datos de los sitios web.",
      },
      {
        title: "DNS y cómo funciona",
        content:
          "El DNS (Sistema de nombres de dominio) es un sistema de nombres descentralizado y jerárquico para ordenadores, servicios u otros recursos conectados a internet o a una red privada. Traduce nombres de dominio legibles por humanos en direcciones IP.",
      },
      {
        title: "Dominios",
        content:
          "Los dominios son direcciones legibles por humanos que se utilizan para acceder a sitios web, en lugar de usar direcciones IP numéricas. Se organizan en una jerarquía, con dominios de nivel superior (.com, .org, etc.) y subdominios.",
      },
      {
        title: "Browsers",
        content:
          "Un navegador web es una aplicación de software que permite a un usuario acceder y mostrar páginas web u otro contenido en línea a través de su interfaz gráfica de usuario.",
      },
    ],
  },
  {
    sectionNumber: 2,
    icon: FaHtml5,
    title: "HTML",
    description:
      "HTML (Hypertext Markup Language) es el lenguaje de marcado estándar que se utiliza para crear páginas web y aplicaciones web. Proporciona estructura para el contenido de la World Wide Web, utilizando un sistema de elementos y atributos para definir el diseño y el contenido de un documento. Los elementos HTML se presentan mediante etiquetas, que los navegadores interpretan para representar los elementos visuales y auditivos de una página web.",
    iconColor: "text-orange-500",
    subsections: [
      {
        title: "Semantic HTML",
        content:
          "El HTML semántico se refiere al uso de marcado HTML para reforzar el significado del contenido web, en lugar de simplemente definir su apariencia. Implica el uso de elementos HTML que describen claramente su propósito y contenido. El HTML semántico mejora la accesibilidad, el SEO y la legibilidad del código. Los elementos claves incluyen <header>, <nav>, <main>, <article>, <section>, <aside>, y <footer>. También abarca el uso de niveles de encabezado adecuados (<h1> a <h6>), listas (<ul>, <ol>, <li>) y tablas de datos (<table>, <th>, <td>)",
      },
      {
        title: "Forms and Validations",
        content:
          "Los formularios HTML son elementos cruciales para recopilar datos del usuario. Incluyen diversos tipos de inputs como text, email, password, checkbox, radio, etc. La validación de formularios asegura que los datos ingresados cumplan con los requisitos específicos antes de ser enviados al servidor. Esto incluye validaciones como required, pattern, min/max, y custom validations usando JavaScript.",
      },
      {
        title: "Conventions and Best Practices",
        content:
          "Las mejores prácticas en HTML incluyen: usar DOCTYPE apropiado, codificación de caracteres correcta, estructura jerárquica clara, nombres de clases y IDs descriptivos, indentación consistente, comentarios útiles, optimización de imágenes, y asegurar que el código sea válido según los estándares W3C.",
      },
      {
        title: "Accessibility",
        content:
          "La accesibilidad web permite que personas con discapacidades puedan percibir, entender, navegar e interactuar con sitios web. Incluye el uso de atributos ARIA, texto alternativo para imágenes, estructura semántica, contraste de colores adecuado, y asegurar que todo el contenido sea accesible mediante teclado.",
      },
      {
        title: "SEO Basics",
        content:
          "El SEO en HTML implica optimizar el código para mejorar el ranking en motores de búsqueda. Esto incluye el uso de meta tags (title, description), estructura de encabezados adecuada, URLs amigables, alt text en imágenes, y asegurar que el contenido sea accesible para los crawlers de búsqueda.",
      },
    ],
  },
  {
    sectionNumber: 3,
    icon: FaCss3Alt,
    title: "CSS",
    description:
      "CSS (Cascading Style Sheets) es el lenguaje utilizado para estilizar y dar formato a documentos HTML. Permite controlar el diseño, la presentación y el aspecto visual de las páginas web, incluyendo colores, fuentes, espaciado, layouts y animaciones. CSS es fundamental para crear interfaces de usuario atractivas y responsivas.",
    iconColor: "text-blue-500",
    subsections: [
      {
        title: "Selectores y Especificidad",
        content:
          "Los selectores CSS determinan qué elementos HTML serán estilizados. La especificidad es el algoritmo que determina qué estilos se aplican cuando hay múltiples reglas conflictivas. Incluye selectores de tipo, clase, ID, atributos, pseudoclases y pseudoelementos. La comprensión de la especificidad es crucial para escribir CSS mantenible.",
      },
      {
        title: "Box Model",
        content:
          "El modelo de caja es fundamental en CSS y define cómo se estructura cada elemento. Consiste en el contenido, padding (relleno interno), border (borde) y margin (margen externo). Comprender el box model es esencial para el diseño y espaciado de elementos, incluyendo el comportamiento de box-sizing y cómo afecta al tamaño total de los elementos.",
      },
      {
        title: "Flexbox",
        content:
          "Flexbox es un modelo de diseño unidimensional para organizar elementos en filas o columnas. Proporciona una forma eficiente de distribuir el espacio y alinear elementos dentro de un contenedor, incluso cuando sus tamaños son desconocidos o dinámicos. Es especialmente útil para componentes de interfaz y diseños responsivos.",
      },
      {
        title: "Grid",
        content:
          "CSS Grid es un sistema de diseño bidimensional que permite crear layouts complejos con filas y columnas. Ofrece control preciso sobre la ubicación y tamaño de los elementos, facilitando la creación de diseños responsivos y adaptables. Grid complementa a Flexbox y es ideal para layouts de página completa.",
      },
      {
        title: "Responsive Design",
        content:
          "El diseño responsivo permite que los sitios web se adapten a diferentes tamaños de pantalla y dispositivos. Incluye el uso de media queries, unidades relativas (em, rem, vw, vh), imágenes flexibles y layouts adaptables. También abarca estrategias mobile-first y técnicas para optimizar la experiencia en diferentes dispositivos.",
      },
      {
        title: "Animaciones y Transiciones",
        content:
          "CSS permite crear animaciones y transiciones suaves para mejorar la interactividad y el atractivo visual. Las transiciones proporcionan cambios suaves entre estados, mientras que las animaciones permiten secuencias más complejas de cambios de estilo. Incluye propiedades como transform, transition, y @keyframes.",
      },
    ],
  },
  {
    sectionNumber: 4,
    icon: FaJs,
    title: "JavaScript",
    description: "JavaScript es un lenguaje de programación versátil y orientado a objetos que permite crear contenido web dinámico e interactivo. Es uno de los tres pilares del desarrollo web moderno, junto con HTML y CSS. JavaScript se ejecuta en el navegador del cliente y permite manipular el DOM, manejar eventos, realizar peticiones asíncronas y crear aplicaciones web completas.",
    iconColor: "text-yellow-400",
    subsections: [
      {
        title: "Sintaxis y Tipos de Datos Básicos",
        content: "JavaScript incluye tipos de datos fundamentales como números, strings, booleanos, null, undefined, y objetos. La sintaxis básica abarca declaración de variables (var, let, const), operadores, estructuras de control (if/else, switch, bucles), y funciones. Es importante entender el alcance (scope) de las variables y la coerción de tipos."
      },
      {
        title: "DOM y Eventos",
        content: "El Document Object Model (DOM) es la interfaz de programación para documentos HTML. JavaScript puede modificar dinámicamente el contenido, estructura y estilos de una página web. El manejo de eventos permite responder a interacciones del usuario como clics, entrada de teclado, y cambios de formulario. Incluye event bubbling, delegation, y preventDefault()."
      },
      {
        title: "Asincronía y Promesas",
        content: "La programación asíncrona en JavaScript permite ejecutar operaciones sin bloquear el hilo principal. Incluye callbacks, Promesas, async/await, y el Event Loop. Es fundamental para operaciones como peticiones HTTP, lectura de archivos, y temporizadores. Las Promesas proporcionan una forma más limpia de manejar código asíncrono que los callbacks tradicionales."
      },
      {
        title: "ES6+ Features",
        content: "Las características modernas de JavaScript (ES6+) incluyen arrow functions, destructuring, spread/rest operators, template literals, módulos, clases, y más. Estas características mejoran la legibilidad del código y proporcionan funcionalidades poderosas para el desarrollo moderno."
      },
      {
        title: "Arrays y Objetos",
        content: "Las estructuras de datos fundamentales en JavaScript incluyen Arrays y Objetos. Los métodos de Array como map, filter, reduce, y forEach son esenciales para la manipulación de datos. Los objetos son la base de la programación orientada a objetos en JavaScript, incluyendo prototypes, this, y herencia."
      },
      {
        title: "Fetch API y AJAX",
        content: "La comunicación con servidores se realiza mediante la Fetch API o XMLHttpRequest (AJAX). Estas tecnologías permiten realizar peticiones HTTP asíncronas para obtener o enviar datos sin recargar la página. Incluye manejo de JSON, headers, y diferentes métodos HTTP (GET, POST, etc.)."
      }
    ],
  },
  {
    sectionNumber: 5,
    icon: FaGitAlt,
    title: "Version Control Systems",
    description: "Los sistemas de control de versiones (VCS) son herramientas que ayudan a los desarrolladores a realizar un seguimiento y gestionar los cambios en el código a lo largo del tiempo. Permiten que varias personas trabajen en un proyecto simultáneamente, manteniendo un historial de modificaciones. Git es el VCS más popular, conocido por su naturaleza distribuida y su modelo de ramificación. Los VCS permiten funciones como la ramificación para el desarrollo paralelo, la fusión para combinar cambios y la reversión de estados anteriores. Los VCS también proporcionan capacidades de copia de seguridad y recuperación, resolución de conflictos y la capacidad de etiquetar puntos específicos en el historial.",
    iconColor: "text-orange-600",
    subsections: [
      {
        title: "VCS Hosting",
        content: "Los servicios de alojamiento de VCS proporcionan plataformas en la nube para almacenar repositorios de código. Estas plataformas ofrecen herramientas adicionales como gestión de problemas, revisión de código, integración continua y despliegue. Los principales proveedores incluyen GitHub, GitLab y Bitbucket, cada uno con sus propias características distintivas y planes de precios."
      },
      {
        title: "Git",
        content: "Git es un sistema de control de versiones distribuido que permite a los desarrolladores rastrear cambios en el código fuente. Sus características principales incluyen ramificación (branching), fusión (merging), etiquetado (tagging), y la capacidad de trabajar offline. Los comandos fundamentales incluyen git add, git commit, git push, git pull, y git merge. Git utiliza un sistema de instantáneas para rastrear el historial del proyecto y facilita la colaboración entre equipos."
      },
      {
        title: "GitHub",
        content: "GitHub es la plataforma de alojamiento de código más popular, adquirida por Microsoft. Ofrece características como Pull Requests para revisión de código, GitHub Actions para automatización, GitHub Pages para hosting web, y GitHub Discussions para la comunicación del equipo. También proporciona herramientas de gestión de proyectos, wikis, y una amplia integración con herramientas de desarrollo."
      },
      {
        title: "GitLab",
        content: "GitLab es una plataforma completa de DevOps que incluye alojamiento de repositorios Git. Se distingue por su solución todo en uno que integra CI/CD, contenedores, seguridad y monitorización. GitLab puede ser auto-alojado o utilizado como servicio en la nube, y ofrece características avanzadas como revisión de código, gestión de problemas y planificación ágil."
      },
      {
        title: "Bitbucket",
        content: "Bitbucket, desarrollado por Atlassian, se integra perfectamente con otras herramientas como Jira y Trello. Es especialmente popular entre equipos empresariales y ofrece repositorios privados gratuitos. Incluye características como pipelines de CI/CD, revisión de código, y permisos granulares. Bitbucket también soporta tanto Git como Mercurial, aunque este último está siendo descontinuado."
      }
    ],
  },
  {
    sectionNumber: 6,
    icon: FaBox,
    title: "Package Managers",
    description: "Los gestores de paquetes son herramientas fundamentales en el desarrollo web moderno que automatizan el proceso de instalación, actualización y gestión de dependencias en proyectos de software. Permiten a los desarrolladores reutilizar código de la comunidad, manteniendo versiones consistentes de las dependencias y gestionar eficientemente las bibliotecas de terceros.",
    iconColor: "text-red-500",
    subsections: [
      {
        title: "npm (Node Package Manager)",
        content: "npm es el gestor de paquetes por defecto para Node.js y el más utilizado en el ecosistema JavaScript. Proporciona acceso al registro más grande de paquetes de software del mundo. Características clave incluyen la gestión de dependencias a través de package.json, scripts personalizados, versionado semántico, y la capacidad de publicar y compartir paquetes. También ofrece características de seguridad como auditorías de paquetes."
      },
      {
        title: "yarn",
        content: "Yarn es una alternativa a npm desarrollada por Facebook que ofrece mejor rendimiento y seguridad adicional. Introduce características como instalaciones deterministas mediante yarn.lock, instalaciones en paralelo para mayor velocidad, y un sistema de caché más eficiente. Yarn también proporciona comandos más intuitivos y una mejor gestión de workspaces para proyectos monorepo."
      },
      {
        title: "pnpm",
        content: "pnpm es un gestor de paquetes que se destaca por su eficiencia en el uso del disco duro y su velocidad. Utiliza un almacenamiento centralizado de paquetes que vincula los archivos en lugar de copiarlos, ahorrando espacio significativo. Ofrece todas las características de npm pero con mejor rendimiento, gestión más eficiente de dependencias y soporte nativo para monorepos."
      },
    ],
  },
  {
    sectionNumber: 7,
    icon: FaReact,
    title: "Frameworks",
    description: "Los frameworks de JavaScript son herramientas esenciales que proporcionan estructuras y funcionalidades predefinidas para el desarrollo de aplicaciones web modernas. Ofrecen soluciones optimizadas para la gestión del estado, el enrutamiento, la renderización y la manipulación del DOM, permitiendo a los desarrolladores construir aplicaciones web complejas y escalables de manera más eficiente.",
    iconColor: "text-cyan-400",
    subsections: [
      {
        title: "React",
        content: "React es una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario interactivas. Se basa en componentes reutilizables y utiliza un DOM virtual para optimizar las actualizaciones de la interfaz. Características clave incluyen JSX, hooks, gestión de estado con Context y Redux, y un ecosistema rico en bibliotecas y herramientas. React es conocido por su flexibilidad y su gran comunidad."
      },
      {
        title: "Vue.js",
        content: "Vue.js es un framework progresivo para construir interfaces de usuario. Ofrece un sistema de reactividad eficiente y una curva de aprendizaje suave. Características destacadas incluyen la sintaxis de template, el sistema de componentes, Vue Router para enrutamiento, Vuex para gestión de estado, y Vue CLI para desarrollo de proyectos. Vue combina lo mejor de React y Angular con una arquitectura más accesible."
      },
      {
        title: "Angular",
        content: "Angular es un framework completo desarrollado por Google, escrito en TypeScript. Proporciona un conjunto completo de herramientas para construir aplicaciones empresariales a gran escala. Incluye características como inyección de dependencias, routing robusto, formularios reactivos, RxJS para programación reactiva, y herramientas CLI potentes. Angular sigue el patrón MVVM y enfatiza las mejores prácticas de desarrollo."
      },
      {
        title: "Svelte",
        content: "Svelte es un enfoque radicalmente nuevo para construir interfaces de usuario. En lugar de realizar la mayor parte del trabajo en el navegador, Svelte mueve ese trabajo al paso de compilación. Esto resulta en aplicaciones más pequeñas y más rápidas. Svelte ofrece una sintaxis simple, reactividad incorporada, y no requiere un DOM virtual, lo que lo hace excepcionalmente eficiente."
      },
      {
        title: "SolidJS",
        content: "SolidJS es un framework declarativo que ofrece un rendimiento excepcional similar a Svelte, pero con una API más cercana a React. Utiliza un sistema de reactividad fino y preciso, eliminando la necesidad de un DOM virtual. Características clave incluyen JSX, primitivas reactivas, y un modelo mental similar a React pero con mejor rendimiento y un bundle size más pequeño."
      },
      {
        title: "Qwik",
        content: "Qwik es un framework de nueva generación diseñado para optimizar el rendimiento inicial de las aplicaciones web. Se destaca por su capacidad de resumabilidad, que permite a las aplicaciones comenzar desde cualquier estado sin necesidad de rehidratación. Ofrece renderizado en el servidor, carga diferida automática y una arquitectura única que prioriza la velocidad de carga inicial."
      },
    ],
  },
  {
    sectionNumber: 8,
    icon: FaPaintBrush,
    title: "CSS Moderno",
    description: "El CSS moderno engloba metodologías, frameworks y herramientas que han evolucionado para hacer frente a los desafíos del desarrollo web contemporáneo. Estas soluciones mejoran la mantenibilidad, escalabilidad y eficiencia en el desarrollo de estilos, permitiendo crear interfaces más robustas y adaptables.",
    iconColor: "text-pink-500",
    subsections: [
      {
        title: "Tailwind CSS",
        content: "Tailwind CSS es un framework de utilidades CSS que permite construir diseños personalizados directamente en el marcado HTML. Se caracteriza por su enfoque utility-first, que proporciona clases de utilidad de bajo nivel para construir diseños complejos. Incluye un sistema de configuración potente, modo JIT (Just-In-Time) para optimizar el bundle size, y una excelente integración con frameworks modernos."
      },
      {
        title: "CSS Architecture",
        content: "La arquitectura CSS se refiere a la organización y estructura de los estilos en proyectos grandes. Incluye principios como la separación de preocupaciones, la modularidad, y la escalabilidad. Metodologías populares incluyen SMACSS (Scalable and Modular Architecture for CSS), OOCSS (Object-Oriented CSS), y Atomic Design, cada una proporcionando diferentes enfoques para organizar y mantener el código CSS."
      },
      {
        title: "BEM",
        content: "BEM (Block Element Modifier) es una metodología de nomenclatura que proporciona una manera estructurada de nombrar clases CSS. Define bloques independientes (Block), elementos que dependen de bloques (Element), y modificadores que cambian la apariencia (Modifier). Este enfoque mejora la legibilidad, mantenibilidad y reutilización del código CSS, evitando conflictos de especificidad."
      },
      {
        title: "CSS-in-JS",
        content: "CSS-in-JS es un patrón que permite escribir estilos directamente en JavaScript/TypeScript. Bibliotecas populares como styled-components y Emotion proporcionan características como escopado automático, theming dinámico, y mejor integración con componentes. Esta aproximación permite una mejor encapsulación de estilos y facilita la creación de componentes verdaderamente reutilizables."
      },
      {
        title: "CSS Modules",
        content: "CSS Modules es una solución que permite escribir CSS tradicional con alcance local por defecto. Cada archivo CSS Module genera nombres de clase únicos, evitando conflictos de nombres y permitiendo una mejor modularización. Es especialmente útil en aplicaciones React y ofrece una alternativa más ligera a CSS-in-JS."
      },
      {
        title: "PostCSS y Preprocessors",
        content: "PostCSS y preprocesadores como Sass y Less extienden las capacidades de CSS. PostCSS permite transformar CSS con JavaScript, habilitando características como autoprefixer, purgeCSS, y otras optimizaciones. Los preprocesadores añaden variables, mixins, funciones y anidamiento, mejorando la mantenibilidad y reutilización del código."
      }
    ]
  },
  {
    sectionNumber: 9,
    icon: FaTools,
    title: "Build Tools",
    description: "Las herramientas de construcción (Build Tools) son fundamentales en el desarrollo web moderno para optimizar, transformar y empaquetar el código fuente. Estas herramientas automatizan tareas como la minificación, la transpilación, el empaquetado de módulos y el análisis de código, mejorando tanto la experiencia de desarrollo como el rendimiento final de la aplicación.",
    iconColor: "text-gray-600",
    subsections: [
      {
        title: "Linters and Formatters",
        content: "Los linters y formatters son herramientas que ayudan a mantener la calidad y consistencia del código. Los linters analizan el código en busca de errores potenciales, problemas de estilo y patrones problemáticos, mientras que los formatters aseguran una estructura y formato consistente. Estas herramientas son esenciales para mantener estándares de código en equipos y proyectos."
      },
      {
        title: "Prettier",
        content: "Prettier es un formateador de código opinado que soporta múltiples lenguajes y frameworks. Automatiza el formateo del código siguiendo reglas predefinidas, eliminando debates sobre estilos de código. Se integra fácilmente con editores de código y sistemas de control de versiones, y puede configurarse para ejecutarse automáticamente antes de los commits."
      },
      {
        title: "ESLint",
        content: "ESLint es una herramienta de linting para JavaScript que identifica y corrige problemas en el código. Puede detectar errores de sintaxis, patrones problemáticos, y violaciones de estilo. Es altamente configurable a través de reglas personalizables y plugins, y se integra bien con frameworks modernos y herramientas de desarrollo."
      },
      {
        title: "Vite",
        content: "Vite es una herramienta de construcción moderna que ofrece un entorno de desarrollo extremadamente rápido. Utiliza ES modules nativos para el desarrollo y Rollup para la producción. Características destacadas incluyen Hot Module Replacement (HMR) ultrarrápido, configuración simple, y soporte incorporado para TypeScript, JSX, CSS y más."
      },
    ]
  },
  {
    sectionNumber: 10,
    icon: FaCubes,
    title: "Module Bundlers",
    description: "Los empaquetadores de módulos son herramientas esenciales que transforman y combinan el código fuente y sus dependencias en archivos optimizados para producción. Estas herramientas resuelven desafíos como la gestión de dependencias, la optimización del rendimiento y la compatibilidad del navegador, permitiendo crear aplicaciones web modernas y eficientes.",
    iconColor: "text-purple-500",
    subsections: [
      {
        title: "Vite",
        content: "Vite es un bundler de nueva generación que destaca por su velocidad excepcional en desarrollo. Utiliza ESM nativo durante el desarrollo y Rollup para la construcción de producción. Ofrece HMR ultrarrápido, configuración mínima, y soporte incorporado para TypeScript, JSX, y CSS. Su arquitectura moderna lo hace ideal para proyectos que requieren un desarrollo ágil."
      },
      {
        title: "SWC",
        content: "SWC (Speedy Web Compiler) es un compilador ultrarrápido escrito en Rust, diseñado como alternativa a Babel. Puede transformar JavaScript/TypeScript moderno en código compatible con navegadores antiguos hasta 20 veces más rápido que Babel. Se integra bien con herramientas como Next.js y puede usarse como parte de otros bundlers."
      },
      {
        title: "esbuild",
        content: "esbuild es un bundler y minificador extremadamente rápido escrito en Go. Su rendimiento excepcional se debe a su implementación en un lenguaje compilado y su diseño desde cero para el empaquetado. Soporta TypeScript, JSX, y minificación, y puede ser hasta 100 veces más rápido que los bundlers tradicionales."
      },
      {
        title: "Webpack",
        content: "Webpack es uno de los bundlers más populares y versátiles. Ofrece características avanzadas como code splitting, lazy loading, y un sistema extensible de loaders y plugins. Es altamente configurable y puede manejar diversos tipos de activos más allá de JavaScript. Su ecosistema maduro lo hace ideal para proyectos empresariales complejos."
      },
      {
        title: "Rollup",
        content: "Rollup es un bundler especializado en la creación de bibliotecas JavaScript. Se destaca por su capacidad de tree-shaking eficiente y la generación de bundles optimizados. Es especialmente útil para crear paquetes que serán publicados en npm, y soporta diversos formatos de salida como ESM, CommonJS, y UMD."
      },
      {
        title: "Parcel",
        content: "Parcel es un bundler de configuración cero que ofrece una experiencia de desarrollo sin complicaciones. Detecta automáticamente los tipos de archivos y aplica las transformaciones necesarias sin configuración adicional. Incluye características como hot reloading, splitting de código, y optimización de imágenes de forma predeterminada."
      }
    ]
  },
  {
    sectionNumber: 11,
    icon: FaVial,
    title: "Testing",
    description: "El testing es una parte fundamental del desarrollo de software que asegura la calidad y confiabilidad del código. Las pruebas automatizadas ayudan a detectar errores temprano, facilitan el refactoring y proporcionan documentación viva del comportamiento esperado del sistema.",
    iconColor: "text-green-500",
    subsections: [
      {
        title: "Jest",
        content: "Jest es un framework de testing completo y popular para JavaScript, especialmente en el ecosistema React. Ofrece una experiencia de desarrollo agradable con características como snapshots testing, mocking integrado, cobertura de código, y ejecución paralela de pruebas. Jest está configurado por defecto en Create React App y es ampliamente utilizado en la industria."
      },
      {
        title: "Vitest",
        content: "Vitest es un framework de testing moderno y ultrarrápido, diseñado como alternativa nativa a Jest para proyectos Vite. Ofrece una API compatible con Jest pero con mejor rendimiento y una integración perfecta con Vite. Incluye características como hot module reloading para tests, soporte nativo para TypeScript y ESM, y una interfaz de usuario web para visualizar resultados."
      },
      {
        title: "Testing Library",
        content: "Testing Library es una familia de paquetes que ayuda a probar componentes UI de manera que refleje cómo los usuarios interactúan con la aplicación. Promueve buenas prácticas de testing enfocándose en el comportamiento en lugar de los detalles de implementación. Incluye variantes para diferentes frameworks como React Testing Library, Vue Testing Library, y más."
      },
      {
        title: "Cypress",
        content: "Cypress es una herramienta moderna de testing end-to-end que hace que escribir y depurar pruebas sea sencillo. Ofrece una experiencia de desarrollo superior con características como time-travel, debugging en tiempo real, esperas automáticas, y screenshots/videos de las pruebas. También soporta pruebas de componentes y pruebas de API."
      },
      {
        title: "Playwright",
        content: "Playwright es una herramienta de automatización de navegadores desarrollada por Microsoft. Permite realizar pruebas end-to-end en múltiples navegadores (Chromium, Firefox, WebKit) con una única API. Destaca por su modelo de concurrencia moderno, capacidades de automatización potentes, y generación de código mediante grabación de acciones."
      },
      {
        title: "Test Types",
        content: "Existen diferentes tipos de pruebas: unitarias (prueban unidades individuales de código), de integración (prueban la interacción entre componentes), end-to-end (prueban flujos completos), y de rendimiento. Cada tipo tiene su propósito y lugar en una estrategia de testing completa. La pirámide de testing sugiere tener más pruebas unitarias que de integración, y más de integración que end-to-end."
      }
    ]
  },
  {
    sectionNumber: 12,
    icon: FaShieldAlt,
    title: "Authentication & Security",
    description: "La seguridad web y la autenticación son aspectos críticos en el desarrollo de aplicaciones modernas. Implementar estrategias de seguridad robustas protege tanto a los usuarios como a los datos de la aplicación contra amenazas y vulnerabilidades. Un entendimiento profundo de estos conceptos es esencial para construir aplicaciones web seguras y confiables.",
    iconColor: "text-blue-600",
    subsections: [
      {
        title: "Web Security Basics",
        content: "Los fundamentos de la seguridad web incluyen conceptos como autenticación (verificar quién es alguien), autorización (determinar qué puede hacer), encriptación de datos, manejo seguro de sesiones, y protección contra ataques comunes. Es esencial implementar prácticas como el almacenamiento seguro de contraseñas mediante hashing, validación de entrada de datos, y protección contra inyección de código."
      },
      {
        title: "OWASP Security Risks",
        content: "OWASP (Open Web Application Security Project) identifica los principales riesgos de seguridad en aplicaciones web. El OWASP Top 10 incluye vulnerabilidades críticas como inyección SQL, cross-site scripting (XSS), broken authentication, exposición de datos sensibles, y configuraciones incorrectas de seguridad. Comprender estos riesgos es fundamental para desarrollar aplicaciones seguras."
      },
      {
        title: "Content Security Policy",
        content: "CSP es una capa adicional de seguridad que ayuda a detectar y mitigar ciertos tipos de ataques, incluyendo Cross-Site Scripting (XSS) y ataques de inyección de datos. Permite especificar qué fuentes de contenido son confiables y restringe la ejecución de scripts no autorizados. Se implementa mediante headers HTTP o meta tags, proporcionando control granular sobre los recursos que puede cargar una página."
      },
      {
        title: "HTTP Security Headers",
        content: "Los headers de seguridad HTTP son fundamentales para proteger las aplicaciones web. Incluyen X-Content-Type-Options para prevenir MIME-sniffing, X-Frame-Options para proteger contra clickjacking, Strict-Transport-Security (HSTS) para forzar conexiones HTTPS, y X-XSS-Protection para mitigar ataques XSS. La correcta configuración de estos headers es crucial para una seguridad robusta."
      },
      {
        title: "CORS",
        content: "Cross-Origin Resource Sharing (CORS) es un mecanismo que permite que los recursos de una página web sean solicitados desde otro dominio fuera del dominio que sirvió el primer recurso. CORS define cómo los navegadores y servidores deben interactuar cuando se realizan solicitudes entre diferentes orígenes. Es esencial para APIs y aplicaciones modernas, pero debe configurarse correctamente para mantener la seguridad."
      }
    ]
  },
  {
    sectionNumber: 13,
    icon: FaPuzzlePiece,
    title: "Web Components",
    description: "Los Web Components son un conjunto de tecnologías web que permiten crear elementos HTML personalizados, reutilizables y encapsulados. Esta tecnología nativa del navegador permite desarrollar componentes modulares que funcionan en cualquier framework o sin framework, proporcionando una forma estándar de crear elementos web reutilizables.",
    iconColor: "text-indigo-500",
    subsections: [
      {
        title: "HTML Templates",
        content: "Los HTML Templates (<template>) permiten definir fragmentos de HTML que no se renderizan inmediatamente, pero pueden ser clonados y utilizados posteriormente. Esta característica es fundamental para los Web Components, ya que permite definir la estructura del componente de manera declarativa y reutilizable, mejorando el rendimiento y la mantenibilidad del código."
      },
      {
        title: "Custom Elements",
        content: "Los Custom Elements permiten definir nuevos elementos HTML personalizados con comportamiento específico. Se pueden crear tanto elementos autónomos como elementos que extienden elementos HTML existentes. Esta API permite definir el ciclo de vida del componente, gestionar atributos y propiedades, y manejar eventos, proporcionando una forma nativa de crear componentes web reutilizables."
      },
      {
        title: "Shadow DOM",
        content: "El Shadow DOM proporciona encapsulación para el HTML, CSS y JavaScript, permitiendo que un componente mantenga sus características ocultas del resto del documento. Esto evita conflictos de estilos y mantiene el código del componente aislado, facilitando la creación de widgets reutilizables con estilos y comportamientos encapsulados."
      }
    ]
  },
  {
    sectionNumber: 14,
    icon: FaCode,
    title: "TypeScript",
    description: "TypeScript es un superconjunto tipado de JavaScript que compila a JavaScript puro. Añade tipos estáticos opcionales, clases, interfaces y otras características que facilitan el desarrollo de aplicaciones robustas y escalables. TypeScript mejora la experiencia de desarrollo proporcionando mejor autocompletado, refactorización y detección temprana de errores.",
    iconColor: "text-blue-500",
    subsections: [
      {
        title: "Types and Interfaces",
        content: "Los tipos e interfaces en TypeScript permiten definir contratos claros para estructuras de datos y funciones. Incluyen tipos básicos, uniones, intersecciones, tipos genéricos y más. Las interfaces permiten definir la forma de objetos y clases, facilitando la creación de código más mantenible y autodocumentado."
      },
      {
        title: "Classes and Decorators",
        content: "TypeScript proporciona una implementación completa de clases con características como herencia, modificadores de acceso y propiedades. Los decoradores permiten añadir anotaciones y metadatos a clases, métodos y propiedades, facilitando la implementación de patrones como inyección de dependencias y observables."
      },
      {
        title: "Generics",
        content: "Los genéricos en TypeScript permiten escribir código reutilizable que puede trabajar con múltiples tipos. Proporcionan una forma de crear componentes que pueden trabajar con cualquier tipo de datos mientras mantienen la seguridad de tipos. Son especialmente útiles en colecciones, promesas y funciones utilitarias."
      },
      {
        title: "Type Inference",
        content: "La inferencia de tipos es una característica poderosa que permite a TypeScript deducir tipos automáticamente basándose en el uso del código. Esto reduce la necesidad de anotaciones de tipos explícitas mientras mantiene la seguridad de tipos, permitiendo un código más conciso sin sacrificar la verificación de tipos."
      },
      {
        title: "Advanced Types",
        content: "TypeScript incluye características avanzadas como tipos condicionales, tipos mapeados, tipos utilitarios y más. Estas características permiten crear tipos complejos y transformaciones de tipos que pueden adaptarse a necesidades específicas, facilitando el modelado preciso de estructuras de datos y comportamientos."
      }
    ]
  },
  {
    sectionNumber: 15,
    icon: FaServer,
    title: "Server-Side Rendering",
    description: "El Server-Side Rendering (SSR) es una técnica que permite renderizar aplicaciones web en el servidor antes de enviarlas al cliente. Esto mejora el rendimiento inicial, el SEO y la experiencia del usuario. SSR combina lo mejor del renderizado tradicional del servidor con la interactividad de las aplicaciones modernas de una sola página (SPA).",
    iconColor: "text-red-600",
    subsections: [
      {
        title: "Next.js",
        content: "Next.js es un framework de React que facilita la creación de aplicaciones web con SSR, generación estática y renderizado híbrido. Ofrece características como enrutamiento basado en sistema de archivos, optimización automática de imágenes, soporte para API routes, y diferentes estrategias de renderizado. Su arquitectura moderna y características avanzadas lo han convertido en una opción popular para aplicaciones React escalables."
      },
      {
        title: "Nuxt.js",
        content: "Nuxt.js es el equivalente de Next.js para Vue.js, proporcionando SSR, generación de sitios estáticos y más. Incluye características como auto-importación de componentes, layouts sistema, módulos extensibles, y una arquitectura basada en convenciones. Nuxt simplifica el desarrollo de aplicaciones Vue.js complejas con un enfoque en la productividad del desarrollador."
      },
      {
        title: "Remix",
        content: "Remix es un framework full-stack que prioriza los fundamentos web y el rendimiento. Se destaca por su manejo de datos anidados, manejo de errores a nivel de ruta, y su enfoque en la experiencia del usuario final. Remix aprovecha las APIs web nativas y proporciona patrones sólidos para construir aplicaciones web robustas."
      },
      {
        title: "Astro",
        content: "Astro es un framework moderno que permite construir sitios web rápidos con cualquier framework UI. Su característica Islands Architecture permite usar componentes interactivos mientras mantiene la mayor parte del sitio como HTML estático. Astro optimiza automáticamente el rendimiento y ofrece una experiencia de desarrollo moderna."
      },
      {
        title: "Hydration",
        content: "La hidratación es el proceso de adjuntar controladores de eventos y estado a HTML renderizado en el servidor. Es crucial para SSR ya que permite que el contenido estático se vuelva interactivo en el cliente. Diferentes frameworks manejan la hidratación de manera distinta, algunos ofreciendo hidratación parcial o progresiva para mejor rendimiento."
      },
      {
        title: "Static Site Generation (SSG)",
        content: "SSG es una técnica relacionada que genera sitios web estáticos en tiempo de construcción. A diferencia de SSR, SSG pre-renderiza todas las páginas por adelantado, resultando en un rendimiento óptimo y costos de hosting reducidos. Es ideal para sitios con contenido que no cambia frecuentemente, como blogs, documentación y sitios de marketing."
      },
      {
        title: "SvelteKit",
        content: "SvelteKit es el framework de aplicación para Svelte que ofrece SSR, generación de sitios estáticos y renderizado híbrido. Proporciona un sistema de enrutamiento basado en archivos, manejo de formularios mejorado, endpoints de API integrados y adaptadores para diferentes plataformas de despliegue. Su arquitectura moderna y enfoque en la simplicidad lo hace ideal para construir aplicaciones web rápidas y eficientes."
      },
    ]
  },
  {
    sectionNumber: 16,
    icon: FaDatabase,
    title: "GraphQL",
    description: "GraphQL es un lenguaje de consulta y manipulación de datos para APIs, y un entorno de ejecución para ejecutar esas consultas. Desarrollado por Facebook, GraphQL proporciona una forma más eficiente y flexible de solicitar y modificar datos en comparación con las APIs REST tradicionales, permitiendo a los clientes solicitar exactamente los datos que necesitan.",
    iconColor: "text-pink-600",
    subsections: [
      {
        title: "Schema y Types",
        content: "El Schema de GraphQL define la estructura de los datos disponibles en la API, utilizando un sistema de tipos fuerte. Los tipos básicos incluyen Object Types, Scalars, Enums, Interfaces y Unions. El Schema actúa como un contrato entre el cliente y el servidor, documentando todos los datos disponibles y cómo se relacionan entre sí."
      },
      {
        title: "Queries y Mutations",
        content: "Las Queries en GraphQL permiten solicitar datos específicos, mientras que las Mutations se utilizan para modificar datos. A diferencia de REST, GraphQL permite solicitar múltiples recursos relacionados en una sola consulta, reduciendo el número de peticiones necesarias. Las consultas son declarativas y permiten especificar exactamente qué campos se necesitan."
      },
      {
        title: "Apollo Client",
        content: "Apollo Client es una biblioteca completa para gestionar el estado y los datos en aplicaciones que utilizan GraphQL. Ofrece características como caché inteligente, manejo de errores, integración con frameworks populares como React, y herramientas de desarrollo avanzadas. Apollo Client simplifica la integración de GraphQL en aplicaciones frontend."
      },
      {
        title: "Apollo Server",
        content: "Apollo Server es un servidor GraphQL de código abierto que facilita la creación de APIs GraphQL. Proporciona características como validación automática, generación de documentación, integración con diversos backends, y soporte para suscripciones en tiempo real. Es altamente extensible y se puede integrar con cualquier framework de Node.js."
      },
      {
        title: "Resolvers",
        content: "Los resolvers son funciones que determinan cómo se obtienen los datos para cada campo en un schema GraphQL. Son responsables de acceder a las fuentes de datos (bases de datos, APIs, etc.) y transformar los datos según sea necesario. Los resolvers pueden ser síncronos o asíncronos, y pueden implementar lógica de negocio compleja."
      },
      {
        title: "GraphQL Tools",
        content: "El ecosistema GraphQL incluye numerosas herramientas que mejoran el desarrollo, como GraphQL Playground para pruebas interactivas, GraphQL Code Generator para generación de tipos, y herramientas de monitoreo y análisis de rendimiento. Estas herramientas facilitan el desarrollo, prueba y mantenimiento de APIs GraphQL."
      }
    ]
  },
  {
    sectionNumber: 17,
    icon: FaMobile,
    title: "Progressive Web Apps",
    description: "Las Progressive Web Apps (PWAs) son aplicaciones web que utilizan capacidades modernas del navegador para ofrecer una experiencia similar a las aplicaciones nativas. Combinan lo mejor de la web y las aplicaciones móviles, proporcionando características como funcionamiento offline, notificaciones push y acceso al hardware del dispositivo.",
    iconColor: "text-indigo-600",
    subsections: [
      {
        title: "Service Workers",
        content: "Los Service Workers son scripts que se ejecutan en segundo plano, independientes de la página web, y permiten implementar funcionalidades como el almacenamiento en caché, sincronización en segundo plano y notificaciones push. Son fundamentales para el funcionamiento offline y la mejora del rendimiento en PWAs."
      },
      {
        title: "Manifest.json",
        content: "El Web App Manifest es un archivo JSON que proporciona información sobre la PWA, como el nombre, iconos, colores de tema y comportamiento de visualización. Permite que la aplicación sea instalable en el dispositivo del usuario y se comporte como una aplicación nativa."
      },
      {
        title: "Offline First",
        content: "El enfoque Offline First prioriza el funcionamiento de la aplicación sin conexión a Internet. Utiliza estrategias de almacenamiento en caché y sincronización para garantizar que la aplicación funcione de manera confiable independientemente del estado de la conexión. Incluye técnicas como Cache API, IndexedDB y background sync."
      },
      {
        title: "Push Notifications",
        content: "Las notificaciones push permiten enviar mensajes a los usuarios incluso cuando no están activamente usando la aplicación. Utilizan la Push API y Notification API para enviar actualizaciones relevantes a los usuarios, mejorando el engagement y la retención de usuarios."
      },
      {
        title: "App Shell Architecture",
        content: "La arquitectura App Shell separa la infraestructura básica de la aplicación y la UI del contenido. Esta separación permite que la shell se almacene en caché y se cargue rápidamente, mientras que el contenido dinámico se carga según sea necesario, mejorando significativamente el rendimiento percibido."
      },
      {
        title: "Workbox",
        content: "Workbox es una colección de bibliotecas y herramientas de Google para construir PWAs. Simplifica tareas comunes como la gestión de caché, el enrutamiento de solicitudes y las estrategias de precarga. Proporciona una API de alto nivel para implementar patrones de Service Worker de manera eficiente."
      }
    ]
  },
  {
    sectionNumber: 18,
    icon: FaGlobe,
    title: "Browser APIs",
    description: "Las APIs del navegador son interfaces que permiten interactuar con diferentes funcionalidades del navegador web. Estas APIs proporcionan acceso a características como almacenamiento local, geolocalización, manipulación del DOM, y otras capacidades que permiten crear aplicaciones web más ricas y interactivas.",
    iconColor: "text-yellow-500",
    subsections: [
      {
        title: "DOM API",
        content: "La API del Document Object Model (DOM) permite manipular dinámicamente la estructura, contenido y estilos de documentos web. Proporciona métodos para seleccionar elementos, modificar contenido, gestionar eventos, y crear o eliminar elementos. Es fundamental para crear interacciones dinámicas y actualizar la interfaz de usuario en respuesta a acciones del usuario."
      },
      {
        title: "Storage APIs",
        content: "Las APIs de almacenamiento incluyen localStorage, sessionStorage, y IndexedDB. localStorage y sessionStorage permiten almacenar datos clave-valor de manera persistente o por sesión, respectivamente. IndexedDB es una base de datos de bajo nivel para almacenar grandes cantidades de datos estructurados, incluyendo archivos y blobs."
      },
      {
        title: "Fetch API",
        content: "La Fetch API proporciona una interfaz moderna para realizar peticiones HTTP. Ofrece una sintaxis más poderosa y flexible que XMLHttpRequest, basada en Promesas. Permite configurar peticiones con diferentes métodos, headers, y tipos de datos, además de manejar respuestas de manera más eficiente."
      },
      {
        title: "Web Workers",
        content: "Los Web Workers permiten ejecutar scripts en hilos de fondo, independientes del hilo principal de la interfaz de usuario. Esto permite realizar operaciones intensivas sin bloquear la UI, mejorando el rendimiento y la responsividad de la aplicación. Los Workers pueden comunicarse con el hilo principal mediante mensajes."
      },
      {
        title: "Geolocation API",
        content: "La API de Geolocalización permite obtener la ubicación geográfica del dispositivo del usuario. Proporciona métodos para obtener la posición actual, observar cambios en la ubicación, y configurar opciones como precisión y tiempo máximo de respuesta. Es útil para aplicaciones que necesitan funcionalidades basadas en ubicación."
      },
      {
        title: "History API",
        content: "La History API permite manipular el historial del navegador y gestionar la navegación en aplicaciones de una sola página (SPA). Proporciona métodos para agregar entradas al historial, modificar la URL sin recargar la página, y responder a cambios en la navegación del usuario."
      },
      {
        title: "Notifications API",
        content: "La API de Notificaciones permite a las aplicaciones web mostrar notificaciones del sistema operativo al usuario, incluso cuando la aplicación no está activa en el navegador. Esta API requiere permiso del usuario y es especialmente útil en combinación con Service Workers para implementar notificaciones push en PWAs."
      },
      {
        title: "Device Orientation API",
        content: "La API de Orientación del Dispositivo proporciona información sobre la posición y movimiento del dispositivo en el espacio 3D. Permite detectar la rotación, inclinación y movimiento del dispositivo, siendo útil para juegos, aplicaciones de realidad aumentada y experiencias interactivas basadas en el movimiento."
      },
      {
        title: "Payment Request API",
        content: "La Payment Request API simplifica el proceso de pago en aplicaciones web proporcionando una interfaz estandarizada para manejar transacciones. Permite integrar diferentes métodos de pago de manera consistente y segura, mejorando la experiencia de checkout y reduciendo el abandono del carrito."
      },
      {
        title: "Credential Management API",
        content: "La API de Gestión de Credenciales permite a las aplicaciones web interactuar con el administrador de contraseñas del navegador. Facilita el almacenamiento y recuperación segura de credenciales de usuario, permitiendo implementar funciones como inicio de sesión automático y gestión de múltiples cuentas de manera segura."
      }
    ]
  },
  {
    sectionNumber: 19,
    icon: FaCode,
    title: "Static Site Generators",
    description: "Los generadores de sitios estáticos son herramientas que generan sitios web estáticos a partir de plantillas y contenido. Estos generadores combinan datos, contenido y plantillas para crear páginas HTML estáticas que se pueden servir de manera eficiente, proporcionando excelente rendimiento, seguridad y SEO.",
    iconColor: "text-green-600",
    subsections: [
      {
        title: "Astro",
        content: "Astro es un generador de sitios modernos que permite construir sitios web rápidos utilizando cualquier framework UI. Su arquitectura única de islas permite mantener la mayor parte del sitio como HTML estático mientras permite componentes interactivos donde sea necesario. Destaca por su rendimiento excepcional y su capacidad para trabajar con múltiples frameworks simultáneamente."
      },
      {
        title: "Next.js Static Generation",
        content: "Next.js ofrece potentes capacidades de generación estática que permiten pre-renderizar páginas en tiempo de construcción. Soporta generación estática con y sin datos, generación estática incremental (ISR), y permite combinar páginas estáticas y dinámicas en el mismo proyecto. Es especialmente útil para sitios que requieren alto rendimiento y buena SEO."
      },
      {
        title: "Gatsby",
        content: "Gatsby es un framework basado en React para crear sitios web estáticos y aplicaciones. Utiliza GraphQL para manejar datos y ofrece un rico ecosistema de plugins. Destaca por su sistema de datos unificado, optimizaciones de rendimiento automáticas, y capacidades de procesamiento de imágenes avanzadas."
      },
      {
        title: "Hugo",
        content: "Hugo es uno de los generadores de sitios estáticos más rápidos, escrito en Go. Se destaca por su velocidad de construcción excepcional, manejo de contenido flexible, y capacidad para manejar sitios de cualquier tamaño. Ofrece características como taxonomías, shortcodes, y un potente sistema de plantillas."
      },
      {
        title: "11ty (Eleventy)",
        content: "11ty es un generador de sitios estáticos simple y flexible que funciona con JavaScript. Es agnóstico en cuanto a la estructura del proyecto y soporta múltiples lenguajes de plantillas. Su simplicidad y rendimiento lo hacen ideal para proyectos que requieren un enfoque minimalista pero potente."
      },
      {
        title: "Jekyll",
        content: "Jekyll es uno de los generadores de sitios estáticos más antiguos y probados, escrito en Ruby. Es la herramienta detrás de GitHub Pages y ofrece una experiencia de desarrollo sencilla. Incluye características como soporte para blogs, colecciones de contenido, y un sistema de plugins extensible."
      }
    ]
  },
  {
    sectionNumber: 20,
    icon: FaMobile,
    title: "Mobile Development",
    description: "El desarrollo móvil con tecnologías web permite crear aplicaciones móviles multiplataforma utilizando conocimientos web existentes. Estas soluciones ofrecen diferentes enfoques para construir aplicaciones móviles, desde compilación nativa hasta wrappers híbridos, permitiendo compartir código entre plataformas y acelerar el desarrollo.",
    iconColor: "text-purple-600",
    subsections: [
      {
        title: "React Native",
        content: "React Native permite construir aplicaciones móviles nativas usando React. Compila a código nativo real, proporcionando rendimiento similar a aplicaciones nativas. Ofrece hot reloading, componentes nativos, y acceso directo a APIs del dispositivo. Su arquitectura bridge permite la comunicación entre JavaScript y código nativo, y su gran ecosistema incluye numerosas bibliotecas y herramientas."
      },
      {
        title: "Flutter",
        content: "Flutter, desarrollado por Google, utiliza el lenguaje Dart para crear aplicaciones nativas de alto rendimiento. Se distingue por su motor de renderizado personalizado que garantiza consistencia visual entre plataformas. Ofrece hot reload, widgets personalizables, y un rico conjunto de componentes Material y Cupertino. Su arquitectura permite un rendimiento excepcional y animaciones fluidas."
      },
      {
        title: "Ionic",
        content: "Ionic es un framework para crear aplicaciones híbridas usando tecnologías web estándar (HTML, CSS, JavaScript). Se integra con frameworks como Angular, React o Vue, y utiliza Capacitor o Cordova para acceder a funcionalidades nativas. Destaca por su facilidad de uso, amplia biblioteca de componentes UI, y capacidad para reutilizar código web existente."
      },
      {
        title: "Native APIs",
        content: "El acceso a APIs nativas es crucial en el desarrollo móvil. Cada framework proporciona diferentes mecanismos para interactuar con características del dispositivo como cámara, GPS, sensores, y almacenamiento. Esto incluye plugins nativos, bridges, y wrappers que permiten acceder a funcionalidades específicas de la plataforma."
      },
      {
        title: "Performance Optimization",
        content: "La optimización del rendimiento en aplicaciones móviles incluye técnicas como lazy loading, gestión eficiente de memoria, optimización de imágenes, y minimización de operaciones en el bridge nativo. Cada framework tiene sus propias mejores prácticas y herramientas para monitorear y mejorar el rendimiento."
      },
      {
        title: "Platform-Specific Design",
        content: "El diseño específico de plataforma es importante para proporcionar una experiencia de usuario nativa. Esto incluye seguir las guías de diseño de iOS (Human Interface Guidelines) y Android (Material Design), adaptarse a diferentes tamaños de pantalla, y respetar los patrones de navegación específicos de cada plataforma."
      }
    ]
  },
  {
    sectionNumber: 21,
    icon: FaDesktop,
    title: "Desktop Apps",
    description: "El desarrollo de aplicaciones de escritorio con tecnologías web permite crear software multiplataforma utilizando HTML, CSS y JavaScript. Estas herramientas combinan el poder de las tecnologías web con el acceso a APIs del sistema operativo, permitiendo crear aplicaciones de escritorio robustas y modernas.",
    iconColor: "text-teal-600",
    subsections: [
      {
        title: "Electron",
        content: "Electron es un framework que permite crear aplicaciones de escritorio multiplataforma usando tecnologías web. Combina Chromium para el renderizado y Node.js para el acceso al sistema. Es utilizado por aplicaciones populares como VS Code y Discord. Ofrece acceso completo a APIs nativas, integración con el sistema operativo, y un rico ecosistema de plugins y herramientas."
      },
      {
        title: "Tauri",
        content: "Tauri es una alternativa moderna a Electron que utiliza el motor web del sistema operativo y un backend en Rust. Produce aplicaciones más ligeras y eficientes en recursos. Ofrece mejor seguridad, menor consumo de memoria, y tamaños de distribución más pequeños. Su arquitectura permite un rendimiento excepcional mientras mantiene la flexibilidad del desarrollo web."
      },
      {
        title: "NW.js",
        content: "NW.js (anteriormente Node-Webkit) permite ejecutar aplicaciones web como aplicaciones de escritorio nativas. A diferencia de Electron, combina Node.js y Chromium en un solo runtime. Esto permite acceder directamente a módulos Node.js desde el código frontend y ofrece una experiencia de desarrollo más integrada."
      },
      {
        title: "Neutralino",
        content: "Neutralino es un framework ligero para crear aplicaciones de escritorio usando tecnologías web. Utiliza el navegador nativo del sistema operativo y un backend ligero, resultando en aplicaciones más pequeñas y eficientes. Es una alternativa minimalista ideal para aplicaciones que no requieren todas las características de Electron."
      },
      {
        title: "Desktop Integration",
        content: "La integración con el escritorio incluye características como notificaciones del sistema, accesos directos, integración con la bandeja del sistema, y APIs nativas del sistema operativo. Es crucial para proporcionar una experiencia de usuario nativa y aprovechar las capacidades específicas de cada plataforma."
      },
      {
        title: "Performance Considerations",
        content: "El rendimiento en aplicaciones de escritorio requiere consideraciones especiales como la gestión de memoria, el uso eficiente de recursos del sistema, y la optimización del tiempo de inicio. Cada framework tiene sus propias mejores prácticas para garantizar una experiencia fluida y responsiva."
      }
    ]
  },
  {
    sectionNumber: 22,
    icon: FaBolt,
    title: "Frontend Performance & Optimization",
    description: "La optimización del rendimiento frontend es crucial para proporcionar una excelente experiencia de usuario. Abarca técnicas y mejores prácticas para mejorar la velocidad de carga, la interactividad y el rendimiento general de las aplicaciones web.",
    iconColor: "text-yellow-600",
    subsections: [
      {
        title: "Core Web Vitals",
        content: "Los Core Web Vitals son métricas que Google considera cruciales para la experiencia del usuario, incluyendo Largest Contentful Paint (LCP), First Input Delay (FID), y Cumulative Layout Shift (CLS). Estas métricas ayudan a medir y optimizar la velocidad de carga, interactividad y estabilidad visual de una página web."
      },
      {
        title: "Code Splitting",
        content: "El code splitting permite dividir el código en chunks más pequeños que pueden cargarse bajo demanda, mejorando el tiempo de carga inicial. Incluye técnicas como lazy loading de componentes, dynamic imports, y route-based splitting, fundamentales para optimizar aplicaciones web modernas."
      },
      {
        title: "Asset Optimization",
        content: "La optimización de assets incluye técnicas como la compresión de imágenes, el uso de formatos modernos como WebP, la implementación de lazy loading para imágenes y videos, y la optimización de fuentes web. También abarca la minificación de CSS/JavaScript y la implementación de estrategias de caching efectivas."
      },
      {
        title: "Runtime Performance",
        content: "El rendimiento en tiempo de ejecución se centra en optimizar la fluidez y responsividad de la aplicación. Incluye técnicas como la virtualización de listas largas, la optimización de re-renders en frameworks como React, y la gestión eficiente de eventos y animaciones para mantener 60 FPS."
      },
      {
        title: "Network Optimization",
        content: "La optimización de red incluye implementación de service workers para offline functionality, estrategias de precarga y prefetch, HTTP/2 y HTTP/3, y optimización de la entrega de recursos. También abarca la implementación de CDNs y la optimización de la caché del navegador."
      },
      {
        title: "Performance Monitoring",
        content: "El monitoreo del rendimiento implica el uso de herramientas como Lighthouse, Chrome DevTools Performance panel, y servicios de monitoreo en tiempo real. Incluye la recopilación de métricas de usuario real (RUM) y la implementación de performance budgets para mantener estándares de rendimiento."
      }
    ]
  }
];

export default roadmapData;
