export default {
  global: {
    componenteFormativo: 'Servicio al cliente',
    descripcionCurso:
      'A través de este componente formativo el aprendiz debe apropiar los elementos y conceptos necesarios relacionados con servicio al cliente en Contact Center BPO, todos sus procesos y características, que le permitan afianzar habilidades y destrezas que garanticen interacciones exitosas con clientes a través de los diferentes canales propios de este sector.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Protocolos, procesos y procedimientos en el servicio al cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tipos de clientes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Requerimientos y PQRS',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Información de clientes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Bases de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Terminología y vocabulario propio del Contact Center BPO',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Indicadores de gestión',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aldana, L. y Vargas, M. (2014). Calidad y servicio: conceptos y herramientas (3a. ed.). Ecoe Ediciones. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/114317',
    },
    {
      referencia:
        'Congreso de Colombia. (2008). Ley Estatutaria 1266 del 31 de diciembre de 2008, por la cual se dictan las disposiciones generales del hábeas data y se regula el manejo de la información contenida en bases de datos personales, en especial la financiera, crediticia, comercial, de servicios y la proveniente de terceros países y se dictan otras disposiciones. ',
      link:
        'http://wp.presidencia.gov.co/sitios/normativa/leyes/Documents/Juridica/Ley%201266%20de%2031%20de%20diciembre%202008.pdf',
    },
    {
      referencia:
        'García, A. (2016). Cultura de servicio en la optimización del servicio al cliente. Telos: Revista de Estudios Interdisciplinarios en Ciencias Sociales, 18(3), 381-98.',
    },
  ],
  glosario: [
    {
      termino: 'Agente',
      significado:
        'persona que responde llamadas en un <i>call center</i>. También llamado representante de servicio al cliente (CSR).',
    },
    {
      termino: 'Asertividad',
      //terminoHtml: '<em>Suftware</em>',
      significado:
        'capacidad de expresar sentimientos, ideas y opiniones, de manera libre, clara y sencilla, comunicándolos en el momento justo y a la persona indicada.',
    },
    {
      termino: 'Base de datos',
      significado:
        'conjunto de datos relacionados a un determinado aspecto de un negocio que se almacena sistemáticamente para un uso posterior (por ejemplo, para determinar qué productos prefiere determinado consumidor), y de ese modo poder ofrecerle una mejor atención o un trato personalizado.',
    },
    {
      termino: 'BPO',
      significado:
        'subcontratación de procesos de negocios o externalización de procesos de negocio –del inglés <i>Business Process Outsourcing</i> (BPO)– es la subcontratación de funciones del proceso de negocio en proveedores de servicios, ya sea internos o externos a la empresa, que se suponen menos costosos o más eficientes y eficaces',
    },
    {
      termino: 'Calidad',
      significado:
        'conjunto de propiedades y características de un producto o servicio que le confiere la capacidad de satisfacer necesidades y expectativas del consumidor; tales propiedades o características pueden ser, por ejemplo, la presentación, la conservación, la durabilidad, el precio, la oportunidad de compra, el servicio de pre y post venta, la estética, la rapidez en el servicio, la buena atención, la variedad para escoger, etc.',
    },
    {
      termino: 'Campaña',
      significado:
        'integración de una oferta de producto o servicio con una base de datos específica. Nuestra tecnología de marcador predictivo nos permite implementar simultáneamente varias ofertas asociadas a bases de datos distintas una de otra.',
    },
    {
      termino: 'Cliente',
      significado:
        'persona que ha comprado nuestros productos o adquirido nuestros servicios; se diferencia de un “consumidor”, en que el consumidor no necesariamente nos ha comprado o adquirido nuestros productos o servicios.',
    },
    {
      termino: 'Contact center',
      terminoHtml: '<em>Contact center</em>',
      significado:
        'centro de contactos; maneja más canales para la recepción/emisión de la información, a través de: llamadas telefónicas, correos electrónicos, fax y comunicaciones online, incluyendo la mensajería instantánea a través de las redes sociales. A todo este centro de recepción o emisión de información, también se le denomina comunicaciones unificadas.',
    },
    {
      termino: 'Competencia',
      significado:
        'conjunto de negocios o empresas que compiten con el nuestro.',
    },
    {
      termino: 'Encuesta',
      significado:
        'serie de preguntas que se hace a muchas personas para reunir datos o para detectar la opinión pública sobre un asunto determinado.',
    },
    {
      termino: 'Escucha activa',
      significado:
        'elemento indispensable en la comunicación eficaz y se refiere a la habilidad de escuchar no solo lo que la persona está expresando directamente, sino también los sentimientos, ideas o pensamientos que subyacen a lo que se está diciendo.',
    },
    {
      termino: 'TIC',
      significado:
        'Tecnologías de la Información y la Comunicación (TIC) constituyen un conjunto de instrumentos cada vez más eficaces para crear y difundir el conocimiento, así como para aprovecharlo en común. Son el resultado de las posibilidades creadas por la humanidad en torno a la digitalización de datos, productos, servicios y procesos, y de su transportación a través de diferentes medios, a grandes distancias y en pequeños intervalos de tiempo, de forma confiable, y con relaciones costo-beneficio nunca alcanzadas por el hombre.',
    },
    {
      termino: 'Tiempo de conversación',
      significado:
        'tiempo promedio que invierte un agente en cada llamada, una métrica común de rendimiento de call center. En general, se prefiere que el promedio de estos tiempos sea breve. No obstante, la combinación de promedios de tiempos de conversación breves y un índice bajo de resolución en la primera llamada son signo de que las llamadas no se están respondiendo satisfactoriamente.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'serie de procedimientos que permiten seguir el proceso de evolución de un producto en cada una de sus etapas',
    },
    {
      termino: 'Volumen de llamadas',
      significado: 'cantidad de contactos o transacciones por segundo.',
    },
  ],
  complementario: [
    {
      texto:
        'Congreso de Colombia. (2020). Ley de protección de datos personales. ',
      tipo: 'PDF',
      link:
        'http://wsp.presidencia.gov.co/Normativa/Leyes/Documents/LEY%201581%20DEL%2017%20DE%20OCTUBRE%20DE%202012.pdf',
      //descarga: '/downloads/Ley1266.pdf',
    },
    {
      texto:
        'Congreso de Colombia. (2008). Ley Estatutaria 1266 del 31 de diciembre de 2008, por la cual se dictan las disposiciones generales del hábeas data y se regula el manejo de la información contenida en bases de datos personales, en especial la financiera, crediticia, comercial, de servicios y la proveniente de terceros países y se dictan otras disposiciones. ',
      tipo: 'PDF',
      descarga: '/downloads/Ley1266.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nadia Patricia Granados Amado ',
        cargo: 'Instructor técnico BPO',
        centro:
          'Centro de Gestión de Mercados Logística y Tecnologías de la Información - Regional Distrito Capital',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Blanca Flor Tinoco Torres'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo Lopez ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Arnulfo Beltrán Mojica',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
