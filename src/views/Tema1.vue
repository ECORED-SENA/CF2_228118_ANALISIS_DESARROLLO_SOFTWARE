<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Validación de requerimientos
    p.mb-4(data-aos="fade-right") La validación de los requerimientos busca ratificar que los requerimientos realmente están especificando lo que el cliente desea y necesita. Este proceso es muy importante, pues un error en un documento de requerimientos puede ocasionar el desgaste importante de muchos recursos si estos errores son detectados en etapas más avanzadas del proyecto como diseño, construcción o despliegue a producción. Los costos asociados para el arreglo de problemas en los requerimientos siempre van a ser menores que en otras etapas, ya que un error en los requerimientos se propaga en cascada en todas las fases subsiguientes del ciclo de vida.
    .row.mb-4
      .col-12
        .p-4.bg-c3
          .row
            .col-12
              .p-4.bg-c4
                p.mb-4(data-aos="fade-right") #[b Según Sommerville (2011), en el proceso de validación de requerimientos se llevan a cabo las siguientes verificaciones:]
                .row.algin-items-center
                  .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
                    figure
                      img(src='@/assets/curso/tema1/img1.svg', style="width:380px" alt='').m-auto
                  .col-lg-8(data-aos="fade-left")
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-circle(style="color:#3EE2A8")
                        |
                        p.mb-0 #[b Verificación de validez:] los requerimientos son razonables e identifican realmente todas las funciones necesarias para cumplir con las necesidades del cliente.
                      li.d-flex
                        i.fas.fa-circle(style="color:#3EE2A8")
                        |
                        p.mb-0 #[b Verificación de consistencia:] los requerimientos no presentan contradicciones.
                      li.d-flex
                        i.fas.fa-circle(style="color:#3EE2A8")
                        |
                        p.mb-0 #[b Verificaciones de completitud:] se incluyen todas las funcionalidades y restricciones definidas por los usuarios del sistema.
                      li.d-flex
                        i.fas.fa-circle(style="color:#3EE2A8")
                        |
                        p.mb-0 #[b Verificaciones de realismo:] los requerimientos son realizables de acuerdo con la tecnología existente, el presupuesto y los tiempos definidos.
                      li.d-flex
                        i.fas.fa-circle(style="color:#3EE2A8")
                        |
                        p.mb-0 #[b Verificabilidad:] es posible demostrar la realización de cada requerimiento y que hace lo que debe hacer. Es decir, existe una forma clara en la que se le pueda realizar pruebas.
    p.mb-0(data-aos="fade-right") #[b Existen varias técnicas que pueden usarse para la validación de requisitos, como se puede revisar a continuación.]
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 Revisiones de requerimientos
    .row.mb-4
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p Las revisiones de los requerimientos son un proceso manual que involucra la participación de personas de parte de la organización constructora del #[i software] así como la de los clientes. Por lo general, en este proceso se revisa el documento de requerimientos tratando de encontrar alguna anomalía y/u omisiones en la escritura de estos.
        .row
          .col-12
            .p-4.bg-c2
              .row
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema1/img2.svg', style="width:80px" alt='').m-auto
                .col
                  p.mb-0 Esta revisión se puede realizar de manera informal o formal (Sommerville, 2011). En una revisión informal, se requiere verificar, con tantos #[i stakeholders] como sea posible, el documento generado para recibir confirmación por parte de ellos de que lo escrito sí refleja su deseo. Esta revisión informal permite, de manera muy sencilla, detectar muchos problemas antes de establecer cualquier formalismo de revisión.
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img1.png', style="width:480px" alt='').m-auto
    .row
      .col-12
        .p-4.bg-c5
          p.mb-4(data-aos="fade-right") En una revisión formal, el equipo de desarrollo debe introducir al cliente por cada uno de los requerimientos establecidos y explicando cada una de sus implicaciones. El equipo encargado de la revisión deberá verificar cada requerimiento de forma individual y realizar el análisis de conjunto. #[b Además, en el proceso de verificación debe resolverse cada una de las siguientes preguntas:]
          .row.mb-5
            .col-md-auto.mb-4.mb-md-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img3.svg', style="width:80px" alt='').m-auto
            .col(data-aos="fade-left")
              p.mb-2 #[b Verificabilidad:] ¿Es posible probar este requerimiento en la realidad?
              p.mb-2 #[b Comprensibilidad:] ¿Es claro lo que expresa este requerimiento para las personas que lo van a usar?
              p.mb-2 #[b Rastreabilidad:] ¿Es posible observar el origen del requerimiento y también evaluar los cambios que pueden generar en el sistema?
              p.mb-2 #[b Adaptabilidad:] ¿El cambio en el requerimiento impacta o no a gran escala sobre otros requerimientos?
          .row.justify-content-center
            .col-lg-10
              .tarjeta.color-primario.p-3(data-aos="fade-down")
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-1
                    img(src="@/assets/curso/tema1/img4.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.txt-c1.mb-1 Infografía - Validación de requerimientos
                        p.text-small La validación de los requerimientos busca ratificar que los requerimientos realmente están especificando lo que el cliente desea y necesita. 
                      .col-sm-auto
                        a.boton.color-acento-botones(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2 Construcción de prototipos
    p.mb-5(data-aos="fade-right") Haga un chequeo del siguiente video para adentrarse en las generalidades y aspectos clave de la construcción de prototipos:
    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/yxspMjOBP8Y?si=L2wfFhngGum26ltm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Construcción de prototipos
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.bg-c3(data-aos="fade-down")
          .row
            .col-md-auto.mb-4mb-md-0
              figure
                img(src='@/assets/curso/tema1/img6.svg', style="width:80px" alt='').m-auto
            .col
              p #[b Por otra parte, el uso inadecuado de los prototipos también puede generar algunos riesgos, entre los que se encuentran:]
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-circle(style="color:#3EE2A8")
                  |
                  p.mb-0 El prototipado puede estimular un número excesivo de cambios de peticiones.
                li.d-flex
                  i.fas.fa-circle(style="color:#3EE2A8")
                  |
                  p.mb-0 Los prototipos operativos pueden inducir a pensar a la directiva y a los clientes que el producto final está prácticamente dispuesto para su salida al mercado.
                li.d-flex
                  i.fas.fa-circle(style="color:#3EE2A8")
                  |
                  p.mb-0 Los prototipos pueden encarecer el producto.
    .row.mb-5
      .col-12
        .p-4.bg-c3
          .row
            .col-12
              .p-4.bg-c4
                .row
                  .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
                    figure
                      img(src='@/assets/curso/tema1/img7.svg', style="width:350px" alt='').m-auto
                  .col-lg-8(data-aos="fade-left")
                    p Para la fase de verificación de requisitos se recomienda el uso de prototipos de baja fidelidad (presentación de escenarios con maquetas estáticas) y de tipo exploratorio (prototipos no reutilizables, usados únicamente para la clarificación e identificación de requerimientos).
                    p.mb-0 Aunque un prototipo podría ser una sencilla representación gráfica del sistema en papel o la representación de interfaces del sistema usando herramientas de ofimática, existen varias herramientas gratuitas y de pago que facilitan la construcción de prototipos, algunas de ellas solo requieren un registro de correo electrónico para acceder a sus funcionalidades directamente desde el navegador, y otras requieren la descarga e instalación en el equipo donde se planean construir los prototipos.
    p.mb-5 #[b Algunas herramientas recomendadas son las siguientes:]
    .row.justify-content-center.text-center
      .col-xl-10.mb-4
        .row.justify-content-center.mb-0.mb-lg-4(data-aos="fade-right")
          .col-8.col-md-6.col-lg-3.mb-4.mb-lg-0
            .p-4.bg-c6.h-100
              figure.mb-3
                img(src='@/assets/curso/tema1/img2.png', style="width:80px" alt='').m-auto
              p.text-center.mb-0 #[b Adobe XD]
              .row.justify-content-center
                .col-auto
                  a(href="https://helpx.adobe.com/es/xd/get-started.html" target="_blank") www.adobe.com
          .col-8.col-md-6.col-lg-3.mb-4.mb-lg-0
            .p-4.bg-c6.h-100
              figure.mb-3
                img(src='@/assets/curso/tema1/img3.png', style="width:80px" alt='').m-auto
              p.text-center.mb-0 #[b Marvel App]
              .row.justify-content-center
                .col-auto
                  a(href="https://www.marvelapp.com" target="_blank") www.marvelapp.com
          .col-8.col-md-6.col-lg-3.mb-4.mb-lg-0
            .p-4.bg-c6.h-100
              figure.mb-3
                img(src='@/assets/curso/tema1/img4.png', style="width:80px" alt='').m-auto
              p.text-center.mb-0 #[b Moquos]
              .row.justify-content-center
                .col-auto
                  a(href="https://www.moqups.com" target="_blank") www.moqups.com
          .col-8.col-md-6.col-lg-3.mb-4.mb-lg-0
            .p-4.bg-c6.h-100
              figure.mb-3
                img(src='@/assets/curso/tema1/img5.png', style="width:80px" alt='').m-auto
              p.text-center.mb-0 #[b LucidChart]
              .row.justify-content-center
                .col-auto
                  a(href="https://www.lucidchart.com/pages/" target="_blank") www.lucidchart.com/pages
        .row.justify-content-center(data-aos="fade-left")
          .col-8.col-md-6.col-lg-3.mb-4.mb-lg-0
            .p-4.bg-c6.h-100
              figure.mb-3
                img(src='@/assets/curso/tema1/img6.png', style="width:80px" alt='').m-auto
              p.text-center.mb-0 #[b Proto.io]
              .row.justify-content-center
                .col-auto
                  a(href="https://www.proto.io" target="_blank") www.proto.io
          .col-8.col-md-6.col-lg-3.mb-4.mb-lg-0
            .p-4.bg-c6.h-100
              figure.mb-3
                img(src='@/assets/curso/tema1/img7.png', style="width:80px" alt='').m-auto
              p.text-center.mb-0 #[b Balsamiq]
              .row.justify-content-center
                .col-auto
                  a(href="https://www.balsamiq.com" target="_blank") www.balsamiq.com
          .col-8.col-md-6.col-lg-3.mb-4.mb-lg-0
            .p-4.bg-c6.h-100
              figure.mb-3
                img(src='@/assets/curso/tema1/img8.png', style="width:80px" alt='').m-auto
              p.text-center.mb-0 #[b Wirify]
              .row.justify-content-center
                .col-auto
                  a(href="https://www.wirify.com" target="_blank") www.wirify.com
          .col-8.col-md-6.col-lg-3.mb-4.mb-lg-0
            .p-4.bg-c6.h-100
              figure.mb-3
                img(src='@/assets/curso/tema1/img9.png', style="width:80px" alt='').m-auto
              p.text-center.mb-0 #[b Pidoco]
              .row.justify-content-center
                .col-auto
                  a(href="https://www.pidoco.com/en" target="_blank") www.pidoco.com/en
    Separador
    #t_1_3
    .titulo-segundo.color-acento-contenido
      h2 1.3 Generación de casos de prueba
    .row.bg-c7
      .col-12
        .px-5
          p(data-aos="fade-right") Desarrollar pruebas para los requerimientos permite evidenciar problemas antes de escribir cualquier línea de código. Normalmente, si es complejo construir un caso de prueba para un requerimiento esto es un indicio de que el requerimiento, puede ser difícil de implementar, por lo que debería considerarse.
          .row.align-items-center.mb-5
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p La validación de requisitos por casos de prueba requiere el desarrollo de cuatro fases: i) planeación de la prueba. Aquí se define la estrategia a utilizar, el alcance de la prueba a realizar y los tiempos requeridos para el desarrollo de la prueba; ii) diseño de los casos de prueba; iii) ejecución de los casos de prueba y iv) elaboración del informe final de la prueba donde se describen los aspectos más importantes y hallazgos de la ejecución de la prueba.
              p De otra parte, el diseño de un caso de prueba requiere: i) la construcción de un instrumento donde se debe detallar para cada requerimiento si existen precondiciones, es decir, si se requieren de actividades o valores previos para poder iniciar la ejecución del requerimiento; ii) identificar los pasos a seguir para la validación de un requisito y iii) los resultados esperados de la realización de cada paso.
              p.mb-0 #[b La siguiente es la estructura que lleva el instrumento de registro de caso de prueba:]
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img10.png', style="width:350px" alt='').m-auto
          .row.justify-content-center
            .col-lg-8
              .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
                p.mb-0 #[b Tabla 1.] Formato de caso de prueba
              .tabla-a.color-acento-botones.mb-5(data-aos="fade-left")
                table
                  thead
                    tr
                      th(colspan="2").text-white Formato de caso de prueba
                  tbody.bg-white
                    tr
                      td(colspan="2") Objetivo del caso de prueba
                    tr
                      td(colspan="2") Identificador
                    tr
                      td(colspan="2") Nombre o identificador del requerimiento
                    tr
                      td(colspan="2") Precondiciones
                    tr
                      td #[b Pasos]
                      td #[b Resultados esperados]
                    tr
                      td 1
                      td 1
                    tr
                      td 2
                      td 2
                    tr
                      td 3
                      td 3

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
