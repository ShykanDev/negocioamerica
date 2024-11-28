<template>
    <MainLayout>
        <template #main>
            <section class="bg-white shadow">
        <div class="container px-4 py-6 mx-auto">
            <h1 class="text-5xl font-bold text-center text-sky-950">Historia</h1>
            <p class="text-lg text-center text-gray-600 font-parkinsans">Más de 30 años de experiencia en importaciones desde México</p>
        </div>
    </section>

    <section class="container px-4 py-10 mx-auto font-poppins">
        <section class="mb-10">
            <h2 class="mb-4 text-2xl font-bold">Trayectoria y Experiencia</h2>
            <p class="text-lg leading-relaxed">Con más de 30 años en el sector de importaciones, nuestra empresa ha ayudado a empresas de todo el mundo a importar productos mexicanos, garantizando calidad, cumplimiento y satisfacción en cada operación. Nuestra experiencia abarca una amplia gama de industrias, desde alimentos y bebidas hasta productos industriales y artesanías.</p>
            <p class="mt-4 text-lg leading-relaxed">A lo largo de los años, hemos desarrollado relaciones sólidas con proveedores y clientes, lo que nos permite ofrecer un servicio personalizado y adaptado a las necesidades específicas de cada empresa. Nuestro equipo de expertos está siempre disponible para asesorar y guiar a nuestros clientes en cada paso del proceso de importación.</p>
        </section>

        <section class="mb-10">
            <h2 class="mb-4 text-2xl font-bold">Servicios Esenciales</h2>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div class="p-6 bg-white rounded-lg shadow-lg">
                    <i class="mb-4 text-4xl text-blue-500 fas fa-eye"></i>
                    <h3 class="mb-2 text-xl font-bold">Supervisión Física</h3>
                    <p>Supervisamos físicamente los productos para asegurar que cumplan con los estándares de calidad. Nuestro equipo realiza inspecciones detalladas en cada etapa del proceso de producción y envío.</p>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-lg">
                    <i class="mb-4 text-4xl text-green-500 fas fa-check-circle"></i>
                    <h3 class="mb-2 text-xl font-bold">Control de Calidad</h3>
                    <p>Implementamos rigurosos controles de calidad para garantizar la satisfacción de nuestros clientes. Utilizamos métodos de prueba avanzados y auditorías regulares para asegurar que cada producto cumpla con los requisitos especificados.</p>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-lg">
                    <i class="mb-4 text-4xl text-yellow-500 fas fa-search"></i>
                    <h3 class="mb-2 text-xl font-bold">Auditorías</h3>
                    <p>Realizamos auditorías exhaustivas para asegurar el cumplimiento de todas las normativas. Nuestro equipo de auditores está capacitado para identificar y corregir cualquier problema potencial antes de que los productos lleguen a su destino final.</p>
                </div>
                <div class="p-6 bg-white rounded-lg shadow-lg">
                    <i class="mb-4 text-4xl text-red-500 fas fa-shield-alt"></i>
                    <h3 class="mb-2 text-xl font-bold">Aseguramiento de la Cadena de Suministro</h3>
                    <p>Garantizamos la integridad y seguridad de la cadena de suministro en cada etapa del proceso. Trabajamos estrechamente con nuestros socios logísticos para asegurar que los productos se entreguen a tiempo y en perfectas condiciones.</p>
                </div>
            </div>
        </section>

        <section class="mb-10">
            <h2 class="mb-4 text-2xl font-bold">Confianza y Transparencia</h2>
            <p class="text-lg leading-relaxed">Nos comprometemos con la confianza y la transparencia en cada operación, asegurando que todos los productos cumplan con los estándares internacionales. Proporcionamos informes detallados y actualizaciones regulares a nuestros clientes para mantenerlos informados en todo momento.</p>
            <p class="mt-4 text-lg leading-relaxed">Nuestra política de puertas abiertas permite a nuestros clientes visitar nuestras instalaciones y observar de primera mano nuestros procesos de control de calidad y supervisión. Creemos que la transparencia es clave para construir relaciones duraderas y exitosas.</p>
        </section>

        <section class="mb-10">
            <h2 class="mb-4 text-2xl font-bold">Cobertura y Capacidad</h2>
            <p class="text-lg leading-relaxed">Operamos en toda la República Mexicana, manejando productos de diversos sectores y garantizando entregas a tiempo. Nuestra red de distribución abarca desde las principales ciudades hasta las regiones más remotas, asegurando que podamos satisfacer las necesidades de nuestros clientes sin importar su ubicación.</p>
            <p class="mt-4 text-lg leading-relaxed">Contamos con una flota de transporte moderna y eficiente, así como con almacenes estratégicamente ubicados para optimizar el proceso de distribución. Nuestro equipo logístico está altamente capacitado para manejar cualquier desafío que pueda surgir durante el transporte de mercancías.</p>
        </section>

        <section class="mb-10">
            <h2 class="mb-4 text-2xl font-bold">Adaptabilidad y Soluciones Alternativas</h2>
            <p class="text-lg leading-relaxed">Ofrecemos opciones de proveedores alternativos en caso de desagrado, asegurando siempre alternativas confiables. Entendemos que cada cliente tiene necesidades únicas, por lo que trabajamos diligentemente para encontrar soluciones que se adapten a sus requisitos específicos.</p>
            <p class="mt-4 text-lg leading-relaxed">Nuestro equipo de sourcing está constantemente buscando nuevos proveedores y productos innovadores para ofrecer a nuestros clientes. Si un proveedor no cumple con las expectativas, rápidamente encontramos alternativas que mantengan la calidad y el cumplimiento de los estándares.</p>
        </section>

        <section class="text-center">
            <RouterLink to="/contact" class="px-6 py-3 text-white transition duration-300 bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600">Contáctenos</RouterLink>
        </section>
    </section>
        </template>
    </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped>

</style>