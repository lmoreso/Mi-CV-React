
import React, { Component } from 'react';


class CvCompetencias extends Component {

  render() {
    return (
		<div class='container no_page_break'> 
		
		// Título de la competencia:		
		<div class='pr_text_center'><h3>" + elem.descripcion; 
		if (elem.leyenda) {
			 <small><sup>{" + elem.leyenda + "}</sup></small>
		};
		</h3></div>
		
		// Cuerpo de la competencia
		<div>	
		if (vers_print) {
			if (elem.formato === "largo") {
				shtml = shtml + pinta_comp_1col(arrayelem, elem.tipo);
			} else {
				shtml = shtml + pinta_comp_2col(arrayelem, elem.tipo);
			};		
		} else {			
      if (elem.formato === "largo") {
        shtml = shtml + pinta_comp_panel_largo(arrayelem, elem.tipo);
      } else {
        shtml = shtml + pinta_comp_panel_corto(arrayelem, elem.tipo);
      };    
		};			
		</div>
		
		// Termino el div principal
		</div> 	

    )
  }
}

export default CvCompetencias;


