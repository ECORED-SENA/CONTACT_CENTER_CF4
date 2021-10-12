<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Protocolos procesos y procedimientos en el servicio al cliente
    
    .row.justify-content-center.fondo1.mb-4
      .col-md-12.px-md-5
        .row.justify-content-center.mb-5
          .col-lg-12.mb-4
            .bloque-cajon
              .bloque-cajon__img(
                :style="{'background-image': `url(${require('@/assets/curso/tema2/fondo-bloque.png')})`}")
              .bloque-cajon__texto
                .p-4
                  p.mb-0 A continuación, se estudiarán los protocolos, procesos y procedimientos que se deben tener en cuenta en el servicio al cliente.
          
        .row.justify-content-center.mb-5
          .col-lg-8
            .row.mb-2
              .col-4
                .p-3(style='background-color: #DAD6F7')
                  h5.mb-0 Protocolos 
              
            .row.mb-4
              .col-auto
                p.mb-0 De acuerdo con lo expuesto sobre servicio al cliente, es importante tener en cuenta que los protocolos forman parte de la política de servicio al cliente de toda compañía y son la principal herramienta para que cada colaborador conozca el grado de responsabilidad que tiene al momento de interactuar con cada cliente.
              
            .row.justify-content-center.color-row.mb-4(data-aos="fade-left")
              .col-10.col-lg-6.align-self-center(style='background-color: #DAD6F7')
                figure
                  img.mx-auto(src='@/assets/curso/tema2/img1.svg' alt='Imagen ambiental' style='width:410px;')
                
              .col-10.col-lg-6.p-4.px-lg-5(style='background-color: #FCECDF')
                .row.align-items-center
                  .col-12
                    .h5.mb-3(style='color: #3E2EA6') ¿Qué reflejan los protocolos de servicio al cliente?
                    p.mb-0 El conjunto de reglas que debe seguir el asesor de Contact Center BPO en cuanto a la forma de comunicación que debe mantener con el cliente, los procesos de la interacción dependiendo de la necesidad del cliente y el trato que debe mantener durante la interacción.
              
            .row.mb-3
              .col-auto
                p.mb-0 En pocas palabras, la función principal del protocolo es actuar como un manual de proceso que le permitirá a la compañía mantener una estandarización de estos; en lo que a atención al cliente se refiere, le garantizará un trato coherente y efectivo y, lo más importante, dará una línea fija y permanente de acción para el área de servicio al cliente de la compañía.
            
          .col-7.col-lg-4.align-self-center
            figure(data-aos="fade-left")
              img(src='@/assets/curso/tema2/img2.svg' alt='iamgen ambbbiental' style='width: 400px;')
    
    .row.mb-4
      .col-auto
        .p-3(style='background-color: #DAD6F7')
          h5.mb-0 Procesos y procedimientos 
      
    .row.mb-4
      .col-lg-8
        p.mb-0 En los departamentos de servicio al cliente de las organizaciones y dependiendo de su política interna, se pueden generar varios procesos que pueden estar enfocados según las diferentes necesidades de los clientes. Es así como en las empresas de Contact Center BPO sucede lo mismo; por ello, a continuación se presenta el protocolo que se debe aplicar en una interacción con cliente a través del canal telefónico.
    
    .row.justify-content-center.mb-5
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--clara")
          .row.justify-content-center.tarjeta--arco(titulo="Introducción")
            .col-md-10.mb-5.mb-md-0.pe-4
              p.mb-4 Es la parte inicial de la llamada. La llamada de salida está formada por el saludo según la hora del día, así como la identificación: nombre del asesor y de la empresa.
              p.mb-4 Cuando la llamada es de entrada se saluda, se identifica el asesor y no siempre se debe dar el nombre de la empresa, depende del protocolo de cada organización.
              p Luego se pregunta con quién habla el asesor y si es llamada de salida se pregunta por la persona que se encuentra en la base de datos, posteriormente se informa el motivo de la llamada; o si es el cliente quien llama se indaga acerca de la necesidad por la que se comunica.
            
          .row.justify-content-center.tarjeta--arco(titulo="Desarrollo")
            .col-md-10.mb-5.mb-md-0.pe-4.pb-5.pt-4
              p En esta parte es donde se cumple el objetivo de la llamada, por lo tanto, es diferente de uno a otro tipo de llamada.
                
          .row.justify-content-center.tarjeta--arco(titulo="Justificar")
            .col-md-10.mb-5.mb-md-0.pe-4
              p.mb-4 Cuando el asesor requiere dejar en espera al usuario, le debe informar antes de hacerlo; el tiempo de espera no debe ser mayor a 30 segundos, transcurrido este tiempo el asesor debe retomar la llamada, agradecer al cliente por la espera y proceder a entregar la información o solucionar la necesidad del cliente.
              p Es importante tener en cuenta que durante la interacción se debe personalizar al cliente, esto significa que al referirse al cliente se debe anteponer las fórmulas de cortesía “señor”, “señora” o “señorita”, según sea el caso.
                
          .row.justify-content-center.tarjeta--arco(titulo="Cierre")
            .col-md-10.mb-5.mb-md-0.pe-4
              p.mb-4 Aunque puede variar de un tipo de llamada a otro, por lo general el final de la llamada debe contener:
              ul.lista-ul.ms-4
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 Agradecimiento por haber llamado o atendido la llamada.
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 Recordar el nombre del asesor.
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 Despedirse según la hora del día.
            
      .col-8.col-lg-4
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema2/img3.png' alt='iamgen ambbbiental' style='width: 400px;')

    p Se debe tener en cuenta que el éxito de una interacción amable, cordial y que cumpla con los objetivos establecidos, depende en gran medida de la actitud y disposición de las personas que generan el contacto.

    .row.justify-content-center.fondo2
      .col-md-12.px-md-5.mt-5
        .row.justify-content-center
          .col-4.col-lg-auto
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img4.svg' alt='iamgen ambbbiental' style='width: 260px;')
          .col
            p.mb-4 Ahora, se revisarán cuáles de estas normas son fundamentales. 
              
            ul.lista-ul.ms-4
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 Sonreír.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 Tener una buena postura.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 Utilizar la voz de forma clara, pausada y serena.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 Evitar interferencias.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 Estar concentrado.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 Personalizar la comunicación.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 Tratar cada llamada como una llamada muy importante.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 Se debe ser cauteloso y asertivo cuando se deba rechazar una pregunta por política de la empresa.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 Responder rápidamente.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 Evitar palabras confianzudas como: mi amor, mi vida, negrito(a), reinita, gordito(a), nenita, príncipe, princesa, entre otros.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 No usar palabras técnicas o muy especializadas.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 No dar ni más ni menos información de la necesaria.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 No contestar con preguntas.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 No utilizar muletillas: uso frecuente de palabras como “bueno, correcto, claro”.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 Preguntar si ha sido claro con la información, no decir: ¿me entiende?
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 No decir palabras como “obvio”.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 No interrumpir al usuario.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 No utilizar un tono de voz muy alto ni muy bajo.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 No permitir que el usuario escuche temas que no tienen relación con la llamada.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 Reportar al supervisor cualquier falla técnica.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 Informar al consumidor acerca de la posibilidad de presentar una queja.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 Al terminar, agradecer al cliente por la llamada.
                  
                li 
                  i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                  p.mb-0 Documentar la gestión en la base de datos y clasificar por código de gestión en el sistema de información.
                  







</template>

<script>
export default {
  name: 'Tema2',
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
