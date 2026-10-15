'use strict';
// Configuración: crear la casilla real ANTES de comenzar a recibir consultas.
// El envío de esta web está basado en mailto (sin backend ni costo):
// el visitante debe confirmar el envío en su propia aplicación de correo.
const CONTACT_EMAIL = 'orzenenergy.comercial@gmail.com'; // PENDIENTE DE CREAR Y VERIFICAR

const intro=document.getElementById('intro');
const hideIntro=()=>{
  if(!intro||intro.classList.contains('is-done'))return;
  intro.classList.add('is-done');
  document.body.classList.remove('intro-active');
  try{sessionStorage.setItem('orzen-intro-v2','seen')}catch(e){}
  window.setTimeout(()=>intro.remove(),1000);
};
if(intro){
  let alreadySeen=false;
  try{alreadySeen=sessionStorage.getItem('orzen-intro-v2')==='seen'}catch(e){}
  if(alreadySeen||window.matchMedia('(prefers-reduced-motion: reduce)').matches){hideIntro()}
  else{
    document.body.classList.add('intro-active');
    document.getElementById('skip-intro')?.addEventListener('click',hideIntro);
    window.setTimeout(hideIntro,3500);
  }
}
const nav=document.getElementById('nav');
const toggle=document.querySelector('.menu-button');
toggle?.addEventListener('click',()=>{
 const expanded=toggle.getAttribute('aria-expanded')==='true';
 toggle.setAttribute('aria-expanded',String(!expanded));
 toggle.setAttribute('aria-label',expanded?'Abrir menú':'Cerrar menú');
 nav?.classList.toggle('is-open',!expanded);
});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
 nav.classList.remove('is-open');toggle?.setAttribute('aria-expanded','false');toggle?.setAttribute('aria-label','Abrir menú');
}));
const yr=document.getElementById('year');if(yr)yr.textContent=new Date().getFullYear();
const leadForm=document.getElementById('lead-form');
leadForm?.addEventListener('submit',event=>{
 event.preventDefault();
 const status=document.getElementById('form-status');
 if(!leadForm.reportValidity()){
   if(status)status.textContent='Revisá los campos obligatorios y la autorización para contactarte.';
   return;
 }
 const values=new FormData(leadForm);
 const get=name=>String(values.get(name)||'').trim();
 const subject=`Consulta ORZEN Energy | ${get('empresa')}`;
 const body=[
  'Hola, quisiera solicitar una evaluación de mi necesidad energética.',
  '',
  `Nombre: ${get('nombre')}`,
  `Empresa: ${get('empresa')}`,
  `Provincia: ${get('provincia')}`,
  `Localidad: ${get('localidad')}`,
  `Teléfono: ${get('telefono')}`,
  `Email: ${get('email')||'No informado'}`,
  `Actividad: ${get('actividad')}`,
  `Combustible actual: ${get('combustible')||'No informado'}`,
  '',
  'Necesidad:',get('necesidad'),'',
  'Autorizo a ORZEN Energy a contactarme y a compartir estos datos con un proveedor energético para evaluar esta solicitud.'
 ].join('\n');
 // No afirma que el correo fue enviado: solo lo prepara.
 if(status)status.textContent='Se abrirá tu aplicación de correo. Confirmá el envío allí para que recibamos tu consulta.';
 window.location.href=`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
