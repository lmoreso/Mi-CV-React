import React from 'react'
import * as cv from './CvDatos';
import CvExtracto from './CvExtracto'
import CvTiposCompetencia from './CvTiposCompetencia'


function Cadena2Table2C(props) {
    if (props.el_indice % 2 === 0) {
      if (props.el_indice === props.el_array_entero.length - 1) {
        return( 
          <tr><td>{props.la_cadena}</td><td></td></tr> 
        )
      } else {
        return(
          <tr><td>{props.la_cadena}</td><td>{props.el_array_entero[props.el_indice + 1]}</td></tr>
        )
      }       
    } else {
      return null
    }

}

class CvContenido extends React.Component {

  render() {
      return (
          <div id="contents">  

            {/*  -- ACERCA DE MI -- INICIO -- */}
            <section id="extracto" class="row featurette pr_width_all">
              <div class="col-lg-12 no_page_break_after">
                <h1 id="tit_acercademi" class="titols"><br/><br/>Sobre mi</h1>
              </div>
              <div class="container no_page_break">
                <div id='div_foto_cara' class=' col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-1 col-lg-offset-1 '> 
                  <img src={'datos/' + cv.cvdat.config.foto_cara} alt='' class='img-circle fotocara'/> 
                </div>
                <div id="acercademi" class="row"> 

                  <h1> { cv.cvdat.nombre } </h1>
                  <h3> { cv.cvdat.titulo } </h3>
                  {
                    cv.cvdat.extracto.map((extracto) => {
                      return <CvExtracto extracto={ extracto } />
                    })
                  }

                </div>
              </div>
            </section> 
            {/*  -- ACERCA DE MI -- FIN -- */}


            {/*  -- COMPETENCIAS -- INICIO -- */}
            <section id="competencias" class="row featurette pr_width_all">
              <div class="col-lg-12 no_page_break_after">
                <h1 class="titols">Competencias</h1>
              </div>      
              
              {/*  -- Conocimientos Técnicos / Funcionales / Idiomas / etc. -- INICIO -- */}
              <div id="competenciasdet">
                <div class="container no_page_break">
                  {
                    cv.cvdat.tipos_competencia.map((un_tipo_competencia) => {
                      return (
                        <CvTiposCompetencia un_tipo_competencia={ un_tipo_competencia } 
                                            lista_competencias = { cv.cvdat.competencias } />
                      )
                    })
                  }
                     
                </div>    
              </div>    
              {/*  -- Conocimientos Técnicos / Funcionales / Idiomas / etc. -- FIN -- */}
              
              {/*  -- Otras Competencias -- INICIO -- */}
              <div class="container no_page_break">
                <h3 class="pr_text_center ">Competencias Interpersonales, organizacionales o sociales</h3>
                <table class="table table-striped">
                  <tbody id="otrascomp"> 
                    {
                      cv.cvdat.otrascomp.map((una_cadena, indice, array_entero) => {
                        return (
                          <Cadena2Table2C la_cadena = {una_cadena}
                                  el_indice = {indice} 
                                  el_array_entero = {array_entero}/>
                        )
                      })
                    }
                  </tbody>            
                </table>
              </div>     
              {/*  -- Otras Competencias -- FIN -- */}
              
              <p><br/></p>     
            </section> 
            {/*  -- COMPETENCIAS -- FIN -- */}

            {/*  -- Experiencia -- INICIO -- */}
            <section id="experiencia" class="row featurette pr_width_all">
              <div class="col-lg-12 no_page_break_after">
                <h1 class="titols">Experiencia Laboral</h1>
              </div>  
              <div id="explab" class="container no_page_break_before"> ¡toma valor en ejecución!  </div>    
            </section>  
            {/*  -- Experiencia -- FIN -- */}

            {/*  -- Estudios -- INICIO -- */}
            <section id="estudios" class="row featurette pr_width_all">
              <div class="col-lg-12 no_page_break_after">
                <h1 class="titols">Estudios</h1>
              </div>  
              <div id="estudiosdet" class="container"> ¡toma valor en ejecución!  </div>  
              
              <div id="otraform" class="container"> ¡toma valor en ejecución!  </div>  

              <p><br/></p>
            </section>
            {/*  -- Estudios -- FIN -- */}

            {/*  -- Contacto -- INICIO -- */}
            <section id="contacto" class="row featurette">
              <div class="col-lg-12">
                <h1 class="titols mostrar_solo_vers_prn">Datos Personales</h1>
                <h1 class="titols mostrar_solo_vers_web">Contacto</h1>
              </div>
              <div id="contactos_prn" class="mostrar_solo_vers_prn pr_width_all">  
                <table>
                  <tbody id="contactos_prn_body"> </tbody>            
                </table>
              </div>                 
              <div id="contact_iconos" class="container mostrar_solo_vers_web">
                <div id="cont_download" class="datos_pers"> ¡toma valor en ejecución!  </div>          
              </div> 
              <div id="ult_act" class=" col-lg-12 pr_width_all pr_float_left text_center"></div>
              <div id="cont_print" class=" col-lg-12 pr_width_all pr_float_left text_center"></div>
              <p><br/></p>
            </section> 
            {/*  -- Contacto -- FIN -- */}

            {/*  -- Creditos -- INICIO -- */}
            <footer class="row featurette">  
              <div class="text_center">
                <br/>
                <small>
                  <span>Esta página ha sido desarrollada por Lluís Moreso Bosch en HTML5/CSS3/Javascript6 con ayuda de <br/>
                    <a class="evitar_salto" href="https://reactjs.org/">React<img src="recursos/react.svg" height="35"/></a> y 
                    <a class="mostrar_solo_vers_web" href="http://www.getbootstrap.com"> Twitter's Bootstrap <img src="recursos/Bootstrap.png" height="40"/></a>
                  </span>
                  <span><br/>© <a href="http://lmoreso.neocities.org/cv"> Lluís Moreso Bosch </a> 2018. Esta aplicación puede descargarse gratuitamente desde 
                    <a href="https://github.com/lmoreso/Mi-CV"> https://github.com/lmoreso/Mi-CV </a>
                  </span>
                </small>
                <br/>
                <br/>
                <a href="https://neocities.org/"><img src="recursos/neocities.png" height="50"/></a>
              </div>
            </footer> 
            {/*  -- Creditos -- FIN -- */}

          </div>
      )
  }

}

export default CvContenido
