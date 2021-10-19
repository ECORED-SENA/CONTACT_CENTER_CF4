<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 Terminología y vocabulario propio del <i>Contact Center</i> BPO

    .contenedor-total
      .contenedor-imagen
        figure
          img.mx-auto(src='@/assets/curso/tema7/img1.png' alt='Imagen ambiental' style='')
      .contenedor-text
        .row.mb-4.mb-lg-4
          .col-auto
            p.mb-0 Cuando se trabaja o labora en operaciones de <i>Contact Center</i> BPO, es fácil notar cómo estas operaciones manejan su propia terminología y vocabulario que a simple vista no son fáciles de comprender; por ello se invita a conocer el vocabulario más utilizado en la industria.
        .row.justify-content-end
          .col-auto
            a.anexo.mb-4(:href="obtenerLink('/downloads/Terminologia.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[strong Anexo.] Terminologia
          

</template>

<script>
export default {
  name: 'Tema7',
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

<style lang="sass" scoped></style>
