<template>
  <div class="">
    <header>
      <section class="w-full bg-white">
        <div class="flex justify-center w-full py-2 space-x-4 text-lg bg-white font-josefin-sans">
          <RouterLink
            :class="{ 'border-b-black border-b-2 ': route.name === 'home' }"
            :to="{ name: 'home' }"
            >Inicio</RouterLink
          >
          <RouterLink
            :class="{ 'border-b-black border-b-2': route.name === 'spaOne' }"
            :to="{ name: 'spaOne' }"
            >Beneficios</RouterLink
          >
          <RouterLink
            :class="{ 'border-b-black border-b-2': route.name === 'spaTwo' }"
            :to="{ name: 'spaTwo' }"
            >Ingredientes</RouterLink
          >
          <RouterLink
            :class="{ 'border-b-black border-b-2': route.name === 'spaThree' }"
            :to="{ name: 'spaThree' }"
            >Preguntas</RouterLink
          >
          <RouterLink
            :class="{ 'border-b-black border-b-2': route.name === 'non' }"
            :to="{ name: 'home' }"
            >Prasadam</RouterLink
          >
        </div>
        <div
          class="flex items-center justify-around py-1 text-xl text-white font-poppins bg-slate-700"
        >
          <img class="w-12" src="../assets/ssl-certificate.png" alt="" />
          <p class="font-parkinsans">paginaprasadam.com</p>
          <img class="w-12" src="https://medicinaparaansiedad.com/img/logo.png" alt="" />
        </div>
      </section>
    </header>
    <main>
      <slot name="main"> </slot>
    </main>
    <footer
      class="relative flex flex-col items-center w-full p-4 text-white bg-sky-800 bg-opacity-85 font-poppins"
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
</script>

<style scoped></style>
