import cvdat from './cv_datos.json';

var en_desarrollo = true;

function get_datos_pers(literal) {
  let retVal = undefined;
  for (let i in cvdat.datos_pers) {
    if (cvdat.datos_pers[i].literal === literal) {
      if (cvdat.datos_pers[i].url) {
        retVal = cvdat.datos_pers[i].url;
      } else {
        retVal = cvdat.datos_pers[i].valor;
      }
      break;
    }
  };
  return retVal;
};


export {get_datos_pers, cvdat, en_desarrollo};