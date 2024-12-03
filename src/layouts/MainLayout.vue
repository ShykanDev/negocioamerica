<template>
  <div class="overflow-hidden">
    <header class="fixed top-0 z-50 w-full">
      <section class="relative w-full h-full bg-white shadow">
        <h2 class="absolute bottom-0 md:font-semibold text-xs md:text-lg left-[5%]" translate="no" v-html="currentDomain" ></h2>



    <img src="../assets/shield.svg" class="absolute hidden w-10 md:block top-4 left-4" alt="">
    <img src="https://i.ibb.co/pbWyKgd/Flag-of-Mexico-svg.webp" class="absolute hidden w-10 animate-fade-up top-4 md:block left-16" alt="">
    <img src="https://i.ibb.co/f9TD2rX/Hecho-En-Mexico-logo-svg.png" class="absolute hidden w-10 animate-fade-up left-28 top-2 md:block" alt="">

    <!-- Navigation links -->
    <article class="flex items-center justify-center w-full h-full px-4 py-3 space-x-2 bg-white rela md:py-5 sm:space-x-3 md:space-x-6">
  <!-- Título con fondo rojo -->

  <div class="z-50 flex items-center h-full space-x-0 text-xs font-medium select-none md:space-x-2 sm:text-sm md:text-base">
    <!-- Loop through navigation items -->
    <div v-for="(item, index) in navItems" :key="index" class="relative w-full h-full group">

      <!-- Contenedor del enlace y submenú -->
      <div class="relative w-full h-full group">
        <!-- Reemplazado RouterLink por un <h3> -->
        <h3
          :class="{ 'border-b-white border-b-2 h-full': route.name === item.name }"
          class="flex items-center justify-center w-full h-full px-1 py-1 text-xs cursor-pointer select-none md:px-3 text-sky-950 hover:border-b-black hover:border-b-2 sm:text-sm md:text-base"
        >
          {{ item.title }}
          <i class="ml-1 scale-50 fas fa-chevron-down"></i>
        </h3>

        <!-- Submenu for each item -->
        <div
          class="absolute left-0 hidden w-40 p-2 mt-0 bg-white border border-gray-300 rounded-md shadow-lg opacity-0 group-hover:block group-hover:opacity-100 top-full"
        >
          <div v-for="(subItem, subIndex) in item.subLinks" :key="subIndex">
            <RouterLink
              :to="{name: subItem.name}"
              class="block px-3 py-1 text-xs hover:bg-gray-100"
            >
              {{ subItem.title }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>

  </section>
  <small  class="relative block py-5 text-center text-white bg-slate-800 font-parkinsans">
    <img src="https://i.ibb.co/pbWyKgd/Flag-of-Mexico-svg.webps" class="absolute left-0 w-6 bg-red-700 select-none bottom-2 md:hidden" alt="" title="logo mex">
  <div class="flex flex-wrap justify-center space-x-4 text-xs select-none sm:text-sm">
  <span class="flex items-center">
    <i class="fas fa-map-marker-alt text-sky-200"></i>
  </span>
  <a href="https://www.google.com/maps?q=Gutenberg+%23128+Anzures,+Miguel+Hidalgo,+11590+Ciudad+de+México" class="text-xs text-white md:hidden md:items-center hover:text-cyan-600" target="_blank">
    Dirección
  </a>
  <a translate="no" href="https://www.google.com/maps?q=Gutenberg+%23128+Anzures,+Miguel+Hidalgo,+11590+Ciudad+de+México" class="hidden ml-1 text-xs text-white md:flex md:items-center hover:text-cyan-600" target="_blank">
    Gutenberg #128 Anzures, Miguel Hidalgo, 11590 Ciudad de México
  </a>
  <span class="flex items-center">
    <i class="fas fa-phone text-sky-200"></i>
    <a href="tel:+525563950178" class="ml-1 text-white hover:text-cyan-600">+52 55 6395 0178</a>
  </span>
  <span class="flex items-center">
    <i class="fas fa-phone text-sky-200"></i>
    <a href="tel:+525563950179" class="ml-1 text-white hover:text-cyan-600">+52 55 6395 0179</a>
  </span>
  <span class="flex items-center">
    <i class="fas fa-envelope text-sky-200"></i>
    <a href="mailto:informes@prasadam.mx" translate="no" class="ml-1 text-white hover:text-cyan-600">informes@prasadam.mx</a>
  </span>
  <span class="flex items-center">
    <i class="text-green-500 fab fa-whatsapp"></i>
    <a href="https://wa.me/525562516687" class="ml-1 text-white hover:text-green-500">+52 5562516687</a>
  </span>
</div>

</small>


</header>


    <main class="min-h-screen mt-28 md:mt-32">
      <slot name="main"> </slot>
    </main>
    <footer v-if="route.name !== 'contact'" id="contact" class="py-10 text-gray-700 bg-slate-50 font-poppins">
  <div class="container mx-auto">
    <!-- Título -->
    <h2 class="mb-8 text-3xl font-bold text-center">Contacto</h2>

    <!-- Sección de información -->
    <div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
      <!-- Información de contacto -->
      <div class="flex flex-col justify-between">
        <div>
          <p class="mb-4 text-lg font-semibold">Ubicación:</p>
          <div class="flex items-center gap-2 mb-6">
            <i class="text-2xl text-blue-500 fas fa-map-marker-alt"></i>
            <a
              href="https://www.google.com.mx/maps/place/Gutenberg+128,+Anzures,+Miguel+Hidalgo,+11590+Ciudad+de+México,+CDMX"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 hover:underline"
              translate="no"
            >
              Gutenberg #128 Anzures, Miguel Hidalgo, 11590 Ciudad de México
            </a>
          </div>

          <p class="mb-4 text-lg font-semibold">Teléfonos:</p>
          <div class="flex flex-col gap-2 mb-6">
            <div class="flex items-center gap-2">
              <i class="text-2xl text-green-500 fas fa-phone-alt"></i>
              <a href="tel:+525563950178" class="text-gray-700 hover:text-green-500">+52 55 6395 0178</a>
            </div>
            <div class="flex items-center gap-2">
              <i class="text-2xl text-green-500 fas fa-phone-alt"></i>
              <a href="tel:+525563950179" class="text-gray-700 hover:text-green-500">+52 55 6395 0179</a>
            </div>
          </div>

          <p class="mb-4 text-lg font-semibold">Correo electrónico:</p>
          <div class="flex items-center gap-2 mb-6">
            <i class="text-2xl text-red-500 fas fa-envelope"></i>
            <a
              href="mailto:informes@prasadam.mx"
              class="text-gray-700 hover:text-red-500"
              translate="no"
            >
              informes@prasadam.mx
            </a>
          </div>

          <p class="mb-4 text-lg font-semibold">WhatsApp:</p>
          <div class="flex items-center gap-2">
            <i class="text-2xl text-green-500 fab fa-whatsapp"></i>
            <a
              href="https://wa.me/525562516687"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-700 hover:text-green-500"
            >
              +52 5562516687
            </a>
          </div>
        </div>
      </div>

      <!-- Google Maps Embed -->
      <div>
        <iframe
          class="w-full rounded-lg shadow-lg h-72"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5395970522604!2d-99.1760704!3d19.4322888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8b32758939b%3A0xf34fbd07bc47d6dd!2sGutenberg%20128%2C%20Anzures%2C%20Miguel%20Hidalgo%2C%2011590%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1730328617197!5m2!1sen!2smx"
          allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style="border: 0"
        ></iframe>
      </div>
    </div>

    <!-- Línea divisoria -->
    <hr class="my-8 border-gray-300">

    <!-- Derechos reservados -->
    <div class="text-sm text-center">
      <p class="mb-1">&copy; 2024 Todos los derechos reservados.</p>
      <p>Design: <strong class="font-josefin-sans">PACA</strong>.</p>
    </div>
  </div>
</footer>

  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const navItems = [
  {
    title: 'Inicio',
    name: 'home',
    route: '', // Ruta esperada: '/home'
    subLinks: [
      { title: 'Visión General', route: '/', name:'home' }, // Ruta esperada: '/home/vision-general'
      { title: 'Nuestra Misión', route: 'mision', name:'mision' }, // Ruta esperada: '/home/mision'
      { title: 'Proceso de Supervisión', route: 'servicios-supervision', name:'supervision' }, // Ruta esperada: '/home/proceso-supervision'
    ],
  },
  {
    title: 'Nosotros',
    name: 'spaOne',
    route: '', // Ruta esperada: '/nosotros'
    subLinks: [
      { title: 'Equipo de Supervisión', route: '/equipos-supervision', name:'supervision-teams' }, // Ruta esperada: '/nosotros/equipo-supervision'
      { title: 'Expansión Internacional', route: '/international/expansion', name:'international-expansion' }, // Ruta esperada: '/nosotros/relaciones-internacionales'
    ],
  },
  {
    title: 'Servicios',
    name: 'spaTwo',
    route: '', // Ruta esperada: '/servicios'
    subLinks: [
      { title: 'Supervisión y Verificación de Proveedores', route: '/services/supervision', name:'internation' }, // Ruta esperada: '/servicios/supervision-verificacion'
      // { title: 'Auditorías de Calidad y Cumplimiento', route: '/supervision/services' },
      // { title: 'Documentación y Reportes Transparentes', route: '/supervision/services' },
    ],
  },
  {
    title: 'Clientes',
    name: 'spaThree',
    route: '',
    subLinks: [
      { title: 'Comentarios de nuestros clientes', route: '/commments/users', name:'comments' }, // Ruta esperada: '/beneficios/confianza-seguridad'

    ],
  },
  {
    title: 'Información',
    name: 'informacion',
    route: '',
    subLinks: [
      { title: 'Historia de la Empresa', route: '/history/us', name:'history' }, // Ruta esperada: '/informacion/historia'
      { title: 'Contacto', route: '/contact', name:'contact' }, // Ruta esperada: '/informacion/contacto'
    ],
  }
]

const domains = [
  '<h2 class="animate-fade"><span class="text-sky-700">negocio</span><span class="text-red-800">america</span><span class="text-sky-950">.com</span></h2>',
  '<h2 class="animate-fade"><span class="text-sky-700">comercio</span><span class="text-red-800">america</span><span class="text-sky-950">.com</span></h2>',
  '<h2 class="animate-fade"><span class="text-sky-700">control</span><span class="text-red-800">calidad</span><span class="text-sky-950">.net</span></h2>',
  '<h2 class="animate-fade"><span class="text-sky-700">empresas</span><span class="text-red-800">america</span><span class="text-sky-950">.com</span></h2>',
  '<h2 class="animate-fade"><span class="text-sky-700">exportaciones</span><span class="text-red-800">america</span><span class="text-sky-950">.com</span></h2>',
  '<h2 class="animate-fade"><span class="text-sky-700">exports</span><span class="text-red-800">america</span><span class="text-sky-950">.net</span></h2>',
  '<h2 class="animate-fade"><span class="text-sky-700">quality</span><span class="text-red-800">control</span><span class="text-sky-950">exports</span><span class="text-sky-950">.com</span></h2>',
  '<h2 class="animate-fade"><span class="text-sky-700">disposable-</span><span class="text-red-800">compostable-</span><span class="text-sky-950">edible</span><span class="text-sky-950">.com</span></h2>'
];

// Estado reactivo
const currentDomain = ref('<h2><span class="text-sky-800">negocio</span><span class="text-red-800">america</span><span class="text-sky-950">.com</span></h2>'); // Usamos un array como el valor inicial
let intervalId: number | null = null; // Variable para guardar el ID del temporizador


const toggleDomains = ()=>{
  if(intervalId){
    clearInterval(intervalId);
  }
  currentDomain.value = domains[Math.floor(Math.random() * domains.length)];
  intervalId = setInterval(() => {
    currentDomain.value = domains[Math.floor(Math.random() * domains.length)];
  }, 3000);
}

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
onMounted(() => {
  AOS.init();
  toggleDomains();
})
</script>


<style scoped></style>
