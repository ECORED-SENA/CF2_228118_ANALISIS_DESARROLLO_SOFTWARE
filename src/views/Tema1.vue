<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Elicitación de requisitos
    p.mb-4(data-aos="fade-right") El propósito de la elicitación de requerimientos es ganar conocimientos relevantes del problema, que se utilizarán para producir una especificación formal del software necesario para resolverlo.
    .row.mb-5
      .col-12.bg-c1(data-aos="fade-down")
        .p-4
          .row.justify-content-center.mb-5
            .col-lg-10
              .row
                .col-12.bg-c2
                  .px-4.pb-4.pt-4.pt-md-0
                    figure.mb-4
                      img(src='@/assets/curso/tema1/img3.svg', style="width:100px" alt='').m-auto
                    .row.justify-content-center.d-flex
                      .col-auto
                        i.fas.fa-quote-left
                      .col-7.col-md-8
                        p.text-center #[b Un problema puede ser definido como la diferencia entre las cosas como se perciben y las cosas como se desean.]
                      .col-auto.fig-p1
                        i.fas.fa-quote-right
                      p.text-center - (Gause y Weinberg 1989).
    p(data-aos="fade-right") La elicitación de requisitos es la actividad que se considera como el primer paso en un proceso de ingeniería de requisitos; su significado hace referencia a la puesta en marcha de técnicas que sirven para recopilar conocimiento o información y los objetivos de esta fase de elicitación, son:
    .row.align-items-center
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-12.bg-c3
            .p-4
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 Conocer el dominio del problema para poder comunicarse con clientes y usuarios y entender sus necesidades.
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 Conocer el sistema actual (manual o informatizado) y sus aspectos positivos y negativos.
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 Identificar las necesidades, tanto explícitas como implícitas, de clientes y usuarios y sus expectativas sobre el sistema a desarrollar.
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img1.png', style="width:390px" alt='').m-auto
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1. Planeación
    p.mb-5(data-aos="fade-right") La planeación busca definir las tareas a realizar para elegir y planificar las técnicas a emplear durante la actividad de elicitación de la fase de ingeniería de requisitos del desarrollo de software. En la siguiente tabla se presenta una relación de estas tareas y sus correspondientes procesos.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-up")
          p.mb-0 #[b Tabla 1.] Tareas para elicitación de requisitos
        .tabla-a.color-acento-contenido(data-aos="fade-left")
          table
            caption Nota: tomado de Durán y Bernárdez (2001)
            thead
              tr
                th Tareas
                th Procesos
            tbody
              tr
                td #[b A.] Identificar las fuentes.
                td Lista de fuentes de requerimientos.
              tr
                td #[b B.] Identificar interesados del producto.
                td Categorías de los interesados (#[i stakeholder]).
              tr
                td #[b C.] Matriz #[i stakeholders] (Describir necesidades y criterios de éxito).
                td Perfil de #[i stakeholder].
              tr
                td #[b D.] Revisar técnicas.
                td Identificar combinaciones de técnicas entrevistas, grupos focales, encuestas, prototipos.
              tr
                td #[b E.] Captura de interesados.
                td Plan de captura de interesados.
    p.mb-5(data-aos="fade-right") A continuación, se describen los procesos relacionados con las tareas para elicitación de requisitos:
    .row.mb-5(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p2
                img(src='@/assets/curso/tema1/img4.svg', style="width:50px" alt='').m-auto
            .col
              h3 A. Identificar las fuentes de requerimientos
    .row.mb-5
      .col-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img5.svg', style="width:240px" alt='').m-auto
      .col-lg-10(data-aos="fade-left")
        p Existe un conjunto de fuentes de requisitos en cada proyecto de desarrollo de software, así, usuarios y expertos abastecen de información detallada acerca del problema y necesidades del usuario. Los procesos y sistemas existentes representan, también, fuentes de requisitos; además, la documentación existente como manuales, formularios y reportes, incluso especificaciones de requisitos anteriores, puede proveer información útil acerca de la organización y su entorno.
        p.mb-0 En el proceso de esta actividad se identifican:
    .row.justify-content-center.mb-5
      .col-lg-8.bg-c5(data-aos="fade-down")
        .p-4
          ul.lista-ul.mb-0
            li.d-flex
              i.fas.fa-circle(style="color: #1682FB")
              |
              p.mb-0 Interesados relevantes.
            li.d-flex
              i.fas.fa-circle(style="color: #1682FB")
              |
              p.mb-0 Documentación que se puede usar como fuente de información de los requerimientos.
            li.d-flex
              i.fas.fa-circle(style="color: #1682FB")
              |
              p.mb-0 Fuentes de información externas.
    p(data-aos="fade-right") Las fuentes de requerimientos incluyen los propietarios del problema, los #[i stakeholders], documentos y otros sistemas (Pearson, 2002). En ese sentido, los requerimientos pueden obtenerse en diversas fuentes que pueden clasificarse en gente (#[i people]), productos o documentos, pero cualquiera sea la fuente de esos requerimientos deben ser chequeados con los #[i stakeholders].
    p.mb-5(data-aos="fade-right") Estas fuentes de requerimientos, se pueden clasificar en:
    .row.bg-c9.mb-5
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-md-8.col-lg.bg-c6.m-2(data-aos="fade-right")
              .p-4
                figure.mb-3
                  img(src='@/assets/curso/tema1/img2.png', style="width:120px" alt='')
                .row
                  .col-auto
                    p.txt-c1 #[b Fuentes primarias]
                p.text-white.mb-0 Aportan material de primera mano (es protagonista o testigo de los hechos), estas fuentes contienen información original, que ha sido publicada por primera vez y que no ha sido filtrada, interpretada o evaluada por nadie más.
            .col-md-8.col-lg.bg-c6.m-2(data-aos="fade-down")
              .p-4
                figure.mb-3
                  img(src='@/assets/curso/tema1/img3.png', style="width:120px" alt='')
                .row
                  .col-auto
                    p.txt-c1 #[b Fuentes secundarias]
                p.text-white.mb-0 Toman y reproducen la información que le aportó una fuente primaria. Son las que contienen información primaria, sintetizada y reorganizada y están especialmente diseñadas para facilitar y maximizar el acceso a las fuentes primarias o a sus contenidos. Parten de datos preelaborados, como pueden ser datos obtenidos de anuarios estadísticos, internet, medios de comunicación, bases de datos procesadas con otros fines, artículos y documentos relacionados con un tema, libros, tesis, informes oficiales, etc.
            .col-md-8.col-lg.bg-c6.m-2(data-aos="fade-left")
              .p-4
                figure.mb-3
                  img(src='@/assets/curso/tema1/img4.png', style="width:120px" alt='')
                .row
                  .col-auto
                    p.txt-c1 #[b Fuentes terciarias]
                p.text-white.mb-0 Son guías físicas o virtuales que contienen información sobre las fuentes secundarias. Forman parte de la colección de referencia de una biblioteca; facilitan el control y acceso a toda la gama de repertorios de referencia, como las guías de obras de referencia, o a un solo tipo, como las bibliografías.
          p.mb-5(data-aos="fade-right") Por otra parte, las fuentes de información, pueden ser orales, escritas o de otro tipo, dependiendo de cómo se transmitan los datos. A continuación, se pueden revisar algunos ejemplos de fuentes de información.
          .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
            p.mb-0 #[b Figura 1.] Fuentes de información
          .row.mb-4
            .col-12.bg-c7(data-aos="fade-down")
              .p-4.p-lg-5
                p.text-center.mb-5 #[b Las fuentes de información o documentación pueden hallarse en diversos soportes]
                .row.justify-content-center.align-items-center
                  .col-lg-3.order-2.order-lg-1
                    .row
                      .col.bg-c8.m-2
                        .p-4
                          .row
                            .col-auto.pe-0
                              figure
                                img(src='@/assets/curso/tema1/img10.svg', style="width:30px" alt='')
                            .col
                              p.mb-0 Grabaciones audiovisuales y grabaciones auditivas.
                      .col.bg-c8.m-2
                        .p-4
                          .row
                            .col-auto.pe-0
                              figure
                                img(src='@/assets/curso/tema1/img11.svg', style="width:30px" alt='')
                            .col
                              p.mb-0 Libros, artículos, prensa escrita y básicamente cualquier tipo de soporte que permita capturar y preservar la información, para recuperarla luego.
                  .col-lg-4.order-1.order-lg-2
                    figure
                      img(src='@/assets/curso/tema1/img5.png', style="width:350px" alt='').m-auto
                  .col-lg-3.order-3
                    .row
                      .col.bg-c8.m-2
                        .p-4
                          .row
                            .col-auto.pe-0
                              figure
                                img(src='@/assets/curso/tema1/img12.svg', style="width:30px" alt='')
                            .col
                              p.mb-0 Los testimonios, los relatos, las reseñas, los ensayos, las páginas web, las reflexiones, los listados bibliográficos y los índices.
                      .col.bg-c8.m-2
                        .p-4
                          .row
                            .col-auto.pe-0
                              figure
                                img(src='@/assets/curso/tema1/img13.svg', style="width:30px" alt='')
                            .col
                              p.mb-0 Las grabaciones profesionales, accidentales o clandestinas, las fotografías, las filmaciones e incluso ilustraciones.
    .row.mb-5(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p2
                img(src='@/assets/curso/tema1/img4.svg', style="width:50px" alt='').m-auto
            .col
              h3 B. Identificar interesados del producto
    .row.mb-5
      .col-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img14.svg', style="width:240px" alt='').m-auto
      .col-lg-10(data-aos="fade-left")
        p Uno de los primeros pasos en el proceso es el análisis e identificación de todas las personas relevantes que tienen un grado de interés en el proyecto. Los interesados (#[i stakeholders]), son los individuos y organizaciones que están relacionados activamente en un proyecto de #[i software]; tienen influencia directa o indirecta sobre los requisitos, o sus intereses se ven afectados por el proyecto (Baar, 2006, Ventura, 2002).
        p.mb-0 En resumen, son grupos o individuos que están interesados en el producto de #[i software] que se está desarrollando y necesitarán estar informados acerca del progreso, conflictos, cambios y prioridades del proceso de desarrollo del producto.
    p.mb-5(data-aos="fade-right") Los #[i stakeholders] se dividen en dos grupos:
    .row.justify-content-center.mb-5
      .col-md-8.col-lg-5.bg-c6.m-2(data-aos="fade-right")
        .p-4
          figure.mb-3
            img(src='@/assets/curso/tema1/img6.png', style="width:120px" alt='')
          .row
            .col-auto
              p.txt-c1 #[b Primarios]
          p.text-white.mb-0 Son aquellas personas indispensables para el correcto funcionamiento de la organización, y tienen una relación económica directa con la empresa. Estos pueden ser sus socios, clientes y accionistas.
      .col-md-8.col-lg-5.bg-c6.m-2(data-aos="fade-left")
        .p-4
          figure.mb-3
            img(src='@/assets/curso/tema1/img3.png', style="width:120px" alt='')
          .row
            .col-auto
              p.txt-c1 #[b Secundarios]
          p.text-white.mb-0 Son los entes que no participan directamente de la compañía, pero también son afectados por sus resultados. En este círculo se encuentran los competidores, el mercado y las personas en general.
    p.mb-5(data-aos="fade-right") A continuación, se listan roles más generales de las personas involucradas con sus términos similares, aunque cabe resaltar que existen leves diferencias entre ellos (Sommerville y Sawyer, 2005):
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img9.png', style="width:370px" alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        .row
          .col-12.bg-c5
            .p-4
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 Líder de proyecto / Administrador de proyecto / Gerente de proyecto.
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 Analista / Ingeniero de requisitos.
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 Ingeniero de sistemas / Arquitecto.
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 Programador / Desarrollador / Ingeniero de #[i software].
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 Probador / Asegurador de la calidad.
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 Administrador de bases de datos.
    p.mb-5(data-aos="fade-right") En la siguiente tabla se presentan los principales roles involucrados en el proceso de ingeniería de requisitos, así como las actividades en las que tienen mayor participación.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          p.mb-0 #[b Tabla 2.] Tareas para elicitación de requisitos
        .tabla-a.color-acento-contenido(data-aos="fade-left")
          table
            caption Nota: tomado de Ventura (2002)
            thead
              tr
                th(style="width:20% !important") Tareas
                th Procesos
            tbody
              tr
                td.text-center #[b Cliente]
                td Representa a la persona u organización que solicita la creación de un sistema a un área de desarrollo y quien lo paga. Es con quien se negocia el tiempo, costo y alcance del proyecto. Pueden o no ser usuarios del sistema.
              tr
                td.text-center #[b Usuario]
                td Son las personas que interactuarán con el sistema. Proporcionan información fundamental para el éxito del proyecto, ya que conocen y conviven con los procesos diarios.
              tr
                td.text-center #[b Líder de proyecto]
                td Por parte del equipo de desarrollo, es el representante ante el cliente. Es la persona responsable de completar el proyecto exitosamente con los recursos dados.
              tr
                td.text-center #[b Analista]
                td Su labor se enfoca en la ingeniería de requisitos, los identifica, analiza, modela y documenta. Además, establece contacto directo con los usuarios y utiliza diversas técnicas de comunicación y de recopilación de información para lograr su objetivo.
              tr
                td.text-center #[b Programador]
                td Con base en los requisitos recibidos de parte de los ingenieros de requisitos, el programador realiza la codificación para producir el sistema deseado.
              tr
                td.text-center #[b Asegurador de la calidad]
                td Garantiza el cumplimiento del proceso y de los estándares del producto. Enfocado en los requisitos, los verifica y valida para imprimir la calidad desde las primeras etapas del desarrollo. Paralelamente, prepara planes de prueba para esos requisitos del sistema.
              tr
                td.text-center #[b Arquitecto]
                td Es el responsable del diseño de alto nivel y es clave a la hora de precisar los atributos de calidad del producto.
    p.mb-5(data-aos="fade-right") Algunas de las técnicas que se pueden emplear para llevar a cabo la labor de análisis de los stakeholders incluyen entrevistas con los expertos, lluvia de ideas en grupo y lista de chequeo. Se espera que este grupo de personas identifiquen y caractericen a los #[i stakeholders] objetivamente, por tal motivo es recomendable involucrar a personas de diferentes contextos (Karisen, 2002 citado en Wessinger, 2012).
    .row.mb-5(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p2
                img(src='@/assets/curso/tema1/img4.svg', style="width:50px" alt='').m-auto
            .col
              h3 C. Matriz de #[i stakeholders]
    p.mb-5(data-aos="fade-right") La utilización de esta #[b herramienta de análisis permite clasificar a los involucrados en el proyecto según sus niveles de interés y poder sobre él], lo que facilita la priorización de los stakeholders más importantes para desarrollar las estrategias de gestión correspondientes.
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-12.bg-c5
            .p-4
              p #[b Importancia de la matriz de #[i stakeholders] en los proyectos de desarrollo]
              p.mb-0 En los proyectos de desarrollo, la gestión de los #[i stakeholders] es de suma importancia para alcanzar el éxito de los proyectos, ya que el proceso de identificación de los involucrados y la definición de sus niveles de interés e influencia en el proyecto, marcarán el punto de partida para desarrollar estrategias que posibilitan obtener el apoyo requerido para alcanzar los objetivos por los que el proyecto es emprendido. Es por ello, que la matriz de #[i stakeholders] es una herramienta indispensable desde el comienzo del proyecto mismo, ya que proveerá de la información necesaria para gestionar, adecuadamente, las expectativas de los involucrados a lo largo del proyecto, maximizando las influencias positivas y mitigando los impactos negativos potenciales derivados de estos. Además, dado el carácter social de los proyectos de desarrollo, involucrar a la sociedad civil no debe ser solo un ejercicio de comunicación unidireccional sino una oportunidad para lograr su apoyo al proyecto.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img10.png', style="width:370px" alt='').m-auto
    .row.mb-5
      .col-12.bg-c10(data-aos="fade-down")
        .p-4
          p #[b Proceso de armado de la matriz de #[i stakeholders]]
          p.mb-0 Para desarrollar la matriz de #[i stakeholders] es necesario identificar las entradas necesarias que proveerán la información con la que el líder y el equipo de proyecto trabajarán para desarrollar la matriz misma. Tales entradas pueden ser el acta de constitución de proyecto, documentos de adquisición, activos de los procesos y factores ambientales de la organización.
    .row.mb-5.mb-lg-0
      .col-12.bg-c14(data-aos="fade-left")
        .p-4.p-lg-5
          .row.align-items-center.justify-content-center.mb-4
            .col-md-8.col-lg-3.m-2
              .row
                .col-12.bg-c11
                  .p-3
                    p.text-center.text-white.mb-0 #[b Entradas]
                .col-12.bg-c12
                  .p-3
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-circle(style="color: #1682FB")
                        |
                        p.mb-0 Acta de constitución del proyecto.
                      li.d-flex
                        i.fas.fa-circle(style="color: #1682FB")
                        |
                        p.mb-0 Documentos de adquisición.
                      li.d-flex
                        i.fas.fa-circle(style="color: #1682FB")
                        |
                        p.mb-0 Factores ambientales de la organización.
                      li.d-flex
                        i.fas.fa-circle(style="color: #1682FB")
                        |
                        p.mb-0 Activos de los procesos de la organización.
            .col-lg-auto.fig-p3
              figure
                img(src='@/assets/curso/tema1/img17.svg', style="width:30px" alt='').m-auto
            .col-md-8.col-lg-3.m-2
              .row
                .col-12.bg-c11
                  .p-3
                    p.text-center.text-white.mb-0 #[b Herramientas y técnicas]
                .col-12.bg-c12
                  .p-3
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-circle(style="color: #1682FB")
                        |
                        p.mb-0 Acta de constitución del proyecto.
                      li.d-flex
                        i.fas.fa-circle(style="color: #1682FB")
                        |
                        p.mb-0 Documentos de adquisición.
            .col-lg-auto.fig-p3
              figure
                img(src='@/assets/curso/tema1/img17.svg', style="width:30px" alt='').m-auto
            .col-md-8.col-lg-3.m-2
              .row
                .col-12.bg-c11
                  .p-3
                    p.text-center.text-white.mb-0 #[b Salidas]
                .col-12.bg-c12
                  .p-3
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-circle(style="color: #1682FB")
                        |
                        p.mb-0 Matriz de #[i stakeholders] (registro y estrategias de gestión).
          .row.justify-content-center
            .col-md-8.col-lg-10.bg-c13
              .p-4
                .row.align-items-center
                  .col-lg-auto
                    figure
                      img(src='@/assets/curso/tema1/img18.svg', style="width:80px" alt='').m-auto
                  .col
                    p.mb-0 Para profundizar en detalle, lo invitamos a consultar la Guía PMBOK 6 - 49 procesos, entradas, herramientas y salidas, que se encuentra en el material complementario.
    p(data-aos="fade-right") #[b Descripción de los componentes de la matriz de #[i stakeholders]]
    p.mb-5(data-aos="fade-right") A continuación, se presenta el concepto de cada uno de los componentes que estructuran la matriz de #[i stakeholders].
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-down")
      .row(titulo="<i>Stakeholder</i>")
        .col-12
          p.mb-0 Es el nombre con el que se identifica el #[i stakeholder].
      .row(titulo="Tipo")
        .col-12
          p.mb-0 Identifica si el stakeholder desempeña un rol interno o externo al proyecto mismo. Los #[i stakeholder] pueden ser internos, como el personal de las unidades ejecutoras, el personal administrativo o ejecutivo de la organización, el personal de las entidades financiadoras con alto nivel de poder e influencia en el proyecto y sus recursos; o externos como los beneficiarios del proyecto, las instituciones del sector o las organizaciones de la sociedad civil, quienes serán de un modo u otro impactados por los resultados del protecto.
      .row(titulo="Objetivo o resultados")
        .col-12
          p.mb-0 En este campo se enlistan los objetivos o resultados en los que el #[i stakeholder] muestra interés o en aquellos en los que puede influir positiva o negativamente con sus acciones. Esta información puede ser suministrada por el acta de constitución de proyectos, la estructura de la organización, la estructura de desglose de trabajo, los diferentes planes que conforman el proyecto, entrevistas a los mismos interesados, etc.
      .row(titulo="Acciones posibles con impacto positivo / negativo")
        .col-12
          p.mb-0 Son las acciones que puede emprender el #[i stakeholder] y que pueden influir, negativa o positivamente, en los objetivos del proyecto en los que muestra su interés o en aquellos en los que puede influenciar debido a su jerarquia, estatus, recursos de los que dispone, entre otros.
      .row(titulo="Estrategias")
        .col-12
          p.mb-0 Es un listado de acciones que se pueden emprender para optener el apoyo necesario o evitar obstáculos por parte de los #[i stakeholder] durante la ejecución y conclusión del proyecto. Las estrategias se desarrollan considerando el tipo de #[i stakeholder], los objetivos en los que está interesado, el nivel de interés y poder que puede ejercer en el proyecto y las acciones posibles que podría emprender para afectar tanto positiva como negativamente el proyecto.
      .row(titulo="Conclusiones")
        .col-12
          p.mb-0 Es la síntesis sobre puntos clave a considerar para gestionar de manera efectiva las expectativas de los #[i stakeholder]. Las conclusiones se obtienen de relacionar, analizar y sintetizar toda la información vertida en la matriz de #[i stakeholder].
    .row.bg-c15
      .col-12
        .px-5.pt-5
          .row.align-items-center.mb-5
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p #[b Categorización de #[i stakeholders] y estrategias de gestión de las expectativas]
              p Como ya se había mencionado anteriormente, la matriz de #[i stakeholders] es una herramienta muy útil que permite clasificar a los involucrados en el proyecto según sus niveles de interés e influencia, priorizando a los más importantes y desarrollando así las estrategias correspondientes para gestionar sus expectativas. De la misma manera, su clasificación puede cambiar durante la vida del proyecto. Así, aquellos que fueron inicialmente identificados con un alto nivel de influencia en el proyecto, pueden ser reclasificados a un nivel más bajo durante otras etapas de la vida del proyecto.
              p La categorización de los #[i stakeholders] se lleva a cabo una vez que la información sobre éstos esté completa. Para ello se puede utilizar una matriz de 2x2 en la que se pueda graficar el grado de poder e interés que tiene el involucrado en el proyecto, coadyuvando así a clasificar a cada stakeholder dentro del grupo para el cual se definen diferentes estrategias (figura 3).
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img12.png', style="width:370px" alt='').m-auto
          .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
            p.mb-0 #[b Figura 3.] Ejemplo de matriz interés vs. influencia.
          .row
            .col-12.bg-c16(data-aos="fade-down")
              .p-4
                figure
                  img(src='@/assets/curso/tema1/img20.svg', style="width:670px" alt='').m-auto
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2 Técnicas e instrumentos para elicitar requisitos
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img13.png', style="width:370px" alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Hay una variedad de técnicas propuestas para ingeniería de requerimientos (Herrera, 2003. p. 12), por lo que es primordial resaltar que estas técnicas pueden ser aplicables a las distintas fases del proceso de la ingeniería de requerimientos (IR), teniendo en cuenta las características propias del proyecto en particular que se esté desarrollándose para aprovechar al máximo su utilidad.
        p.mb-0 A continuación, se presentará una serie de técnicas destinadas a facilitar la elicitación correcta y efectiva de los requisitos dentro de un proceso de desarrollo.
    .row.mb-5(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p2
                img(src='@/assets/curso/tema1/img4.svg', style="width:50px" alt='').m-auto
            .col
              h3 Entrevista
    .row.bg-c17.mb-5
      .col-12
        .px-5.pb-5
          .row.mb-5
            .col-12.bg-c1(data-aos="fade-down")
              .p-4
                .row.justify-content-center.mb-5
                  .col-lg-10
                    .row
                      .col-12.bg-c2
                        .px-4.pb-4.pt-4.pt-md-0
                          figure.mb-4
                            img(src='@/assets/curso/tema1/img3.svg', style="width:100px" alt='').m-auto
                          .row.justify-content-center.d-flex
                            .col-auto
                              i.fas.fa-quote-left
                            .col-7.col-md-8
                              p.text-center #[b La entrevista es una forma de recoger información de otra persona a través de una comunicación interpersonal que se lleva a cabo por medio de una conversación estructurada.]
                            .col-auto.fig-p1
                              i.fas.fa-quote-right
                            p.text-center - (Braude, 2003).
          p.mb-5(data-aos="fade-right") En las entrevistas se pueden identificar tres fases: preparación, realización y análisis (Piattini et al, 1996), como se observa a continuación.
          .row.justify-content-center
            .col-lg-10
              TabsB.color-acento-botones.bg-white(data-aos="fade-left")
                .py-4.py-md-5.m-4(titulo="1. Preparación" :icono="require('@/assets/curso/tema1/img21.svg')")
                  .row.align-items-center
                    .col-lg-9.order-2.order-lg-1
                      p #[b 1. Preparación]
                      p El entrevistador debe documentarse e investigar la situación de la organización, analizando los documentos de la empresa disponible.
                      ul.lista-ul.mb-0
                        li.d-flex
                          i.fas.fa-circle(style="color: #1682FB")
                          |
                          p.mb-0 Se debe intentar minimizar el número de entrevistados, considerando las entrevistas de cortesía.
                        li.d-flex
                          i.fas.fa-circle(style="color: #1682FB")
                          |
                          p.mb-0 Analizar el perfil de los entrevistados.
                        li.d-flex
                          i.fas.fa-circle(style="color: #1682FB")
                          |
                          p.mb-0 Definir el objetivo y el contenido de la entrevista.
                        li.d-flex
                          i.fas.fa-circle(style="color: #1682FB")
                          |
                          p.mb-0 Planificar el lugar y la hora en la que se va a desarrollar la entrevista (es conveniente realizarla en un lugar confortable).
                        li.d-flex
                          i.fas.fa-circle(style="color: #1682FB")
                          |
                          p.mb-0 Algunos proponen enviar previamente el entrevistado un cuestionario y un pequeño documento de introducción al proyecto de desarrollo.
                    .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
                      figure
                        img(src='@/assets/curso/tema1/img24.svg', style="width:270px" alt='').m-auto
                .py-4.py-md-5.m-4(titulo="2. Realización" :icono="require('@/assets/curso/tema1/img21.svg')")
                  .row.align-items-center
                    .col-12
                      p #[b 2. Realización]
                      p Dentro de la realización de las entrevistas se distinguen tres etapas, tal como se expone en Piattini et al. (1996):
                      ol.lista-ol--cuadro
                        li.d-flex
                          .lista-ol--cuadro__vineta
                            span a.
                          |
                          p.mb-0 #[b Apertura:] presentarse e informar al entrevistado sobre la razón de la entrevista.
                        li.d-flex
                          .lista-ol--cuadro__vineta
                            span b.
                          |
                          p.mb-0 #[b Desarrollo:] cumplir las reglas del protocolo, hay que llegar a un acuerdo sobre cómo se va a registrar la información obtenida.
                      .row.justify-content-center.mb-3
                        .col-11.bg-c3
                          .p-3
                            ul.lista-ul.mb-0
                              li.d-flex
                                i.fas.fa-circle(style="color: #1682FB")
                                |
                                p.mb-0 #[b Preguntas abiertas:] también denominadas de libre contexto (Gause y Weinberg, 1989), estas preguntas no pueden  responderse con un #[b "sí"] o un #[b "no"], permiten una mayor comunicación y evitan la sensación de interrogatorio. Por  ejemplo, #[b "¿Qué se hace para registrar un pedido?"], #[b "Dígame qué se debe hacer cuando un cliente pide una factura"] o #[b “¿Cómo se rellena un recibo?"].
                              li.d-flex
                                i.fas.fa-circle(style="color: #1682FB")
                                |
                                p.mb-0 #[b Utilizar palabras apropiadas:] se deben evitar tecnicismos que no conozca el entrevistado y palabras o frases que  puedan perturbar emocionalmente la comunicación (Goleman 1996, Goleman 1999).
                              li.d-flex
                                i.fas.fa-circle(style="color: #1682FB")
                                |
                                p.mb-0 #[b Mostrar interés en todo momento:] es fundamental cuidar la comunicación no verbal (Davis, 1985) durante la entrevista:  tono de voz, movimiento, expresión facial.
                      ol.lista-ol--cuadro
                        li.d-flex
                          .lista-ol--cuadro__vineta
                            span c.
                          |
                          p.mb-0 Terminación: se termina recapitulando la entrevista agradeciendo el esfuerzo y dejando abierta la posibilidad de volver a contactar para aclarar conceptos o bien citándole para otra entrevista.
                .py-4.py-md-5.m-4(titulo="3. Análisis" :icono="require('@/assets/curso/tema1/img23.svg')")
                  .row.align-items-center
                    .col-lg-9.order-2.order-lg-1
                      p #[b 3. Análisis]
                      p Consiste en leer las notas, pasarlas en limpio, reorganizar la información, contrastarlas con otras entrevistas o fuentes de información, evaluar cómo ha ido la entrevista.
                      p.mb-0 En estas entrevistas, el equipo de la ingeniería de requerimientos hace preguntas sobre el sistema que utilizan y sobre el sistema a desarrollar. Los requerimientos provienen de las respuestas a estas preguntas.
                    .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
                      figure
                        img(src='@/assets/curso/tema1/img25.svg', style="width:270px" alt='').m-auto
    p.mb-5(data-aos="fade-right") Las entrevistas se pueden clasificar fundamentalmente, en:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
      .row(titulo="Entrevista estructurada")
        .col-12
          p Las preguntas en esta entrevista se deciden, previamente, de acuerdo con el detalle de información requerida.
          .row.mb-3
            .col-12
              .p-4.bg-c18
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 Recoge de forma sistemática y precisa la mayor información sobre los aspectos que quiere explorar.
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 Las preguntas son prefijadas y definidas, las respuestas son esperadas e incluso se le dan al entrevistado en forma de varias opciones.
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 Las etapas son planificadas.
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 La interpretación de las respuestas se realiza de acuerdo con unos criterios establecidos.
          .row
            .col-auto
              a.anexo(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Entrevista estructura.
      .row(titulo="Entrevista semiestructurada")
        .col-12
          p Esta presenta un grado mayor de flexibilidad que la estructurada, debido a que parten de preguntas planeadas, que pueden ajustarse a los entrevistados. Su ventaja es la posibilidad de adaptarse a los sujetos con enormes posibilidades para motivar al interlocutor, aclarar términos, identificar ambigüedades y reducir formalismos.
          .row.mb-3
            .col-12
              .p-4.bg-c18
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 Las preguntas, desarrollo e interpretación se planifican previamente, pero con un cierto grado de libertad de acción para abordar temas que pueden surgir durante la misma.
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 Se suele utilizar un protocolo para facilitar al entrevistador seguir un modelo preestablecido.
      .row(titulo="Entrevista no estructurada")
        .col-12
          p Las entrevistas no estructuradas suelen describirse como conversaciones mantenidas con un propósito en mente.
          .row.mb-3
            .col-12
              .p-4.bg-c18
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 No se estructura ni planifica previamente.
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 Es la más ágil y la que proporciona más información en general, pero requiere un cierto dominio por parte del entrevistador.
    .row.mb-5(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p2
                img(src='@/assets/curso/tema1/img4.svg', style="width:50px" alt='').m-auto
            .col
              h3 Encuesta
    .row.bg-c17.mb-5
      .col-12
        .px-5.pb-5
          .row.mb-5
            .col-12.bg-c1(data-aos="fade-down")
              .p-4
                .row.justify-content-center.mb-5
                  .col-lg-10
                    .row
                      .col-12.bg-c2
                        .px-4.pb-4.pt-4.pt-md-0
                          figure.mb-4
                            img(src='@/assets/curso/tema1/img3.svg', style="width:100px" alt='').m-auto
                          .row.justify-content-center.d-flex
                            .col-auto
                              i.fas.fa-quote-left
                            .col-7.col-md-8
                              p.text-center #[b Los cuestionarios son herramientas ampliamente utilizadas para recoger datos de sondeos y pueden ser administradas sin la presencia del investigador.]
                            .col-auto.fig-p1
                              i.fas.fa-quote-right
                            p.text-center - (Cohen, 2011, p. 377).
    .row.mb-5
      .col-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img15.png', style="width:200px" alt='').m-auto
      .col-lg-10(data-aos="fade-left")
        p Pueden variar en cuanto a propósito, diseño y apariencia, y consisten en listas de preguntas escritas. Los individuos participantes en la investigación suelen leer los mismos listados de preguntas, por lo que esto permite consistencia y precisión al analizar las respuestas, además de facilitar el proceso. Una de las ventajas más destacadas de los cuestionarios es que simplifican el proceso de la obtención de datos, preguntando directamente a los individuos participantes para obtener datos de forma rápida y directa y se pueden aplicar a un gran número de sujetos.
        p.mb-0 Los datos que se obtienen a través de los cuestionarios suelen estar clasificados en dos categorías: hechos y opiniones (Denscombe, 2010, p. 156). La información relacionada con los hechos no requiere el juicio o la actitud personal de los sujetos participantes, pero la información obtenida a través de las opiniones implica creencias, puntos de vista y preferencias de los sujetos participantes.
    .row.justify-content-center.mb-5
      .col-md-9.col-lg.bg-c19.m-2(data-aos="fade-right")
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/img16.png', style="width:90px" alt='').m-auto
          p.text-center #[b Tipos de preguntas]
          p La distinción más general entre los tipos de preguntas de los #[b cuestionarios, además de hechos y opiniones, es la de preguntas abiertas y cerradas]; las preguntas abiertas son aquellas en las que no se especifica ninguna respuesta para elegir y se deja abierta a la elección del participante para que escriba en ella. Las preguntas cerradas son las que ofrecen ya unas respuestas predeterminadas para su elección.
      .col-md-9.col-lg.bg-c19.m-2(data-aos="fade-left")
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/img17.png', style="width:90px" alt='').m-auto
          p.text-center #[b Tipos de respuestas]
          p Las respuestas de escala son las más comunes en los cuestionarios de investigación ya que implican al participante en una valoración o evaluación de las respuestas objetivo por medio de varias opciones en las que tienen que marcar dentro de una escala la importancia de cada una. Esa escala de valoración indica diferentes grados en una categoría y puede ser de diversa naturaleza; por ejemplo, puede valorar una categoría indicando si es “bueno” o “malo”, “frecuente” o “infrecuente”, “importante” o “poco importante” o también pueden valorar opiniones: “completamente de acuerdo” o “en desacuerdo”. El número de opciones más común es el de cinco, por ser un número impar, ya que existe una tendencia generalizada a seleccionar la opción intermedia (Dornyei, 2010).
    .row.justify-content-center.mb-5
      .col-md-8.col-lg-10.bg-c13(data-aos="fade-down")
        .p-4
          .row.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/img18.svg', style="width:80px" alt='').m-auto
            .col
              p.mb-0 Para ampliar la información, lo invitamos a ver el video Tipos de preguntas en una encuesta, el cual se encuentra en el material complementario.
    .row.mb-5(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p2
                img(src='@/assets/curso/tema1/img4.svg', style="width:50px" alt='').m-auto
            .col
              h3 Observación
    .row.mb-5
      .col-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img18.png', style="width:200px" alt='').m-auto
      .col-lg-10(data-aos="fade-left")
        p Esta permite la obtención de datos para emprender una investigación de tipo cualitativo, no desde el punto de vista de lo que los sujetos dicen, sino que es la evidencia directa de lo que ve y percibe el investigador en un escenario de primera mano (Denscombe, 2010).
        p.mb-0 Por su parte, Selltiz (citado por Hernández, Fernández y Baptista, 2006, p. 229), al referirse a la observación, recomienda que para que esta se convierta en una técnica como tal, debe cumplir con cuatro condiciones:
    .row.justify-content-center.mb-5
      .col-lg-8.bg-c5(data-aos="fade-up")
        .p-4
          ol.lista-ol--cuadro.mb-0
            li.d-flex
              .lista-ol--cuadro__vineta
                span 1.
              |
              p.mb-0 Debe servir a un objeto formulado de investigación.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 2.
              |
              p.mb-0 Debe de ser planificada sistemáticamente.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 3.
              |
              p.mb-0 Debe estar controlada y relacionada con proposiciones generales.
            li.d-flex
              .lista-ol--cuadro__vineta
                span 4.
              |
              p.mb-0 Debe ser sujeta a comprobaciones y controles de validez y fiabilidad.
    p.mb-5(data-aos="fade-right") De acuerdo con lo anterior, se puede asumir que la observación:
    .row.mb-5
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        .row.mb-3
          .col-12.bg-c20.mb-3
            .p-3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/img28.svg', style="width:50px" alt='').m-auto
                .col
                  p.text-white.mb-0 #[b Tiene la característica de seguir normas, reglas y procedimientos.]
          .col-12.bg-c20
            .p-3
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema1/img29.svg', style="width:50px" alt='').m-auto
                .col
                  p.text-white.mb-0 #[b Permite a los sujetos y objetos establecer relaciones de manera directa.]
        p Para el caso de obtención de requerimientos del software la observación nos sirve para estudiar el entorno de trabajo de los usuarios, clientes e interesados de proyecto (#[i stakeholders]) y para documentar la situación actual de procesos de negocio.
        p.mb-0 En la siguiente figura, se pueden revisar los tipos de observación.
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img19.png', style="width:550px" alt='').m-auto
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      p.mb-0 #[b Figura 4.] Tipos de observación.
    .row.mb-5
      .col-12
        .p-4.bg-c16(data-aos="fade-down")
          figure.d-none.d-lg-block
            img(src='@/assets/curso/tema1/img30.svg', style="width:900px" alt='La observación puede ser: pasiva, El observador no hace preguntas, limitándose solo a tomar notas y a no interferir en el desempeño normal de las operaciones. Activa, El observador puede conversar con el usuario.').m-auto
          figure.d-block.d-lg-none
            img(src='@/assets/curso/tema1/img30m.svg', style="width:300px" alt='La observación puede ser: pasiva, El observador no hace preguntas, limitándose solo a tomar notas y a no interferir en el desempeño normal de las operaciones. Activa, El observador puede conversar con el usuario.').m-auto
    p(data-aos="fade-right") Ahora bien, para llevar a cabo la observación, el observador puede utilizar como instrumento la guía de observación, la cual le permite situarse de manera sistemática en aquello que realmente es objeto de estudio para la investigación; también es el medio que conduce la recolección y obtención de datos e información de un hecho o fenómeno.
    p.mb-5(data-aos="fade-right") Tamayo (2004) define a la guía de observación como:
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .cajon.color-primario.p-4
          p.mb-0 Un formato en el cual se pueden recolectar los datos en sistemática y se pueden registrar en forma uniforme, su utilidad consiste en ofrecer una revisión clara y objetiva de los hechos, agrupa los datos según necesidades específicas, se hace respondiendo a la estructura de las variables o elementos del problema (p. 172).
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img20.png', style="width:420px" alt='').m-auto
    p.mb-5(data-aos="fade-right") Para elaborar la guía de observación se ha de diseñar el contenido de la observación; el cual debe incluir por lo menos los siguientes aspectos:
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img21.png', style="width:420px" alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        .row
          .col-12.bg-c5.mb-4
            .p-4
              ol.lista-ol--cuadro.mb-0
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 1.
                  |
                  p.mb-0 Datos y características de los sujetos a evaluar.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 2.
                  |
                  p.mb-0 Propósitos de la observación o de las observaciones a realizar.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 3.
                  |
                  p.mb-0 Temporalidad de la observación.
          .row
            .col-auto
              a.anexo(:href="obtenerLink('/downloads/anexo2.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Ficha de observación.
    .row.mb-5(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p2
                img(src='@/assets/curso/tema1/img4.svg', style="width:50px" alt='').m-auto
            .col
              h3 Sesiones grupales
    .row.mb-5
      .col-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img31.svg', style="width:180px" alt='').m-auto
      .col-lg-10(data-aos="fade-left")
        p Es un proceso por el cual se llevan a cabo reuniones en grupo altamente estructuradas que convocan, en una misma sala, a los usuarios de un sistema, los propietarios del sistema y a los analistas durante un amplio periodo de tiempo. Los objetivos de esta técnica son esencialmente los mismos que los de las entrevistas, con la salvedad de necesitar más analistas para llevarlos a cabo.
        p.mb-0 Dentro de las sesiones de trabajo en grupo se encuentran técnicas como #[b la lluvia de ideas, las sesiones JAD y el método Delphi].
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
      .row(titulo="Entrevista estructurada")
        .col-12
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1/img32.svg', style="width:80px" alt='').m-auto
            .col
              p.mb-0 También denominada tormenta de ideas o incluso #[i brainstorming]. Faickney (1939) investigó sobre diferentes maneras de generar creatividad. Se percató de que la mejor manera de ser creativo en una empresa es a través de la interacción y el trabajo en equipo; todos juntos podían dar sus opiniones y sugerencias sobre un tema determinado. Creó de esta manera la lluvia de ideas.
      .row(titulo="Sesiones JAD (<i>Joint Application Design</i>)")
        .col-12
          .row.align-items-center.mb-3
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema1/img33.svg', style="width:80px" alt='').m-auto
            .col
              p.mb-0 Es un proceso usado para reunir requerimientos en el desarrollo de nuevos sistemas de información para una compañía. #[b El proceso JAD consiste en un taller donde los trabajadores del conocimiento y los especialistas en tecnologías de información se reúnen], algunas veces durante varios días, para definir y revisar los requerimientos de negocio para el sistema. Los asistentes incluyen oficiales de administración de alto nivel, quienes se aseguran de que el producto provea los reportes y la información requerida al final, esto actúa como “un proceso de administración” que permite que los departamentos de servicios de información corporativa trabajen más eficientemente con los usuarios en un marco de tiempo más reducido.
          p.mb-0 A través de los talleres JAD, los trabajadores del conocimiento y los especialistas en tecnologías de información pueden resolver cualquier dificultad o diferencias entre las posturas referentes al nuevo sistema de información. #[b El taller sigue una detallada agenda para lograr garantizar que todas las incertidumbres entre los grupos sean cubiertas y para ayudar a prevenir cualquier falla en la comunicación], estas fallas de comunicación pueden provocar repercusiones mucho más serias si no se identifican a tiempo. Al final, este proceso resultará en un nuevo Sistema de Información viable y orientado tanto a diseñadores como a usuarios.
      .row(titulo="Sesiones JAD (<i>Joint Application Design</i>)")
        .col-12
          p Es un método de estructuración de un proceso de comunicación grupal que consiste en la selección de un grupo de expertos a los que se les pregunta su opinión frente a ciertas temáticas.
          .row
            .col-12
              .p-4.bg-c21
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 #[b Fase uno.] Formulación del problema: se define el campo de investigación.
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 #[b Fase dos.] Elección de expertos: el experto se elige según su preparación y su capacidad de proyección.
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 #[b Fase tres.] Elaboración de cuestionarios: las preguntas deben hacerse de acuerdo con la temática que se quiere obtener.
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 #[b Fase cuatro.] Desarrollo y explotación de resultados: el cuestionario se entrega a los expertos para ser contestado por ellos.
    Separador
    #t_1_3
    .titulo-segundo.color-acento-contenido
      h2 1.3. Herramientas para captura de requisitos
    p.mb-5(data-aos="fade-right") Existen varias herramientas para la captura de requisitos potenciales de un nuevo sistema o una actualización de software, a continuación, se explican las más utilizadas:
    .row.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img22.png', style="width:280px" alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        p Al momento de desarrollar un proyecto se debe pensar en cuáles serán las principales funcionalidades que el software debe permitir llevar a cabo y quiénes serán los que podrán ejecutar dichas funcionalidades. La identificación de estos elementos se puede visualizar de manera efectiva a través de la elaboración de diagramas de casos de uso; estos diagramas, que son elaborados durante las etapas iniciales de un proyecto, se convierten en referente para cada una de las etapas siguientes del desarrollo del proyecto.
        p.mb-0 Componentes. En los diagramas de casos de uso, se observan los siguientes componentes.
    .row.justify-content-center.mb-5
      .col-md-9.col-lg.bg-c19.m-2(data-aos="fade-right")
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/img35.svg', style="width:90px" alt='').m-auto
          p.text-center #[b Actor]
          p Se representa mediante un “hombre de palo”. Este se emplea para indicar el tipo de usuario del sistema que podrá ejecutar alguna función.
      .col-md-9.col-lg.bg-c19.m-2(data-aos="fade-left")
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/img36.svg', style="width:130px" alt='').m-auto
          p.text-center #[b Caso de uso]
          p Se representa mediante un óvalo e indica una función que el sistema debe proveer.
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        p Para ejemplificar un proceso se puede emplear un verbo conjugado en infinitivo y que represente la función a realizar (administrar, gestionar, registrar, entre otros). A continuación, se presenta un ejemplo, en el cual se presenta un diagrama de casos de uso de la sistematización de un centro médico.
        .row
          .col-12
            .p-4.bg-c5
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 Administrar datos pacientes.
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 Administrar datos tratamientos.
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 Gestionar citas.
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 Generar reportes.
      .col-lg-8(data-aos="fade-left")
        .row
          .col-12
            .p-4.bg-c22
              p #[b Representación gráfica]
              .titulo-sexto.color-acento-contenido.mb-4
                p.mb-0 #[b Figura 5.] Caso de uso centro médico
              figure
                img(src='@/assets/curso/tema1/img38.svg', style="width:550px" alt='').m-auto
    .row.bg-c24.mb-5
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              .row
                .col-12
                  .p-4.bg-c23
                    p #[b Identificación de casos de uso]
                    p En el ejemplo anterior se observan los casos de uso identificados en el sistema, es decir, las funcionalidades que el sistema va a proveer (administrar datos pacientes, administrar datos tratamientos, gestionar citas, generar reportes).
                    hr
                    p #[b Identificación de actores]
                    p Los actores son los usuarios que podrán ejecutar los casos de uso, en el ejemplo anterior, se identificaron dos actores (médico y empleado).
                    hr
                    p #[b Documentación]
                    p La técnica de casos de uso requiere además de construir el diagrama de casos de uso, la descripción de estos. Esta descripción permite detallar el flujo de eventos que se da entre el Sistema y el Actor para llevar a cabo el caso de uso.
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img23.png', style="width:380px" alt='').m-auto
          .row.justify-content-center
            .col-lg-10
              .tarjeta.color-primario.p-3(data-aos="fade-down")
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-1
                    img(src="@/assets/curso/tema1/img39.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.mb-1 Documentación caso de uso
                        p.text-small A continuación, se presenta el formato diligenciado de acuerdo con el ejemplo del centro médico.
                      .col-sm-auto
                        a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo3.pdf')" target="_blank")
                          span(style="color:#000 !important") Descargar
                          i.fas.fa-file-download(style="color:#000 !important")
    .row.bg-c25.mb-5
      .col-12
        .px-5
          .row.mb-5(data-aos="fade-down")
            .col-auto.bg-c4
              .px-3.pb-0
                .row.align-items-end
                  .col-auto.px-0
                    figure.fig-p2
                      img(src='@/assets/curso/tema1/img4.svg', style="width:50px" alt='').m-auto
                  .col
                    h3 Historias de usuario
          p(data-aos="fade-right") Las historias de usuario son utilizadas en los métodos agiles para la especificación de requisitos, son una descripción breve de una funcionalidad software tal y como la percibe el usuario (Cohn, 2004).
          p.mb-5(data-aos="fade-right") El formato para las historias de usuario Scrum se basan en una regla de tres palabras:
          .row.justify-content-center.mb-5
            .col-lg-8
              .p-4.bg-c26(data-aos="fade-down")
                .row.justify-content-center.align-items-center
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/tema1/img26.png', style="width:220px" alt='').m-auto
                  .col-lg-4
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-circle(style="color: #1682FB")
                        |
                        p.mb-0 #[b Como] &lt;rol&gt;
                      li.d-flex
                        i.fas.fa-circle(style="color: #1682FB")
                        |
                        p.mb-0 #[b Quiero] &lt;eventos&gt;
                      li.d-flex
                        i.fas.fa-circle(style="color: #1682FB")
                        |
                        p.mb-0 #[b Para] &lt;funcionalidades&gt;
          p(data-aos="fade-right") Así, el &lt;rol&gt; que se escoja que va a utilizar la aplicación software, requiere de una &lt;Acción&gt; / &lt;evento&gt; que ocurra, porque se desea cubrir una &lt;funcionalidad&gt;. Corto y conciso, directo y claro.
          p.mb-5(data-aos="fade-right") A continuación se presentan ejemplos de historias de usuario.
          .row.justify-content-center.mb-5
            .col-lg-8
              .p-4.bg-c26(data-aos="fade-left")
                .row.justify-content-center
                  .col-md-8.col-lg-5.m-2
                    .p-4.bg-c13.h-100
                      p.mb-0 #[b Como un cliente, quiero consultar para poder encontrar el producto que deseo comprar.]
                  .col-md-8.col-lg-5.m-2
                    .p-4.bg-c13
                      p.mb-0 #[b Como un cliente, quiero que los productos seleccionados para la compra queden almacenados en un carrito de compra para poder visualizar todos mis productos y el precio total.]
          .row.justify-content-center.mb-5
            .col-lg-10
              .p-4.bg-c10(data-aos="fade-right")
                p #[b Conversación para explicar mejor la historia de usuario]
                p Como se mencionó anteriormente, las historias de usuario son una frase sencilla y concisa, sin embargo, eso no impide que se pueda abrir un diálogo (conversación) entre todos los miembros del equipo. De hecho, esta conversación se debe llevar a cabo para explicar mejor la propia historia de usuario y conseguir objetivos como:
                ul.lista-ul.ms-4
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 Detallar a mayor nivel como se realizará la solución.
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 Clarificar aspectos de valor, funcionamiento y técnicos.
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 Resolver las dudas que aparezcan.
                p.mb-0 Estas conversaciones llevarán a alcanzar acuerdos sobre los distintos puntos tratados, que quedarán reflejados en los criterios de aceptación y que permitirán validar cuando una historia de usuario está terminada.
          .row.justify-content-center.mb-5
            .col-lg-10
              .p-4.bg-c10(data-aos="fade-left")
                p #[b Confirmación de los criterios de aceptación]
                p Los criterios de aceptación, es decir, la confirmación. Se trata de criterios claros y específicos que todo el equipo debe comprender y que permitirán avaluar en el futuro si la implementación que se está desarrollando o las pruebas que se realicen están terminadas.
                p.mb-0 A continuación, un ejemplo de una historia de usuario usando plantilla.
          .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
            p.mb-0 #[b Figura 6.] Ejemplos de historias de usuario
          .row
            .col-12
              .p-4.bg-c16(data-aos="fade-down")
                figure
                  img(src='@/assets/curso/tema1/img27.png', alt='').m-auto
    .row.mb-5(data-aos="fade-right")
      .col-auto
        a.anexo(:href="obtenerLink('/downloads/anexo4.xls')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-xls.svg")
          .anexo__texto
            p Anexo. Ejemplos de historias de usuario
    .row.mb-5(data-aos="fade-down")
      .col-auto.bg-c4
        .px-3.pb-0
          .row.align-items-end
            .col-auto.px-0
              figure.fig-p2
                img(src='@/assets/curso/tema1/img4.svg', style="width:50px" alt='').m-auto
            .col
              h3 #[i Storyboard]
    .row.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p #[b ¿Qué es un #[i Storyboard?]]
        p Los #[i storyboards] son un tipo de prototipos muy utilizados, consiste básicamente en ir mostrando en una secuencia de imágenes un proceso, acción o ejercicio que se puede realizar en el sistema una vez terminado, las imágenes van mostrando la evolución del sistema conforme el usuario interactúa con el sistema.
        hr
        p Con esta técnica se pretende crear diferentes vistas del sistema en las primeras etapas de su implementación de la manera más rápida y barata posible [SUT02].
        p.mb-0 Una forma muy común de ejemplificar los #[i storyboards] es con las revistas de cómics, ya que van mostrando una secuencia de imágenes en cuadros con un orden establecido que permiten entender la línea de la historia contada. La técnica #[i storyboard] permite generar modelos o esquemas visuales como esbozos de interfaces gráficas de usuario (GUI).
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img28.png', style="width:450px" alt='').m-auto
    p.mb-5(data-aos="fade-right") A continuación, se detallan las principales características de los #[i storyboards]:
    .row.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        .row
          .col-12
            .p-4.bg-c5
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 Se preserva el punto de vista del proceso del negocio.
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 Se puede validar un escenario.
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 Se pueden validar escenarios integradores logrando una visión global.
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 Son más fáciles de comprender por el usuario.
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 No genera falsas expectativas.
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 El usuario sigue trabajando con herramientas conocidas.
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 Son fáciles de mantener o adaptar a los cambios.
                li.d-flex
                  i.fas.fa-circle(style="color: #1682FB")
                  |
                  p.mb-0 Permiten incorporar modificaciones durante la validación.
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img29.png', style="width:450px" alt='').m-auto
    p.mb-5(data-aos="fade-right") Las dos figuras siguientes muestran el ejemplo de un #[i storyboard] que representa un escenario de situación de vendedores de una empresa para explicar el cambio que sufrirá el trabajo, el primero representa la situación actual y el segundo como quedará con la implantación del sistema.
    .row
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .p-2
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 7.] Escenario representado en formato de storyboard que representa una situación típica tal y como se realiza actualmente
          figure
            img(src='@/assets/curso/tema1/img30.png', style="width:580px" alt='').m-auto
            figcaption.mt-2 Nota: Tomado de Granollers, Lorés y Perdrix (2002)
      .col-lg-6(data-aos="fade-left")
        .p-2
          .titulo-sexto.color-acento-contenido.mb-4
            p.mb-0 #[b Figura 8.] Escenario representado en formato de storyboard que representa la misma situación anterior tal como quedará con la implementación del sistema
          figure
            img(src='@/assets/curso/tema1/img31.png', style="width:578px" alt='').m-auto
            figcaption Nota: Tomado de Granollers, Lorés y Perdrix (2002)
    Separador
    #t_1_4
    .titulo-segundo.color-acento-contenido
      h2 1.4. Herramientas de modelado
    .row.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img32.png', style="width:348px" alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Las herramientas de modelado de sistemas informáticos se emplean para la creación de modelos de sistemas que ya existen o que se desarrollarán; estas herramientas permiten crear un "simulacro" del sistema, a bajo coste y riesgo mínimo. #[b A bajo costo porque, es un conjunto de gráficos y textos que representan el sistema.]
        p.mb-0 El Lenguaje Unificado de Modelado (UML, por sus siglas en inglés, Unified Modeling Language) #[b es el lenguaje de modelado de sistemas de software más conocido y utilizado en la actualidad]; UML es un lenguaje gráfico que permite especificar, modelar, construir y documentar los elementos que forman un sistema software.
    p(data-aos="fade-right") De otra parte, las herramientas CASE son un conjunto de programas y procesos “guiados”, que ayudan a los analistas, desarrolladores, ingenieros de software y diseñadores en una o todas las etapas que comprende un ciclo de vida, con el objetivo de facilitar el desarrollo de software. El objetivo general de estas herramientas es acelerar el proceso para el que han sido diseñadas, es decir, para automatizar o apoyar una o más fases del ciclo de vida del desarrollo de sistemas. CASE proporciona un conjunto de herramientas semiautomatizadas y automatizadas que están creando una nueva cultura de ingeniería en muchas empresas. Las herramientas CASE se diseñaron para aumentar la productividad en el desarrollo de software y reducir su costo.
    p.mb-5(data-aos="fade-right") Existen muchas herramientas para modelado tanto en libres como con derechos comerciales; a renglón seguido se listan las herramientas CASE más utilizadas:
    .row.justify-content-center(data-aos="fade-right")
      .col-4.col-lg.m-1
        figure.mb-3
          img(src='@/assets/curso/tema1/img33.png', style="width:190px" alt='').m-auto
        p.text-center.mb-0 ER win
      .col-4.col-lg.m-1
        figure.mb-3
          img(src='@/assets/curso/tema1/img34.png', style="width:190px" alt='').m-auto
        p.text-center.mb-0 ArgoUML
      .col-4.col-lg.m-1
        figure.mb-3
          img(src='@/assets/curso/tema1/img35.png', style="width:190px" alt='').m-auto
        p.text-center.mb-0 Easy Case
      .col-4.col-lg.m-1
        figure.mb-3
          img(src='@/assets/curso/tema1/img36.png', style="width:190px" alt='').m-auto
        p.text-center.mb-0 Oracle Designer
      .col-4.col-lg.m-1
        figure.mb-3
          img(src='@/assets/curso/tema1/img37.png', style="width:190px" alt='').m-auto
        p.text-center.mb-0 Power Designer
      .col-4.col-lg.m-1
        figure.mb-3
          img(src='@/assets/curso/tema1/img38.png', style="width:190px" alt='').m-auto
        p.text-center.mb-0 System Architect
    .row.justify-content-center(data-aos="fade-left")
      .col-4.col-lg.m-1
        figure.mb-3
          img(src='@/assets/curso/tema1/img39.png', style="width:190px" alt='').m-auto
        p.text-center.mb-0 SNAP
      .col-4.col-lg.m-1
        figure.mb-3
          img(src='@/assets/curso/tema1/img40.png', style="width:190px" alt='').m-auto
        p.text-center.mb-0 Gliffy
      .col-4.col-lg.m-1
        figure.mb-3
          img(src='@/assets/curso/tema1/img41.png', style="width:190px" alt='').m-auto
        p.text-center.mb-0 MagicDraw
      .col-4.col-lg.m-1
        figure.mb-3
          img(src='@/assets/curso/tema1/img42.png', style="width:190px" alt='').m-auto
        p.text-center.mb-0 Lucidchart
      .col-4.col-lg.m-1
        figure.mb-3
          img(src='@/assets/curso/tema1/img43.png', style="width:190px" alt='').m-auto
        p.text-center.mb-0 Papyrus Uml
      .col-4.col-lg.m-1
        figure.mb-3
          img(src='@/assets/curso/tema1/img44.png', style="width:190px" alt='').m-auto
        p.text-center.mb-0 Modelio
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-4.col-lg-auto.m-1
        figure.mb-3
          img(src='@/assets/curso/tema1/img45.png', style="width:190px" alt='').m-auto
        p.text-center.mb-0 StarUml
      .col-4.col-lg-auto.m-1
        figure.mb-3
          img(src='@/assets/curso/tema1/img46.png', style="width:190px" alt='').m-auto
        p.text-center.mb-0 Dia
      .col-4.col-lg-auto.m-1
        figure.mb-3
          img(src='@/assets/curso/tema1/img47.png', style="width:190px" alt='').m-auto
        p.text-center.mb-0 Mono Uml
    p.mb-5(data-aos="fade-right") A continuación, se realizará una descripción del top 5 de las más utilizadas.
    .row.justify-content-center
      .col-lg-10
        TabsC.color-acento-botones(data-aos="fade-left")
          .py-3.py-md-4(titulo="Gliffy")
            .row
              .col-lg-2.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img48.png', style="width:190px" alt='').m-auto
              .col-lg-10
                p La aplicación en línea Gliffy es una herramienta de diagramas UML basada en la nube. Apareció por primera vez en 2006 y se trata de una herramienta de modelado que crea todo tipo de diagramas, tales como diagramas de flujo, diagramas de Venn y, por supuesto, diagramas UML. La herramienta en línea fue escrita en HTML5 y es bastante popular gracias a su rapidez de reacción. Es de anotar que antes de que Gliffy pasara por la fase beta en 2007, la empresa homónima cooperó con el grupo de software australiano Atlassian. Ya en 2006, su software de colaboración Confluence integró un plugin de Gliffy y, más tarde, el equipo de Gliffy desarrolló un plugin para Jira. Google Workspace y Drive de Google también integran esta herramienta UML.
          .py-3.py-md-4(titulo="ArgoUML")
            .row
              .col-lg-2.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img49.png', style="width:120px" alt='').m-auto
              .col-lg-10
                p Ha sido durante mucho tiempo una de las herramientas UML gratuitas de código abierto más populares para el escritorio y aunque ya no se mantiene, muchos modeladores continúan usando el programa para tareas más pequeñas. Su software es multiplataforma, cuyo el requisito mínimo es Java 5 ArgoUML soporta todos los tipos de diagramas de la versión 1.4 de UML y perfiles UML. El programa también ofrece algunas formas decorativas que no forman parte del estándar UML.
                p.mb-0 Además, aunque esta herramienta UML está disponible como descarga gratuita, ArgoUML soporta una amplia gama de lenguajes de programación cuyo código puede generarse a partir de un diagrama. La ingeniería inversa también es posible para Java, C++, PHP, C# y SQL. El programa reconoce otros idiomas como Delphi o Ruby cuando los agrega como extensiones a la carpeta de archivos ArgoULM.
          .py-3.py-md-4(titulo="MagicDraw")
            .row
              .col-lg-2.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img50.png', style="width:140px" alt='').m-auto
              .col-lg-10
                p Esta aplicación de escritorio destaca por su diseño moderno y claro, así como por su variedad de funciones y la facilidad de su uso. Esta herramienta de diagramas UML ofrece además SysML, representación gráfica de procesos de negocio con BPMN (Business Process Model and Notation) y el marco de arquitectura UPDM (United Profile for DoDAF/MODAF).
                p.mb-0 MagicDraw también ofrece lenguaje de especificación OCL (Object Constraint Language), y XMI, que puede usar para exportar diagramas a otros programas sin pérdidas de información.
          .py-3.py-md-4(titulo="StarUML")
            .row
              .col-lg-2.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img51.png', style="width:120px" alt='').m-auto
              .col-lg-10
                p Es una herramienta para el modelamiento de software basado en los estándares UML (Unified Modeling Language) y MDA (Model Driven Arquitecture).
                p Da soporte completo al diseño UML mediante el uso de:
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 Diagrama de casos de uso.
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 Diagrama de clase.
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 Diagrama de secuencia.
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 Diagrama de colaboración.
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 Diagrama de estados.
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 Diagrama de actividad.
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 Diagrama de componentes.
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 Diagrama de despliegue.
                  li.d-flex
                    i.fas.fa-circle(style="color: #1682FB")
                    |
                    p.mb-0 Diagrama de composición estructural (UML 2.0).
          .py-3.py-md-4(titulo="Lucidchart")
            .row
              .col-lg-2.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img52.png', style="width:140px" alt='').m-auto
              .col-lg-10
                p Herramienta para hacer diagramas UML online que permite comprender las complejidades en el código de forma más rápida y sencilla, pues automatiza el proceso de generación de un diagrama de clases. Simplemente elabora y personaliza los diagramas de secuencia en línea a partir del texto. Al ingresar el marcado en el diálogo emergente, Lucidchart generará automáticamente un diagrama de secuencia que cumple el estándar de PlantUML.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
