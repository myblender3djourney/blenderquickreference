<template>
  <div>
    <h1>Blender HotKey Reference</h1> 
    <BlenderReferenceHotKeys msg="Test Succeeded"/>
    <button type="button" class="btn btn-primary">Primary</button>
  </div>
</template>
<script>
  //Render the Blender Reference Component from the home page.
  //This wires it up.
  import BlenderReferenceHotKeys from '@/components/BlenderReferenceHotKeys.vue';
  
  export default {
    name: 'HomeView',
    components: {
      BlenderReferenceHotKeys
  }
  }
  </script>