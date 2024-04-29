<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1  Introducción
    .row.mb-4
      .col-12(data-aos="fade-right")
        .p-4.bg-c1
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/intro/img1.png', style="width:70px" alt='').m-auto
            .col
              p.mb-0 En este componente formativo se exploran técnicas esenciales de validación de requisitos, como las revisiones, la creación de prototipos y la elaboración de casos de prueba, enfocándose en su aplicación práctica para asegurar que los requisitos cumplan con las necesidades y expectativas de las partes interesadas. Además, se distingue entre los requerimientos duraderos, aquellos que permanecen estables a lo largo del tiempo, y los volátiles, que son susceptibles a cambios debido a variaciones en el entorno de mercado, tecnológico o de la propia organización.
    .row.align-items-center
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p La aplicación de revisiones permite un análisis detallado de los requisitos por parte de un equipo, identificando posibles errores o ambigüedades en una fase temprana. Los prototipos ofrecen una visión tangible de cómo será el sistema o producto, facilitando la detección de malentendidos o expectativas no alineadas entre los desarrolladores y las partes interesadas. Los casos de prueba, por su parte, verifican que los requisitos se implementen correctamente, contribuyendo a una evaluación objetiva de la funcionalidad esperada.
        .row.mb-3
          .col-12
            .p-4.bg-c2
              p.mb-0 Este componente formativo se diseñó para fortalecer las habilidades en el desarrollo y validación de requisitos, con un enfoque práctico que prepara a los profesionales para enfrentar los desafíos de la ingeniería de requisitos en entornos dinámicos y complejos.
        p.mb-0 #[b ¡Les deseamos éxitos en su proceso de aprendizaje y aplicación de estas técnicas fundamentales!]
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img2.png', style="width:480px" alt='').m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
