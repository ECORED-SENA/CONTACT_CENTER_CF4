<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Servicio al cliente

    .row.justify-content-center.mb-4
      .col-lg-7.mb-2
        p.mb-4 Cuando una persona visita un restaurante, una tienda, una heladería o un supermercado inconscientemente su principal expectativa está en poder adquirir o consumir un buen producto o servicio. Pero… ¿qué sucede cuando ese cliente está frente a uno de los mejores productos o servicios, pero no logra obtener respuesta acerca de las necesidades o inquietudes que tiene acerca del mismo? Seguramente su intención de compra o de consumo desaparece y preferirá buscar un producto o servicio similar en otra parte.
        p.mb-4 El anterior ejemplo es solo una parte de los que representa un buen servicio al cliente y las consecuencias que puede dejar en ellos recibir una atención que cumpla o no con sus expectativas, por eso,
          b(style='color: #3E2EA6; background-color: #FCECDF') el servicio al cliente es la actividad más importante y la que más se debe cuidar dentro de una organización, ya que por sí sola permite afianzar o dañar las relaciones con los clientes, ello, dependiendo de cómo el cliente sea atendido.
        p.mb-0 De acuerdo con lo que se mencionó anteriormente, en la actualidad el servicio al cliente y la atención de clientes han tomado gran importancia dentro de todas las organizaciones, puesto que genera un enorme impacto en el cumplimiento de los objetivos de las mismas.
      .col-10.col-lg-5.mb-2.align-self-center
        figure
          img.mx-auto(src='@/assets/curso/tema1/img1.svg', alt='imagen ambiental', style='width: 410px;')
      
    p.mb-5 Es claro que si una empresa u organización no tiene bien definida su política de atención al cliente, seguramente su camino al cumplimiento de objetivos será mucho más difícil.

    .row.justify-content-center(style="margin-bottom:60px;")
      .col-11.col-lg-auto
        .row.justify-content-center
          
          .col-lg-6.d-flex.triangulo-der(style='background-color: #3E2EA6')
            .row.align-items-center
              .col-12
                h4.mb-4.text-white Pero, ¿qué es el servicio al cliente?
                p.mb-0
                  b.text-white Es ejecutar una serie de actividades intangibles (que no se pueden tocar) encaminadas a generar valores agregados para el cliente.
          
          .col-lg-4.p-0.p-md-0.px-lg-0.align-self-center
            figure
              img.mx-auto(src='@/assets/curso/tema1/img2.png' alt='Imagen ambiental' style='')
          
    .row.justify-content-center.mb-4
      .col-10.col-lg-5.mb-4.mb-md-0
        figure(data-aos="fade-right")
          img.mx-auto(src='@/assets/curso/tema1/img3.svg' alt='Imagen ambiental' style='width: 434px;')
      .col-lg-7.mb-4.mb-md-0
        p.mb-4 Es claro que si una empresa u organización no tiene bien definida su política de atención al cliente, seguramente su camino al cumplimiento de objetivos será mucho más difícil.
        .row.mb-5(data-aos="flip-left")
          .col-auto
            .body-cajon
              .body-img
                img(src="@/assets/curso/tema1/icon1.svg")
              .body-text
                p.mb-0.text-white Al funcionamiento o rendimiento del producto.
          
        .row.mb-lg-5(data-aos="flip-left")
          .col-auto
            .body-cajon
              .body-img
                img(src="@/assets/curso/tema1/icon2.svg")
              .body-text
                p.mb-0.text-white La atención que recibe por parte de las personas que representan la marca.

    p.mb-5 Por ejemplo, cuando el cliente visita el restaurante que le gusta, pero su experiencia es: 
    
    .row.justify-content-center.mb-5
        
      .col-md-4.col-lg-4.mb-5.mb-lg-0(data-aos='flip-left')
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/icon3.svg' alt='AvatarTop' style='width: 62px;')
          .tarjeta.color-acento-acontenido.d-flex.justify-content-center.align-items-end(style='background-color: #FCECDF')
            .p-4.pt-5
              p.text-center No fue atendido de manera rápida.
              
      .col-md-4.col-lg-4.mb-5.mb-lg-0(data-aos='flip-left')
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/icon4.svg' alt='AvatarTop' style='width: 62px;')
          .tarjeta.color-acento-acontenido.d-flex.justify-content-center.align-items-end(style='background-color: #FCECDF')
            .p-4.pt-5
              p.text-center El mesero toma mal su orden.
              
      .col-md-4.col-lg-4.mb-5.mb-lg-0(data-aos='flip-left')
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/icon5.svg' alt='AvatarTop' style='width: 62px;')
          .tarjeta.color-acento-acontenido.d-flex.justify-content-center.align-items-end(style='background-color: #FCECDF')
            .p-4.pt-5
              p.mb-md-0.text-center Cuando le sirven le indican que lo que había pedido ya no está disponible.
              


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

<style lang="sass" scoped></style>
