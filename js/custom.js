//Animación de reveal
function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      //Con getBoundingClientRect recogemos el tamaño del elemento y su posición relativa respecto a la ventana
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 95;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  reveal();


//Navbar reactivo a la location
const activePage = window.location;
const navLinks = document.querySelectorAll('.nav-link').
forEach(link => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add('active');
  }
})


function terminos(){
  alert('Aviso legal y Protección de datosPropiedad de la web' +
  'MANUEL ÁLVAREZ SÁNCHEZCIF: 77805931JCALLE LUÍS FUENTES BEJARANO, ' +
  '20 – 41020 - SEVILLAProtección de datos:Cumplimiento de Ley' +
   '15/1999 de Protección de datos de carácter personal, '+
   'MANUEL ÁLVAREZ SÁNCHEZ, le informa de que los datos que se recaben' +
    'a través de este sitio Web se utilizarán con la única finalidad ' +
    'de gestionar las consultas on-line, tramitar los pedidos y '+
    'peticiones de información relacionadas con uno o varios de los' +
    'servicios que se ofrecen, así como para el envío de información' +
    'comercial de MANUEL ÁLVAREZ SÁNCHEZ por cualquier medio de'+
   'comunicación, incluyendo la electrónica.Si no desea recibir' +
    'comunicaciones comerciales, por favor, háganoslo saber enviando'+
    'un escrito a la siguiente dirección: CALLE LUÍS FUENTES BEJARANO,'+
      '20 – 41020 - SEVILLA ESPAÑA o en la dirección de correo' +
      'INFO@GESTORMAS.ESPUBLICIDADEn previsión de la Ley de Servicios' +
      'de la Sociedad de la Información y de Comercio Electrónico y' +
      'de la vigente Ley Orgánica de Protección de Datos, le informamos'+
       'de que su dirección de e-mail figura en la base de datos de' +
       'nuestra empresa para el envío de información de nuestros' +
       'servicios, formando parte de un fichero propiedad de MANUEL' +
       'ÁLVAREZ SÁNCHEZ. Igualmente le informamos de que podrá ejercitar'+
        'sus derechos de acceso, cancelación o modificación de' +
        'sus datos en la dirección: CALLE LUÍS FUENTES BEJARANO, 20 –'+
         '41020 - SEVILLA ESPAÑA o en la dirección de correo'+
         'INFO@GESTORMAS.ESSi desea cancelar su suscripción, o no' +
         'recibir más comunicaciones comerciales, háganoslo saber a'+
         'través de carta o e-mail, junto con la fotocopia de su DNI a '+
         'la dirección indicada en el párrafo' +
  'anterior o remitiendo el escrito a la dirección INFO@GESTORMAS.ES")'
)};


function JSalert(){
	swal('Aviso legal y Protección de datosPropiedad de la web' +
  'MANUEL ÁLVAREZ SÁNCHEZCIF: 77805931JCALLE LUÍS FUENTES BEJARANO, ' +
  '20 – 41020 - SEVILLAProtección de datos:Cumplimiento de Ley' +
   '15/1999 de Protección de datos de carácter personal, '+
   'MANUEL ÁLVAREZ SÁNCHEZ, le informa de que los datos que se recaben' +
    'a través de este sitio Web se utilizarán con la única finalidad ' +
    'de gestionar las consultas on-line, tramitar los pedidos y '+
    'peticiones de información relacionadas con uno o varios de los' +
    'servicios que se ofrecen, así como para el envío de información' +
    'comercial de MANUEL ÁLVAREZ SÁNCHEZ por cualquier medio de'+
   'comunicación, incluyendo la electrónica.Si no desea recibir' +
    'comunicaciones comerciales, por favor, háganoslo saber enviando'+
    'un escrito a la siguiente dirección: CALLE LUÍS FUENTES BEJARANO,'+
      '20 – 41020 - SEVILLA ESPAÑA o en la dirección de correo' +
      'INFO@GESTORMAS.ESPUBLICIDADEn previsión de la Ley de Servicios' +
      'de la Sociedad de la Información y de Comercio Electrónico y' +
      'de la vigente Ley Orgánica de Protección de Datos, le informamos'+
       'de que su dirección de e-mail figura en la base de datos de' +
       'nuestra empresa para el envío de información de nuestros' +
       'servicios, formando parte de un fichero propiedad de MANUEL' +
       'ÁLVAREZ SÁNCHEZ. Igualmente le informamos de que podrá ejercitar'+
        'sus derechos de acceso, cancelación o modificación de' +
        'sus datos en la dirección: CALLE LUÍS FUENTES BEJARANO, 20 –'+
         '41020 - SEVILLA ESPAÑA o en la dirección de correo'+
         'INFO@GESTORMAS.ESSi desea cancelar su suscripción, o no' +
         'recibir más comunicaciones comerciales, háganoslo saber a'+
         'través de carta o e-mail, junto con la fotocopia de su DNI a '+
         'la dirección indicada en el párrafo' +
  'anterior o remitiendo el escrito a la dirección INFO@GESTORMAS.ES")'
)};