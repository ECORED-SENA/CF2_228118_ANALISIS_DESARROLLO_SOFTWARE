<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Requerimientos duraderos y volátiles
    p(data-aos="fade-right") Los requerimientos de un proyecto inevitablemente sufren variaciones en el tiempo y puede ser por varios motivos, entre los que se podrían destacar cambios en las políticas gubernamentales, sociales, económicas o, sencillamente, por solicitudes de los clientes.
    p.mb-5(data-aos="fade-left") #[b Según Sommerville (2011), dependiendo de la perspectiva evolutiva de los requerimientos, estos se pueden clasificar en dos grupos:]
    .row.justify-content-center.mb-5
      .col-md-10.col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.p-lg-5.bg-c8.h-100
          figure.mb-3
            img(src='@/assets/curso/tema2/img1.svg', style="width:350px" alt='').m-auto
          p #[b Requerimientos duraderos:]
          p.mb-0 Son relativamente estables y normalmente se derivan de las actividades principales de la organización y están directamente relacionados con el dominio del sistema. Por ejemplo, en un sistema académico los requerimientos relacionados con la gestión de estudiantes, profesores y grupos hacen parte del dominio y, seguramente, el modelo de negocio asociado a estos requerimientos no va a cambiar mucho en el tiempo.
      .col-md-10.col-lg-6(data-aos="fade-left")
        .p-4.p-lg-5.bg-c8
          figure.mb-3
            img(src='@/assets/curso/tema2/img2.svg', style="width:350px" alt='').m-auto
          p #[b Requerimientos volátiles:]
          p.mb-0 Son los que, muy probablemente, cambian durante el proceso del desarrollo del sistema o después que este entra en funcionamiento. Por ejemplo, en un sistema académico un requerimiento asociado al proceso de pago de pensión podría definirse de forma manual en un principio; es decir, la secretaria una vez reciba el dinero o los recibos de pago registra el pago en el sistema, más adelante si la institución educativa adquiere un servicio de pasarela de pagos en línea el requerimiento podría modificarse totalmente.
    .row
      .col-12(data-aos="fade-right")
        .p-4.bg-c6
          .row
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema2/img4.svg', style="width:90px" alt='').m-auto
            .col
              p #[b Los requerimientos volátiles según Sommerville (2011) se clasifican en:]
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-circle(style="color:#273A89")
                  |
                  p.mb-0 #[b Requerimientos cambiantes:] cambian de acuerdo con el entorno, por ejemplo: una pandemia.
                li.d-flex
                  i.fas.fa-circle(style="color:#273A89")
                  |
                  p.mb-0 #[b Requerimientos emergentes:] surgen como producto de un mejor entendimiento del sistema, por ejemplo, al estructurar el diseño de las interfaces del sistema puede ser que se requieran adicionar componentes que no estaban contemplados.
                li.d-flex
                  i.fas.fa-circle(style="color:#273A89")
                  |
                  p.mb-0 #[b Requerimientos consecuentes:] son resultado de la puesta en marcha de un sistema. Generalmente la adopción de un nuevo sistema involucra el cambio de procesos e incluso roles dentro de la organización que, a la vez, puede influir en cambios en los requerimientos del sistema.
                li.d-flex
                  i.fas.fa-circle(style="color:#273A89")
                  |
                  p.mb-0 #[b Requerimientos de compatibilidad:] dependen de otros sistemas o procesos, cuando estos cambian generalmente producen también cambios en los requerimientos dependientes.

</template>

<script>
export default {
  name: 'Tema2',
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
