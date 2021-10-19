<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 La integración asertiva y funcional se puede alcanzar a través de procesos constantes de formación y apropiación del concepto de servicio al cliente. El siguiente video presenta una introducción a los temas que se desarrollarán en este componente formativo.
    figure.mb-5
      .video
        <iframe width="950" height="534" src="https://www.youtube.com/embed/RR1VWBlTf7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
    

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
