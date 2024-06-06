<template>
  <section class="py-4 md:py-20 dark:bg-gray-800 p-8 space-y-10 md:space-y-30 sm:p-8 my-10">
    <div class="flex flex-col md:flex-row items-center justify-center px-30 py-30 mx-auto md:h-screen lg:py-0 p-6 space-y-4 md:space-y-6 sm:p-8 my-4">
      
      <div class="w-full md:w-1/2">
        <personas></personas>
      </div>
      <div class="w-full md:w-1/2">
        <usuarios></usuarios>
      </div>
    </div>
  </section>
</template>

<script>
import personas from './personas.vue'
import usuarios from './usuarios.vue'

export default {
  components: {
    personas,
    usuarios
  }
}
</script>
