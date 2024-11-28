<template>
    <!-- Hero Section -->
<!-- Hero Section -->
<section class="relative h-screen bg-center bg-cover" style="background-image: url('https://storage.googleapis.com/a1aa/image/wRKTDXetq8UEbiDi4sMOoqfpIGAguCRjYSRnAAwaKp73sw0TA.jpg');">
  <div class="absolute inset-0 bg-black opacity-60"></div>
  <div class="container relative z-10 flex flex-col items-center h-full py-4 mx-auto text-center text-white">
  <SliderImages />

    <h1 class="mb-6 text-6xl font-extrabold leading-tight animate-fade">
      Somos sus ojos en las importaciones de México
    </h1>
    <p class="max-w-3xl mb-10 text-lg font-semibold animate-flip-up">
      Somos su aliado estratégico en supervisión, auditoría y certificación de productos mexicanos. Impulsa su éxito internacional con un equipo confiable y profesional.
    </p>
    <p class="max-w-3xl mb-10 text-lg font-semibold animate-flip-up">
        Nosotros le ayudamos a asegurar la calidad y seguridad de sus productos, así como a cumplir con los estandares internacionales.
    </p>
    <div class="space-x-4">
      <a class="px-6 py-3 font-medium transition bg-white rounded-lg font-poppins text-slate-800 hover:bg-slate-300" href="#servicios">
        Descubre Nuestros Servicios
      </a>

      <!-- router link -->
       <RouterLink to="/contact" class="px-6 py-3 font-medium text-white transition bg-blue-600 rounded-lg hover:bg-blue-800">Contáctenos Hoy</RouterLink>
    </div>
  </div>
</section>

<section class="py-12 font-roboto">
 
  <div class="container px-4 mx-auto">
        <h2 class="mb-6 text-3xl font-bold text-left text-sky-950 font-parkinsans">Somos su mejor opción para importar productos y servicios desde México</h2>
        <p class="mb-4 text-lg leading-relaxed text-left text-slate-800">
            Con más de 30 años de experiencia, nos especializamos en ser el puente confiable entre empresas internacionales y proveedores mexicanos. Nos encargamos de cada detalle para garantizar que su producto o servicio cumpla con los más altos estándares de calidad, llegue en tiempo y forma, y que su proveedor sea completamente confiable.
        </p>
        <p class="mb-4 text-lg leading-relaxed text-left text-slate-800">
            Ya sea que busque importar en el sector de agricultura, artesanías, maquinaria o cualquier otro servicio o producto, nuestra misión es facilitar el proceso para que usted se enfoque en su negocio mientras nosotros nos encargamos de la supervisión, auditoría y verificación en México.
        </p>
        <p class="mb-4 text-lg leading-relaxed text-left text-slate-800">
            Con presencia en toda la República Mexicana, nuestro equipo realiza verificaciones presenciales, supervisiones constantes y reportes detallados para garantizar la calidad y confiabilidad de cada envío. Nuestro enfoque en la transparencia y el compromiso nos convierte en el aliado estratégico que necesita para asegurar el éxito de sus operaciones.
        </p>

        <!-- Lista con estilo tarjetas -->
        <div class="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
   <div class="p-6 bg-white border rounded-lg shadow-lg">
    <div class="flex items-center mb-4">
     <i class="mr-3 text-2xl fas fa-eye text-sky-950">
     </i>
     <h3 class="text-xl font-semibold text-sky-950">
      Supervisión Integral
     </h3>
    </div>
    <p class="text-slate-800">
     Supervisamos cada etapa del proceso, desde el empaque hasta el envío, asegurándonos de que su producto cumpla con las especificaciones acordadas.
    </p>
    <img alt="Imagen realista de supervisión integral mostrando un proceso de inspección detallada" class="mx-auto mt-4 rounded-lg" height="200" src="https://storage.googleapis.com/a1aa/image/OesNYL2jbfsRFENu5pHbiSoxdlBKqj9wCDKrmKLrwuaIZE1TA.jpg" width="300"/>
   </div>
   <div class="p-6 bg-white border rounded-lg shadow-lg">
    <div class="flex items-center mb-4">
     <i class="mr-3 text-2xl fas fa-check-circle text-sky-950">
     </i>
     <h3 class="text-xl font-semibold text-sky-950">
      Verificación de Proveedores
     </h3>
    </div>
    <p class="text-slate-800">
     Validamos que el proveedor mexicano sea confiable, legal y esté certificado, minimizando riesgos y asegurando la estabilidad de su operación.
    </p>
    <img alt="Imagen realista de verificación de proveedores mostrando un proceso de validación" class="mx-auto mt-4 rounded-lg" height="200" src="https://storage.googleapis.com/a1aa/image/c35yaLYhaXoAAZQl3trEfzu5JsHQvGp9u6exLNbFDVJ3WE1TA.jpg" width="300"/>
   </div>
   <div class="p-6 bg-white border rounded-lg shadow-lg">
    <div class="flex items-center mb-4">
     <i class="mr-3 text-2xl fas fa-file-alt text-sky-950">
     </i>
     <h3 class="text-xl font-semibold text-sky-950">
      Auditorías y Reportes
     </h3>
    </div>
    <p class="text-slate-800">
     Realizamos auditorías completas y enviamos reportes detallados con fotos, videos y documentación en el idioma que usted requiera.
    </p>
    <img alt="Imagen realista de auditorías y reportes mostrando un informe detallado" class="mx-auto mt-4 rounded-lg" height="200" src="https://storage.googleapis.com/a1aa/image/kEeb0KWajVVZfkJtr3mkmFORvfUeAUflJ6IyOynn2IOn2ioeE.jpg" width="300"/>
   </div>
   <div class="p-6 bg-white border rounded-lg shadow-lg">
    <div class="flex items-center mb-4">
     <i class="mr-3 text-2xl fas fa-shield-alt text-sky-950">
     </i>
     <h3 class="text-xl font-semibold text-sky-950">
      Aseguramiento de Calidad
     </h3>
    </div>
    <p class="text-slate-800">
     Nos aseguramos de que cada producto o servicio cumpla con los estándares de calidad que usted espera y lleguen en perfectas condiciones.
    </p>
    <img alt="Imagen realista de aseguramiento de calidad mostrando un proceso de control de calidad" class="mx-auto mt-4 rounded-lg" height="200" src="https://storage.googleapis.com/a1aa/image/iqhilGoTwKa6NJWO13Zyqcjs7BSuct6pHegmjSA2gW7hOi6JA.jpg" width="300"/>
   </div>
   <div class="p-6 bg-white border rounded-lg shadow-lg">
    <div class="flex items-center mb-4">
     <i class="mr-3 text-2xl fas fa-headset text-sky-950">
     </i>
     <h3 class="text-xl font-semibold text-sky-950">
      Soporte Personalizado
     </h3>
    </div>
    <p class="text-slate-800">
     Nuestro equipo lo asistirá en cada paso del proceso, desde la selección del proveedor hasta la entrega final, con atención personalizada.
    </p>
    <img alt="Imagen realista de soporte personalizado mostrando un equipo de atención al cliente" class="mx-auto mt-4 rounded-lg" height="200" src="https://storage.googleapis.com/a1aa/image/NH1CZfNmuaXoaa5GeB3VJ4GUGyIFG1g86n76OB5Ux0lbcE1TA.jpg" width="300"/>
   </div>
   <div class="p-6 bg-white border rounded-lg shadow-lg">
    <div class="flex items-center mb-4">
     <i class="mr-3 text-2xl fas fa-globe text-sky-950">
     </i>
     <h3 class="text-xl font-semibold text-sky-950">
      Consultoría de Exportaciones
     </h3>
    </div>
    <p class="text-slate-800">
     Ofrecemos asesoramiento sobre regulaciones internacionales y mejores prácticas para optimizar sus importaciones desde México.
    </p>
    <img alt="Imagen realista de consultoría de exportaciones mostrando un proceso de asesoramiento" class="mx-auto mt-4 rounded-lg" height="200" src="https://storage.googleapis.com/a1aa/image/HGIOhakHVTpACJJXg5thsKeVxOiMVYiVtW9ILabh8VZcLi6JA.jpg" width="300"/>
   </div>
  </div>
    </div>
    </section>
<div id="servicios" class="pt-16"></div>
    <section class="py-12 bg-white font-roboto">
        <div  class="container px-4 mx-auto " >
          <div data-aos="fade-up">
            <h2 class="mb-6 text-3xl font-bold text-left text-sky-950">Nuestros Servicios</h2>
          </div>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div class="p-6 transition border rounded-lg shadow-md bg-gray-50 border-sky-800 hover:shadow-lg">
                    <div class="mb-4 text-center">
                        <i class="text-4xl fas fa-clipboard-check text-sky-950"></i>
                    </div>
                    <h3 class="mb-2 text-xl font-bold text-sky-950">Supervisión y Reportes</h3>
                    <ul class="space-y-2 list-disc list-inside text-slate-800">
                        <li>Supervisión física constante.</li>
                        <li>Reportes detallados de calidad y cantidad.</li>
                        <li>Videos y fotos del proceso de empaque y envío.</li>
                        <li>Monitoreo en tiempo real.</li>
                        <li>Informes personalizados según las necesidades del cliente.</li>
                    </ul>
                    <p class="mt-4 font-semibold text-center text-sky-950 font-poppins">Aseguramos que cada paso del proceso cumpla con los estándares más altos de calidad.</p>
                </div>
                <div class="p-6 transition border rounded-lg shadow-md border-sky-800 bg-gray-50 hover:shadow-lg">
                    <div class="mb-4 text-center">
                        <i class="text-4xl fas fa-user-check text-sky-950"></i>
                    </div>
                    <h3 class="mb-2 text-xl font-bold text-sky-950">Verificación de Proveedores</h3>
                    <ul class="space-y-2 list-disc list-inside">
                        <li>Verificación presencial de proveedores.</li>
                        <li>Certificación y validación de empresas mexicanas con agencias gubernamentales.</li>
                        <li>Documentación completa de la legalidad y estabilidad de los proveedores.</li>
                        <li>Evaluación de capacidad de producción.</li>
                        <li>Revisión de historial de cumplimiento.</li>
                    </ul>
                    <p class="mt-4 text-center">Garantizamos la confiabilidad y legalidad de los proveedores con los que trabajamos.</p>
                </div>
                <div class="p-6 transition border rounded-lg shadow-md border-sky-900 bg-gray-50 hover:shadow-lg">
                    <div class="mb-4 text-center">
                        <i class="text-4xl fas fa-shipping-fast text-sky-950"></i>
                    </div>
                    <h3 class="mb-2 text-xl font-bold text-sky-950">Aseguramiento de la Cadena de Suministro</h3>
                    <ul class="space-y-2 list-disc list-inside">
                        <li>Supervisión de productos desde el origen hasta la entrega.</li>
                        <li>Alternativas confiables en caso de disconformidad con proveedores actuales.</li>
                        <li>Envíos puntuales y eficientes.</li>
                        <li>Gestión de inventarios.</li>
                        <li>Optimización de rutas de transporte.</li>
                    </ul>
                    <p class="mt-4 text-center">Nos aseguramos de que su cadena de suministro sea eficiente y confiable.</p>
                </div>
                <div class="p-6 transition border rounded-lg shadow-md border-sky-900 bg-gray-50 hover:shadow-lg ">
                    <div class="mb-4 text-center">
                        <i class="text-4xl fas fa-search text-sky-950"></i>
                    </div>
                    <h3 class="mb-2 text-xl font-bold text-sky-950">Auditorías y Traducción</h3>
                    <ul class="space-y-2 list-disc list-inside">
                        <li>Auditorías completas en toda la República Mexicana.</li>
                        <li>Reportes en el idioma del cliente (inglés disponible).</li>
                        <li>Personal capacitado para servir como traductores en visitas a México.</li>
                        <li>Revisión de cumplimiento normativo.</li>
                        <li>Asesoría en mejoras de procesos.</li>
                    </ul>
                    <p class="mt-4 text-center">Ofrecemos auditorías detalladas y servicios de traducción para facilitar su comunicación.</p>
                </div>
                <div class="p-6 transition border rounded-lg shadow-md border-sky-900 bg-gray-50 hover:shadow-lg ">
                    <div class="mb-4 text-center">
                        <i class="text-4xl fas fa-exchange-alt text-sky-950"></i>
                    </div>
                    <h3 class="mb-2 text-xl font-bold text-sky-950">Proveedores Alternos</h3>
                    <ul class="space-y-2 list-disc list-inside">
                        <li>Alternativas confiables en caso de disconformidad con proveedores actuales.</li>
                        <li>Evaluación y selección de nuevos proveedores.</li>
                        <li>Garantía de satisfacción con los nuevos proveedores.</li>
                        <li>Red de proveedores certificados.</li>
                        <li>Soporte continuo durante la transición.</li>
                    </ul>
                    <p class="mt-4 text-center">Si no está satisfecho con su proveedor actual, le ofrecemos alternativas confiables.</p>
                </div>
                <div class="p-6 transition border rounded-lg shadow-md border-sky-900 bg-gray-50 hover:shadow-lg ">
                    <div class="mb-4 text-center">
                        <i class="text-4xl fas fa-map-marker-alt text-sky-950"></i>
                    </div>
                    <h3 class="mb-2 text-xl font-bold text-sky-950">Presencia Nacional</h3>
                    <ul class="space-y-2 list-disc list-inside">
                        <li>Servicios en toda la República Mexicana.</li>
                        <li>Expertos en cualquier producto o servicio que necesite.</li>
                        <li>Red de profesionales en todo el país.</li>
                        <li>Atención personalizada en cada región.</li>
                        <li>Conocimiento profundo del mercado local.</li>
                    </ul>
                    <p class="mt-4 text-center">Tenemos presencia en toda la República Mexicana para cualquier servicio o producto que necesite.</p>
                </div>
            </div>
        </div>
    </section>

<!-- ¿Quiénes Somos? -->
<section id="quienes-somos" class="py-16 bg-gray-50 font-poppins">
  <div class="container mx-auto text-center">
    <div data-aos="fade-up">
      <h2 class="mb-6 text-4xl font-extrabold text-blue-950 font-parkinsans">
        Líderes en calidad y confiabilidad.
      </h2>
    </div>
    <p class="max-w-4xl mx-auto mb-12 text-lg">
      Con más de 30 años de experiencia, ayudamos a empresas globales a importar productos y servicios mexicanos de manera segura, eficiente y sin complicaciones. Desde la supervisión presencial hasta la certificación, estamos con usted en cada paso.
    </p>
    <div class="container p-8 mx-auto">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div data-aos="flip-left" class="p-6 bg-white rounded-lg shadow-lg">
          <i class="mb-4 fas fa-user-check fa-4x text-blue-950"></i>
          <h3 class="mb-2 text-lg font-semibold">
            Supervisión personalizada
          </h3>
          <p class="text-sm text-gray-600">
            Cada detalle cuidado, adaptado a sus necesidades.
          </p>
          <ul class="mt-2 text-sm text-gray-600">
            <li>Atención individualizada</li>
            <li>Planes personalizados</li>
            <li>Soporte continuo</li>
          </ul>
        </div>
        <div data-aos="flip-left" class="p-6 bg-white rounded-lg shadow-lg">
          <i class="mb-4 fas fa-map-marked-alt fa-4x text-blue-950"></i>
          <h3 class="mb-2 text-lg font-semibold">
            Cobertura nacional
          </h3>
          <p class="text-sm text-gray-600">
            Presencia en todas las regiones clave de México.
          </p>
          <ul class="mt-2 text-sm text-gray-600">
            <li>Red de oficinas</li>
            <li>Soporte local</li>
            <li>Acceso rápido</li>
          </ul>
        </div>
        <div data-aos="flip-left" class="p-6 bg-white rounded-lg shadow-lg">
          <i class="mb-4 fas fa-chart-line fa-4x text-blue-950"></i>
          <h3 class="mb-2 text-lg font-semibold">
            Reportes en tiempo real
          </h3>
          <p class="text-sm text-gray-600">
            Acceso inmediato a información precisa y confiable.
          </p>
          <ul class="mt-2 text-sm text-gray-600">
            <li>Actualizaciones instantáneas</li>
            <li>Datos precisos</li>
            <li>Acceso 24/7</li>
          </ul>
        </div>
        <div data-aos="flip-left" class="p-6 bg-white rounded-lg shadow-lg">
          <i class="mb-4 fas fa-certificate fa-4x text-blue-950"></i>
          <h3 class="mb-2 text-lg font-semibold">
            Certificaciones internacionales
          </h3>
          <p class="text-sm text-gray-600">
            Aseguramos estándares globales en cada producto.
          </p>
          <ul class="mt-2 text-sm text-gray-600">
            <li>Normas ISO</li>
            <li>Certificación global</li>
            <li>Calidad garantizada</li>
          </ul>
        </div>
        <div data-aos="flip-right" class="p-6 bg-white rounded-lg shadow-lg">
          <i class="mb-4 fas fa-people-carry fa-4x text-blue-950"></i>
          <h3 class="mb-2 text-lg font-semibold">
            Expertos en importación
          </h3>
          <p class="text-sm text-gray-600">
            Facilitamos la importación de productos y servicios desde México.
          </p>
          <ul class="mt-2 text-sm text-gray-600">
            <li>Asesoría completa</li>
            <li>Gestión de trámites</li>
            <li>Conexiones internacionales</li>
          </ul>
        </div>
        <div data-aos="flip-right" class="p-6 bg-white rounded-lg shadow-lg">
          <i class="mb-4 fas fa-truck fa-4x text-blue-950"></i>
          <h3 class="mb-2 text-lg font-semibold">
            Logística eficiente
          </h3>
          <p class="text-sm text-gray-600">
            Optimización de procesos logísticos para una entrega rápida y segura.
          </p>
          <ul class="mt-2 text-sm text-gray-600">
            <li>Transporte seguro</li>
            <li>Almacenamiento adecuado</li>
            <li>Seguimiento en tiempo real</li>
          </ul>
        </div>
        <div data-aos="flip-right" class="p-6 bg-white rounded-lg shadow-lg">
          <i class="mb-4 fas fa-headset fa-4x text-blue-950"></i>
          <h3 class="mb-2 text-lg font-semibold">
            Soporte al cliente
          </h3>
          <p class="text-sm text-gray-600">
            Atención al cliente disponible 24/7 para resolver cualquier duda.
          </p>
          <ul class="mt-2 text-sm text-gray-600">
            <li>Atención personalizada</li>
            <li>Resolución rápida</li>
            <li>Disponibilidad continua</li>
          </ul>
        </div>
        <div data-aos="flip-right" class="p-6 bg-white rounded-lg shadow-lg">
          <i class="mb-4 fas fa-bullhorn fa-4x text-blue-950"></i>
          <h3 class="mb-2 text-lg font-semibold">
            Estrategias de marketing
          </h3>
          <p class="text-sm text-gray-600">
            Desarrollamos estrategias de marketing para impulsar sus productos.
          </p>
          <ul class="mt-2 text-sm text-gray-600">
            <li>Campañas efectivas</li>
            <li>Análisis de mercado</li>
            <li>Publicidad dirigida</li>
          </ul>
        </div>
        <div data-aos="flip-left" class="p-6 bg-white rounded-lg shadow-lg">
          <i class="mb-4 fas fa-globe fa-4x text-blue-950"></i>
          <h3 class="mb-2 text-lg font-semibold">
            Comercio internacional
          </h3>
          <p class="text-sm text-gray-600">
            Facilitamos el comercio internacional con experiencia y conocimiento.
          </p>
          <ul class="mt-2 text-sm text-gray-600">
            <li>Asesoría en regulaciones</li>
            <li>Gestión de documentos</li>
            <li>Conexiones globales</li>
          </ul>
        </div>
        <div data-aos="flip-left" class="p-6 bg-white rounded-lg shadow-lg">
          <i class="mb-4 fas fa-warehouse fa-4x text-blue-950"></i>
          <h3 class="mb-2 text-lg font-semibold">
            Gestión aduanera
          </h3>
          <p class="text-sm text-gray-600">
            Simplificamos los procesos aduaneros para una importación sin problemas.
          </p>
          <ul class="mt-2 text-sm text-gray-600">
            <li>Trámites aduaneros</li>
            <li>Cumplimiento de normativas</li>
            <li>Despacho rápido</li>
          </ul>
        </div>
        <div data-aos="flip-left" class="p-6 bg-white rounded-lg shadow-lg">
          <i class="mb-4 fas fa-boxes fa-4x text-blue-950"></i>
          <h3 class="mb-2 text-lg font-semibold">
            Soluciones logísticas
          </h3>
          <p class="text-sm text-gray-600">
            Ofrecemos soluciones logísticas integrales para tu negocio.
          </p>
          <ul class="mt-2 text-sm text-gray-600">
            <li>Transporte eficiente</li>
            <li>Almacenamiento seguro</li>
            <li>Distribución rápida</li>
          </ul>
        </div>
        <div data-aos="flip-left" class="p-6 bg-white rounded-lg shadow-lg">
          <i class="mb-4 fas fa-shopping-cart fa-4x text-blue-950"></i>
          <h3 class="mb-2 text-lg font-semibold">
            Comercio electrónico
          </h3>
          <p class="text-sm text-gray-600">
            Impulsamos su negocio en el comercio electrónico global.
          </p>
          <ul class="mt-2 text-sm text-gray-600">
            <li>Plataformas de venta</li>
            <li>Estrategias de marketing digital</li>
            <li>Gestión de inventarios</li>
          </ul>
        </div>
        <div data-aos="flip-left" class="p-6 bg-white rounded-lg shadow-lg">
          <i class="mb-4 fas fa-hand-holding-usd fa-4x text-blue-950"></i>
          <h3 class="mb-2 text-lg font-semibold">
            Financiamiento
          </h3>
          <p class="text-sm text-gray-600">
            Ofrecemos soluciones de financiamiento para sus importaciones.
          </p>
          <ul class="mt-2 text-sm text-gray-600">
            <li>Créditos comerciales</li>
            <li>Asesoría financiera</li>
            <li>Planes de pago flexibles</li>
          </ul>
        </div>
        <div data-aos="flip-left" class="p-6 bg-white rounded-lg shadow-lg">
          <i class="mb-4 fas fa-chart-pie fa-4x text-blue-950"></i>
          <h3 class="mb-2 text-lg font-semibold">
            Análisis de mercado
          </h3>
          <p class="text-sm text-gray-600">
            Realizamos análisis de mercado para identificar oportunidades de negocio.
          </p>
          <ul class="mt-2 text-sm text-gray-600">
            <li>Estudios de mercado</li>
            <li>Análisis de competencia</li>
            <li>Identificación de tendencias</li>
          </ul>
        </div>
        <div data-aos="flip-left" class="p-6 bg-white rounded-lg shadow-lg">
          <i class="mb-4 fas fa-lightbulb fa-4x text-blue-950"></i>
          <h3 class="mb-2 text-lg font-semibold">
            Desarrollo de productos
          </h3>
          <p class="text-sm text-gray-600">
            Ayudamos en el desarrollo de productos para el mercado internacional.
          </p>
          <ul class="mt-2 text-sm text-gray-600">
            <li>Innovación de productos</li>
            <li>Adaptación a mercados</li>
            <li>Estrategias de lanzamiento</li>
          </ul>
        </div>
        <div data-aos="flip-left" class="p-6 bg-white rounded-lg shadow-lg ">
          <i class="mb-4 fas fa-shield-alt fa-4x text-blue-950"></i>
          <h3 class="mb-2 text-lg font-semibold">
            Gestión de riesgos
          </h3>
          <p class="text-sm text-gray-600">
            Identificamos y mitigamos riesgos en el proceso de importación.
          </p>
          <ul class="mt-2 text-sm text-gray-600">
            <li>Evaluación de riesgos</li>
            <li>Planes de contingencia</li>
            <li>Monitoreo continuo</li>
          </ul>
        </div>
        <!-- last -->
      </div>
    </div>
  </div>
</section>

<!-- Diversidad de Productos y Servicios -->
<section class="py-16 bg-white" id="productos-servicios">
   <div class="container mx-auto text-center">
    <div >
      <h2 class="mb-6 text-4xl font-extrabold text-sky-950">
        Soluciones a medida con productos y servicios de México.
      </h2>
    </div>
<p class="mx-auto mb-12 text-lg ">
  Adaptamos nuestra oferta a las necesidades únicas de su empresa. Como intermediarios, te conectamos con los mejores proveedores mexicanos, asegurando productos y servicios que cumplen con los más altos estándares de calidad internacional. Ya sea que busques soluciones innovadoras, productos tradicionales o servicios especializados, nuestro enfoque personalizado garantiza que encuentres lo que su negocio necesita.
</p>

<p class="inline mb-6 text-lg text-gray-900 border-b-2 font-roboto border-b-sky-900">
  Algunos de nuestros servicios que podemos ofrecer incluyen:
</p>

<ul class="space-y-3 text-lg text-gray-700 list-disc list-inside">
  <li class="flex items-start">
    <i class="mt-1 mr-3 fas fa-check-circle text-sky-950"></i> Conexión con proveedores mexicanos de confianza, asegurando calidad y fiabilidad en cada producto o servicio.
  </li>
  <li class="flex items-start">
    <i class="mt-1 mr-3 fas fa-check-circle text-sky-950"></i> Asesoramiento personalizado para encontrar la solución ideal para las necesidades de su empresa.
  </li>
  <li class="flex items-start">
    <i class="mt-1 mr-3 fas fa-check-circle text-sky-950"></i> Garantía de cumplimiento con los estándares internacionales de calidad y regulaciones comerciales.
  </li>
  <li class="flex items-start">
    <i class="mt-1 mr-3 fas fa-check-circle text-sky-950"></i> Acceso a una extensa gama de productos, desde alimentos hasta productos tecnológicos y manufacsurados.
  </li>
  <li class="flex items-start">
    <i class="mt-1 mr-3 fas fa-check-circle text-sky-950"></i> Gestión eficiente y sin complicaciones en el proceso de importación, facilitando el acceso a productos mexicanos.
  </li>
  <li class="flex items-start">
    <i class="mt-1 mr-3 fas fa-check-circle text-sky-950"></i> Oportunidades de colaboración con empresas mexicanas en sectores clave de la economía.
  </li>
  <li class="flex items-start">
    <i class="mt-1 mr-3 fas fa-check-circle text-sky-950"></i> Optimización de costos mediante proveedores competitivos, sin comprometer la calidad.
  </li>
</ul>
<h2 class="mt-6 mb-12 text-4xl font-extrabold text-sky-950 font-roboto">
   Tenemos provedores para todo tipo de servicio o producto mexicano.
</h2>


    <div class="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
      <!-- Agricultura -->
  <div data-aos="zoom-in-up" class="p-6 rounded-lg shadow-lg bg-gray-50">
    <img alt="Cajas de frutas frescas y coloridas en un mercado" class="mb-4 rounded" height="400" src="https://storage.googleapis.com/a1aa/image/0TO1HW5JeSxAL6dEaN7kOt1Tw0lohaNmUtcYF7cFsDda6e0TA.jpg" width="600"/>
    <h3 class="mb-2 text-lg font-semibold">
      Sector Agrícola
    </h3>
    <p class="text-sm text-gray-600">
      Ofrecemos productos agrícolas de alta calidad, desde frutas y vegetales hasta productos alimenticios. Conectamos su empresa con los mejores productores de México, quienes emplean prácticas sostenibles para garantizar frescura y sabor.
    </p>
    <div class="mt-4">
      <i class="ml-2 fas fa-apple-alt text-sky-950"></i>
      <i class="ml-2 fas fa-carrot text-sky-950"></i>
      <i class="ml-2 fas fa-seedling text-sky-950"></i>
    </div>
  </div>
  
  <!-- Textiles y Artesanías -->
  <div data-aos="zoom-in-up" class="p-6 rounded-lg shadow-lg bg-gray-50">
    <img alt="Telas artesanales coloridas y detalladas" class="mb-4 rounded" height="400" src="https://storage.googleapis.com/a1aa/image/YL0peffIgfpKfi4e07FlNTSfO7C4NpkKntYRFTqIzULCT6e0TA.jpg" width="600"/>
    <h3 class="mb-2 text-lg font-semibold">
      Sector Textil y Artesanal
    </h3>
    <p class="text-sm text-gray-600">
      Proveemos textiles y artesanías mexicanas auténticas, elaboradas por artesanos locales con técnicas tradicionales. Podemos conectar su empresa con proveedores de piezas únicas que reflejan la rica herencia cultural de México.
    </p>
    <div class="mt-4">
      <i class="ml-2 fas fa-tshirt text-sky-950"></i>
      <i class="ml-2 fas fa-palette text-sky-950"></i>
      <i class="ml-2 fas fa-hand-sparkles text-sky-950"></i>
    </div>
  </div>
  
  <!-- Servicios Especializados -->
  <div data-aos="zoom-in-up" class="p-6 rounded-lg shadow-lg bg-gray-50">
    <img alt="Ingeniero trabajando en un proyecto industrial" class="mb-4 rounded" height="400" src="https://storage.googleapis.com/a1aa/image/nLFrJy4U6SaxMdoyarVA7yPp94c6EFkCdFoZDmRVq1eT6e0TA.jpg" width="600"/>
    <h3 class="mb-2 text-lg font-semibold">
      Sector Servicios Especializados
    </h3>
    <p class="text-sm text-gray-600">
      Nos especializamos en conectar su empresa con proveedores mexicanos de ingeniería, tecnología y soluciones logísticas, mejorando la eficiencia operativa a través de consultoría técnica, desarrollo tecnológico y optimización de procesos.
    </p>
    <div class="mt-4">
      <i class="ml-2 fas fa-cogs text-sky-950"></i>
      <i class="ml-2 fas fa-laptop-code text-sky-950"></i>
      <i class="ml-2 fas fa-truck text-sky-950"></i>
    </div>
  </div>
  
  <!-- Industria -->
  <div data-aos="zoom-in-up" class="p-6 rounded-lg shadow-lg bg-gray-50">
    <img alt="Maquinaria industrial moderna en una fábrica" class="mb-4 rounded" height="400" src="https://storage.googleapis.com/a1aa/image/UFz0rfCGGN2rSCF6HNcMFOxZfxCOF4rULd5OofHmEwDnp7pnA.jpg" width="600"/>
    <h3 class="mb-2 text-lg font-semibold">
      Sector Industrial
    </h3>
    <p class="text-sm text-gray-600">
      Conectamos a su empresa con proveedores mexicanos de maquinaria industrial y componentes de alta precisión, garantizando calidad y durabilidad en equipos y productos de manufactura.
    </p>
    <div class="mt-4">
      <i class="ml-2 fas fa-industry text-sky-950"></i>
      <i class="ml-2 fas fa-tools text-sky-950"></i>
      <i class="ml-2 fas fa-cog text-sky-950"></i>
    </div>
  </div>
  
  <!-- Bebidas -->
  <div data-aos="zoom-in-up" class="p-6 rounded-lg shadow-lg bg-gray-50">
    <img alt="Botellas de tequila y mezcal en una mesa de madera" class="mb-4 rounded" height="400" src="https://storage.googleapis.com/a1aa/image/kaMyf6YvIOSYXysq1PDvGgzGoP1iPjPOUT8NKGpAzUgX6e0TA.jpg" width="600"/>
    <h3 class="mb-2 text-lg font-semibold">
      Sector de Bebidas y Licores
    </h3>
    <p class="text-sm text-gray-600">
      Tequila, mezcal y otras bebidas tradicionales de México. Nos encargamos de conectar a su empresa con los mejores productores para que puedas disfrutar de bebidas de calidad internacional, elaboradas con métodos tradicionales.
    </p>
    <div class="mt-4">
      <i class="ml-2 fas fa-wine-bottle text-sky-950"></i>
      <i class="ml-2 fas fa-glass-martini-alt text-sky-950"></i>
      <i class="ml-2 fas fa-cocktail text-sky-950"></i>
    </div>
  </div>
  
  <!-- Cosméticos -->
  <div data-aos="zoom-in-up" class="p-6 rounded-lg shadow-lg bg-gray-50">
    <img alt="Productos de belleza naturales en un entorno de spa" class="mb-4 rounded" height="400" src="https://storage.googleapis.com/a1aa/image/Dvs4VbeVLs2TECcrmpVlQOLv48cIDqedMwMug6rkiOfcp7pnA.jpg" width="600"/>
    <h3 class="mb-2 text-lg font-semibold">
      Sector Cosmético
    </h3>
    <p class="text-sm text-gray-600">
      Conectamos a tu empresa con los proveedores más destacados de productos cosméticos naturales y orgánicos de México, elaborados con ingredientes locales para soluciones de cuidado personal efectivas y respetuosas con el medio ambiente.
    </p>
    <div class="mt-4">
      <i class="ml-2 fas fa-leaf text-sky-950"></i>
      <i class="ml-2 fas fa-spa text-sky-950"></i>
      <i class="ml-2 fas fa-seedling text-sky-950"></i>
    </div>
  </div>
  
  <!-- Consultoría -->
  <div data-aos="zoom-in-up" class="p-6 rounded-lg shadow-lg bg-gray-50">
    <img alt="Consultores empresariales en una reunión de trabajo" class="mb-4 rounded" height="400" src="https://storage.googleapis.com/a1aa/image/QdVanX2swR7jO1Ol9tZtM5KoMwSBHF2RmMVFMfq2tZsW6e0TA.jpg" width="600"/>
    <h3 class="mb-2 text-lg font-semibold">
      Sector Consultoría Empresarial
    </h3>
    <p class="text-sm text-gray-600">
      Ayudamos a su empresa a alcanzar sus objetivos conectándola con consultores y asesores mexicanos expertos en diversas áreas clave como gestión empresarial, finanzas y desarrollo organizacional.
    </p>
    <div class="mt-4">
      <i class="ml-2 fas fa-briefcase text-sky-950"></i>
      <i class="ml-2 fas fa-chart-line text-sky-950"></i>
      <i class="ml-2 fas fa-lightbulb text-sky-950"></i>
    </div>
  </div>
     <!-- Desarrollo de Software -->
     <div data-aos="zoom-in-up" class="p-6 rounded-lg shadow-lg bg-gray-50">
      <img alt="Equipo de desarrollo de software trabajando en una oficina moderna" class="mb-4 rounded" height="400" src="https://storage.googleapis.com/a1aa/image/omeUmfeukDV1WpqueOksB4UDV4o0ihiZxVO8NAwjfM9ImuneE.jpg" width="600"/>
      <h3 class="mb-2 text-lg font-semibold">
       Sector Tecnológico
      </h3>
      <p class="text-sm text-gray-600">
       Soluciones de software a medida para empresas. Facilitamos el acceso a desarrolladores mexicanos expertos en diversas tecnologías para crear sistemas personalizados que optimicen los procesos empresariales y mejoren la eficiencia operativa, que su empresa necesite de México.
      </p>
      <div class="mt-4">
       <i class="ml-2 fas fa-code text-sky-950"></i>
       <i class="ml-2 fas fa-laptop text-sky-950"></i>
       <i class="ml-2 fas fa-database text-sky-950"></i>
      </div>
     </div>

     <!-- Marketing Digital -->
     <div data-aos="zoom-in-up" class="p-6 rounded-lg shadow-lg bg-gray-50">
      <img alt="Equipo de marketing digital trabajando en estrategias en una oficina" class="mb-4 rounded" height="400" src="https://storage.googleapis.com/a1aa/image/Ymqus9rXQuayNtTr4npmKLVweuRAiq84QqJUfZgAS8Fr090TA.jpg" width="600"/>
      <h3 class="mb-2 text-lg font-semibold">
        Sector de Tecnología e Innovación Mexicana
      </h3>
      <p class="text-sm text-gray-600">
  Conectamos su empresa con los avances más recientes en tecnología e innovación provenientes de México. Facilita el acceso a soluciones tecnológicas avanzadas, como el desarrollo de software a medida y dispositivos electrónicos de última generación, impulsados por expertos mexicanos en el campo. Aprovecha las oportunidades que la tecnología mexicana ofrece para optimizar sus procesos, mejorar su operaciones y mejorar la competitividad global de su negocio.
</p>

      <div class="mt-4">
       <i class="ml-2 fas fa-bullhorn text-sky-950"></i>
       <i class="ml-2 fas fa-chart-pie text-sky-950"></i>
       <i class="ml-2 fas fa-share-alt text-sky-950"></i>
      </div>
     </div>
    </div>
   </div>
</section>


<!-- Beneficios -->
<section id="beneficios" class="py-10 bg-white">
  <div class="container px-4 mx-auto text-center">
    <h2 class="mb-8 text-4xl font-bold text-gray-800">
      Lo que nos distingue
    </h2>
    <p class="max-w-3xl mx-auto mb-12 text-lg text-gray-600">
      Al trabajar con nosotros, garantizas confianza, calidad y el cumplimiento de los más altos estándares normativos en cada transacción internacional.
    </p>
    <div class="max-w-3xl mx-auto space-y-6 text-left">
      <div class="flex items-start space-x-4">
        <i class="mt-1 ml-2 text-2xl text-green-600 fas fa-check-circle"></i>
        <p class="text-lg text-gray-700">Supervisión presencial en toda la República Mexicana.</p>
      </div>
      <div class="flex items-start space-x-4">
        <i class="mt-1 text-2xl text-green-600 fas fa-check-circle"></i>
        <p class="text-lg text-gray-700">Relaciones estratégicas con agencias gubernamentales para obtener certificaciones.</p>
      </div>
      <div class="flex items-start space-x-4">
        <i class="mt-1 text-2xl text-green-600 fas fa-check-circle"></i>
        <p class="text-lg text-gray-700">Acceso a reportes detallados con evidencia visual en tiempo real.</p>
      </div>
      <div class="flex items-start space-x-4">
        <i class="mt-1 text-2xl text-green-600 fas fa-check-circle"></i>
        <p class="text-lg text-gray-700">Amplia experiencia en diversas industrias, asegurando soluciones personalizadas.</p>
      </div>
      <div class="flex items-start space-x-4">
        <i class="mt-1 text-2xl text-green-600 fas fa-check-circle"></i>
        <p class="text-lg text-gray-700">Servicios al costo mas bajo del mercado</p>
      </div>
    </div>
  </div>
</section>


<!-- Llamado a la acción -->
<section data-aos="zoom-in-up" id="cta-final" class="py-2 bg-white">
  <div class="container py-5 mx-auto text-center">
    <h2 class="mb-6 text-4xl font-extrabold text-sky-950">
      Potencia sus operaciones internacionales.
    </h2>
    <p class="max-w-3xl mx-auto mb-12 text-lg">
      Garantiza el éxito de sus importaciones con el respaldo de expertos en calidad y cumplimiento normativo.
    </p>

    <!-- router link -->
     <RouterLink to="/contact" class="px-6 py-3 ml-4 font-medium text-white transition bg-blue-600 rounded-lg hover:bg-blue-800">Contáctenos Ahora</RouterLink>
  </div>
</section>

</template>

<script lang="ts" setup>
import SliderImages from '../animations/SliderImages.vue';


</script>

<style scoped>

</style>