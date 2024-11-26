<template>
  <div class="overflow-hidden">
    <header class="fixed top-0 z-50 w-full">
  <section class="w-full h-full bg-white shadow">
    <!-- Navigation links -->
    <article class="flex items-center justify-center w-full h-full px-10 py-5 space-x-20 bg-white">
      <!-- Título con fondo rojo -->
      <!-- <h2 class="flex items-center justify-center h-full px-4 text-2xl font-bold">comercioamerica.com</h2> -->
      
      <div class="flex items-center h-full space-x-6 text-xl font-medium">
        <!-- Loop through navigation items -->
        <div v-for="(item, index) in navItems" :key="index" class="relative w-full h-full group">
          
          <!-- Contenedor del enlace y submenú -->
          <div class="relative w-full h-full group">
            <!-- Reemplazado RouterLink por un <h3> -->
            <h3
              :class="{ 'border-b-white border-b-2 h-full': route.name === item.name }"
              class="flex items-center w-full h-full px-4 py-2 cursor-pointer text-sky-950 hover:border-b-black hover:border-b-2"
            >
              {{ item.title }}
            </h3>

            <!-- Submenu for each item -->
            <div
              class="absolute left-0 hidden w-48 p-3 mt-0 bg-white border border-gray-300 rounded-md shadow-lg opacity-0 group-hover:block group-hover:opacity-100 top-full"
            >
              <div v-for="(subItem, subIndex) in item.subLinks" :key="subIndex">
                <RouterLink
                  :to="subItem.route"
                  class="block px-4 py-2 text-sm hover:bg-gray-100"
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
</header>

    <main class="min-h-screen mt-20">
      <slot name="main"> </slot>
    </main>
    <footer
      class="relative flex flex-col items-center w-full p-4 text-white bg-sky-950 font-poppins"
    >
      <!-- Título de la sección -->
      <h2 class="mb-4 text-3xl font-bold text-center lg:text-5xl">Contacto</h2>

      <!-- Imagen de seguridad SSL -->
      <img
        class="absolute w-10 top-2 right-4 lg:w-12"
        src="https://shykandev.github.io/medicinaparadiabetes/assets/ssl-Cjd7i8VT.png"
        alt="SSL Seguridad"
      />

      <!-- Dirección -->
      <div class="flex flex-col items-center mb-6 text-center">
        <div class="flex items-center gap-2">
          <v-icon name="md-locationon" class="text-3xl lg:text-4xl" scale="1.5"></v-icon>
          <a
            href="https://www.google.com.mx/maps/place/Gutenberg+128,+Anzures,+Miguel+Hidalgo,+11590+Ciudad+de+México,+CDMX"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-bold lg:text-lg hover:underline"
          >
            Gutenberg #128 Anzures, Miguel Hidalgo, 11590 Ciudad de México
          </a>
        </div>
        <iframe
          class="w-full h-48 mt-4 lg:h-72"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5395970522604!2d-99.1760704!3d19.4322888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8b32758939b%3A0xf34fbd07bc47d6dd!2sGutenberg%20128%2C%20Anzures%2C%20Miguel%20Hidalgo%2C%2011590%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1730328617197!5m2!1sen!2smx"
          allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style="border: 0"
        ></iframe>
      </div>

      <!-- Sección de contactos -->
      <section class="flex flex-wrap justify-around w-full gap-4 mb-6 text-center">
        <div class="flex flex-col items-center">
          <v-icon name="bi-telephone-fill" class="mb-1 text-3xl"></v-icon>
          <a href="tel:+525563950178" class="text-sm font-bold lg:text-lg hover:text-orange-500"
            >+52 55 6395 0178</a
          >
        </div>
        <div class="flex flex-col items-center">
          <v-icon name="bi-telephone-fill" class="mb-1 text-3xl"></v-icon>
          <a href="tel:+525563950179" class="text-sm font-bold lg:text-lg hover:text-orange-500"
            >+52 55 6395 0179</a
          >
        </div>
        <div class="flex flex-col items-center">
          <v-icon name="md-email" class="mb-1 text-3xl"></v-icon>
          <a
            href="mailto:informes@prasadam.mx"
            class="text-sm font-bold lg:text-lg hover:text-orange-500"
            >informes@prasadam.mx</a
          >
        </div>
        <div class="flex flex-col items-center">
          <v-icon name="co-whatsapp" class="mb-1 text-3xl"></v-icon>
          <a
            href="https://wa.me/525562516687"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-bold lg:text-lg hover:text-orange-500"
            >+52 5562516687</a
          >
        </div>
      </section>

      <!-- Pie de página -->
      <div class="text-center">
        <p class="mb-1 text-sm font-bold lg:text-lg">
          Todos los derechos reservados &copy; {{ new Date().getFullYear() }}
        </p>
        <p class="text-sm lg:text-lg">Design: <strong>PACA</strong></p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
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
      { title: 'Más de 30 Años de Experiencia', route: '' }, // Ruta esperada: '/nosotros/experiencia'
      { title: 'Equipo de Supervisión', route: '' }, // Ruta esperada: '/nosotros/equipo-supervision'
      { title: 'Relaciones Internacionales', route: '' }, // Ruta esperada: '/nosotros/relaciones-internacionales'
    ],
  },
  {
    title: 'Servicios',
    name: 'spaTwo',
    route: '', // Ruta esperada: '/servicios'
    subLinks: [
      { title: 'Supervisión y Verificación de Proveedores', route: '' }, // Ruta esperada: '/servicios/supervision-verificacion'
      { title: 'Auditorías de Calidad y Cumplimiento', route: '' }, // Ruta esperada: '/servicios/auditorias-calidad'
      { title: 'Documentación y Reportes Transparentes', route: '' }, // Ruta esperada: '/servicios/documentacion-reportes'
    ],
  },
  {
    title: 'Beneficios',
    name: 'spaThree',
    route: '', 
    subLinks: [
      { title: 'Confianza y Seguridad', route: '' }, // Ruta esperada: '/beneficios/confianza-seguridad'
      { title: 'Mitigación de Riesgos en la Cadena de Suministro', route: '' }, // Ruta esperada: '/beneficios/mitigacion-riesgos'
      { title: 'Control de Calidad en Tiempo Real', route: '' }, // Ruta esperada: '/beneficios/control-calidad'
    ],
  },
  {
    title: 'Información',
    name: 'informacion',
    route: '', 
    subLinks: [
      { title: 'Historia de la Empresa', route: '' }, // Ruta esperada: '/informacion/historia'
      { title: 'Nuestros Valores', route: '' }, // Ruta esperada: '/informacion/valores'
      { title: 'Testimonios de Clientes Satisfechos', route: '' }, // Ruta esperada: '/informacion/testimonios'
    ],
  }
]

</script>


<style scoped></style>
