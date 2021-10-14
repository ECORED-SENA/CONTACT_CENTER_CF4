<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Bases de datos

    .row.justify-content-center.mb-4(style="margin-bottom:60px;")
      .col-11.col-lg-auto
        .row.justify-content-center
          
          .col-lg-6.d-flex.triangulo-der2(style='background-color: #FCECDF')
            .row.align-items-center
              .col-12
                p.mb-0 Son estructuras diseñadas para almacenar información de diferentes tipos, dependiendo el uso o aplicabilidad que se le dará a la misma. Dentro de las campañas de Contact Center BPO, las bases de datos son la herramienta más importante para la gestión con clientes, ya que por medio de ella se puede acceder, actualizar o capturar información de los clientes o usuarios finales, permitiendo mejorar la comunicación con los ellos, logrando solucionar sus necesidades mucho más rápido superando las expectativas de los clientes, sobre todo cuando el cliente no tiene que brindar mayor información, porque esta ya se encuentra registrada en la base de datos y el operador de la información la tiene debidamente custodiada.
          
          .col-lg-4.p-0.p-md-0.px-lg-0.align-self-center
            figure(data-aos="flip-left")
              img.mx-auto(src='@/assets/curso/tema6/img1.png' alt='Imagen ambiental' style='')
          
    .row.justify-content-center.mb-5
      .col-8.col-lg-5.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img.mx-auto(src='@/assets/curso/tema6/img2.svg' alt='Imagen ambiental' style='width:500px;')
        
      .col-lg-7
        .row.mb-4
          .col-auto
            .p-3(style='background-color: #DAD6F7')
              h5.mb-0 Tipos y características
        p.mb-4 Las bases de datos pueden variar dependiendo del objetivo por el cual se almacena información y el uso que se le dé a dicha información; y en las operaciones de Contact Center se encuentran los siguientes tipos de bases de datos.
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Estáticas") Lorem ipsum dolor sit amet, consectetur adipiscvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet fermentum ex, in cursus nulla. Ut in sapien et enim suscipit accumsan at eu tellus. Integer faucibus finibus augue, vel aliquam dolor elementum et. Donec viverra leo quam, a lacinia quam cursus in. Donec feugiat volutpat metus at pulvinar.
          
          p(numero="2" titulo="Dinámicas") Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet fermentum ex, in cursus nulla. Ut in sapien et enim suscipit accumsan at eu tellus. Integer faucibus finibus augue, vel aliquam dolor elementum et. Donec viverra leo quam, a lacinia quam cursus in. Donec feugiat volutpat metus at pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet fermentum ex, in cursus nulla. Ut in sapien et enim suscipit accumsan at eu tellus. Integer faucibus finibus augue, vel aliquam dolor elementum et. Donec viverra leo quam, a lacinia quam cursus in. Donec feugiat volutpat metus at pulvinar.
          
          p(numero="3" titulo="Directorio") Donec feugiat volutpat metus at pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet fermentum ex, in cursus nulla. Ut in sapien et enim suscipit accumsan at eu tellus. Integer faucibus finibus augue, vel aliquam dolor elementum et. Donec viverra leo quam, a lacinia quam cursus in. Donec feugiat volutpat metus at pulvinar.
          
    .row.fondo-recuadro.mb-5
      .col-lg-6.py-lg-4.my-5
        .p-4(style="background-color: #0f014052;")
          p.text-white Para lo cual y a través de este componente formativo se realizará un reconocimiento de las cualidades comunicativas que se deben mantener para una correcta y exitosa interacción con clientes en las empresas de Contact Center BPO, abordando los conceptos y los procesos inherentes para este tipo de desempeños, de manera tal que se pueda comprender la importancia que tiene la comunicación en la industria.

    .row.justify-content-center.mb-4(style="margin-bottom:60px;")
      .col-11.col-lg-auto
        .row.justify-content-center
          
          .col-lg-4.p-0.p-md-0.px-lg-0.align-self-center
            figure(data-aos="flip-left")
              img.mx-auto(src='@/assets/curso/tema6/img3.svg' alt='Imagen ambiental' style='width: 383px')
          
          .col-lg-6.d-flex.triangulo-izq(style="background-color: #8A7CBF;")
            .row.align-items-center
              .col-12
                p.mb-0.text-white En cuanto a la recuperación de la información, esta puede ser un proceso más complejo, puesto que el rescate de la información, si se puede llamar así, depende de varios factores como, por ejemplo, la estructura de la base de datos y las características dadas a la misma al momento de la creación o diseño, el mostrar información repetida, límite de números, cuando se trata de codificación numérica, etc., los que, además de permitir corregir la información, posibilita hacer recuperaciones a través de las notificaciones al momento de realizar las búsquedas.

</template>

<script>
export default {
  name: 'Tema6',
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
