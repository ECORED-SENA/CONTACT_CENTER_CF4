<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 8
      h1 Indicadores de gestión


    .row.justify-content-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        .row.justify-content-center.fondo-cajon8.mb-4
          .col-auto.align-self-center
            figure
              img.mx-auto(src='@/assets/curso/tema8/img1.png' alt='Imagen ambiental' style='width: 167px')
          .col.align-self-center
            .bloque-texto-b.color-secundario.p-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left(style="color: #DAD6F7")
                h4.mb-0 Lo que no se mide no se puede mejorar
                i.fas.fa-quote-right(style="color: #DAD6F7")
              .bloque-texto-d__autor 
                p.mb-0 - Peter Drucker
        p.mb-4 La frase anterior es una reafirmación de la importancia que tienen los indicadores de gestión en las operaciones de <i>Contact Center BPO</i>, ya que estos son la herramienta más importante para determinar la eficiencia de la campaña y, al mismo tiempo, tomar decisiones sobre los resultados generados a través de los indicadores.
        p.mb-0 Las campañas de <i>Contact Center inbound</i>, manejan varios indicadores que permiten ver el desempeño tanto de los asesores como de la campaña en general desde un enfoque dirigido a los objetivos de la campaña e incluso de la organización, por lo que se mencionan los más relevantes para este tipo de operaciones.
      .col-9.col-sm-7.col-lg-5.align-self-center
        figure
          img.mx-auto(src='@/assets/curso/tema8/img2.svg' alt='Imagen ambiental' style='width: 500px')
        

    h4.mb-4(style="color: #3E2EA6;") Indicadores relacionados con la calidad del servicio
    
    .tarjeta.fondo-slider2.p-4.mb-5
      SlyderA
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img.mx-auto(src='@/assets/curso/tema8/img3.png' alt='Imagen ambiental' style='width: 500px')
              
          .col-md-5.align-self-center
            h4.mb-4.text-white Satisfacción de clientes
            p.text-white Este es uno de los indicadores más importantes de calidad, debido a que muestra la percepción de cliente frente a la forma como fue atendido y, de esa percepción, depende que el cliente permanezca en la compañía o, por el contrario, decida irse. La satisfacción de clientes se puede medir de dos maneras: a través de la calidad denominada percibida y la emitida. 
            
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img.mx-auto(src='@/assets/curso/tema8/img4.png' alt='Imagen ambiental' style='width: 500px')
              
          .col-md-5.align-self-center
            h4.mb-4.text-white Calidad percibida
            p.text-white Consiste en utilizar durante la interacción con el cliente algo denominado “frase de aseguramiento” en donde se valida con el cliente si le ha quedado clara la información o, por el contrario, requiere algo más y dependiendo de la respuesta del cliente sabremos su nivel de satisfacción de este.
            
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img.mx-auto(src='@/assets/curso/tema8/img5.png' alt='Imagen ambiental' style='width: 500px')
              
          .col-md-5.align-self-center
            h4.mb-4.text-white Calidad emitida
            p.text-white Consiste en informarle al cliente que al final de la interacción podrá responder una encuesta o una o dos preguntas relacionadas con la atención recibida. El resultado de esas respuestas determinará el porcentaje de satisfacción del cliente.
            
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img.mx-auto(src='@/assets/curso/tema8/img6.png' alt='Imagen ambiental' style='width: 500px')
              
          .col-md-5.align-self-center
            h4.mb-4.text-white Nivel de servicio
            p.text-white Es el acuerdo del porcentaje de llamadas que se deben contestar antes de determinado umbral de tiempo, (ASA), este porcentaje, por lo general, se establece dentro de los parámetros contractuales del outsourcing con el cliente corporativo y el general es 80/20, lo que significa que se contestarán 80 llamadas antes de 20 segundos. Teniendo en cuenta este umbral, se podrá dimensionar la campaña en cuanto al número de personas que se requieren para atenderlas.
            
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img.mx-auto(src='@/assets/curso/tema8/img7.png' alt='Imagen ambiental' style='width: 500px')
              
          .col-md-5.align-self-center
            h4.mb-4.text-white FCR First Call Resolution
            p.text-white Significa solución de la necesidad del cliente en el primer contacto, tiene como principal objetivo que el cliente no tenga que generar más de una interacción con un asesor para la misma necesidad; además, es un indicador que permite analizar el nivel de satisfacción del cliente al comunicarse con el área de servicio al cliente, al mismo tiempo que permite ver el porcentaje de efectividad de los asesores.
            
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img.mx-auto(src='@/assets/curso/tema8/img8.png' alt='Imagen ambiental' style='width: 500px')
              
          .col-md-5.align-self-center
            h4.mb-4.text-white Calidad del monitoreo de la gestión 
            p.text-white.mb-4 Este indicador corresponde al resultado obtenido por el asesor al momento de ser monitoreado. Esta evaluación se realiza a través de un instrumento de evaluación denominado “Matriz de calidad” que mide las habilidades comunicativas, la actitud del asesor con el cliente y el manejo y la solución brindada al cliente; el rango de valoración es de 100% y contempla errores fatales o críticos, de acuerdo con los estándares de calidad.
            .row
              .col-auto
                a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p #[strong Anexo.] Matriz_calidad_SAC
        
    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-md-0
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Nivel de atención") El indicador hace referencia a todas las llamadas que entraron a la línea de servicio al cliente vs. las llamadas que fueron contestadas por un asesor o por el IVR.
          p(numero="2" titulo="Nivel de abandono") Hace referencia a todas las llamadas que estuvieron en espera de atención ya sea por el asesor o por el IVR y que al recibir atención fueron colgadas por el cliente, se mide por la siguiente fórmula.
          p(numero="3" titulo="% de efectividad") Corresponde a la cantidad de contactos con los que se cumplió el objetivo de la llamada, por ejemplo, cuando el cliente se comunica a solicitar información y se solución la necesidad en ese primer contacto.
          p(numero="4" titulo="% de contactabilidad") Este indicador aplica para servicios outbound y tiene que ver con la cantidad de contactos efectivos vs. la cantidad de contactos cargada en la base de datos. 
          p(numero="5" titulo="% de ocupación de agentes") Mide el tiempo real de ocupación de un asesor, es decir contabiliza el tiempo en que el asesor estuvo interactuando con los clientes durante su turno de trabajo, este indicador permite determinar si el dimensionamiento realizado fue correcto respecto al tráfico de llamadas atendidas.
          p(numero="6" titulo="Adherencia al turno") Este indicador mide el tiempo de cumplimiento del turno de los asesores desde el momento de realizar el login hasta cuando realiza el logout, es decir desde el inicio hasta la finalización del turno de trabajo.
        
      .col-6.col-lg-6
        figure(data-aos="fade-left")
          img.mx-auto(src='@/assets/curso/tema8/img9.svg' alt='Imagen ambiental' style='width: 500px')
      
      
    .row.justify-content-center
      .col-6.col-lg-6.mb-4.mb-md-0
        figure(data-aos="fade-right")
          img.mx-auto(src='@/assets/curso/tema8/img10.svg' alt='Imagen ambiental' style='width: 500px')
        
      .col-lg-6
        LineaTiempoD.color-secundario
          p(numero="7" titulo="TMO o TPC") Se trata del tiempo promedio de conversación con el cliente desde el momento en que lo saluda, hasta el momento que se despide, por lo general este tiempo esta predeterminado en la campaña y en la mayoría de los casos es en promedio de 4 minutos. 
          p(numero="8" titulo="% de ausentismo") Con este indicador se mide la cantidad de asesores ausentes durante el turno de gestión y permite aplicar las contingencias necesarias para evitar la afectación de los demás indicadores. 
          p(numero="9" titulo="Llamadas aceptadas") En términos generales corresponde a la cantidad de llamadas que entran al ACD y su resultado se obtiene de sumar el total de las llamadas contestadas más las llamadas abandonadas.
          p(numero="10" titulo="Llamadas ofrecidas") Corresponde a todas las llamadas que ingresan al Contact Center y el resultado de obtiene de sumar las llamadas contestadas + las llamadas abandonadas + las llamadas desbordadas + llamadas bloqueadas. 
          p(numero="11" titulo="Llamadas desbordadas") Son todas las llamadas que ingresan al centro de contacto que por diferentes razones la operación no las puede atender, por lo que se redirecciona a otra operación para ser atendidas como parte de la aplicación de la contingencia y evitar afectar el nivel de servicio.
          
        


</template>

<script>
export default {
  name: 'Tema8',
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
