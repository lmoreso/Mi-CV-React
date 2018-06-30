import React from 'react'
import * as cv from './CvDatos';


class CvCabecera extends React.Component {

  constructor(props) {
    super(props);
    this.lit_en_desarrollo = '';
    if (cv.en_desarrollo) {
      this.lit_en_desarrollo = '(en construcción ...)';
    }
    
  }

  render() {
      return (
        <div>
             
          {/*  -- Foto Superior -- INICIO -- */}    
          <div id="banner-sup" class="carousel-inner">
            <div class="item active">
              <div id="divtit" class="container"> 
                <img src="datos/foto_fondo.jpg" alt="" width="100%" height="100%"></img>
                <div class='carousel-caption'>
                  <h1 class='lletrabanner'>{cv.cvdat.nombre}</h1>
                  <h3 class='lletrabanner'>{cv.cvdat.titulo}</h3>
                  <h4 class='lletrabanner'> {this.lit_en_desarrollo} </h4>
                  <p><br/><br/></p>
                  <p><a href= {cv.get_datos_pers('LinkedIn')} >
                  <img src='https://static.licdn.com/scds/common/u/img/webpromo/btn_viewmy_160x33_es_ES.png?locale=' width='160' height='33' border='0' alt=''></img>
                  </a></p>
                </div>"
              </div>
            </div>
          </div>
          {/*  -- Foto Superior -- FIN -- */}    

          {/*  -- Menus -- INICIO -- */}    
          <div class="navbar-wrapper">
            <div class="container">
              <div class="navwrapper">
                <div class="navbar navbar-inverse navbar-static-top">
                  <div class="container">
                    <div id="navbar-header" class="navbar-header">
                      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                    </div>
                    <div class="navbar-collapse collapse">
                      <ul id="ul_menus" class="nav navbar-nav">
                        <li class='menuItem'><a href='#extracto'>Sobre Mi</a></li>"
                        <li class="menuItem"><a href="#competencias">Competencias</a></li>   
                        <li class="menuItem"><a href="#experiencia">Experiencia</a></li>
                        <li class="menuItem"><a href="#estudios">Estudios</a></li>
                        <li class='menuItem'><a href='#contacto'>Datos personales</a></li>
                      </ul>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
          {/*  -- Menus -- FIN -- */}
        </div>
      )
  }

}

export default CvCabecera
