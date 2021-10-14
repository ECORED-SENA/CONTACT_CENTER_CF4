<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Requerimientos y PQRS
    
    p.mb-4 Los requerimientos de los usuarios que se comunican con los centros de contacto ameritan determinar un proceso de atención y sobre todo ejecutarlo.
    p.mb-5 Estos requerimientos se encuentran clasificados de la siguiente manera:

    #carouselExampleIndicators.carousel.slide.mb-5.py-5(data-bs-ride='carousel' style="background-color:#0F0140")
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
      .carousel-inner
        .carousel-item.active
          .row.justify-content-center
            .col-lg-12
              .row
                .col-lg-4
                  .tarjeta--boton.color-primario.p-4
                    .row.justify-content-center.mb-3
                      .col-7
                        figure
                          img(src='@/assets/componentes/ej-03.svg', alt='Texto que describa la imagen')
                              
                    h3.text-center Intuition important
                    p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.
                    
                .col-lg-4
                  .tarjeta--boton.color-primario.p-4
                    .row.justify-content-center.mb-3
                      .col-7
                        figure
                          img(src='@/assets/componentes/ej-03.svg', alt='Texto que describa la imagen')
                              
                    h3.text-center Intuition important
                    p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.
                    
                .col-lg-4
                  .tarjeta--boton.color-primario.p-4
                    .row.justify-content-center.mb-3
                      .col-7
                        figure
                          img(src='@/assets/componentes/ej-03.svg', alt='Texto que describa la imagen')
                              
                    h3.text-center Intuition important
                    p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.
                    
        .carousel-item
          .row.justify-content-center
            .col-lg-12
              .row
                .col-lg-4
                  .tarjeta--boton.color-primario.p-4
                    .row.justify-content-center.mb-3
                      .col-7
                        figure
                          img(src='@/assets/componentes/ej-03.svg', alt='Texto que describa la imagen')
                              
                    h3.text-center Intuition important
                    p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.
                    
                .col-lg-4
                  .tarjeta--boton.color-primario.p-4
                    .row.justify-content-center.mb-3
                      .col-7
                        figure
                          img(src='@/assets/componentes/ej-03.svg', alt='Texto que describa la imagen')
                              
                    h3.text-center Intuition important
                    p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.
                    
                .col-lg-4
                  .tarjeta--boton.color-primario.p-4
                    .row.justify-content-center.mb-3
                      .col-7
                        figure
                          img(src='@/assets/componentes/ej-03.svg', alt='Texto que describa la imagen')
                              
                    h3.text-center Intuition important
                    p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.
                    
        .carousel-item
          .row.justify-content-center
            .col-lg-12
              .row
                .col-lg-4
                  .tarjeta--boton.color-primario.p-4
                    .row.justify-content-center.mb-3
                      .col-7
                        figure
                          img(src='@/assets/componentes/ej-03.svg', alt='Texto que describa la imagen')
                              
                    h3.text-center Intuition important
                    p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.
                    
                .col-lg-4
                  .tarjeta--boton.color-primario.p-4
                    .row.justify-content-center.mb-3
                      .col-7
                        figure
                          img(src='@/assets/componentes/ej-03.svg', alt='Texto que describa la imagen')
                              
                    h3.text-center Intuition important
                    p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.
                    
                .col-lg-4
                  .tarjeta--boton.color-primario.p-4
                    .row.justify-content-center.mb-3
                      .col-7
                        figure
                          img(src='@/assets/componentes/ej-03.svg', alt='Texto que describa la imagen')
                              
                    h3.text-center Intuition important
                    p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.
                    
          
      button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next


    


</template>

<script>
export default {
  name: 'Tema4',
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
