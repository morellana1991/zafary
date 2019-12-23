

var btn = window.document.querySelector('#buton');


function IngresoSistema() {


  var usu =  window.document.querySelector('#us_name');
  var pss = window.document.querySelector('#pasw');
 
  var input1  = usu.value;
  var input2  = pss.value;

if (input1 === 'ejemplo@gmail.com' && input2 === '123456' ){
  console.log( 'Iniciando Sesión.......');
}
else{
  console.log('Email y/o Contraseña Incorrectos');
  
}

}

btn.addEventListener('click',IngresoSistema);