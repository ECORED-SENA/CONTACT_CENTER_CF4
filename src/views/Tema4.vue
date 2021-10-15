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
    .row.fondo-slidert4.mb-5
      .col-lg-12.px-md-0
          #carouselExampleIndicators.carousel.slide.py-5(data-bs-ride='carousel' style="background-color:#0F0140")
            .carousel-indicators
              button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
              button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 5')
            .carousel-inner
              .carousel-item.active
                .row.justify-content-center
                  .col-lg-12
                    .row.py-5

                      .col-lg-4
                        .tarjeta--boton.color-primario.p-4
                          .row.justify-content-start.mb-3
                            .col-7
                              figure
                                img(src='@/assets/curso/tema4/icon1.svg', alt='' style="width: 77px;")
                                    
                          h5 Información general
                          p.text-small Los usuarios o clientes suelen llamar por diferentes motivos como dirección y horarios de oficinas o puntos de venta, precios, características de productos o servicios, etc.
                          
                      .col-lg-4
                        .tarjeta--boton.color-primario.p-4
                          .row.justify-content-start.mb-3
                            .col-7
                              figure
                                img(src='@/assets/curso/tema4/icon2.svg', alt='' style="width: 77px;")
                                    
                          h5 Soporte técnico
                          p.text-small Es el servicio que prestan empresas que comercializan productos o servicios que requieren atención especial en cuanto a manejo de estos y solución a posibles inconvenientes, utilización o fallas técnicas. 
                          
                      .col-lg-4
                        .tarjeta--boton.color-primario.p-4
                          .row.justify-content-start.mb-3
                            .col-7
                              figure
                                img(src='@/assets/curso/tema4/icon3.svg', alt='' style="width: 77px;")
                                    
                          h5 PQRS
                          p.text-small Peticiones, quejas, reclamos, sugerencias o felicitaciones: son los inconvenientes que tienen los usuarios o clientes con las empresas que les suministraron algún producto o servicio y dependiendo del tipo de solicitud se le debe dar el respectivo manejo y tiempo de respuesta.
                          
              .carousel-item
                .row.justify-content-center
                  .col-lg-12
                    .row
                      .col-lg-4
                        .tarjeta--boton.color-primario.p-4
                          .row.justify-content-start.mb-3
                            .col-7
                              figure
                                img(src='@/assets/curso/tema4/icon4.svg', alt='' style="width: 77px;")
                                    
                          h5 Toma de pedidos
                          p.text-small Las empresas utilizan estrategias de promoción y publicidad que son acompañadas por las líneas de venta telefónica, dando a conocer sus productos y ofertas, cuando los clientes potenciales llaman son atendidos con el propósito que adquieran las promociones que fueron publicitadas u ofertadas por dichos medios.
                          
                      .col-lg-4
                        .tarjeta--boton.color-primario.p-4
                          .row.justify-content-start.mb-3
                            .col-7
                              figure
                                img(src='@/assets/curso/tema4/icon5.svg', alt='' style="width: 77px;")
                                    
                          h5 Agendamiento de citas
                          p.text-small Estas líneas son muy utilizadas por empresas del sector de la salud para atender altos volúmenes de llamadas para pacientes o usuarios de sus servicios.
                          
                      .col-lg-4
                        .tarjeta--boton.color-primario.p-4
                          .row.justify-content-start.mb-3
                            .col-7
                              figure
                                img(src='@/assets/curso/tema4/icon6.svg', alt='' style="width: 77px;")
                                    
                          h5 Preventa
                          p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.
                          
              .carousel-item
                .row.justify-content-center
                  .col-lg-12
                    .row
                      .col-lg-4
                        .tarjeta--boton.color-primario.p-4
                          .row.justify-content-start.mb-3
                            .col-7
                              figure
                                img(src='@/assets/curso/tema4/icon7.svg', alt='' style="width: 77px;")
                                    
                          h5 Promoción de portafolio
                          p.text-small Su objetivo es dar a conocer empresas, productos o servicios a clientes potenciales.
                          
                      .col-lg-4
                        .tarjeta--boton.color-primario.p-4
                          .row.justify-content-start.mb-3
                            .col-7
                              figure
                                img(src='@/assets/curso/tema4/icon8.svg', alt='' style="width: 77px;")
                                    
                          h5 Televentas
                          p.text-small Muchas empresas comercializan productos y/o servicios contactando a sus clientes de forma proactiva.
                          
                      .col-lg-4
                        .tarjeta--boton.color-primario.p-4
                          .row.justify-content-start.mb-3
                            .col-7
                              figure
                                img(src='@/assets/curso/tema4/icon9.svg', alt='' style="width: 77px;")
                                    
                          h5 Cobranza
                          p.text-small Es la actividad donde se recupera el dinero que las empresas tienen pendiente por cobro, cuando realizan ventas a plazos. Es la actividad que completa el ciclo de la venta, para que el cliente compre nuevamente.
                          
              .carousel-item
                .row.justify-content-center
                  .col-lg-12
                    .row
                      .col-lg-4
                        .tarjeta--boton.color-primario.p-4
                          .row.justify-content-start.mb-3
                            .col-7
                              figure
                                img(src='@/assets/curso/tema4/icon10.svg', alt='' style="width: 77px;")
                                    
                          h5 Seguimiento
                          p.text-small Se da cuando es necesario realizar varios contactos con los mismos usuarios para lograr objetivos de ventas, cobranza, servicios posventa o soporte técnico. Requiere de un sistema muy organizado y tecnológico para reagendar las llamadas para los contactos futuros.
                          
                      .col-lg-4
                        .tarjeta--boton.color-primario.p-4
                          .row.justify-content-start.mb-3
                            .col-7
                              figure
                                img(src='@/assets/curso/tema4/icon11.svg', alt='' style="width: 77px;")
                                    
                          h5 Actualización de bases de datos
                          p.text-small Actividad muy importante para las empresas que requieren tener información constantemente actualizada de sus clientes para garantizar el éxito de las diferentes campañas que realicen.
                          
                      .col-lg-4
                        .tarjeta--boton.color-primario.p-4
                          .row.justify-content-start.mb-3
                            .col-7
                              figure
                                img(src='@/assets/curso/tema4/icon12.svg', alt='' style="width: 77px;")
                                    
                          h5 Prospección
                          p.text-small Consiste en la búsqueda de clientes para alimentar las bases de datos con clientes potenciales que cumplan con el perfil acorde con su tipo de productos o servicios ofrecidos.
                          
              .carousel-item
                .row.justify-content-center
                  .col-lg-12
                    .row
                      .col-lg-4
                        .tarjeta--boton.color-primario.p-4
                          .row.justify-content-start.mb-3
                            .col-7
                              figure
                                img(src='@/assets/curso/tema4/icon13.svg', alt='' style="width: 77px;")
                                    
                          h5 Sondeos, investigaciones o encuestas
                          p.text-small Esta actividad se utiliza para conocer la opinión de los clientes reales o potenciales con diferentes objetivos comerciales para las empresas.
                          
                      .col-lg-4
                        .tarjeta--boton.color-primario.p-4
                          .row.justify-content-start.mb-3
                            .col-7
                              figure
                                img(src='@/assets/curso/tema4/icon14.svg', alt='' style="width: 77px;")
                                    
                          h5 Concertación de citas
                          p.text-small Se puede utilizar como complemento a la actividad comercial o según la necesidad y tipo de empresa que la utilice, como las del sector salud, cobros jurídicos, valoraciones, etc.
                          
                      
                
            button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
              span.carousel-control-prev-icon(aria-hidden='true')
              span.visually-hidden Previous
            button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
              span.carousel-control-next-icon(aria-hidden='true')
              span.visually-hidden Next
    
    .row.justify-content-center.mb-5
      .col-9.col-lg-5.mb-4.mb-lg-0
        figure
          img.mx-auto(src='@/assets/curso/tema4/img1.svg', alt='imagen ambiental' style="width: 457px;")
        
      .col-lg-7.align-self-center 
        p.mb-4
          span.etiqueta(style='background-color: #DAD6F7; color: #12263F;') Dentro de los anteriores requerimientos  están las PQRS,
          | que se analizarán más a profundidad.
        p.mb-4 Dentro de los servicios inbound (llamadas entrantes), existe la tipología de llamadas que hacen referencia a los motivos o las razones por las cuales un cliente se comunica a una campaña de servicio ya sea a través del teléfono, los medios electrónicos o de manera presencial. 
        p Los motivos de comunicación suelen ser muy variados, pero la mayoría de las comunicaciones de los clientes se debe a que tienen un problema o una inconformidad con el producto o servicios que representa el centro de contacto.

    p.mb-4 Teniendo en cuenta lo anterior y dependiendo el tipo de inconformidad del cliente, se han denominado estas líneas como PQRSF, a continuación se indica qué significa cada una de ellas.

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Petición")
        .row.justify-content-center
          .col-7.col-md-4.mb-4.mb-md-0
            figure.slideInLeft
              img.mx-auto(src='@/assets/curso/tema4/img2.svg', alt='imagen ambiental' style="width: 376px;")
              
          .col-md-7.align-self-center
            h5.mb-4 Petición
            p.mb-4 Según la Superintendencia de Sociedades de Colombia: 
            p.mb-4 “El derecho de petición es aquel que permite a los ciudadanos presentar solicitudes respetuosas a  las autoridades y a obtener de estas una respuesta oportuna, clara y completa, relacionadas con el reconocimiento de un derecho o que se resuelva una situación jurídica, la prestación de un servicio, requerir información, consultar, examinar y requerir copias de documentos, la formulación de consultas, quejas, denuncias, reclamos y la interposición de recursos”.
            p.mb-4 Las peticiones se deben resolver 15 días hábiles posteriores a la radicación (Código de Procedimiento Contencioso Administrativo, Art. 14).
            p.mb-4 Sin embargo, es importante tener en cuenta que no siempre las peticiones hacen referencia exclusiva al derecho de petición, también existen las peticiones que, de acuerdo con las políticas internas de la compañía, se establecen procesos y procedimientos para dar respuesta oportuna al cliente. 
            
      .py-3.py-md-4(titulo="Queja")
        .row.justify-content-center
          .col-7.col-md-4.mb-4.mb-md-0
            figure.slideInLeft
              img.mx-auto(src='@/assets/curso/tema4/img3.svg', alt='imagen ambiental' style="width: 360px;")
              
          .col-md-7.align-self-center
            h5.mb-4 Queja
            p.mb-4 Si bien es cierto que la queja también forma parte de las diferentes manifestaciones del cliente sobre una inconformidad, malestar o problema, se catalogan como quejas cuando se derivan por alguna razón diferente al funcionamiento o rendimiento del productos o servicio que se tiene.  
            p En pocas palabras, las quejas son cuando el cliente manifiesta insatisfacción en la forma como fue atendido o manejado su requerimiento.
            
      .py-3.py-md-4(titulo="Reclamo")
        .row.justify-content-center
          .col-7.col-md-4.mb-4.mb-md-0
            figure.slideInLeft
              img.mx-auto(src='@/assets/curso/tema4/img4.svg', alt='imagen ambiental' style="width: 380px;")
              
          .col-md-7.align-self-center
            h5.mb-4 Reclamo
            p.mb-4 Con respecto al reclamo, se podría decir que tiene mucha similitud con la queja, ya que también es una forma de manifestar una inconformidad, pero en esta ocasión esa inconformidad es generada por el mal funcionamiento del producto o servicio.
            
      .py-3.py-md-4(titulo="Sugerencia")
        .row.justify-content-center
          .col-7.col-md-4.mb-4.mb-md-0
            figure.slideInLeft
              img.mx-auto(src='@/assets/curso/tema4/img5.svg', alt='imagen ambiental' style="width: 350px;")
              
          .col-md-7.align-self-center
            h5.mb-4 Sugerencia
            p.mb-4 En cuanto a las sugerencias, en servicios de atención a clientes es una opción que todos los clientes tienen para manifestar ideas opiniones, propuestas, etc., relacionados con algún proceso o procedimiento implementado por la compañía. 
            
      .py-3.py-md-4(titulo="Felicitación ")
        .row.justify-content-center
          .col-7.col-md-4.mb-4.mb-md-0
            figure.slideInLeft
              img.mx-auto(src='@/assets/curso/tema4/img6.svg', alt='imagen ambiental' style="width: 376px;")
              
          .col-md-7.align-self-center
            h5.mb-4 Felicitación 
            p.mb-4 Es el mecanismo por el cual el cliente expresa su satisfacción o conformidad con el servicio y/o con el producto que el centro de contacto representa, es importante aclarar que esta tipología de llamadas, por lo general, no requiere de un trámite específico por parte del asesor y no es muy usual en los canales de contacto de servicio al cliente.
            
    .row.justify-content-center.mb-5
      .col-lg-6
        .row.align-items-center.bg-cajon.p-2.p-md-4(data-aos="flip-left")
          .col-12.col-md-2.mb-3
            figure
              img.mx-auto(src='@/assets/curso/tema4/icon15.svg', alt="imagen ambiental" style="width: 100px;")
          .col-12.col-md-10.mb-3
            .p-2.p-md-4
              p.text-white.mb-0 #[strong Recordar que:] todos los requerimientos de los clientes requieren la debida respuesta, un proceso o procedimiento ajustado y articulado con las políticas de servicio de la compañía.
        
      .col-lg-6.align-self-center
        p.mb-0 En caso de tener que atender una interacción de un cliente molesto, inconforme o insatisfecho, se recomienda escuchar con paciencia y buena actitud, ofrecer disculpas por la mala experiencia generada, entregar al cliente alternativas de solución, explicar el paso a paso que deberá seguir el cliente, actualizar la información de los clientes y realizar de manera correcta, rápida y coherente el registro del requerimiento del cliente, aplicando las pautas de comunicación escrita.


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
