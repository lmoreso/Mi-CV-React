
import React, { Component } from 'react';


function CadenaConCR (props) {

	if (props.descripcion && props.descripcion.length > 0) {
		return ( <span>  {props.descripcion} <br/>  </span> )
	} else {
		return ( null )
	}
}

class CvCompetencias extends Component {
  render() {
    if (this.props.un_tipo_competencia === this.props.una_competencia.tipo) {
        var estilopanel;
        if (this.props.una_competencia.nivel >= 5) {estilopanel='primary'} 
        else if (this.props.una_competencia.nivel === 4) {estilopanel='success'}
        else if (this.props.una_competencia.nivel === 3) {estilopanel='info'}
        else if (this.props.una_competencia.nivel === 2) {estilopanel='warning'}
        else {estilopanel='danger'}

	    if (this.props.formato_competencia == "largo") {
		    return (
	            <div class={'panel panel-' + estilopanel + ' conocimientos no_page_break'}>
		            <div class='panel-heading'>
		            	<h3 class='panel-title'> {this.props.una_competencia.competencia} <sup> {this.props.una_competencia.nivel} </sup></h3>
		            </div>
		            <div class='panel-body'>
		            	<CadenaConCR descripcion={this.props.una_competencia.descripcion} />
		            	{
		                    this.props.una_competencia.tareas.map((una_tarea) => {
		                      return ( <small>&#9899; {una_tarea} <br/></small> )
	                    	})
	                    }
		            </div>
	            </div>
		    )
		} else {
		    return (
	            <div class={'panel panel-' + estilopanel + ' idiomas no_page_break'}>
		            <div class='panel-heading'>
		            	<h3 class='panel-title'> {this.props.una_competencia.competencia} <sup> {this.props.una_competencia.nivel} </sup></h3>
		            </div>
		            <div class='panel-body'>
		            	<CadenaConCR descripcion={this.props.una_competencia.descripcion} />
		            </div>
	            </div>
		    )			
		}
	} else {
		return (
			null
		)
	}
  }
}

class CvTiposCompetencia extends Component {

  constructor(props) {
    super(props);
    if (this.props.un_tipo_competencia.leyenda) {
    	this.leyenda = "  [" + this.props.un_tipo_competencia.leyenda + "]" 
    } else {
    	this.leyenda = ""
    }
  
  }

  render() {
    return (
		<div class='container no_page_break'> 	
			{/* Titulo de la Competencia */}
			<div class='pr_text_center'>
				<h3> 
					{this.props.un_tipo_competencia.descripcion}
					<small><sup>{this.leyenda}</sup></small>
				</h3>
			</div>

			{/* Listado de esa Competencia */}
			<div>	
                  {
                    this.props.lista_competencias.map((una_competencia) => {
                      return (
                        <CvCompetencias una_competencia = { una_competencia }
                        				un_tipo_competencia = { this.props.un_tipo_competencia.tipo} 
                        				formato_competencia = { this.props.un_tipo_competencia.formato}/>
                      )
                    })
                  }
			</div>
		</div> 	

    )
  }
}

export default CvTiposCompetencia;


