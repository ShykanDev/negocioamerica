<template>
  <div class="overflow-hidden">
    <header class="fixed top-0 z-50 w-full">
  <section class="w-full h-full bg-white shadow">
    <img src="../assets/shield.svg" class="hidden md:block absolute w-10 top-4 left-4" alt="">
    <!-- Navigation links -->
    <article class="flex items-center justify-center w-full h-full px-4 py-3 md:py-5 space-x-2 sm:space-x-3 md:space-x-6 bg-white">
  <!-- Título con fondo rojo -->
  <!-- <h2 class="flex items-center justify-center h-full px-4 text-2xl font-bold">comercioamerica.com</h2> -->

  <div class="flex items-center h-full md:space-x-2 space-x-0 select-none z-50  text-xs sm:text-sm md:text-base font-medium">
    <!-- Loop through navigation items -->
    <div v-for="(item, index) in navItems" :key="index" class="relative w-full h-full group">
      
      <!-- Contenedor del enlace y submenú -->
      <div class="relative w-full h-full group">
        <!-- Reemplazado RouterLink por un <h3> -->
        <h3
          :class="{ 'border-b-white border-b-2 h-full': route.name === item.name }"
          class="flex items-center justify-center w-full h-full px-1 md:px-3 py-1 cursor-pointer select-none text-sky-950 hover:border-b-black hover:border-b-2 text-xs sm:text-sm md:text-base"
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
              :to="subItem.route"
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
  <small  class="block py-5 relative text-center text-white bg-slate-800 font-parkinsans">
    <img src="../assets/shieldWhite.svg" class="absolute w-6 bottom-2 md:hidden left-0 select-none" alt="">
  <div class="flex justify-center space-x-4 flex-wrap select-none text-xs sm:text-sm">
  <span class="flex items-center">
    <i class="fas fa-map-marker-alt text-sky-200"></i>
  </span>
  <a href="https://www.google.com/maps?q=Gutenberg+%23128+Anzures,+Miguel+Hidalgo,+11590+Ciudad+de+México" class=" md:hidden md:items-center text-white hover:text-cyan-600 text-xs" target="_blank">
    Dirección
  </a>
  <a href="https://www.google.com/maps?q=Gutenberg+%23128+Anzures,+Miguel+Hidalgo,+11590+Ciudad+de+México" class="ml-1 hidden md:flex md:items-center text-white hover:text-cyan-600 text-xs" target="_blank">
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
    <a href="mailto:informes@prasadam.mx" class="ml-1 text-white hover:text-cyan-600">informes@prasadam.mx</a>
  </span>
  <span class="flex items-center">
    <i class="text-green-500 fab fa-whatsapp"></i>
    <a href="https://wa.me/525562516687" class="ml-1 text-white hover:text-green-500">+52 5562516687</a>
  </span>
</div>

</small>


</header>


    <main class="min-h-screen mt-28  md:mt-32">
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
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const navItems = [
  {
    title: 'Inicio',
    name: 'home',
    route: '', // Ruta esperada: '/home'
    subLinks: [
      { title: 'Visión General', route: '/' }, // Ruta esperada: '/home/vision-general'
      { title: 'Nuestra Misión', route: 'mision' }, // Ruta esperada: '/home/mision'
      { title: 'Proceso de Supervisión', route: 'servicios-supervision' }, // Ruta esperada: '/home/proceso-supervision'
    ],
  },
  {
    title: 'Nosotros',
    name: 'spaOne',
    route: '', // Ruta esperada: '/nosotros'
    subLinks: [
      { title: 'Equipo de Supervisión', route: '/equipos-supervision' }, // Ruta esperada: '/nosotros/equipo-supervision'
      { title: 'Expansión Internacional', route: '/international/expansion' }, // Ruta esperada: '/nosotros/relaciones-internacionales'
    ],
  },
  {
    title: 'Servicios',
    name: 'spaTwo',
    route: '', // Ruta esperada: '/servicios'
    subLinks: [
      { title: 'Supervisión y Verificación de Proveedores', route: '/services/supervision' }, // Ruta esperada: '/servicios/supervision-verificacion'
      // { title: 'Auditorías de Calidad y Cumplimiento', route: '/supervision/services' },
      // { title: 'Documentación y Reportes Transparentes', route: '/supervision/services' }, 
    ],
  },
  {
    title: 'Clientes',
    name: 'spaThree',
    route: '', 
    subLinks: [
      { title: 'Comentarios de nuestros clientes', route: '/commments/users' }, // Ruta esperada: '/beneficios/confianza-seguridad'
  
    ],
  },
  {
    title: 'Información',
    name: 'informacion',
    route: '', 
    subLinks: [
      { title: 'Historia de la Empresa', route: '/history/us' }, // Ruta esperada: '/informacion/historia'
      { title: 'Contacto', route: '/contact' }, // Ruta esperada: '/informacion/contacto'
    ],
  }
]

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
onMounted(() => {
  AOS.init();
})
</script>


<style scoped></style>
