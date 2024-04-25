export default {
  global: {
    componenteFormativo: 'La fase de elicitación de requisitos',
    descripcionCurso:
      'La recolección de datos se refiere al uso de una gran diversidad de técnicas y herramientas que pueden ser utilizadas por el analista para desarrollar los sistemas de información, que pueden ser la entrevista, la encuesta, el cuestionario, la observación, las sesiones en grupo, la visita a instalaciones, entre otros. Cada técnica de recolección de información posee diferentes instrumentos o herramientas para ser llevadas a cabo con profesionalismo y confiabilidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Elicitación de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Planeación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Técnicas e instrumentos para elicitar requisitos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Herramientas para captura de requisitos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Herramientas de modelado',
            hash: 't_1_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: '1.1 Planeación',
      referencia:
        'todopmp.com. (s.f.). <i>Guía PMBOK 6 - 49 procesos, entradas, herramientas y salidas</i>.',
      tipo: 'Página web',
      link: 'https://todopmp.com/cards/',
    },
    {
      tema: '1.1 Planeación',
      referencia:
        'EDAP - Project Business School. (2016). <i>MOOC PMP 302 Identificar Interesados (video)</i>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aUkTxgaajBo',
    },
    {
      tema: '1.1 Planeación',
      referencia:
        'Virtual Training Lteam. (2016). <i>Partes Interesadas Stakeholders (video)</i>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9AtaIAZEu0c',
    },
    {
      tema: '1.1 Planeación',
      referencia:
        'Calle, M. (2020). <i>Análisis de Interesados Mariz Poder Interés - PMI (video)</i>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hDZ0uu0H1wc',
    },
    {
      tema: '1.2 Técnicas e instrumentos para elicitar requisitos',
      referencia:
        'Jibaro X. (2019). <i>Tipos de Pregundas en una encuesta (video)</i>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mwnQuUi9014',
    },
  ],
  glosario: [
    {
      termino: 'Ágil',
      significado:
        'comprende un conjunto de tareas o acciones que se utilizan para producir y mantener productos, así como para lograr los objetivos del proceso. La actividad incluye los procedimientos, estándares, políticas y objetivos para crear y modificar un conjunto de productos de trabajo.',
    },
    {
      termino: 'Ciclo de vida <i>software</i>',
      significado:
        'se refiere a la aplicación de metodologías para el desarrollo del sistema <i>software</i> (AECC, 1986).',
    },
    {
      termino: 'Método',
      significado:
        'indica cómo construir técnicamente el <i>software</i>. Se incluyen técnicas de modelado y otras técnicas descriptivas.',
    },
    {
      termino: 'Metodología',
      significado: 'colección de métodos para resolver un tipo de problemas.',
    },
    {
      termino: 'Requerimiento',
      significado:
        'el requerimiento se refiere a la petición que se hace de algo que se solicita.',
    },
    {
      termino: 'Requisito',
      significado:
        'es la condición que debe cumplir algo, en general el requisito cumple con lo que se requiere con el requerimiento.',
    },
    {
      termino: '<i>Stakeholders</i>',
      significado:
        'individuo u organización que comparte, reclama o le interesa un sistema o le compete una característica que satisface sus necesidades y expectativas (ISO 29148).',
    },
  ],
  referencias: [
    {
      referencia:
        'Baar, B. (2006). Using Stakeholder Analysis in Software Project Management. Universidad de Amsterdam.',
      link: '',
    },
    {
      referencia:
        'Braude, J. (2003). Ingeniería de software, una perspectiva orientada a objetos. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Cohen, L. (2011). Métodos de investigación educativa. La Muralla.',
      link: '',
    },
    {
      referencia:
        'Cohn, M. (2004). User Stories Applied for Agile Software Development. Pearson Education, Inc.',
      link: '',
    },
    {
      referencia:
        'Cox, K., Niazi, M., y Verner, J. (2009). Empirical study of Sommerville and Sawyer’s requirements engineering practices. IET Software, 3(5), 339. ',
      link:
        'https://digital-library.theiet.org/content/journals/10.1049/iet-sen.2008.0076',
    },
    {
      referencia:
        'Curso de interacción persona-ordenador. (2021). Storyboarding. ',
      link: 'https://mpiua.invid.udl.cat/storyboarding/',
    },
    {
      referencia:
        'Denscombe, M. (2010). The Good Research Guide. McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Dornyei, Z. (2010). Questionnaires in Second Language Research: Construction, Administration, and Processing. Routledge.',
      link: '',
    },
    {
      referencia:
        'Durán, A., Bernárdez, B., Ruiz, A. y Toro, M. (1999). A Requirements Elicitatio Approach Based in Templates and Patterns. ',
      link:
        'https://www.researchgate.net/publication/2890318_A_Requirements_Elicitation_Approach_Based_in_Templates_and_Patterns',
    },
    {
      referencia:
        'Gause, C., & Weinberg, G. M. (1989). Exploring Requirements: Quality Before Design. Dorset House.',
      link: '',
    },
    {
      referencia:
        'Granollers, T., Lorés, J., y Perdrix F. (2002). Prototipado. Capítulo 5: modelo de proceso de la ingeniería de la usabilidad y de la accesibilidad.',
      link: '',
    },
    {
      referencia:
        'Hernández, S., Fernández C., y Baptista L. (2006). Metodología de la investigación. McGraw Hill.',
      link: '',
    },
    {
      referencia:
        'Herrera J., Lizka J. (2003). Ingeniería de requerimientos, ingeniería de software. ',
      link: 'http://www.monografias.com/trabajos6/resof/resof.shtml',
    },
    {
      referencia:
        'La oficina de proyectos de informática (2012). PMOinformatica.com. ',
      link:
        'http://www.pmoinformatica.com/2012/10/plantillas-scrum-historias-de-usuario.html',
    },
    {
      referencia:
        'Piattini M., Calvo-Manzano J., Cervera J., y Fernández, L. (2004). Análisis y diseño de aplicaciones informáticas de gestión. Una perspectiva de ingeniería de software. Alfaomega-Rama.',
      link: '',
    },
    {
      referencia:
        'Sommerville, I. (2011). Ingeniería de software. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Ventura, M. T. (2002). La ingeniería de requerimientos como factor clave para el éxito de los proyectos de desarrollo de software. ',
      link: 'http://132.248.9.195/ppt2002/0307178/Index.html',
    },
    {
      referencia:
        'Wessinger, K., (2012) Project Stakeholder Management. Engineering Management Journal, 14(84), 19-24.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Zulema Yidney León Escobar',
          cargo: 'Experta Temática',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Jonathan Guerrero Astaiza',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Álvarez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        //{
        //  nombre: 'Luis Gabriel Urueta Alvarez',
        //  cargo: 'Validador de Recursos Educativos Digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        //{
        //  nombre: 'Jaime Hernán Tejada Llano',
        //  cargo: 'Validador de Recursos Educativos Digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Margarita Marcela Medrano Gómez',
        //  cargo: 'Evaluador para contenidos inclusivos y accesibles',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
