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
                p.mb-0 Son estructuras diseñadas para almacenar información de diferentes tipos, dependiendo el uso o aplicabilidad que se le dará a la misma. Dentro de las campañas de <i>Contact Center</i> BPO, las bases de datos son la herramienta más importante para la gestión con clientes, ya que por medio de ella se puede acceder, actualizar o capturar información de los clientes o usuarios finales, permitiendo mejorar la comunicación con ellos, logrando solucionar sus necesidades mucho más rápido superando las expectativas de los clientes, sobre todo cuando el cliente no tiene que brindar mayor información, porque esta ya se encuentra registrada en la base de datos y el operador de la información la tiene debidamente custodiada.
          
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
        p.mb-4 Las bases de datos pueden variar dependiendo del objetivo por el cual se almacena información y el uso que se le dé a dicha información; y en las operaciones de <i>Contact Center</i> se encuentran los siguientes tipos de bases de datos.
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Estáticas") Son diseñadas únicamente para almacenar y registrar datos históricos y ser utilizados para análisis de proyecciones y comportamientos del servicio.  Por ejemplo, la base de datos del histórico de llamadas entrantes del año 2020 que servirá de herramienta para proyectar el tráfico de llamadas del 2021 por determinados intervalos de tiempo.
          
          p(numero="2" titulo="Dinámicas") Permiten modificar la información, es decir las actividades que se realizan con la base de datos son las de almacenar, actualizar, editar y eliminar información, como por ejemplo las bases de datos de listas de precios en una campaña de ventas, las que varían y se modifican dependiendo de la permanencia de los productos para la venta y el cambio de precios.
          
          p(numero="3" titulo="Directorio") Son las más importantes en donde se almacena la información específica del cliente como, por ejemplo, nombre, teléfono, correo electrónico, dirección, datos de facturación, información de servicios o productos consumidos, etc., y tiene como principal característica ordenar la información de acuerdo con las necesidades de la operación. 
          
    .row.fondo-recuadro.mb-5
      .col-lg-6.py-lg-4.my-5
        .p-4(style="background-color: #0f01406e;")
          h5.mb-4.text-white Técnicas de búsqueda y recuperación de la información
          p.text-white Cuando se habla de técnicas de búsqueda y recuperación de información en una base de datos, se trata de la actividad que se debe realizar al momento de determinar cuál será el uso o la aplicabilidad de la misma. En la mayoría de los casos al momento de realizar búsquedas en las bases de datos se utilizan criterios ligados a la utilización de palabras clave, el inicio o la terminación de algún código (esto dependiendo de la información que contenga la base de datos) y, en otros casos, haciendo uso de los diferentes comandos de búsqueda ligados al <i>software</i> donde está construida la base de datos, por ejemplo un SQL, Access, o incluso Excel, la aplicación dependerá del volumen de información que contenga la base de datos.

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
