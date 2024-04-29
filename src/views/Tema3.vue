<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Herramientas para la gestión de requisitos
    p(data-aos="fade-right") En la actualidad, existe una variedad de herramientas para ser utilizadas específicamente en la gestión de requisitos, la utilización de estas ayuda a mejorar la calidad del desarrollo de un proyecto y permite un mayor control en el mantenimiento, previniendo posibles errores durante la ejecución del proyecto (Sevilla, 2021).
    .row
      .col-lg-6.order-2.order-lg-1(data-aos="fade-right")
        p.mb-0 Las herramientas de gestión de requisitos variarán según las metodologías de proyecto y los objetivos, la manera en la cual se aborden los requisitos también dependerá según la metodología. Por ejemplo, algunos equipos usan otra palabra para requisitos como #[b “historias de usuarios”], #[b “requisitos de productos”] o, simplemente, #[b “características”].
      .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img1.png', style="width:550px" alt='').m-auto
    .row.bg-c9
      .col-12
        .p-5
          p.mb-5(data-aos="fade-right") Existen herramientas básicas de requerimientos y herramientas complejas, las cuales se explican a continuación:
          .row.justify-content-center.mb-5
            .col-md-9.col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
              .p-5.bg-c10
                figure.mb-4
                  img(src='@/assets/curso/tema3/img1.svg', style="width:70px" alt='')
                .row
                  .col-auto
                    p.txt-c2 #[b Herramientas básicas]
                p Se manejan en la planeación de gestión de requisitos muy básica y se pueden utilizar las hojas de cálculo, o una plantilla de documento en Word; es difícil su utilización cuando se trata de actualización con varias personas y el manejo de las versiones de los documentos.
            .col-md-9.col-lg-6(data-aos="fade-left")
              .p-5.bg-c10
                figure.mb-4
                  img(src='@/assets/curso/tema3/img2.svg', style="width:70px" alt='')
                .row
                  .col-auto
                    p.txt-c2 #[b Herramientas complejas]
                p Para una planificación de gestión de requisitos más compleja, se necesita un sistema de #[i software] completo para administrar las relaciones entre los requisitos, analizar el impacto de cualquier cambio, administrar las aprobaciones y demás aspectos.
          p.mb-5(data-aos="fade-left") De acuerdo con el mismo autor, las herramientas de gestión de requisitos se caracterizan por las siguientes propiedades:
          .row.justify-content-center
            .col-lg-10
              .p-5.bg-c4.shadow-lg
                .row.align-items-center
                  .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
                    figure
                      img(src='@/assets/curso/tema3/img3.png', style="width:350px" alt='').m-auto
                  .col-lg-7(data-aos="fade-left")
                    ul.lista-ul.mb-0
                      li.d-flex
                        i.fas.fa-circle(style="color:#3EE2A8")
                        |
                        p.mb-0 Gestión de requisitos basados en modelos de información como por ejemplo casos de uso o historias de usuario.
                      li.d-flex
                        i.fas.fa-circle(style="color:#3EE2A8")
                        |
                        p.mb-0 #[b Organización de requisitos:] es fácil agrupar el conjunto de requisitos y determinar su orden.
                      li.d-flex
                        i.fas.fa-circle(style="color:#3EE2A8")
                        |
                        p.mb-0 #[b Acceso y gestión multiusuario:] múltiples personas pueden participar en los procesos de construcción o modificación de requisitos.
                      li.d-flex
                        i.fas.fa-circle(style="color:#3EE2A8")
                        |
                        p.mb-0 #[b Gestión de la trazabilidad:] se puede ver a nivel histórico los cambios realizados en los requisitos con su marca de tiempo y usuarios involucrados.
    p.mb-5(data-aos="fade-right") #[b Las siguientes herramientas principalmente ayudan a documentar, analizar, buscar, priorizar y trazar los requisitos:]
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          p.mb-0 #[b Tabla 2.] Herramientas de gestión de requisitos
        .tabla-a.color-acento-botones(data-aos="fade-left")
          table
            caption Nota: Tomada de Sevilla (2021).
            thead
              tr
                th.text-white(style="width:30%") #[i Requirements Management Tool]
                th.text-white(style="width:20%") #[i Company]
                th.text-white #[i URL]
            tbody.bg-white
              tr
                td #[i IBM Rational DOORS]
                td #[i IBM Rational DOORS]
                td
                  a(href="https://www.ibm.com/products/requirements-management?mhsrc=ibmsearch_a&mhq=rational%20doors" target="_blank") https://www.ibm.com/products/requirements-management?mhsrc=ibmsearch_a&mhq=rational%20doors
              tr
                td #[i Visure Requirements]
                td #[i Visure Solutions]
                td
                  a(href="https://visuresolutions.com/es/" target="_blank") https://visuresolutions.com/es/
              tr
                td #[i Reqtify]
                td #[i Dassault Systèmes]
                td
                  a(href="https://www.3ds.com/products/catia/reqtify" target="_blank") https://www.3ds.com/products/catia/reqtify
              tr
                td #[i Jama]
                td #[i Jama Software]
                td
                  a(href="https://www.jamasoftware.com/" target="_blank") https://www.jamasoftware.com/
              tr
                td #[i Accept 360]
                td #[i Accept Software]
                td
                  a(href="https://www.acceptmission.com/es/" target="_blank") https://www.acceptmission.com/es/
              tr
                td #[i RequisitePro]
                td #[i IBM Rational]
                td
                  a(href="https://visuresolutions.com/es/rational-requisitepro/" target="_blank") https://visuresolutions.com/es/rational-requisitepro/
    .row.mb-5(data-aos="fade-down")
      .col-auto.d-none.d-md-block
        figure.mt-1
          img(src='@/assets/curso/tema3/img4.svg', style="width:70px" alt='').m-auto
      .col
        p #[b.txt-c3 La norma ISO 24766 (#[i Information Technology - Guide for Requirements Tool Capabilites])] ayuda a seleccionar una herramienta adecuada de gestión de requisitos, pues la misma proporciona una orientación sobre los aportes de estas herramientas.
        p.mb-0 Aparte de las herramientas nombradas anteriormente, existen otras entre las que se encuentran las libres y comerciales; a continuación, se indican las más conocidas.
    TabsB.color-primario(data-aos="fade-left")
      .py-4.py-md-5(titulo="Herramientas comerciales" :icono="require('@/assets/curso/tema3/img5.svg')")
        .row.justify-content-center
          .col-11
            p.mb-5 Actualmente, se usan distintas herramientas de uso comercial que cubren las necesidades elementales en la gestión de requisitos. Algunas de estas son:
            .row.justify-content-center
              .col-md-10.col-lg-4.bg-c11
                .row
                  .col-12
                    .p-4
                      figure
                        img(src='@/assets/curso/tema3/img4.png', style="width:250px" alt='').m-auto
                  .col-12
                    .p-4
                      p Aplicación de gestión de requisitos para optimizar la comunicación la colaboración y la verificación de requisitos.
              .col-md-10.col-lg-4.bg-c11
                .row
                  .col-12
                    .p-4
                      figure
                        img(src='@/assets/curso/tema3/img5.png', style="width:250px" alt='').m-auto
                  .col-12
                    .p-4
                      p Herramienta de administración de requisitos que permite crear y compartir basado en documentos potenciados.
              .col-md-10.col-lg-4.bg-c11
                .row
                  .col-12
                    .p-4
                      figure
                        img(src='@/assets/curso/tema3/img6.png', style="width:250px" alt='').m-auto
                  .col-12
                    .p-4
                      p Herramienta de administración de requisitos que permite visibilidad y control.
      .py-4.py-md-5(titulo="Herramientas comerciales" :icono="require('@/assets/curso/tema3/img5.svg')")
        .row.justify-content-center
          .col-11
            p.mb-5 También existen herramientas de uso libre para realizar las actividades pertinentes a la gestión de requisitos. Algunas son:
            .row.justify-content-center
              .col-md-10.col-lg-4.bg-c11
                .row
                  .col-12
                    .p-4
                      figure
                        img(src='@/assets/curso/tema3/img7.png', style="width:250px" alt='').m-auto
                  .col-12
                    .p-4
                      p Herramienta de requisitos automatizada.
              .col-md-10.col-lg-4.bg-c11
                .row
                  .col-12
                    .p-4
                      figure
                        img(src='@/assets/curso/tema3/img8.png', style="width:250px" alt='').m-auto
                  .col-12
                    .p-4
                      p Totalmente desarrollada para la elicitación de requisitos.
              .col-md-10.col-lg-4.bg-c11
                .row
                  .col-12
                    .p-4
                      figure
                        img(src='@/assets/curso/tema3/img9.png', style="width:250px" alt='').m-auto
                  .col-12
                    .p-4
                      p Permite la descripción avanzada de diversos tipos de requisitos y garantiza la trazabilidad entre todos los documentos relacionados con la ingeniería de requisitos (funcionalidades, requisitos, casos de uso, casos de prueba).

</template>

<script>
export default {
  name: 'Tema3',
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
