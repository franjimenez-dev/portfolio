import css_logo from '@/public/logos/css.svg';
import html5_logo from '@/public/logos/html5.svg';
import javascript_logo from '@/public/logos/javascript.svg';
import react_logo from '@/public/logos/react.svg';
import php_logo from '@/public/logos/php.svg';
import laravel_logo from '@/public/logos/laravel.svg';
import nextjs_logo from '@/public/logos/nextjs.svg';
import typescript_logo from '@/public/logos/typescript.svg';
import nodejs_logo from '@/public/logos/nodejs.svg';
import express_logo from '@/public/logos/express.svg';
import mongodb_logo from '@/public/logos/mongodb.svg';
import mysql_logo from '@/public/logos/mysql.svg';
import postgresql_logo from '@/public/logos/postgresql.svg';
import github_logo from '@/public/logos/github.svg';
import tailwindcss_logo from '@/public/logos/tailwindcss.svg';
import aws_s3_logo from '@/public/logos/aws-s3.svg';
import bash_logo from '@/public/logos/bash.svg';
import copilot_logo from '@/public/logos/copilot.svg';
import openai_logo from '@/public/logos/openai.svg';
import webstorm_logo from '@/public/logos/webstorm.svg';
import vercel_logo from '@/public/logos/vercel.svg';

// type 1 <a href="url" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">{tecnologia}</a>
// type 2 <a href="url" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer ">{tecnologia}</a>
// type 3 <a href="url" target="_blank" class="gradient-text tech-highlights font-bold">{tecnologia}</a>

const SVGS = [
    {
        name: 'CSS',
        src: css_logo,
        url: 'https://developer.mozilla.org/es/docs/Web/CSS',
        description: `He utilizado <a href="https://developer.mozilla.org/es/docs/Web/CSS" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer ">CSS</a> desde que empecé en el mundo del desarrollo web. He aprendido varios <a href="https://es.wikipedia.org/wiki/Framework" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer ">frameworks</a> como <a href="https://getbootstrap.com/" target="_blank" class="gradient-text font-bold tech-highlights">Bootstrap</a> y <a href="https://getbootstrap.com/" target="_blank" class="gradient-text-inverse font-bold tech-highlights">TailwindCSS</a> para agilizar el desarrollo. Sigo páginas como <a href="https://css-tricks.com/" target="_blank" class="gradient-text font-bold tech-highlights">CSSTricks</a> y <a href="https://codepen.io/spark" target="_blank" class="gradient-text-inverse font-bold tech-highlights">CodePen.io</a> para aprender cosas nuevas, y páginas como <a href="https://flukeout.github.io/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights">ésta</a> para prácticar mis skills. `

    }, {
        name: 'HTML5',
        src: html5_logo,
        url: 'https://developer.mozilla.org/es/docs/Glossary/HTML5',
        description: `Llevo utilizado <a href="https://developer.mozilla.org/es/docs/Glossary/HTML5" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer ">HTML5</a> desde que empezé en el mundo del desarrollo. Desde mi primer index.html básico hasta <a href="https://laravel.com/docs/10.x/blade" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer ">blade</a>, <a href="https://pugjs.org/api/getting-started.html" target="_blank" class="gradient-text font-bold tech-highlights">PUG</a>, <a href="https://react.dev/learn/writing-markup-with-jsx" target="_blank" class="gradient-text-inverse font-bold tech-highlights">JSX</a> y <a href="https://react.dev/learn/typescript#typescript-with-react-components" target="_blank" class="text-[#c084fc] font-bold tech-highlights">TSX</a>. Intento mantenerme al día con <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" class="gradient-text font-bold tech-highlights">accesibilidad</a> y <a href="https://www.interaction-design.org/literature/topics/usability" target="_blank" class="gradient-text-inverse font-bold tech-highlights">usabilidad/UX</a> web para ofrecer una mejor experiencia de usuario. Estoy aprendiendo sobre conceptos de <a href="https://es.wikipedia.org/wiki/Posicionamiento_en_buscadores" target="_blank" class="text-[#FDE68A] font-bold tech-highlights">SEO</a>, metadata, etc.`
    },
    {
        name: 'JavaScript',
        src: javascript_logo,
        url: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
        description: `Me he especializado en <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer ">JavaScript</a> para agregar interactividad y dinamismo a mis proyectos web. JavaScript es un lenguaje de programación versátil que se utiliza tanto en el lado del cliente como en el lado del servidor. He utilizado bibliotecas y frameworks de JavaScript como <a href="https://es.react.dev/" class="text-[#c084fc] font-bold tech-highlights cursor-pointer ">React</a>, <a href="https://vuejs.org/" class="gradient-text font-bold gradient-text-animation-tech hover:scale-110">Vue.js</a> y <a href="https://angular.io/" class="gradient-text font-bold gradient-text-animation-tech">Angular</a> para construir interfaces de usuario modernas y dinámicas. Además, he utilizado JavaScript para desarrollar aplicaciones web en tiempo real con <a href="https://socket.io/" class="text-[#c084fc] font-bold tech-highlights cursor-pointer ">Socket.io</a> y <a href="https://firebase.google.com/" class="gradient-text font-bold gradient-text-animation-tech hover:scale-110">Firebase</a>.`
    },
    {
        name: 'TailwindCSS',
        src: tailwindcss_logo,
        url: 'https://tailwindcss.com/',
        description: `He utilizado <a href="https://tailwindcss.com/" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer ">TailwindCSS</a> para agilizar el desarrollo de la interfaz de usuario de mis aplicaciones web. TailwindCSS es un framework de diseño CSS que utiliza clases predefinidas para estilizar elementos HTML. Con TailwindCSS, puedo crear diseños personalizados de manera rápida y eficiente, lo que me permite concentrarme en la funcionalidad de mis aplicaciones. Además, la flexibilidad de TailwindCSS me permite adaptar fácilmente el diseño a diferentes dispositivos y tamaños de pantalla.`
    },
    {
        name: 'React',
        src: react_logo,
        url: 'https://es.react.dev/',
        description: `Me he especializado en el uso de <a href="https://es.react.dev/" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer ">React</a> para construir interfaces de usuario interactivas y dinámicas. React es una biblioteca de JavaScript de código abierto desarrollada por Facebook para crear interfaces de usuario de una sola página (SPAs) y aplicaciones web modernas. Con React, puedo crear componentes reutilizables y componerlos para construir interfaces de usuario complejas. Además, la arquitectura basada en componentes de React me permite desarrollar aplicaciones escalables y fáciles de mantener.`
    },
    {
        name: 'PHP',
        src: php_logo,
        url: 'https://www.php.net/',
        description: `Tengo experiencia en el desarrollo de aplicaciones web del lado del servidor utilizando <a href="https://www.php.net/" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer ">PHP</a>. PHP es un lenguaje de programación de uso general que se utiliza principalmente para el desarrollo web. He utilizado PHP junto con frameworks como <a href="https://laravel.com/" class="gradient-text font-bold gradient-text-animation-tech hover:scale-110">Laravel</a> y <a href="https://www.codeigniter.com/" class="gradient-text font-bold gradient-text-animation-tech">CodeIgniter</a> para crear aplicaciones web dinámicas y escalables. Además, he utilizado PHP para interactuar con bases de datos relacionales como <a href="https://www.mysql.com/" class="text-[#c084fc] font-bold tech-highlights cursor-pointer ">MySQL</a> y <a href="https://www.postgresql.org/" class="text-[#c084fc] font-bold tech-highlights cursor-pointer ">PostgreSQL</a>, así como para integrar servicios externos a través de APIs.`,
    },
    {
        name: 'Laravel',
        src: laravel_logo,
        url: 'https://laravel.com/',
        description: `Laravel es un <a href="https://laravel.com/docs" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">framework</a> de desarrollo web de código abierto basado en <a href="https://es.wikipedia.org/wiki/PHP" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer">PHP</a>, que sigue el patrón de diseño <a href="https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer">(MVC)</a> y proporciona una estructura elegante y expresiva para construir aplicaciones web escalables y de alta calidad.`,
    },
    {
        name: 'Next.js',
        src: nextjs_logo,
        url: 'https://nextjs.org/',
        description: `Next.js es un <a href="https://nextjs.org/docs" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">framework</a> de desarrollo web de <a href="https://es.react.dev/" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer">React</a> que permite la renderización del lado del servidor y la generación de sitios estáticos para aplicaciones web modernas y escalables, proporcionando una experiencia de usuario fluida y rápida. Utiliza el enrutamiento dinámico, el <a href="https://nextjs.org/docs/api-reference/data-fetching/getInitialProps" target="_blank" class="gradient-text tech-highlights font-bold">prefetching de datos</a> y la <a href="https://nextjs.org/docs/basic-features/data-fetching" target="_blank" class="gradient-text tech-highlights font-bold">precarga de páginas</a> para optimizar el rendimiento de las aplicaciones web. Además, Next.js ofrece soporte para <a href="https://nextjs.org/docs/api-reference/dynamic-import" target="_blank" class="gradient-text tech-highlights font-bold">importaciones dinámicas</a>, <a href="https://nextjs.org/docs/api-reference/preview-mode" target="_blank" class="gradient-text tech-highlights font-bold">modo de vista previa</a> y <a href="https://nextjs.org/docs/api-reference/i18n/translation" target="_blank" class="gradient-text tech-highlights font-bold">internacionalización</a> para crear experiencias web multilingües y personalizadas.`
    },
    {
        name: 'TypeScript',
        src: typescript_logo,
        url: 'https://www.typescriptlang.org/',
        description: `He utilizado <a href="https://www.typescriptlang.org/docs/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">TypeScript</a> en varios proyectos para agregar tipado estático a mi código JavaScript. Esta característica ha sido fundamental para mejorar la robustez y escalabilidad de mis aplicaciones web. Al integrar TypeScript con <a href="https://code.visualstudio.com/docs/languages/typescript" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer">Visual Studio Code</a>, he aprovechado las herramientas avanzadas de <a href="https://www.typescriptlang.org/docs/handbook/compiler-options.html" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer">compilación</a> y <a href="https://www.typescriptlang.org/docs/handbook/linter.html" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer">análisis estático</a> para detectar errores en tiempo de compilación y mejorar la calidad del código. Además, TypeScript me ha permitido trabajar de manera más eficiente en equipos grandes, ya que la definición clara de tipos facilita la comprensión del código y reduce los errores durante el desarrollo. En resumen, TypeScript ha sido una herramienta valiosa para elevar el nivel de mis proyectos web.`,
    },
    {
        name: 'Node.js',
        src: nodejs_logo,
        url: 'https://nodejs.org/en',
        description: `He trabajado extensamente con <a href="https://nodejs.org/en/docs/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">Node.js</a> en el desarrollo de aplicaciones web del lado del servidor. Node.js es una plataforma basada en el motor V8 de Google Chrome que permite ejecutar código JavaScript fuera de un navegador web. Con Node.js, he construido servicios web escalables y de alto rendimiento utilizando su modelo de E/S no bloqueante y su arquitectura basada en eventos. Además, he utilizado <a href="https://expressjs.com/" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer">Express.js</a> junto con Node.js para crear API RESTful y aplicaciones web dinámicas. También he integrado bases de datos NoSQL como <a href="https://www.mongodb.com/" target="_blank" class="gradient-text tech-highlights font-bold">MongoDB</a> y sistemas de mensajería en tiempo real utilizando <a href="https://socket.io/" target="_blank" class="gradient-text tech-highlights font-bold">Socket.io</a> en mis proyectos con Node.js.`
    },
    {
        name: 'Express.js',
        src: express_logo,
        url: 'https://expressjs.com/',
        description: `He utilizado <a href="https://expressjs.com/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">Express.js</a> como mi framework de servidor web preferido en el desarrollo de aplicaciones web. <a href="https://expressjs.com/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">Express.js</a> es un framework de <a href="https://es.wikipedia.org/wiki/JavaScript" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer">JavaScript</a> minimalista y flexible para Node.js, que ofrece una amplia gama de características para la creación rápida y eficiente de aplicaciones web y APIs. Con <a href="https://expressjs.com/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">Express.js</a>, he creado rutas, middleware y controladores para gestionar peticiones HTTP y he integrado fácilmente autenticación, autorización y otros servicios en mis aplicaciones. Su simplicidad y versatilidad lo convierten en una opción ideal para proyectos de cualquier tamaño.`
    },
    {
        name: 'MongoDB',
        src: mongodb_logo,
        url: 'https://www.mongodb.com',
        description: `He trabajado con <a href="https://www.mongodb.com/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">MongoDB</a> en diversos proyectos como mi base de datos NoSQL preferida. <a href="https://www.mongodb.com/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">MongoDB</a> es una base de datos NoSQL orientada a documentos que ofrece flexibilidad y escalabilidad para aplicaciones web modernas. He utilizado <a href="https://www.mongodb.com/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">MongoDB</a> para almacenar datos semi-estructurados y grandes volúmenes de información de manera eficiente. Su capacidad para manejar datos en tiempo real y su fácil integración con Node.js lo convierten en una opción poderosa para aplicaciones que requieren un alto rendimiento y escalabilidad.`
    },
    {
        name: 'MySQL',
        src: mysql_logo,
        url: 'https://www.mysql.com/',
        description: `He utilizado <a href="https://www.mysql.com/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">MySQL</a> como mi sistema de gestión de bases de datos relacionales en numerosos proyectos. <a href="https://www.mysql.com/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">MySQL</a> es un sistema de gestión de bases de datos relacional de código abierto que ofrece una gran fiabilidad, escalabilidad y rendimiento. Con <a href="https://www.mysql.com/" target="_blank" class="gradient-text font-bold tech-highlights gradient-text-animation-tech">MySQL</a>, he diseñado esquemas de bases de datos, consultas SQL optimizadas y procedimientos almacenados para manejar eficazmente grandes conjuntos de datos. Su amplia adopción y comunidad activa lo convierten en una opción confiable para aplicaciones web de todos los tamaños.`
    },
    {
        name: 'PostgreSQL',
        src: postgresql_logo,
        url: 'https://www.postgresql.org/',
        description: `En mis proyectos, he utilizado <a href="https://www.postgresql.org/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">PostgreSQL</a> como un sistema de gestión de bases de datos relacional avanzado y potente. <a href="https://www.postgresql.org/" target="_blank" class="gradient-text font-bold tech-highlights gradient-text-animation-tech">PostgreSQL</a> es conocido por su robustez, características avanzadas y conformidad con los estándares SQL. He aprovechado su soporte para tipos de datos complejos, funciones almacenadas y transacciones ACID para diseñar sistemas de bases de datos altamente seguros y escalables. Su comunidad activa y su compromiso con la calidad lo convierten en una opción excelente para aplicaciones empresariales críticas.`
    },
    {
        name: 'GitHub',
        src: github_logo,
        url: 'https://github.com/',
        description: `He utilizado <a href="https://github.com/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">GitHub</a> como mi plataforma de desarrollo colaborativo y control de versiones en una variedad de proyectos. <a href="https://github.com/" target="_blank" class="gradient-text font-bold tech-highlights gradient-text-animation-tech">GitHub</a> proporciona un entorno seguro y confiable para alojar y gestionar repositorios de código fuente, facilitando la colaboración entre equipos de desarrollo distribuidos en todo el mundo. Con <a href="https://github.com/" target="_blank" class="gradient-text font-bold tech-highlights gradient-text-animation-tech">GitHub</a>, he utilizado características como solicitudes de extracción, problemas y acciones para gestionar eficientemente el ciclo de vida del desarrollo de software y automatizar flujos de trabajo de integración y entrega continuas.`
    },
    {
        name: 'AWS S3',
        src: aws_s3_logo,
        url: 'https://aws.amazon.com/es/s3/',
        description: `He utilizado <a href="https://aws.amazon.com/es/s3/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">AWS S3</a> como mi servicio de almacenamiento en la nube en varios proyectos. Con <a href="https://aws.amazon.com/es/s3/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">AWS S3</a>, he almacenado y distribuido estáticamente recursos web como imágenes, archivos CSS y JavaScript, optimizando la entrega de contenido a mis aplicaciones. Además, he utilizado <a href="https://aws.amazon.com/es/s3/" target="_blank" class="gradient-text font-bold tech-highlights gradient-text-animation-tech">AWS S3</a> como backend para aplicaciones web y móviles, aprovechando su escalabilidad, durabilidad y seguridad para gestionar grandes volúmenes de datos.`
    },
    {
        name: 'Bash',
        src: bash_logo,
        url: 'https://www.gnu.org/software/bash/manual/',
        description: `He utilizado <a href="https://www.gnu.org/software/bash/manual/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">Bash</a> como mi intérprete de comandos en entornos Unix y Linux en numerosas ocasiones. Con <a href="https://www.gnu.org/software/bash/manual/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">Bash</a>, he automatizado tareas repetitivas, gestionado archivos y directorios, y administrado sistemas en línea de comandos. Además, he utilizado <a href="https://www.gnu.org/software/bash/manual/" target="_blank" class="gradient-text font-bold tech-highlights gradient-text-animation-tech">Bash</a> para escribir scripts de shell que mejoran la eficiencia y la productividad en mis flujos de trabajo de desarrollo y administración de sistemas.`
    },
    {
        name: 'GitHub Copilot',
        src: copilot_logo,
        url: 'https://github.com/features/copilot',
        description: `He explorado <a href="https://github.com/features/copilot" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">GitHub Copilot</a> como una herramienta de asistencia para la escritura de código en varios proyectos. <a href="https://github.com/features/copilot" target="_blank" class="gradient-text font-bold tech-highlights gradient-text-animation-tech">GitHub Copilot</a> utiliza inteligencia artificial para proporcionar sugerencias de código en tiempo real mientras desarrollo, lo que me ha ayudado a escribir código más rápido y con menos errores. He utilizado <a href="https://github.com/features/copilot" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer">GitHub Copilot</a> para generar fragmentos de código, completar funciones y sugerir refactorizaciones, acelerando el proceso de desarrollo y mejorando mi productividad.`
    },
    {
        name: 'ChatGPT',
        src: openai_logo,
        url: 'https://chat.openai.com/',
        description: `He utilizado <a href="https://chat.openai.com/" target="_blank" class="gradient-text font-bold tech-highlights">ChatGPT</a> como una herramienta de inteligencia artificial para generar texto en varios proyectos. <a href="https://chat.openai.com/" target="_blank" class="gradient-text font-bold tech-highlights">ChatGPT</a> utiliza modelos de lenguaje de última generación para comprender y generar texto de manera coherente y relevante. He aprovechado <a href="https://chat.openai.com/" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer">ChatGPT</a> para generar descripciones de productos, respuestas a preguntas frecuentes y contenido creativo, lo que ha mejorado significativamente mi productividad y eficiencia en la creación de contenido.`
    },
    // {name: 'WebStorm', src: webstorm_logo, url: 'https://www.jetbrains.com/es-es/webstorm/'},
    {
        name: 'Vercel',
        src: vercel_logo,
        url: 'https://vercel.com/',
        description: `He utilizado <a href="https://vercel.com/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">Vercel</a> como plataforma de alojamiento y despliegue para aplicaciones web en varios proyectos. <a href="https://vercel.com/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights-purple cursor-pointer">Vercel</a> ofrece una infraestructura escalable y segura para ejecutar aplicaciones web de alto rendimiento. He desplegado aplicaciones estáticas y dinámicas en <a href="https://vercel.com/" target="_blank" class="gradient-text font-bold tech-highlights">Vercel</a>, aprovechando su integración con herramientas de desarrollo y su enfoque en la experiencia del desarrollador para acelerar el ciclo de desarrollo y despliegue.`
    },
];

export default SVGS;