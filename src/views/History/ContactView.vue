<template>
 <MainLayout>
    <template #main>
        <section class="p-6 mx-auto mt-10 bg-white rounded-lg shadow-md max-w-7xl font-poppins">
   <h1 class="text-4xl font-bold text-center text-emerald-800">
    Contáctenos
   </h1>
   <p class="mt-2 text-center text-gray-600">
    Comuníquese con nosotros fácilmente
   </p>
   <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
    <div>
     <h2 class="text-2xl font-semibold text-gray-800">
      Ubicación
     </h2>
     <p class="mt-2 text-gray-600">
      <i class="text-green-500 fas fa-map-marker-alt">
      </i>
      Gutenberg #128 Anzures, Miguel Hidalgo, 11590 Ciudad de México
     </p>
     <h2 class="mt-6 text-2xl font-semibold text-gray-800">
      Teléfonos
     </h2>
     <div class="grid grid-cols-1 gap-4">
      <div class="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
       <img alt="Mujer en un centro de llamadas con auriculares" class="w-12 h-12 rounded-full" height="50" src="https://storage.googleapis.com/a1aa/image/TaLhVqBkp1arAhXW71yqRYCVbj5QQk7G8QBFISeDq9BBUq6JA.jpg" width="50"/>
       <div class="ml-4">
        <p class="text-gray-600">
         <i class="text-green-500 fas fa-phone-alt">
         </i>
         <a href="tel:+525563950178" class="text-gray-600 hover:text-green-500">+52 55 6395 0178</a>
        </p>
        <p class="text-gray-600">
         Llámanos si necesitas ayuda
        </p>
       </div>
      </div>
      <div class="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
       <img alt="Hombre en un centro de llamadas con auriculares" class="w-12 h-12 rounded-full" height="50" src="https://storage.googleapis.com/a1aa/image/dGfGqJuOONTtaqdfNGA3Dl0PrbOWx07oKVoWpEp8uuWEoU1TA.jpg" width="50"/>
       <div class="ml-4">
        <p class="text-gray-600">
         <i class="text-green-500 fas fa-phone-alt">
         </i>
         <a href="tel:+525563950179" class="text-gray-600 hover:text-green-500">+52 55 6395 0179</a>
        </p>
        <p class="text-gray-600">
         Llámanos si necesitas ayuda
        </p>
       </div>
      </div>
     </div>
     <h2 class="mt-6 text-2xl font-semibold text-gray-800">
      Correo Electrónico
     </h2>
     <p class="mt-2 text-gray-600">
      <i class="text-2xl text-green-500 fas fa-envelope">
      </i>
      <a href="mailto:informes@prasadam.mx" class="text-gray-600 hover:text-green-500">informes@prasadam.mx</a>
     </p>
     <h2 class="mt-6 text-2xl font-semibold text-gray-800">
      WhatsApp
     </h2>
     <a class="inline-block px-4 py-2 mt-2 font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600" href="https://wa.me/525562516687">
      <i class="fab fa-whatsapp">
      </i>
      Iniciar Chat en WhatsApp
     </a>
     <h2 class="mt-6 text-2xl font-semibold text-gray-800">
      Horarios de Atención
     </h2>
     <p class="mt-2 text-gray-600">
      Lunes a Viernes: 9:00 AM - 6:00 PM
     </p>
    </div>
    <div>
     <h2 class="text-2xl font-semibold text-gray-800">
      Mapa Interactivo
     </h2>
     <iframe allowfullscreen="true" class="w-full h-64 mt-4 rounded-lg shadow-md" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.315073073073!2d-99.1760456846826!3d19.43260798688856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3e1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sGutenberg%20%23128%2C%20Anzures%2C%20Miguel%20Hidalgo%2C%2011590%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1633021234567!5m2!1sen!2sus">
     </iframe>
    </div>
   </div>
  </section>

    </template>
 </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped>

</style>