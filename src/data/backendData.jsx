import { FaCode, FaGitAlt, FaDatabase, FaServer, FaShieldAlt, FaBolt, FaLock, FaVial, FaRocket, FaSearch, FaChartLine, FaChartBar } from 'react-icons/fa';

const backendData = [
  {
    sectionNumber: 1,
    icon: <FaCode />,
    title: "Lenguajes de Programación",
    description: "La elección del lenguaje de programación es fundamental en el desarrollo backend. Cada lenguaje tiene sus propias fortalezas y casos de uso ideales. Conocer las características principales de cada uno te ayudará a tomar decisiones informadas según los requerimientos de tu proyecto.",
    iconColor: "text-blue-600",
    subsections: [
      {
        title: "JavaScript",
        content: "JavaScript en el backend, principalmente a través de Node.js, permite usar el mismo lenguaje tanto en frontend como en backend. Su naturaleza asíncrona y su gran ecosistema de paquetes NPM lo hacen ideal para aplicaciones en tiempo real y APIs. Destaca por su rendimiento en operaciones I/O no bloqueantes y su amplia comunidad de desarrolladores."
      },
      {
        title: "Python",
        content: "Python es conocido por su simplicidad y legibilidad. Es especialmente fuerte en procesamiento de datos, machine learning y desarrollo web a través de frameworks como Django y Flask. Su filosofía 'baterías incluidas' proporciona una biblioteca estándar completa, y su sintaxis clara lo hace excelente para principiantes y proyectos empresariales."
      },
      {
        title: "Java",
        content: "Java es un lenguaje robusto y maduro, ampliamente utilizado en aplicaciones empresariales. Destaca por su portabilidad ('write once, run anywhere'), fuerte tipado, y excelente manejo de concurrencia. Con frameworks como Spring Boot, ofrece un ecosistema completo para desarrollo backend escalable y mantenible."
      },
      {
        title: "PHP",
        content: "PHP domina el desarrollo web, potenciando gran parte de la web actual. Con frameworks modernos como Laravel y Symfony, ofrece desarrollo rápido y eficiente. Destaca por su facilidad de despliegue, amplia disponibilidad de hosting, y excelente integración con bases de datos y servidores web."
      },
      {
        title: "Go",
        content: "Go (Golang) fue diseñado por Google para desarrollo de sistemas y servicios escalables. Destaca por su excelente manejo de concurrencia a través de goroutines y channels, compilación rápida, y generación de binarios únicos. Es ideal para microservicios, herramientas CLI y aplicaciones de alto rendimiento."
      },
      {
        title: "Ruby",
        content: "Ruby, especialmente con Ruby on Rails, es conocido por su elegante sintaxis y filosofía de 'convención sobre configuración'. Permite desarrollo rápido de aplicaciones web con menos código. Es especialmente popular en startups por su velocidad de desarrollo y expresividad."
      },
      {
        title: "C#",
        content: "C# es un lenguaje versátil de Microsoft que combina la eficiencia de C++ con la simplicidad de Visual Basic. Con .NET Core, ahora es multiplataforma y ofrece excelente rendimiento. Destaca en desarrollo empresarial, juegos (Unity), y aplicaciones Windows."
      },
      {
        title: "Rust",
        content: "Rust se centra en seguridad, concurrencia y rendimiento. Su sistema de propiedad garantiza seguridad de memoria sin garbage collector. Es ideal para sistemas de bajo nivel, WebAssembly, y aplicaciones donde el rendimiento y la seguridad son críticos."
      }
    ]
  },
  {
    sectionNumber: 2,
    icon: <FaGitAlt />,
    title: "Repo Hosting Services",
    description: "Los servicios de alojamiento de repositorios son fundamentales para el desarrollo moderno, permitiendo el control de versiones y la colaboración en equipo.",
    iconColor: "text-orange-500",
    subsections: [
      {
        title: "GitHub",
        content: "La plataforma más popular para alojar código. Ofrece características como Issues, Pull Requests, Actions para CI/CD, y Pages para hosting. Es especialmente útil para proyectos de código abierto y colaboración en equipo."
      },
      {
        title: "GitLab",
        content: "Una alternativa completa a GitHub que ofrece CI/CD integrado, registro de contenedores, y la posibilidad de ser auto-hospedado. Ideal para empresas que necesitan mantener su código en sus propios servidores."
      },
      {
        title: "Bitbucket",
        content: "Parte de la suite de Atlassian, se integra bien con otras herramientas como Jira y Confluence. Ofrece repositorios privados gratuitos y es popular en entornos empresariales."
      }
    ]
  },
  {
    sectionNumber: 3,
    icon: <FaDatabase />,
    title: "Bases de Datos Relacionales",
    description: "Las bases de datos relacionales son fundamentales en el desarrollo backend, proporcionando una forma estructurada y confiable de almacenar y gestionar datos. Utilizan SQL como lenguaje estándar y garantizan la integridad de los datos a través de las propiedades ACID.",
    iconColor: "text-blue-500",
    subsections: [
      {
        title: "PostgreSQL",
        content: "Sistema de gestión de bases de datos relacional avanzado y open-source. Destaca por su robustez, extensibilidad y cumplimiento de estándares SQL. Ofrece características únicas como tipos de datos personalizados, herencia de tablas, replicación multi-maestro y soporte nativo para JSON. Ideal para aplicaciones complejas que requieren integridad de datos y escalabilidad."
      },
      {
        title: "MySQL",
        content: "El sistema de gestión de bases de datos relacionales más popular del mundo. Open-source, con excelente rendimiento, fiabilidad y facilidad de uso. Ideal para aplicaciones web de todos los tamaños, desde pequeños proyectos hasta grandes empresas. Cuenta con una gran comunidad y abundante documentación."
      },
      {
        title: "MariaDB",
        content: "Fork de MySQL, totalmente compatible pero con mejoras adicionales. Ofrece mejor rendimiento y más características que MySQL. Destaca por su compromiso con el open-source, nuevas funcionalidades como motores de almacenamiento avanzados y mejor soporte para procedimientos almacenados."
      },
      {
        title: "Microsoft SQL Server",
        content: "Solución empresarial de Microsoft con potentes herramientas de análisis y reporting. Excelente integración con tecnologías .NET y Azure. Ofrece características avanzadas como Always Encrypted, consultas espaciales y procesamiento in-memory."
      },
      {
        title: "Oracle Database",
        content: "Sistema líder en el mercado empresarial, conocido por su robustez, escalabilidad y características avanzadas. Ofrece máximo rendimiento y confiabilidad para aplicaciones críticas. Incluye características únicas como Real Application Clusters y Autonomous Database."
      },
      {
        title: "SQLite",
        content: "Base de datos ligera, serverless y autocontenida. Ideal para aplicaciones móviles y desarrollo local. No requiere configuración de servidor y almacena la base de datos completa en un único archivo. Excelente para prototipos, testing y aplicaciones embebidas."
      }
    ]
  },
  {
    sectionNumber: 4,
    icon: <FaServer />,
    title: "APIs y Protocolos",
    description: "Las APIs (Interfaces de Programación de Aplicaciones) son fundamentales en el desarrollo backend moderno, permitiendo la comunicación entre diferentes servicios y aplicaciones de manera estructurada y eficiente.",
    iconColor: "text-purple-500",
    subsections: [
      {
        title: "REST API",
        content: "La arquitectura REST (Representational State Transfer) es el estándar de facto para el diseño de APIs web. Se basa en recursos y operaciones HTTP estándar (GET, POST, PUT, DELETE). Destaca por su simplicidad, escalabilidad y statelessness, haciendo que sea ideal para servicios web públicos y microservicios."
      },
      {
        title: "JSON APIs",
        content: "Las APIs basadas en JSON son la forma más común de intercambio de datos en la web moderna. JSON (JavaScript Object Notation) ofrece un formato ligero, legible y fácil de parsear. Su simplicidad y compatibilidad universal lo han convertido en el formato preferido para APIs RESTful y comunicación cliente-servidor en general."
      },
      {
        title: "SOAP",
        content: "Simple Object Access Protocol es un protocolo estándar que define cómo dos objetos en diferentes procesos pueden comunicarse mediante intercambio de datos XML. Aunque más complejo que REST, SOAP ofrece características empresariales robustas como seguridad integrada, gestión de transacciones y manejo de errores estandarizado. Común en sistemas empresariales legacy y servicios que requieren alta confiabilidad."
      },
      {
        title: "GraphQL",
        content: "Lenguaje de consulta y runtime para APIs desarrollado por Facebook. Permite a los clientes solicitar exactamente los datos que necesitan, evitando el over-fetching y under-fetching. Ideal para aplicaciones con necesidades de datos complejas y variables, ofreciendo mayor flexibilidad que REST."
      },
      {
        title: "gRPC",
        content: "Framework RPC (Remote Procedure Call) de alto rendimiento desarrollado por Google. Utiliza Protocol Buffers para serialización de datos y HTTP/2 para transporte. Excelente para microservicios y comunicación entre servicios internos, especialmente cuando el rendimiento es crítico."
      },
      {
        title: "WebSockets",
        content: "Protocolo que permite comunicación bidireccional en tiempo real entre cliente y servidor. Ideal para aplicaciones que requieren actualizaciones en tiempo real como chats, juegos en línea o dashboards en vivo. Mantiene una conexión persistente para intercambio de datos eficiente."
      },
      {
        title: "Webhooks",
        content: "Mecanismo de callback HTTP que permite la comunicación entre servicios basada en eventos. En lugar de polling constante, los servicios pueden suscribirse a eventos y recibir notificaciones cuando estos ocurren. Ideal para integraciones y automatizaciones entre sistemas."
      }
    ]
  },
  {
    sectionNumber: 5,
    icon: <FaShieldAlt />,
    title: "Autenticación y Autorización",
    description: "La seguridad es crucial en el desarrollo backend. Los sistemas de autenticación y autorización garantizan que solo los usuarios autorizados puedan acceder a recursos específicos y que sus datos permanezcan seguros.",
    iconColor: "text-red-500",
    subsections: [
      {
        title: "JWT (JSON Web Tokens)",
        content: "Estándar abierto que permite la transmisión segura de información entre partes como un objeto JSON. Los JWTs son autónomos y pueden contener toda la información necesaria sobre el usuario, eliminando la necesidad de consultar la base de datos en cada solicitud. Ideal para APIs RESTful y arquitecturas sin estado."
      },
      {
        title: "OAuth 2.0",
        content: "Protocolo de autorización que permite a aplicaciones obtener acceso limitado a cuentas de usuario en servicios HTTP. Ampliamente utilizado para login social y APIs de terceros. Proporciona flujos de autorización para aplicaciones web, móviles y de escritorio, permitiendo el acceso seguro a recursos sin compartir credenciales."
      },
      {
        title: "Basic Authentication",
        content: "Método simple de autenticación HTTP donde las credenciales (usuario y contraseña) se envían en el encabezado de la solicitud. A pesar de su simplicidad, debe usarse solo sobre HTTPS para garantizar la seguridad. Común en APIs internas y herramientas de desarrollo."
      },
      {
        title: "Token Authentication",
        content: "Sistema que utiliza tokens únicos para autenticar solicitudes. Los tokens pueden ser JWT u otros formatos personalizados. Ofrece mejor seguridad que Basic Auth y es ideal para aplicaciones modernas, especialmente en arquitecturas sin estado y microservicios."
      },
      {
        title: "Cookie Based Authentication",
        content: "Método tradicional que almacena la información de sesión en el servidor y envía un identificador de sesión al cliente mediante cookies. Proporciona buena seguridad y es ideal para aplicaciones web tradicionales. Incluye protecciones contra CSRF y es bien soportado por navegadores."
      },
      {
        title: "OpenID Connect",
        content: "Capa de identidad construida sobre OAuth 2.0 que permite a los clientes verificar la identidad de usuarios. Proporciona perfil de usuario, SSO y federación de identidades. Ampliamente utilizado para autenticación empresarial y servicios cloud."
      },
      {
        title: "SAML",
        content: "Security Assertion Markup Language es un estándar abierto para intercambiar datos de autenticación y autorización. Popular en entornos empresariales y aplicaciones B2B. Soporta SSO entre dominios y es altamente configurable para requisitos de seguridad complejos."
      },
      {
        title: "Multi-Factor Authentication (MFA)",
        content: "Método que requiere dos o más factores de verificación para autenticar usuarios. Combina algo que el usuario sabe (contraseña), tiene (token físico o móvil) y/o es (biometría). Proporciona una capa adicional de seguridad crucial para aplicaciones sensibles."
      }
    ]
  },
  {
    sectionNumber: 6,
    icon: <FaBolt />,
    title: "Caching",
    description: "El caching es una técnica fundamental para mejorar el rendimiento de las aplicaciones, reducir la carga del servidor y optimizar la experiencia del usuario. Implementar estrategias de caché en diferentes niveles puede reducir significativamente los tiempos de respuesta y el consumo de recursos.",
    iconColor: "text-yellow-500",
    subsections: [
      {
        title: "Server Side Caching",
        content: "Almacenamiento en caché a nivel de servidor utilizando sistemas como Redis o Memcached. Permite almacenar resultados de consultas frecuentes, sesiones de usuario y datos computacionalmente costosos. Reduce la carga en la base de datos y mejora significativamente los tiempos de respuesta del servidor."
      },
      {
        title: "CDN Caching",
        content: "Content Delivery Networks distribuyen el contenido estático a través de una red global de servidores. Acerca los datos a los usuarios finales, reduce la latencia y mejora la disponibilidad. Ideal para archivos estáticos, imágenes, videos y otros recursos que no cambian frecuentemente."
      },
      {
        title: "Client Side Caching",
        content: "Implementado en el navegador mediante diferentes mecanismos como localStorage, sessionStorage y Service Workers. Permite almacenar datos localmente en el dispositivo del usuario, reduciendo solicitudes al servidor y mejorando la experiencia offline."
      },
      {
        title: "In-Memory Caching",
        content: "Almacenamiento temporal de datos en la memoria RAM del servidor. Proporciona acceso ultrarrápido a datos frecuentemente utilizados. Sistemas como Redis y Memcached son populares para esta implementación, ofreciendo características adicionales como persistencia y estructuras de datos avanzadas."
      },
      {
        title: "Cache Invalidation",
        content: "Estrategias y técnicas para mantener la coherencia de los datos en caché. Incluye métodos como time-based expiration, version tagging y cache-busting. Fundamental para asegurar que los usuarios siempre vean datos actualizados mientras se mantienen los beneficios del caching."
      },
      {
        title: "Redis",
        content: "Sistema de almacenamiento de datos en memoria, de código abierto, que funciona como base de datos, caché, broker de mensajes y cola. Soporta múltiples estructuras de datos (strings, hashes, lists, sets, sorted sets), replicación, transacciones y scripts Lua. Ideal para casos de uso que requieren alta velocidad como leaderboards, contadores en tiempo real y gestión de sesiones."
      },
      {
        title: "Memcached",
        content: "Sistema distribuido de caché en memoria, optimizado para simplificar y acelerar aplicaciones web dinámicas. Se centra en ser rápido y simple, almacenando pares clave-valor en memoria RAM. Ideal para cachear resultados de consultas de base de datos, API calls y renderizado de páginas. Popular en arquitecturas de alto tráfico por su eficiencia y escalabilidad horizontal."
      }
    ]
  },
  {
    sectionNumber: 7,
    icon: <FaLock />,
    title: "Web Security (Hasing Algorithms)",
    description: "La seguridad web es crucial para proteger datos sensibles y mantener la integridad de las aplicaciones. Las funciones hash y algoritmos de encriptación son fundamentales para el almacenamiento seguro de contraseñas y la protección de datos.",
    iconColor: "text-red-600",
    subsections: [
      {
        title: "MD5",
        content: "Función hash criptográfica que produce un valor hash de 128 bits. Aunque históricamente popular, ya no se considera segura para almacenamiento de contraseñas debido a su vulnerabilidad a ataques. Útil para verificación de integridad de archivos, pero no recomendada para seguridad de contraseñas."
      },
      {
        title: "SHA (Secure Hash Algorithm)",
        content: "Familia de funciones hash criptográficas que incluye SHA-256 y SHA-512. Más segura que MD5, produce hashes más largos y resistentes a colisiones. Ampliamente utilizada en seguridad digital, firmas digitales y blockchain."
      },
      {
        title: "scrypt",
        content: "Función de derivación de claves diseñada para ser computacionalmente intensiva en memoria. Dificulta los ataques de hardware especializado. Ideal para almacenamiento seguro de contraseñas en sistemas que requieren alta seguridad."
      },
      {
        title: "bcrypt",
        content: "Función de hashing de contraseñas basada en Blowfish. Incluye un salt automático y es adaptable mediante su factor de trabajo. Estándar de la industria para almacenamiento seguro de contraseñas, ofreciendo un excelente balance entre seguridad y rendimiento."
      }
    ]
  },
  {
    sectionNumber: 8,
    icon: <FaShieldAlt />,
    title: "Web Security II",
    description: "La seguridad web va más allá de la autenticación y el hashing. Incluye protocolos de comunicación segura, mejores prácticas y configuraciones que protegen tanto al servidor como a los usuarios finales de amenazas y vulnerabilidades.",
    iconColor: "text-green-600",
    subsections: [
      {
        title: "HTTPS",
        content: "Protocolo de transferencia segura que encripta la comunicación entre cliente y servidor. Fundamental para proteger datos sensibles durante la transmisión, prevenir ataques man-in-the-middle y mantener la integridad de los datos. Esencial para cualquier aplicación web moderna, especialmente aquellas que manejan información personal o transacciones."
      },
      {
        title: "OWASP Risks",
        content: "El Open Web Application Security Project (OWASP) identifica y clasifica los principales riesgos de seguridad en aplicaciones web. Incluye vulnerabilidades como inyección SQL, XSS, CSRF, y broken authentication. Conocer y mitigar estos riesgos es crucial para desarrollar aplicaciones seguras."
      },
      {
        title: "CORS",
        content: "Cross-Origin Resource Sharing es un mecanismo que permite o restringe recursos web para ser accedidos desde diferentes dominios. Fundamental para prevenir ataques XSS y proteger APIs, mientras se permite la interoperabilidad legítima entre diferentes orígenes web."
      },
      {
        title: "SSL/TLS",
        content: "Protocolos criptográficos que proporcionan comunicaciones seguras en internet. SSL (legacy) y su sucesor TLS establecen un canal encriptado entre cliente y servidor, verifican la identidad del servidor mediante certificados digitales y aseguran la integridad de los datos transmitidos."
      },
      {
        title: "CSP",
        content: "Content Security Policy es una capa adicional de seguridad que ayuda a detectar y mitigar ciertos tipos de ataques, incluyendo Cross-Site Scripting (XSS) y ataques de inyección de datos. Permite especificar fuentes confiables para contenido web y restringir la ejecución de scripts no autorizados."
      },
      {
        title: "Server Security",
        content: "Conjunto de prácticas para asegurar el servidor web, incluyendo hardening del sistema operativo, configuración segura de servicios, gestión de actualizaciones y parches, monitoreo de actividad sospechosa, y configuración de firewalls. Fundamental para proteger la infraestructura que aloja las aplicaciones web."
      }
    ]
  },
  {
    sectionNumber: 9,
    icon: <FaVial />,
    title: "Testing",
    description: "El testing es esencial para garantizar la calidad y confiabilidad del software. Diferentes niveles y tipos de pruebas ayudan a identificar problemas temprano en el ciclo de desarrollo.",
    iconColor: "text-indigo-500",
    subsections: [
      {
        title: "Unit Testing",
        content: "Pruebas que verifican el funcionamiento correcto de unidades individuales de código (funciones, métodos, clases). Se centran en probar componentes aislados para garantizar que cada parte funcione correctamente por separado. Frameworks populares incluyen Jest, JUnit y PyTest."
      },
      {
        title: "Integration Testing",
        content: "Pruebas que verifican la correcta interacción entre diferentes componentes o servicios del sistema. Aseguran que los módulos funcionen correctamente cuando se combinan. Importantes para detectar problemas de integración, configuración y comunicación entre servicios."
      },
      {
        title: "Functional Testing",
        content: "Pruebas que verifican que el sistema cumple con los requisitos funcionales especificados. Se centran en probar funcionalidades completas desde la perspectiva del usuario final. Incluyen pruebas de interfaz de usuario, flujos de trabajo y casos de uso completos."
      }
    ]
  },
  {
    sectionNumber: 10,
    icon: <FaRocket />,
    title: "CI/CD",
    description: "La Integración Continua y el Despliegue Continuo (CI/CD) son prácticas fundamentales en el desarrollo moderno que automatizan la integración, pruebas y despliegue de código, mejorando la calidad y velocidad de entrega del software.",
    iconColor: "text-blue-500",
    subsections: [
      {
        title: "Continuous Integration",
        content: "Práctica de desarrollo que requiere que los desarrolladores integren código en un repositorio compartido varias veces al día. Cada integración se verifica mediante compilación automatizada y pruebas, permitiendo detectar errores rápidamente. Fundamental para mantener la calidad del código y facilitar el desarrollo colaborativo."
      },
      {
        title: "Continuous Deployment",
        content: "Extensión de la integración continua que automatiza el despliegue de aplicaciones a producción. Cada cambio que pasa las pruebas automatizadas se despliega automáticamente al entorno de producción. Reduce el tiempo entre la escritura del código y su disponibilidad para los usuarios."
      },
      {
        title: "Pipeline Automation",
        content: "Configuración y automatización de las etapas del proceso de CI/CD, incluyendo construcción, pruebas, análisis de calidad y despliegue. Las pipelines definen el flujo de trabajo completo desde el commit hasta la producción, asegurando consistencia y confiabilidad en cada paso."
      },
      {
        title: "Jenkins",
        content: "Servidor de automatización open-source líder que permite automatizar partes del desarrollo de software. Ofrece cientos de plugins para integración con diferentes herramientas y servicios. Popular por su flexibilidad, extensibilidad y soporte para pipelines declarativas."
      },
      {
        title: "GitHub Actions",
        content: "Herramienta de automatización integrada en GitHub que permite crear flujos de trabajo personalizados para CI/CD. Facilita la automatización de pruebas, construcción y despliegue directamente desde los repositorios de GitHub. Ofrece runners gratuitos y excelente integración con el ecosistema GitHub."
      },
      {
        title: "GitLab CI",
        content: "Sistema CI/CD integrado en GitLab que permite automatizar el ciclo de vida completo del desarrollo de software. Destaca por su integración nativa con GitLab, configuración basada en YAML y capacidad para ejecutar pipelines en contenedores Docker."
      },
      {
        title: "Docker en CI/CD",
        content: "Uso de contenedores Docker para garantizar consistencia entre entornos de desarrollo, pruebas y producción. Permite crear entornos aislados y reproducibles para cada etapa del pipeline, facilitando la portabilidad y escalabilidad de las aplicaciones."
      },
      {
        title: "Quality Gates",
        content: "Conjunto de criterios de calidad que el código debe cumplir antes de avanzar en el pipeline. Incluye cobertura de pruebas, análisis de código estático, revisión de seguridad y rendimiento. Fundamental para mantener altos estándares de calidad en el proceso de desarrollo."
      }
    ]
  },
  {
    sectionNumber: 11,
    icon: <FaDatabase />,
    title: "More About Databases",
    description: "Conceptos avanzados y mejores prácticas en el manejo de bases de datos que son fundamentales para desarrollar aplicaciones robustas y eficientes. Estos conceptos ayudan a garantizar la integridad de los datos, optimizar el rendimiento y mantener la escalabilidad del sistema.",
    iconColor: "text-purple-600",
    subsections: [
      {
        title: "ORMs",
        content: "Object-Relational Mapping es una técnica que permite interactuar con la base de datos usando objetos del lenguaje de programación. Herramientas como Sequelize, Hibernate o Django ORM abstraen la complejidad del SQL, facilitan las migraciones y mejoran la productividad. Sin embargo, es importante entender su funcionamiento interno para evitar problemas de rendimiento."
      },
      {
        title: "ACID",
        content: "Propiedades fundamentales de las transacciones en bases de datos: Atomicidad (todo o nada), Consistencia (integridad de datos), Aislamiento (transacciones independientes) y Durabilidad (cambios permanentes). Estas propiedades garantizan la fiabilidad en el procesamiento de transacciones y la integridad de los datos."
      },
      {
        title: "Transactions",
        content: "Unidad de trabajo que agrupa múltiples operaciones en la base de datos. Las transacciones garantizan la consistencia de los datos incluso en caso de fallos. Incluyen conceptos como commit, rollback, savepoints y niveles de aislamiento. Fundamentales para mantener la integridad de datos en operaciones complejas."
      },
      {
        title: "N+1 Problems",
        content: "Problema común de rendimiento donde una consulta inicial genera N consultas adicionales. Ocurre frecuentemente con ORMs al cargar relaciones. Se soluciona mediante eager loading, joins apropiados o usando técnicas de batch loading. Identificar y resolver problemas N+1 es crucial para el rendimiento de la aplicación."
      },
      {
        title: "Normalization",
        content: "Proceso de organizar datos en tablas para minimizar la redundancia y dependencias. Las formas normales (1NF a 5NF) proporcionan reglas para estructurar bases de datos relacionales. La normalización adecuada mejora la integridad de datos y reduce anomalías, aunque puede requerir balance con el rendimiento."
      },
      {
        title: "Failure Modes",
        content: "Diferentes tipos de fallos que pueden ocurrir en una base de datos: fallos de hardware, corrupción de datos, deadlocks, timeouts, etc. Entender los modos de fallo ayuda a diseñar sistemas resilientes con estrategias apropiadas de recuperación y alta disponibilidad."
      },
      {
        title: "Profiling Performance",
        content: "Técnicas y herramientas para analizar y optimizar el rendimiento de la base de datos. Incluye análisis de planes de ejecución, optimización de índices, monitoreo de queries lentos y ajuste de configuraciones. Fundamental para mantener tiempos de respuesta óptimos a medida que crece la aplicación."
      },
      {
        title: "Migrations",
        content: "Sistema para gestionar cambios incrementales y reversibles en el esquema de la base de datos. Las migraciones permiten versionar la estructura de la base de datos, facilitan el trabajo en equipo y proporcionan un mecanismo seguro para actualizar bases de datos en producción."
      }
    ]
  },
  {
    sectionNumber: 12,
    icon: <FaDatabase />,
    title: "Scaling Databases",
    description: "La escalabilidad de bases de datos es crucial para manejar el crecimiento de aplicaciones. Incluye estrategias y técnicas para optimizar el rendimiento, distribuir la carga y mantener la disponibilidad a medida que aumentan los datos y el tráfico.",
    iconColor: "text-pink-600",
    subsections: [
      {
        title: "Database Indexes",
        content: "Estructuras de datos que mejoran la velocidad de recuperación de información en bases de datos. Los índices permiten acceso rápido a registros sin necesidad de escanear tablas completas. Incluye conceptos como índices B-tree, hash, compuestos y parciales. La selección y mantenimiento adecuado de índices es crucial para el rendimiento de queries."
      },
      {
        title: "Data Replication",
        content: "Proceso de mantener copias de datos en múltiples ubicaciones. Incluye replicación maestro-esclavo, multi-maestro y configuraciones en cascada. Mejora la disponibilidad, permite distribuir cargas de lectura y proporciona redundancia para recuperación ante fallos. Fundamental para alta disponibilidad y recuperación ante desastres."
      },
      {
        title: "Sharding Strategies",
        content: "Técnicas para particionar datos horizontalmente a través de múltiples servidores. El sharding distribuye la carga y permite escalar horizontalmente. Incluye estrategias como sharding por rango, hash o geográfico. Crucial para manejar grandes volúmenes de datos y alto tráfico, aunque aumenta la complejidad operacional."
      },
      {
        title: "CAP Theorem",
        content: "Teorema fundamental que establece que un sistema distribuido no puede proporcionar simultáneamente Consistencia, Disponibilidad (Availability) y Tolerancia a Particiones. En la práctica, los sistemas deben elegir entre CP (consistente y tolerante a particiones) o AP (disponible y tolerante a particiones). Guía decisiones arquitectónicas en sistemas distribuidos."
      }
    ]
  },
  {
    sectionNumber: 13,
    icon: <FaServer />,
    title: "Architectural Patterns",
    description: "Los patrones arquitectónicos son soluciones probadas para el diseño estructural de aplicaciones software. Cada patrón tiene sus propias ventajas y casos de uso ideales, influyendo en la escalabilidad, mantenibilidad y flexibilidad del sistema.",
    iconColor: "text-gray-600",
    subsections: [
      {
        title: "Monolithic Apps",
        content: "Arquitectura tradicional donde toda la aplicación está construida como una única unidad. Todos los componentes están interconectados y comparten recursos. Simple de desarrollar y desplegar inicialmente, pero puede volverse compleja de mantener y escalar a medida que crece. Ideal para aplicaciones pequeñas o prototipos."
      },
      {
        title: "Microservices",
        content: "Arquitectura que estructura la aplicación como un conjunto de servicios pequeños, autónomos y especializados. Cada servicio se ejecuta en su propio proceso y se comunica mediante APIs bien definidas. Permite desarrollo independiente, despliegue selectivo y mejor escalabilidad, aunque aumenta la complejidad operacional."
      },
      {
        title: "SOA",
        content: "Service-Oriented Architecture organiza el software como un conjunto de servicios interoperables. Se centra en la reutilización de servicios, independencia de tecnología y estándares abiertos. A diferencia de microservicios, tiende a usar servicios más grandes y centralizados. Popular en entornos empresariales que requieren integración de sistemas heterogéneos."
      },
      {
        title: "Serverless",
        content: "Paradigma donde el proveedor cloud gestiona la infraestructura, permitiendo a los desarrolladores centrarse solo en el código. Las funciones se ejecutan en respuesta a eventos, escalando automáticamente. Reduce costos operativos y tiempo de desarrollo, aunque puede presentar desafíos en latencia y vendor lock-in."
      },
      {
        title: "Service Mesh",
        content: "Capa de infraestructura dedicada a gestionar la comunicación entre servicios en arquitecturas distribuidas. Proporciona descubrimiento de servicios, balanceo de carga, observabilidad y seguridad. Especialmente útil en entornos de microservicios complejos para gestionar el tráfico de red."
      },
      {
        title: "Twelve Factor Apps",
        content: "Conjunto de mejores prácticas para construir aplicaciones SaaS modernas. Incluye principios como configuración en el entorno, paridad dev/prod, escalabilidad stateless y procesos administrativos one-off. Guía el desarrollo de aplicaciones cloud-native que son mantenibles, escalables y portables."
      }
    ]
  },
  {
    sectionNumber: 14,
    icon: <FaCode />,
    title: "Design and Development Principles",
    description: "Los principios de diseño y desarrollo de software son fundamentales para crear aplicaciones mantenibles, escalables y robustas. Estos patrones y metodologías probadas guían el proceso de desarrollo y ayudan a resolver problemas comunes de manera efectiva.",
    iconColor: "text-emerald-600",
    subsections: [
      {
        title: "GOF Design Patterns",
        content: "Los patrones de diseño Gang of Four son soluciones probadas para problemas comunes en el diseño de software. Incluyen patrones creacionales (Factory, Singleton), estructurales (Adapter, Decorator) y de comportamiento (Observer, Strategy). Proporcionan un vocabulario común y mejores prácticas para el diseño de software orientado a objetos."
      },
      {
        title: "Domain Driven Design",
        content: "Enfoque de diseño de software que prioriza el dominio del negocio y su lógica. Utiliza un lenguaje ubicuo entre desarrolladores y expertos del dominio, define límites contextuales claros y organiza el código alrededor de modelos de dominio ricos. Ideal para sistemas complejos con lógica de negocio sofisticada."
      },
      {
        title: "Test Driven Development",
        content: "Metodología de desarrollo que comienza escribiendo pruebas antes del código de producción. Sigue el ciclo Red-Green-Refactor: escribir una prueba que falla, implementar el código mínimo para que pase, y refactorizar. Promueve diseño limpio, código testeable y mayor confianza en las modificaciones."
      },
      {
        title: "CQRS",
        content: "Command Query Responsibility Segregation separa las operaciones de lectura (queries) de las de escritura (commands). Permite optimizar y escalar cada tipo de operación de forma independiente. Especialmente útil en sistemas con cargas de lectura y escritura desequilibradas o requisitos de rendimiento específicos."
      },
      {
        title: "Event Sourcing",
        content: "Patrón que mantiene el estado de una aplicación como una secuencia de eventos, en lugar de solo el estado actual. Cada cambio se registra como un evento inmutable, permitiendo reconstruir el estado en cualquier punto del tiempo. Proporciona auditoría completa, depuración mejorada y capacidad de reproducir escenarios históricos."
      }
    ]
  },
  {
    sectionNumber: 15,
    icon: <FaServer />,
    title: "Containerization vs Virtualization",
    description: "Las tecnologías de containerización y virtualización son fundamentales en el desarrollo moderno, ofreciendo diferentes enfoques para el aislamiento y despliegue de aplicaciones. Cada una tiene sus propios casos de uso y ventajas específicas.",
    iconColor: "text-cyan-600",
    subsections: [
      {
        title: "Docker Containers",
        content: "Tecnología de containerización líder que empaqueta aplicaciones y sus dependencias en contenedores ligeros y portables. Los contenedores comparten el kernel del sistema operativo host pero mantienen aislamiento a nivel de proceso. Ofrece despliegue rápido, consistencia entre entornos y eficiencia en recursos."
      },
      {
        title: "Virtual Machines",
        content: "Emulación completa de sistemas operativos que incluyen su propio kernel y recursos virtualizados. Proporcionan máximo aislamiento y compatibilidad pero requieren más recursos que los contenedores. Ideales para escenarios que necesitan diferentes sistemas operativos o aislamiento total."
      },
      {
        title: "Container Orchestration",
        content: "Herramientas y plataformas como Kubernetes que automatizan el despliegue, escalado y gestión de contenedores. Proporcionan alta disponibilidad, balanceo de carga, auto-scaling y recuperación automática. Esenciales para gestionar aplicaciones containerizadas en producción."
      },
      {
        title: "Docker Compose",
        content: "Herramienta para definir y ejecutar aplicaciones Docker multi-contenedor. Permite especificar servicios, redes y volúmenes en un archivo YAML, facilitando el desarrollo y pruebas locales. Simplifica la gestión de aplicaciones complejas con múltiples servicios interconectados."
      },
      {
        title: "Container Security",
        content: "Prácticas y herramientas para asegurar contenedores y sus imágenes. Incluye escaneo de vulnerabilidades, políticas de acceso, aislamiento de red y gestión de secretos. Fundamental para mantener la seguridad en entornos containerizados."
      },
      {
        title: "Resource Management",
        content: "Técnicas para asignar y controlar recursos (CPU, memoria, almacenamiento) en entornos virtualizados y containerizados. Incluye límites de recursos, cuotas y monitorización. Crucial para optimizar el rendimiento y costos en infraestructura cloud."
      },
      {
        title: "Hybrid Approaches",
        content: "Estrategias que combinan virtualización y containerización según las necesidades específicas. Permite aprovechar las ventajas de ambas tecnologías, como ejecutar contenedores dentro de máquinas virtuales para mayor aislamiento o usar diferentes tecnologías para diferentes cargas de trabajo."
      }
    ]
  },
  {
    sectionNumber: 16,
    icon: <FaBolt />,
    title: "Message Brokers",
    description: "Los Message Brokers son componentes fundamentales en arquitecturas distribuidas, facilitando la comunicación asíncrona y el desacoplamiento entre servicios. Permiten implementar patrones de mensajería robustos y escalables.",
    iconColor: "text-orange-500",
    subsections: [
      {
        title: "RabbitMQ",
        content: "Broker de mensajes de código abierto que implementa el protocolo AMQP. Destaca por su flexibilidad en patrones de enrutamiento, soporte para múltiples protocolos de mensajería y alta confiabilidad. Ofrece características como colas durables, intercambios con diferentes tipos de enrutamiento, y confirmaciones de entrega. Ideal para casos de uso que requieren enrutamiento complejo y garantías de entrega."
      },
      {
        title: "Kafka",
        content: "Plataforma distribuida de streaming diseñada para manejar grandes volúmenes de datos en tiempo real. Se caracteriza por su alto rendimiento, escalabilidad horizontal y retención durable de mensajes. Utiliza un modelo basado en logs distribuidos, permitiendo reproducir eventos históricos y procesar streams de datos. Excelente para análisis en tiempo real, procesamiento de eventos y casos de uso de big data."
      }
    ]
  },
  {
    sectionNumber: 17,
    icon: <FaSearch />,
    title: "Search Engines",
    description: "Los motores de búsqueda distribuidos son fundamentales para implementar búsquedas eficientes y escalables en grandes volúmenes de datos. Proporcionan capacidades avanzadas de indexación, búsqueda de texto completo y análisis de datos.",
    iconColor: "text-yellow-600",
    subsections: [
      {
        title: "Elasticsearch",
        content: "Motor de búsqueda y análisis distribuido basado en Lucene. Destaca por su velocidad, escalabilidad y capacidades de búsqueda en tiempo real. Ofrece características avanzadas como búsqueda de texto completo, agregaciones complejas, análisis geoespacial y machine learning. Ideal para logs, métricas, búsqueda de documentos y casos de uso que requieren análisis de datos en tiempo real."
      },
      {
        title: "Solr",
        content: "Plataforma de búsqueda empresarial de código abierto, también basada en Lucene. Proporciona indexación distribuida, replicación, balanceo de carga, recuperación automatizada y características de alta disponibilidad. Destaca en búsqueda de texto completo, faceting, clustering dinámico y tiene una larga trayectoria en entornos empresariales. Especialmente fuerte en casos de uso de búsqueda de documentos y catálogos."
      }
    ]
  },
  {
    sectionNumber: 18,
    icon: <FaServer />,
    title: "Web Servers",
    description: "Los servidores web son componentes críticos en la infraestructura de aplicaciones web, gestionando las solicitudes HTTP, sirviendo contenido estático y actuando como proxy inverso. La elección del servidor web adecuado puede impactar significativamente en el rendimiento y la seguridad.",
    iconColor: "text-blue-600",
    subsections: [
      {
        title: "Nginx",
        content: "Servidor web de alto rendimiento conocido por su eficiencia en el manejo de conexiones concurrentes y bajo consumo de recursos. Destaca como servidor web, proxy inverso y balanceador de carga. Excelente para servir contenido estático, manejo de SSL/TLS y configuración de caché. Ampliamente utilizado en entornos de producción de alto tráfico."
      },
      {
        title: "Apache",
        content: "El servidor web HTTP más antiguo y ampliamente utilizado. Conocido por su flexibilidad, extensibilidad mediante módulos y compatibilidad con múltiples plataformas. Ofrece características como virtual hosts, autenticación y autorización robusta, y soporte para múltiples lenguajes de programación a través de módulos como mod_php."
      },
      {
        title: "Caddy",
        content: "Servidor web moderno con enfoque en la simplicidad y seguridad por defecto. Destaca por su configuración automática de HTTPS, sintaxis de configuración simple y capacidades de proxy inverso. Ideal para despliegues rápidos y seguros, especialmente en entornos de desarrollo y proyectos más pequeños."
      },
      {
        title: "MS IIS",
        content: "Internet Information Services de Microsoft, integrado con Windows Server. Ofrece una sólida integración con tecnologías .NET y servicios de Windows. Incluye características avanzadas de seguridad, administración centralizada y herramientas de diagnóstico. Popular en entornos empresariales basados en tecnologías Microsoft."
      }
    ]
  },
  {
    sectionNumber: 19,
    icon: <FaBolt />,
    title: "Real-Time Data",
    description: "Las tecnologías de datos en tiempo real permiten la comunicación bidireccional y actualización instantánea entre cliente y servidor. Cada técnica tiene sus propias ventajas y casos de uso específicos para diferentes requisitos de tiempo real.",
    iconColor: "text-purple-500",
    subsections: [
      {
        title: "Server Sent Events",
        content: "Tecnología que permite al servidor enviar actualizaciones al cliente a través de una única conexión HTTP. Ideal para escenarios donde el servidor necesita enviar datos al cliente de forma continua. Ofrece reconexión automática, IDs de eventos y tipos de eventos personalizados. Excelente para actualizaciones unidireccionales como feeds de noticias o actualizaciones de estado."
      },
      {
        title: "WebSockets",
        content: "Protocolo que proporciona un canal de comunicación bidireccional y full-duplex sobre una única conexión TCP. Permite intercambio de datos en tiempo real entre cliente y servidor con baja latencia. Ideal para aplicaciones que requieren comunicación instantánea como chats, juegos en línea o dashboards en tiempo real."
      },
      {
        title: "Long Polling",
        content: "Técnica donde el cliente solicita información al servidor y la conexión se mantiene abierta hasta que hay datos disponibles o se alcanza un timeout. Proporciona una simulación de comunicación en tiempo real con mejor compatibilidad que WebSockets. Útil como fallback en entornos donde WebSockets no está disponible."
      },
      {
        title: "Short Polling",
        content: "Método donde el cliente realiza solicitudes HTTP regulares al servidor para verificar actualizaciones. Es la técnica más simple de implementar pero menos eficiente en términos de recursos. Adecuado para casos donde las actualizaciones son poco frecuentes y la latencia no es crítica."
      }
    ]
  },
  {
    sectionNumber: 20,
    icon: <FaDatabase />,
    title: "NoSQL Databases",
    description: "Las bases de datos NoSQL ofrecen modelos de datos alternativos al relacional, proporcionando mayor flexibilidad, escalabilidad y rendimiento para casos de uso específicos. Cada tipo de base de datos NoSQL está optimizado para diferentes patrones de datos y requisitos.",
    iconColor: "text-green-600",
    subsections: [
      {
        title: "Graph Databases (Neo4j & AWS Neptune)",
        content: "Las bases de datos de grafos están optimizadas para manejar datos altamente conectados. Neo4j destaca por su lenguaje Cypher y alto rendimiento en consultas de traversal, mientras que AWS Neptune ofrece una solución completamente administrada con soporte para TinkerPop y SPARQL. Ideales para redes sociales, sistemas de recomendación y análisis de relaciones complejas."
      },
      {
        title: "Column Databases (Cassandra & HBase)",
        content: "Las bases de datos columnares optimizan consultas analíticas y agregaciones. Cassandra ofrece alta disponibilidad y escalabilidad lineal para escrituras intensivas, mientras que HBase, basado en el modelo BigTable de Google, destaca en el ecosistema Hadoop para grandes conjuntos de datos con acceso aleatorio en tiempo real."
      },
      {
        title: "Time Series (InfluxDB & TimeScale)",
        content: "Especializadas en datos temporales, InfluxDB ofrece alto rendimiento para escritura y consulta de series temporales con herramientas de retención y downsampling. TimeScale, como extensión de PostgreSQL, combina la potencia SQL con optimizaciones específicas para datos temporales."
      },
      {
        title: "Realtime Databases (Firebase & RethinkDB)",
        content: "Diseñadas para sincronización en tiempo real, Firebase proporciona sincronización automática entre clientes y soporte offline, mientras que RethinkDB se destaca en feeds en tiempo real con su modelo de consultas ReQL. Ideales para aplicaciones que requieren actualizaciones instantáneas."
      },
      {
        title: "Document Databases (MongoDB & CouchDB)",
        content: "Almacenan datos en documentos flexibles tipo JSON. MongoDB lidera con su modelo flexible, índices secundarios y transacciones ACID, mientras que CouchDB destaca en replicación master-master y sincronización offline. Perfectas para datos semiestructurados y esquemas dinámicos."
      },
      {
        title: "Key-Value Stores (Redis & DynamoDB)",
        content: "Optimizadas para operaciones simples de lectura/escritura. Redis brinda estructuras de datos en memoria y baja latencia, ideal para caché y colas de mensajes. DynamoDB de AWS ofrece rendimiento consistente a cualquier escala con gestión totalmente administrada, perfecto para aplicaciones serverless."
      }
    ]
  },
  {
    sectionNumber: 21,
    icon: <FaChartLine />,
    title: "Building For Scale (Migration Strategies)",
    description: "Las estrategias de escalabilidad son fundamentales para mantener la estabilidad y rendimiento de sistemas bajo carga. Estas técnicas ayudan a manejar picos de tráfico, prevenir fallos en cascada y asegurar la disponibilidad del servicio.",
    iconColor: "text-blue-500",
    subsections: [
      {
        title: "Graceful Degradation",
        content: "Estrategia que permite a un sistema continuar funcionando, aunque sea con funcionalidad reducida, cuando partes del mismo fallan. Prioriza funcionalidades críticas y desactiva características no esenciales bajo carga extrema, asegurando que el servicio principal siga disponible."
      },
      {
        title: "Throttling",
        content: "Técnica para controlar la tasa de solicitudes que un sistema acepta, protegiendo recursos limitados y previniendo sobrecarga. Implementa límites de velocidad por usuario, servicio o recurso, ayudando a mantener la estabilidad y equidad en el uso del sistema."
      },
      {
        title: "Backpressure",
        content: "Mecanismo que regula el flujo de datos entre componentes del sistema, evitando que los productores sobrecarguen a los consumidores. Fundamental en sistemas de streaming y procesamiento asíncrono para mantener la estabilidad y prevenir pérdida de datos."
      },
      {
        title: "Loadshifting",
        content: "Práctica de redistribuir la carga de trabajo a través del tiempo o entre diferentes recursos. Incluye técnicas como procesamiento diferido, balanceo geográfico y aprovechamiento de períodos de baja demanda para tareas intensivas."
      },
      {
        title: "Circuit Breaker",
        content: "Patrón que monitorea fallos en llamadas a servicios externos y previene intentos repetidos cuando se detectan problemas. Ayuda a fallar rápidamente, protege recursos y permite recuperación gradual, mejorando la resiliencia del sistema."
      }
    ]
  },
  {
    sectionNumber: 22,
    icon: <FaChartBar />,
    title: "Building For Scale (Difference & Usage)",
    description: "La observabilidad es clave para entender el comportamiento y rendimiento de sistemas distribuidos. Estas herramientas y técnicas proporcionan visibilidad sobre el estado, rendimiento y salud del sistema.",
    iconColor: "text-green-500",
    subsections: [
      {
        title: "Instrumentation",
        content: "Proceso de agregar código para medir el rendimiento, rastrear el comportamiento y recolectar métricas de una aplicación. Incluye la implementación de contadores, medidores y temporizadores para capturar datos sobre el funcionamiento interno del sistema."
      },
      {
        title: "Monitoring",
        content: "Sistema continuo de recolección, agregación y visualización de métricas para observar el estado y rendimiento del sistema. Permite detectar problemas, analizar tendencias y tomar decisiones informadas sobre escalabilidad y optimización."
      },
      {
        title: "Telemetry",
        content: "Recolección automatizada de datos sobre el comportamiento y uso del sistema en producción. Incluye logs, métricas de rendimiento, patrones de uso y datos de errores, proporcionando información valiosa para diagnóstico y optimización."
      }
    ]
  }
];

export default backendData;