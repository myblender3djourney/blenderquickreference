<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/banana.png">    
    <BlenderReferenceTitle msg="Test Succeed"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BlenderReferenceTitle from '@/components/BlenderReferenceTitle.vue';

export default {
  name: 'HomeView',
  components: {

    BlenderReferenceTitle
}
}
</script>
