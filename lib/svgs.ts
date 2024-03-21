import css_logo from '@/public/logos/css.svg';
import html5_logo from '@/public/logos/html5.svg';
import javascript_logo from '@/public/logos/javascript.svg';
import python_logo from '@/public/logos/python.svg';
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
import vercel_logo from '@/public/logos/vercel.svg';


const SVGS = [
    {
        name: 'Vercel',
        src: vercel_logo,
        url: 'https://vercel.com/',
        description: `He utilizado <a href="https://vercel.com/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer">Vercel</a> como plataforma de alojamiento y despliegue para aplicaciones web en varios proyectos como <a href="https://timewarp.es" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer">Timewarp</a> y <a href="https://metazoa.app" target="_blank" class="gradient-text-inverse font-bold tech-highlights cursor-pointer">MetaZoa</a>. Me encanta su integración con <a href="https://github.com/" target="_blank" class="text-[#c084fc] font-bold tech-highlights">GitHub</a> y su capacidad para desplegar aplicaciones en segundos, ya que me permite centrarme en el desarrollo de aplicaciones web sin tener que preocuparme mucho por el despliegue.`
    },
    {
        name: 'GitHub',
        src: github_logo,
        url: 'https://github.com/',
        description: `He utilizado <a href="https://github.com/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer">GitHub</a> como mi plataforma de control de versiones preferida. Estoy estudiando para conseguir la certificacion en <a href="https://www.postgresql.org/" target="_blank" class="gradient-text font-bold tech-highlights">GitHub Foundations</a> y poder seguir creciendo en el campo del desarrollo colaborativo.`
    },
    {
        name: 'AWS S3',
        src: aws_s3_logo,
        url: 'https://aws.amazon.com/es/s3/',
        description: `He utilizado <a href="https://aws.amazon.com/es/s3/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer">AWS S3</a> como servicio de almacenamiento en la nube en algunos proyectos. En <a href="https://timewarp.es" target="_blank" class="gradient-text font-bold tech-highlights">Timewarp</a> implementé un sistema de guardado y borrado de imágenes utilizando <a href="https://vercel.com/guides/how-can-i-use-aws-s3-with-vercel" target="_blank" class="gradient-text-inverse font-bold tech-highlights">AWS S3 client</a> para luego devolver las imagenes con <a href="https://www.amazonaws.cn/en/cloudfront/" target="_blank" class="text-[#c084fc] font-bold tech-highlights">AWS Cloudfront</a>, para una mejor experiencia de usuario. Quiero seguir profundizando y ahondar en otras tecnologías como <a href="https://aws.amazon.com/es/lambda/" target="_blank" class="gradient-text font-bold tech-highlights">AWS Lambda</a> para facilitar la integración de aplicaciones <a href="https://sst.dev/chapters/es/what-is-serverless.html" target="_blank" class="gradient-text-inverse font-bold tech-highlights">serverless</a>.`
    },
    {
        name: 'Terminal',
        src: bash_logo,
        url: 'https://www.gnu.org/software/bash/manual/',
        description: `Tengo nociones básicas en el uso de la <a href="https://www.gnu.org/software/bash/manual/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer">terminal</a> y en la creación de scripts tanto en <a href="https://en.wikipedia.org/wiki/Batch_filehttps://en.wikipedia.org/wiki/Batch_file" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer">.bat</a>, <a href="https://en.wikipedia.org/wiki/PowerShell" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer">.ps</a> y <a href="https://www.shellscript.sh/" target="_blank" class="gradient-text-inverse font-bold tech-highlights cursor-pointer">.sh</a>. Es una de esas tecnologías que me gustaría perfeccionar en el futuro para automatizar tareas y mejorar mi productividad. `
    },
    {
        name: 'CSS',
        src: css_logo,
        url: 'https://developer.mozilla.org/es/docs/Web/CSS',
        description: `He utilizado <a href="https://developer.mozilla.org/es/docs/Web/CSS" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer ">CSS</a> desde que empecé en el mundo del desarrollo web. He aprendido varios <a href="https://es.wikipedia.org/wiki/Framework" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer ">frameworks</a> como <a href="https://getbootstrap.com/" target="_blank" class="gradient-text font-bold tech-highlights">Bootstrap</a> y <a href="https://getbootstrap.com/" target="_blank" class="gradient-text-inverse font-bold tech-highlights">TailwindCSS</a> para agilizar el desarrollo. Sigo páginas como <a href="https://css-tricks.com/" target="_blank" class="gradient-text font-bold tech-highlights">CSSTricks</a> y <a href="https://codepen.io/spark" target="_blank" class="gradient-text-inverse font-bold tech-highlights">CodePen.io</a> para aprender cosas nuevas, y uso otras como <a href="https://flukeout.github.io/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights">ésta</a> para prácticar mis skills. `

    },
    {
        name: 'HTML5',
        src: html5_logo,
        url: 'https://developer.mozilla.org/es/docs/Glossary/HTML5',
        description: `Llevo utilizado <a href="https://developer.mozilla.org/es/docs/Glossary/HTML5" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer ">HTML5</a> desde que empezé en el mundo del desarrollo. Desde mi primer index.html básico hasta <a href="https://laravel.com/docs/10.x/blade" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer ">blade</a>, <a href="https://pugjs.org/api/getting-started.html" target="_blank" class="gradient-text font-bold tech-highlights">PUG</a>, <a href="https://react.dev/learn/writing-markup-with-jsx" target="_blank" class="gradient-text-inverse font-bold tech-highlights">JSX</a> y <a href="https://react.dev/learn/typescript#typescript-with-react-components" target="_blank" class="text-[#c084fc] font-bold tech-highlights">TSX</a>. Intento mantenerme al día con <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" class="gradient-text font-bold tech-highlights">accesibilidad</a> y <a href="https://www.interaction-design.org/literature/topics/usability" target="_blank" class="gradient-text-inverse font-bold tech-highlights">usabilidad/UX</a> web para ofrecer una mejor experiencia de usuario. Estoy aprendiendo sobre conceptos de <a href="https://es.wikipedia.org/wiki/Posicionamiento_en_buscadores" target="_blank" class="text-[#FDE68A] font-bold tech-highlights">SEO</a>, metadata, etc.`
    },
    {
        name: 'TailwindCSS',
        src: tailwindcss_logo,
        url: 'https://tailwindcss.com/',
        description: `Empece a utilizar <a href="https://tailwindcss.com/" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer ">TailwindCSS</a> para agilizar el desarrollo de interfaces en mis aplicaciones web. Tengo pensado crear una librería de componentes reutilizables utilizando éste framework junto con <a href="https://ui.shadcn.com/" target="_blank" class="gradient-text font-bold tech-highlights">shadcn/ui</a>. Con el tiempo decidí descartar otros frameworks como <a href="https://getbootstrap.com/" target="_blank"  class="text-[#c084fc] font-bold tech-highlights cursor-pointer ">Bootstrap</a> para centrarme en Tailwind ya que lo considero más versátil y ligero.`
    },
    {
        name: 'JavaScript',
        src: javascript_logo,
        url: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
        description: `Empecé con <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer ">JavaScript</a> puro, aprendiendo a manipular el <a href="https://es.wikipedia.org/wiki/Document_Object_Model" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer ">DOM</a>, pasando después por librerías como <a href="https://jquery.com/" target="_blank" class="gradient-text font-bold tech-highlights">jQuery</a> y modelos como <a href="https://developer.mozilla.org/es/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data" target="_blank" class="gradient-text-inverse font-bold tech-highlights">AJAX</a>. Con el tiempo di el salto a <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer ">Node.js</a> y di mis primeros pasos en un framework de frontend: <a href="https://angular.io/" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer ">Angular</a>. Desde entonces he ido aprendiendo frameworks como <a href="https://es.react.dev/" target="_blank" class="gradient-text font-bold tech-highlights">React</a>, <a href="https://nextjs.org/" target="_blank" class="gradient-text-inverse font-bold tech-highlights">Next.js</a>, etc. Sigo a desarrolladores como <a href="https://twitter.com/rauchg" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer ">Guillermo Rauch</a> y a creadores de contenido como <a href="https://www.youtube.com/@midulive" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer ">midudev</a> para seguir aprendiendo y estar informado de las últimas tendencias.`
    },
    {
        name: 'TypeScript',
        src: typescript_logo,
        url: 'https://www.typescriptlang.org/',
        description: `<a href="https://www.typescriptlang.org/docs/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer">TypeScript</a> es para un must a la hora de crear codigo más legible, más refactorizable y menos propenso a errores. Tambien me ayuda a tener un autocompletado más preciso y a detectar errores de manera más efectiva. Todos mis proyectos últimamente han estado basados en TypeScript,como por ejemplo <a href="https://www.timewarp.es" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer">Timewarp</a> y este portfolio. Aunque tengo una buena base todavía me falta mucho por aprender.`},
    {
        name: 'React',
        src: react_logo,
        url: 'https://es.react.dev/',
        description: `Me gustó <a href="https://es.react.dev/" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer ">React</a> desde el primer momento. Empecé con el curso de <a href="https://www.mysql.com/" target="_blank" class="gradient-text font-bold tech-highlights gradient-text-animation-tech">Maximilian Schwarzmüller</a> donde aprendí sobre <a href="https://es.react.dev/learn/updating-objects-in-state" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer ">State</a>, <a href="https://es.react.dev/learn/referencing-values-with-refs" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer ">Refs</a>, <a href="https://es.react.dev/learn/scaling-up-with-reducer-and-context" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer ">Context</a>, <a href="https://es.react.dev/learn/writing-markup-with-jsx" target="_blank" class="gradient-text-inverse font-bold tech-highlights cursor-pointer ">JSX</a> ... y fui asentando conceptos mas avanzados como <a href="https://es.react.dev/reference/react/Suspense" target="_blank" class="gradient-text-inverse font-bold tech-highlights">Suspense</a>, por ejemplo creando <a href="https://dev.to/jobpick/how-to-create-a-skeleton-loader-in-tailwindcss-38gh" target="_blank" class="text-[#c084fc] font-bold tech-highlights">skeletons</a> con <a href="https://tailwindcss.com/" target="_blank" class="gradient-text font-bold tech-highlights">Tailwindcss</a> para mejorar la experiencia de usuario, y o novedades como <a href="https://es.react.dev/reference/react/use-server" target="_blank" class="gradient-text font-bold tech-highlights">server components</a> a traves de frameworks fullstack como <a href="https://nextjs.org/" target="_blank" class="gradient-text-inverse font-bold tech-highlights">Next.js</a>. Sigo a creadores de contendo de React como <a href="https://www.youtube.com/@midulive" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer ">midudev</a> para mantenerme informado sobre las últimas tendencias.`
    },
    {
        name: 'Next.js',
        src: nextjs_logo,
        url: 'https://nextjs.org/',
        description: `<a href="https://nextjs.org/docs" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer">Next.js</a> es mi mayor descubrimiento del 2023 y mi framework preferido. En Next.js desarrollé mi página web <a href="https://timewarp.es" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer">Timewarp</a> y también éste portfolio. Las ventajas que ofrece Next.js como el <a href="https://medium.com/swlh/server-side-rendering-with-next-js-56f84f98f9bd" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer">server side rendering</a>, las <a href="https://nextjs.org/docs/app/building-your-application/optimizing" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer">optimizaciones de rendimiento</a> y <a href="https://nextjs.org/docs/app/building-your-application/optimizing/metadata" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer">SEO</a> lo convierten en un framework excepcional. He utilizado paquetes como <a href="https://next-auth.js.org/" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer">NextAuth</a> para la autenticación, así como las novedades mas recientes como las <a href="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations" target="_blank" class="gradient-text font-bold tech-highlights">server actions</a>. Mi camino en Next.js ha ido siempre marcado por <a href="https://nextjs.org/docs/app/building-your-application/configuring/typescript" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer">TypeScript</a> y <a href="https://nextjs.org/docs/app" target="_blank" class="gradient-text-inverse font-bold tech-highlights">App Router</a>.`
    },
    {
        name: 'Python',
        src: python_logo,
        url: 'https://www.python.org/doc/',
        description: `<a href="https://www.python.org/doc/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer">Python</a> es un lenguaje que me encanta por ser simple y claro sin perder profundidad. Empecé con el curso de <a href="https://www.udemy.com/course/100-days-of-code" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer">Angela Yu</a> donde aprendí las particularidades de Python: data structures como los <a href="https://docs.python.org/3/tutorial/datastructures.html" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer">diccionarios</a>, su forma de manejar la lectura, escritura de (<a href="https://realpython.com/read-write-files-python/" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer">file system</a>), etc... Quiero aprender <a href="https://www.djangoproject.com/" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer">Django</a> y seguir profundizando en este lenguaje, especialmente ahora que la IA es tan importante en el sector. Me encantaría poder trabajar desarrollando en Python.`
    },
    {
        name: 'PHP',
        src: php_logo,
        url: 'https://www.php.net/',
        description: `<a href="https://www.php.net/" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer ">PHP</a> fue mi primer lenguaje de programación como tal, desde mi primer <a href="https://www.php.net/manual/es/control-structures.if.php" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer ">if</a> hasta mis primeros proyectos en <a href="https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador" target="_blank" class="gradient-text-inverse font-bold tech-highlights cursor-pointer">MVC</a>. En el trayecto aprendí  <a href="https://www.php.net/manual/es/book.pdo.php" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer">PDO</a> para acceder de manera segura a bases de datos con PHP. Con el tiempo me especialicé frameworks como <a href="https://laravel.com/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer">Laravel</a> para agilizar el desarrollo de aplicaciones web. He utilizado diferentes entornos como <a href="https://laravel.com/" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer">XAMPP</a> y <a href="https://laragon.org/" target="_blank" class="gradient-text-inverse font-bold tech-highlights cursor-pointer">Laragon</a>. En resumen, PHP ha sido un lenguaje fundamental en mi trayectoria.`
    },
    {
        name: 'Laravel',
        src: laravel_logo,
        url: 'https://laravel.com/',
        description: `<a href="https://laravel.com/docs" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer">Laravel</a> fué mi primer framework de <a href="https://es.react.dev/" class="text-[#c084fc] font-bold tech-highlights cursor-pointer ">PHP</a>. Con Laravel descubrí el potencial de un <a href="https://es.wikipedia.org/wiki/Framework" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer ">framework</a> para agilizar el desarrollo. Aprendí sobre <a href="https://laravel.com/docs/master/migrations#main-content" target="_blank" class="gradient-text font-bold tech-highlights">migrations</a>, <a href="https://laravel.com/docs/master/seeding#main-content" target="_blank" class="gradient-text-inverse font-bold tech-highlights">seeding</a>, <a href="https://laravel.com/docs/master/eloquent-factories#main-content" target="_blank" class="gradient-text font-bold tech-highlights">factories</a>, <a href="https://laravel.com/docs/master/controllers#main-content" target="_blank" class="gradient-text-inverse font-bold tech-highlights">controllers</a>, <a href="https://laravel.com/docs/master/eloquent#generating-model-classes" target="_blank" class="gradient-text font-bold tech-highlights">models</a>, <a href="https://laravel.com/docs/master/routing#main-content" target="_blank" class="gradient-text-inverse font-bold tech-highlights">routing</a> ... y a utilizar mi primer ORM: <a href="https://laravel.com/docs/master/eloquent-relationships" target="_blank" class="text-[#FDE68A] font-bold tech-highlights">Eloquent</a>. También he utilizado tecnologías como <a href="https://laravel-livewire.com/" target="_blank" class="text-[#c084fc] font-bold tech-highlights">Livewire</a> para añadir dinamismo a mis páginas. Mi primer proyecto grande, <a href="https://metazoa.app" target="_blank" class="text-[#FDE68A] font-bold tech-highlights">MetaZoa</a>, está creado completamente en Laravel.`,
    },
    {
        name: 'Node.js',
        src: nodejs_logo,
        url: 'https://nodejs.org/en',
        description: `Cuando conocí <a href="https://nodejs.org/en/docs/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer">Node.js</a> me pareció algo super innovador en el desarrollo de aplicaciones web del lado del servidor. He utilizado el stack <a href="https://es.wikipedia.org/wiki/MEAN" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer">MEAN</a> (<a href="https://www.mongodb.com/es" target="_blank" class="gradient-text-inverse font-bold tech-highlights cursor-pointer">MongoDB</a>, <a href="https://expressjs.com/" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer">Express</a>, <a href="https://angular.io/" target="_blank" class="gradient-text-inverse font-bold tech-highlights cursor-pointer">Angular</a> y <a href="https://nodejs.org/en" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer">Node.js</a>) para crear aplicaciones web completas, y herramientas como <a href="https://socket.io/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer">Socket.io</a> para crear aplicaciones en tiempo real. He realizado varios cursos como el de <a href="https://www.udemy.com/course/node-de-cero-a-experto/" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer">Fernando Herrera</a> y posteriormente el de <a href="https://www.udemy.com/course/nodejs-the-complete-guide" target="_blank" class="gradient-text-inverse font-bold tech-highlights cursor-pointer">Maximilian Schwarzmüller</a>.`
    },
    {
        name: 'Express.js',
        src: express_logo,
        url: 'https://expressjs.com/',
        description: `He utilizado <a href="https://expressjs.com/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer">Express.js</a> como mi framework de servidor web en mis aplicaciones de <a href="https://nodejs.org/es" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer">Node.js</a>. He creado <a href="https://expressjs.com/en/starter/basic-routing.html#basic-routing" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer">rutas</a> y <a href="https://expressjs.com/en/guide/using-middleware.html#using-middleware" target="_blank" class="gradient-text-inverse font-bold tech-highlights cursor-pointer">middlewares</a> para gestionar las <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Methods" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer"> peticiones HTTP</a>, implementando el uso de tecnologías como <a href="https://jwt.io/" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer">JWT</a> y complementándolo con aplicaciones como <a href="https://www.ibm.com/es-es/topics/rest-apis" target="_blank" class="gradient-text-inverse font-bold tech-highlights cursor-pointer">Postman</a> para testear mis <a href="https://www.ibm.com/es-es/topics/rest-apis" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer">API REST</a>.`
    },
    {
        name: 'MongoDB',
        src: mongodb_logo,
        url: 'https://www.mongodb.com',
        description: `<a href="https://nodejs.org/en/docs/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer">MongoDB</a> fue mi primer acercamiento a bases de datos no relacionales. He utilizado paquetes como <a href="https://mongoosejs.com/" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer">Mongoose</a> para trabajar con MongoDB desde <a href="https://nodejs.org/en/docs/" target="_blank" class="gradient-text-inverse font-bold tech-highlights cursor-pointer">Node.js</a>. Su sistema basado en <a href="https://www.mongodb.com/docs/manual/core/databases-and-collections/" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer">Collections</a> y <a href="https://www.mongodb.com/docs/manual/core/document/" target="_blank" class="gradient-text-inverse font-bold tech-highlights cursor-pointer">Documents</a> me parece un approach interesante a la hora de modelar datos. También he utilizado <a href="https://www.mongodb.com/" target="_blank" class="text-[#c084fc] font-bold tech-highlights cursor-pointer">MongoDB Atlas</a> para alojar bases de datos en la nube.`
    },
    {
        name: 'MySQL',
        src: mysql_logo,
        url: 'https://www.mysql.com/',
        description: `He utilizado <a href="https://www.mysql.com/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer">MySQL</a> como mi sistema de gestión de bases de datos relacionales en multitud de proyectos. Desde el diseño y la creación de bases de datos hasta consultas mas complejas utilizando <a href="https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html" target="_blank" class="gradient-text font-bold tech-highlights ">aggregates</a>, <a href="https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html" target="_blank" class="gradient-text font-bold tech-highlights ">joins</a>, <a href="https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html" target="_blank" class="gradient-text font-bold tech-highlights ">subqueries</a>, etc. Es uno de los campos que personalmente mas me apasiona y me gustaría llegar a ser un experto en el futuro.`
    },
    {
        name: 'PostgreSQL',
        src: postgresql_logo,
        url: 'https://www.postgresql.org/',
        description: `<a href="https://www.mysql.com/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer">PostgreSQL</a> es junto a <a href="https://www.mysql.com/" target="_blank" class="gradient-text font-bold tech-highlights cursor-pointer">MySQL</a> y <a href="https://mariadb.org/" target="_blank" class="gradient-text-inverse font-bold tech-highlights cursor-pointer">MariaDB</a> uno de los sistemas de gestión de bases de datos relacionales que he utilizado. He utilizado <a href="https://vercel.com/docs/storage/vercel-postgres" target="_blank" class="gradient-text font-bold tech-highlights ">Vercel Postgres</a> en mis proyectos de <a href="https://nextjs.org/" target="_blank" class="gradient-text font-bold tech-highlights ">Next.js</a> y me ha facilitado mucho la gestión de bases de datos en la nube.`
    },
    {
        name: 'GitHub Copilot',
        src: copilot_logo,
        url: 'https://github.com/features/copilot',
        description: `<a href="https://github.com/features/copilot" target="_blank" class="text-[#FDE68A] font-bold tech-highlights cursor-pointer">GitHub Copilot</a>, con sus fallos, me parece una tecnología interesante que uso a diario como asistente de código. Si bien es cierto que no siempre funciona, sí que ayuda a programar más rapido en tareas repetitivas o en los <a href="https://es.wikipedia.org/wiki/CRUD" target="_blank" class="gradient-text font-bold tech-highlights gradient-text-animation-tech">CRUDs</a>, y siempre me asiste en los errores de tipado de <a href="https://www.typescriptlang.org/" target="_blank" class="gradient-text-inverse font-bold tech-highlights gradient-text-animation-tech">TypeScript</a> 😅.`
    },
    {
        name: 'ChatGPT',
        src: openai_logo,
        url: 'https://chat.openai.com/',
        description: `He utilizado <a href="https://chat.openai.com/" target="_blank" class="text-[#FDE68A] font-bold tech-highlights">ChatGPT</a> en diversos aspectos, desde crear imágenes para mis destinos en <a href="https://timewarp.es" target="_blank" class="gradient-text font-bold tech-highlights">Timewarp</a> hasta generar texto de descripciones, asistencia de código y optmizaciones, etc. Me parece importantísimo estar al tanto de los avances de IA, y especialmente de empresas como <a href="https://openai.com" target="_blank" class="text-[#c084fc] font-bold tech-highlights">OpenAI</a>. Es una tecnología muy útil y conocer y saber aplicar <a href="https://en.wikipedia.org/wiki/Prompt_engineering" target="_blank" class="gradient-text  font-bold tech-highlights cursor-pointer">prompt engineering</a> puede marcar la diferencia.`
    },
];

export default SVGS;