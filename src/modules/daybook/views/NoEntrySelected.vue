import { defineAsyncComponent } from '@vue/runtime-core';
<template>
  <div class="d-flex justify-content-center">
    <h1 clasS="align-self-center">No hay nada seleccionado</h1>
  </div>
  <FaB />
</template>

<script>
import {defineAsyncComponent} from 'vue'

export default {
    components:{
        FaB: defineAsyncComponent(()=>import('../components/FaB'))
    }
}
</script>

<style lang="scss" scoped>
div{
    height: 100%;
}

</style>