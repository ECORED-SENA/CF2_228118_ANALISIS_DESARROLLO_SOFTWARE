<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Herramientas para la gestión de requisitos
    p En la actualidad, existe una variedad de herramientas para ser utilizadas específicamente en la gestión de requisitos, la utilización de estas ayuda a mejorar la calidad del desarrollo de un proyecto y permite un mayor control en el mantenimiento, previniendo posibles errores durante la ejecución del proyecto (Sevilla, 2021).
    .row.mb-5
      .col-lg-6.order-2.order-lg-1
        p.mb-0 Las herramientas de gestión de requisitos variarán según las metodologías de proyecto y los objetivos, la manera en la cual se aborden los requisitos también dependerá según la metodología. Por ejemplo, algunos equipos usan otra palabra para requisitos como #[b “historias de usuarios”], #[b “requisitos de productos”] o, simplemente, #[b “características”].
      .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/tema3/img1.png', style="width:550px" alt='').m-auto

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
