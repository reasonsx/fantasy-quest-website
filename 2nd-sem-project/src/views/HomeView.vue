<script setup>
 import Portals from '../assets/components/Portals.vue';
</script>

<template>
    <div class="home">
        <Portals />
        <nav>
            <RouterLink to="/day">Day</RouterLink>
            <RouterLink to="/evening">Evening</RouterLink>
            <!-- divs of the portals  -->
        </nav>
        
    </div>
    
</template>

<style>
    
</style>