<template lang="pug">
  div
    CCOGHeader
    main.container(role='main', property='mainContentOfPage')
      h1 Publications

      p The Canadian Council on Geomatics has supported the development of a number of publications on topics in the field of Geomatics.

      .row
        .col-md-4
          img(src='/static/img/mistastin_lake.jpg', alt='Mistastin Lake')
          .caption
            | Mistastin Lake
            br
            | &copy; USGS
        .col-md-8
          h2 Canadian Geomatics Environmental Scan and Value Study
          p The Canadian Geomatics Environmental Scan and Value Study report is meant to provide a new perspective on the value of geospatial information in Canada, including the state of the geomatics sector in Canada, global trends involving geospatial information and Canada’s position relative to those trends, the significance and value of the geomatics sector and of geospatial information to the Canadian economy, and current and emerging roles of government, industry and academia in supporting and using geospatial information.
          a.btn.btn-primary(href='http://geoscan.nrcan.gc.ca/starweb/geoscan/servlet.starweb?path=geoscan/downloade.web&search1=R=296426') View on GEOSCAN

      .row
        .col-md-4
          img(src='/static/img/nova_scotia.jpg', alt='Envisat captures the Canadian province of Nova Scotia')
          .caption
            | Envisat captures the Canadian province of Nova Scotia
            br
            | &copy; 
            a(href='http://www.esa.int/spaceinimages/Images/2007/11/Envisat_captures_the_Canadian_province_of_Nova_Scotia') ESA
        .col-md-8
          h2 Environmental scan on the operational use of Remotely Piloted Aircraft Systems (RPAS) for geomatics applications in Canada
          p Remotely-piloted Aircraft Systems, or drones, have emerged as an excellent tool to monitor small sites of interest. They play an increasingly important role within organizations by providing a less costly, higher detailed, and more flexible method to collect information compared to conventional methods. This report helps organizations determine whether drones are a suitable alternative and how to implement drones within their operations. The report provides an overview of proven applications and highlights the ready-to-fly equipment that is currently available in North America. 
          p Organizations must address regulations concerning aviation, privacy, intellectual property, trespassing, and the transportation of dangerous goods. Best practices are summarized in terms of how to design a stand-alone project or implement an operational program, and techniques used to obtain, process, and manage 2D, 3D, and video datasets.  Risk management strategies are formulated. Emerging opportunities, recommendations, and knowledge gaps are highlighted to advance the use of drones in Canada.
          a.btn.btn-primary(href='http://geoscan.nrcan.gc.ca/starweb/geoscan/servlet.starweb?path=geoscan/fulle.web&search1=R=299120') View on GEOSCAN

      .row
        .col-md-4
          img(src='/static/img/nunavut.jpg', alt='Canadian Land of Lakes')
          .caption
            | Canadian Land of Lakes
            br
            | &copy; 
            a(href='https://earthobservatory.nasa.gov/IOTD/view.php?id=78527') NASA
        .col-md-8
          h2 Federal Floodplain Mapping Framework
          p The purpose of this document is to introduce the Federal Floodplain Mapping Guidelines Series documents and to provide a framework for how each fits into the overall floodplain mapping life cycle. Specifically, this document will provide a brief history of past and present floodplain mapping efforts in Canada, a brief summary of floodplain mapping roles and responsibilities and an overview of the contents of the suite of documents that make up the Federal Floodplain Mapping Guidelines Series.
          a.btn.btn-primary(href='http://geoscan.nrcan.gc.ca/starweb/geoscan/servlet.starweb?path=geoscan/shorte.web&search1=R=299806') View on GEOSCAN

      .row
        .col-md-12
          h2 Other Publications
          p 
            | The 
            a(href='https://www.nrcan.gc.ca/earth-sciences/geomatics/canadas-spatial-data-infrastructure/8904') CGDI Resource Centre 
            | summarizes potentially relevant publications that are available on GEOSCAN.
          a 
    CCOGFooter
</template>

<script>
import CCOGHeader from './Header'
import CCOGFooter from './Footer'

export default {
  name: 'Landing',
  components: {
    CCOGHeader,
    CCOGFooter
  }
}
</script>

<style lang="stylus" scoped>
  .col-md-4
    img
      padding-top 30px
</style>
