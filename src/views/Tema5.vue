<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Información de clientes
    
    .row.justify-content-center.fondo5
      .col-md-12.px-md-5
        .row.justify-content-center.margin-bloque-cajon
          .col-lg-12.mb-4
            .bloque-cajon
              .bloque-cajon__img(
                :style="{'background-image': `url(${require('@/assets/curso/tema5/fondo-bloque.png')})`}")
              .bloque-cajon__texto.mb-xl-4
                .p-4
                  p.mb-0 Es claro que en todos los <i>contact center</i>, independiente de la naturaleza de su operación (<i>outbound</i> o <i>inbound</i>), se manejan flujos de información de clientes bastante altos, por esta razón, dichas empresas deben ajustarse a la normatividad vigente que regula el procesamiento, la actualización y la protección de la información de los clientes, por lo cual es importante dar una mirada a la normatividad vigente en Colombia.
          
        .row.justify-content-center.mb-5
          .col-7.col-lg-5.mb-4.mb-lg-0.align-self-center
            figure(data-aos='fade-right')
              img.mx-auto(src='@/assets/curso/tema5/img1.png', alt="imagen ambiental" style="width: 500px;")
          .col-lg-7
            .row
              .col-auto
                h5.p-3.mb-4(style='background-color: #DAD6F7;')  Seguridad y protección de la información
            p.mb-4 Las empresas que tienen bases de datos con información personal de sus clientes están obligadas a cumplir la normatividad que tiene por objetivo proteger esta información. Estas normas están consignadas en:
            ul.lista-ul.ms-4
              li 
                i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                p.mb-0 La Ley 1581 de 2012.
              li 
                i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                p.mb-0 El Decreto 1377 de 2013.
              li 
                i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                p.mb-0 El artículo 15 de la Constitución Política.
            p.mb-4 Todas ellas presentan las pautas y obligaciones que se deben tener en cuenta para garantizar:
            ul.lista-ul.ms-4
              li 
                i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                p.mb-0 La privacidad.
              li 
                i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                p.mb-0 El derecho a la intimidad.
              li 
                i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
                p.mb-0 El buen nombre de las personas. 
          
        .row.justify-content-center(style="margin-bottom:60px;")
          .col-10.col-lg-10
            .row.justify-content-center(style='background-color: #dad6f7')
              .col-auto.p-0.p-md-0.px-lg-0.align-self-center
                figure
                  img.mx-auto(src='@/assets/curso/tema5/img2.svg' alt='Imagen ambiental' style='')
              
              .col.d-flex(style='background-color: #3E2EA6')
                .row.align-items-center
                  .col-12.py-4
                    h5.mb-4.text-white Cabe destacar que:
                    p.mb-0.text-white El titular de la información puede solicitar, modificar, consultar, compartir, informar, reportar, procesar, compilar, enviar, almacenar, usar, la información que de él se tenga en las bases de datos de acuerdo con lo establecido en la Ley de Protección de la Información, es decir, a partir de estas solicitudes dar estricto cumplimiento de la norma, por parte de quien corresponda.
              
          
    .row.justify-content-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        .row.mb-3
          .col-auto.py-3(style='background-color: #dad6f7')
            h5.mb-0 Manejo ético
        p.mb-4 El dar un tratamiento ético a los clientes, representa uno de los principios básicos de todas las organizaciones, es decir, que como se mencionó anteriormente, a partir de las políticas internas de la compañía se construyen esos pilares éticos que buscan generar credibilidad, confianza, respeto hacia los clientes como estrategia de empoderamiento y fidelidad del cliente hacia la marca y la empresa, sumando a ello el cumplimiento de la normatividad vigente que se encarga de velar porque cada uno de esos parámetros éticos se cumplan. 
        p.mb-4 La normatividad que rige para la aplicación de la mencionada ética empresarial es 
          b(style='color: #3E2EA6') la Ley 1582 de 2012.
        p.mb-4 Ahora, la 
          b(style='color: #3E2EA6') autorización para el tratamiento de datos personales 
          b-none es el consentimiento que da cualquier persona para que las empresas o personas responsables del tratamiento de la información, puedan utilizar sus datos personales. La ley es clara cuando asegura que es necesario:
        .row.justify-content-center.mb-4
          .col-auto
            p.mb-0
              b.etiqueta(style="background-color: #FCECDF; color: #3E2EA6;") “El consentimiento previo, expreso e informado del titular”
        p.mb-0 Es decir, que el dueño de la información apruebe y sepa para qué y cómo se utilizará dicha información. Además, tal autorización debe estar disponible para consultas posteriores.
          
      .col-8.col-lg-5.align-self-center
        figure(data-aos="fade-left")
          img.mx-auto(src='@/assets/curso/tema5/img3.svg' alt='Imagen ambiental' style='width:512px;')
              
    .row.justify-content-center.mb-5
      .col-8.col-lg-5.align-self-center.mb-4.mb-lg-0
        figure(data-aos="fade-left")
          img.mx-auto(src='@/assets/curso/tema5/img4.svg' alt='Imagen ambiental' style='width:392px;')
        
      .col-lg-7.align-self-center
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 En algunos casos no es necesaria la autorización: para una entidad pública o administrativa en ejercicio de sus funciones legales o por orden judicial, para tratamiento de datos de naturaleza pública, en casos de urgencia médica o sanitaria, para fines históricos, estadísticos o científicos, datos relacionados con el Registro Civil.
        p.mb-4 Es deber de informar al titular:
        ul.lista-ul.ms-2.ms-lg-4
          li 
            i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
            p.mb-0 El tratamiento y finalidad de los datos recolectados.
          li 
            i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
            p.mb-0 Si se recolectan datos sensibles (origen racial o étnico, orientación sexual, filiación política o religiosa, etc.), debe informar que son datos sensibles y dar la opción de suministrarlos o no.
          li 
            i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
            p.mb-0 Los derechos del titular.
          li 
            i.far.fa-circle(style='font-size: 10px; color: #3E2EA6;')
            p.mb-0 Los datos de ubicación del responsable del tratamiento de los datos.

    .row.justify-content-center.fondo-color5.mb-4
      .col-md-12.py-4.px-md-5
        .row.justify-content-center
          .col-lg-7.mb-4.mb-lg-0
            .row.mb-4
              .col-auto
                .p-2(style='background-color: #dad6f7')
                  h5.mb-0 Ley de <i>Habeas Data</i>
            p.mb-4 La Ley 1266 del 2008, más conocida como ley <i>habeas data</i>, tiene como objeto desarrollar el derecho constitucional que tienen todos los colombianos de conocer, actualizar y rectificar la información que se haya recogido sobre ellos en bancos de datos y los demás derechos, libertades y garantías constitucionales relacionadas con la recolección tratamiento y circulación de datos personales a que se refiere el artículo 15 de la Constitución Política; así como, el derecho a la información establecido en el artículo 20 de la Constitución Política particularmente en relación con la información financiera y crediticia, comercial de servicios y la proveniente de terceros (Ley 1266 del 31 de diciembre de 2008).
            p.mb-4 De acuerdo con el artículo 2° de la misma Ley, esta aplica a todos los datos de información personal registrados en banco de datos y que sean administrados ya sea por entidades públicas o privadas, exceptuando a los datos mantenidos en el ámbito personal o doméstico o que circulan internamente.
            
          .col-8.col-lg-5.align-self-center
            figure(data-aos="fade-left")
              img.mx-auto(src='@/assets/curso/tema5/img5.png' alt='Imagen ambiental' style='width: 500px;')
    
    p.mb-5 En el artículo 3° de la Ley 1266 de 2008 se establecen las definiciones de los actores de la Ley <i>Habeas Data</i>, así como sus deberes y derechos que serán resumidos en la siguiente tabla: 
    
    .titulo-sexto.color-primario
      p.mb-0 Actores en la ley <i>habeas data </i>

    .tabla-a.color-primario.mb-5 
      table
        caption Nota. Tomada Ley 1266 de 2008.
        thead
          tr
            th Actores 
            th Definiciones
            th Requisitos y obligaciones 
        tbody
          tr
            td Titular de la informaci&oacute;n 
            td
              | Es la persona natural o jur&iacute;dica de quien se refiere la informaci&oacute;n que se encuentra en el banco de datos y sujeto al derecho de <i>Habeas Data</i>.
            td - 
          tr
            td Fuente de la informaci&oacute;n 
            td
              | Es la persona u organizaci&oacute;n que recibe y conoce los datos del titular de la informaci&oacute;n y la posee debido a una relaci&oacute;n comercial o de servicio o de cualquier otro tipo y que, de acuerdo con la autorizaci&oacute;n del titular, en su defecto entregar&aacute; la informaci&oacute;n a usuarios finales. Por ejemplo, las entidades financieras.
            td
              | - Que la informaci&oacute;n que suministre sea veraz, completa, exacta y actualizable. 
              br
              | - Que la informaci&oacute;n sea reportada peri&oacute;dicamente al operador. 
              br
              | - Que se solicite y conserve copia de la autorizaci&oacute;n. 
              br
              | - que se resuelvan las consultas y los reclamos.
          tr
            td Operador de la informaci&oacute;n 
            td
              | Corresponde a la persona o entidad que recibe los datos personales de varios titulares, los administra y los pone en conocimiento de los usuarios bajo los par&aacute;metros de la ley, por ejemplo, Datacr&eacute;dito y Cifin.
            td
              | - Garantizar en todo momento al titular de la informaci&oacute;n el ejercicio del derecho del <i>Habeas Data</i>. 
              br
              | - Garantizar que en la recolecci&oacute;n, tratamiento y circulaci&oacute;n de datos se respeten los dem&aacute;s derechos consagrados en la ley. 
              br
              | - Permitir el acceso a la informaci&oacute;n &uacute;nicamente a las personas autorizadas por la ley y por el titular. 
              br
              | - Aplicar medidas de seguridad de la informaci&oacute;n en los datos recolectados. 
              br
              | - Realizar de manera peri&oacute;dica la actualizaci&oacute;n y correcci&oacute;n de los datos, cada vez que reciba reporte de las fuentes.
          tr
            td Usuario 
            td
              | Se trata de la persona natural o jur&iacute;dica que tiene acceso a informaci&oacute;n de uno o varios titulares, suministrada por el operador de la informaci&oacute;n o en algunos casos directamente por el titular.
            td
              | - Se obliga a guardar reserva sobre la informaci&oacute;n que le sea suministrada.
              br
              | - Utilizar la informaci&oacute;n para los fines que le fue entregada. 
              br
              | - Conservar y preservar la informaci&oacute;n recibida para evitar el deterioro. 
              br
              | - Deben informar a los titulares sobre la utilizaci&oacute;n que se le est&aacute; dando a la informaci&oacute;n.

    p.mb-5 Después de haber revisado los actores o participantes en la Ley <i>Habeas Data</i> y en donde, según su significado, parametriza la utilización de los datos de las demás personas, es importante mirar detalladamente a qué datos hace referencia la ley.

    .row.justify-content-center
      .col-lg-8.mb-4.mb-lg-0.align-self-center
        TabsA.color-primario
            
          .tarjeta.color-acento-contenido.p-4(titulo="Datos personales")
            h4(style="color: #12263F") Datos personales
            p(style="color: #12263F") Corresponde a cualquier información de una o varias personas naturales o jurídicas y estos pueden ser públicos, semiprivados o privados.
            
          .tarjeta.color-acento-contenido.p-4(titulo="Datos públicos")
            h4(style="color: #12263F") Datos públicos
            p(style="color: #12263F") Son los datos que no se incluyen en el ámbito semiprivado o privado, como por ejemplo los datos contenidos en documentos públicos como sentencias, órdenes judiciales y demás documentos públicos existentes.
            
          .tarjeta.color-acento-contenido.p-4(titulo="Datos semiprivados")
            h4(style="color: #12263F") Datos semiprivados
            p(style="color: #12263F") Es el dato que no tiene naturaleza íntima, reservada ni pública y cuya divulgación puede interesar no solo a su titular, sino a un sector de personas, por ejemplo, información financiera y crediticia, de relación comercial o de servicios.
            
          .tarjeta.color-acento-contenido.p-4(titulo="Datos privados")
            h4(style="color: #12263F") Datos privados
            p(style="color: #12263F") Es el dato de naturaleza íntima y reservada que solo es de interés para el titular y que así está consagrado en la constitución política como son la inclinación religiosa, sexual o política.
              
      .col-7.col-lg-4.align-self-center
        figure(data-aos="fade-left")
          img.mx-auto(src='@/assets/curso/tema5/img6.png' alt='Imagen ambiental' style='width: 300px;')
    





</template>

<script>
export default {
  name: 'Tema5',
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
