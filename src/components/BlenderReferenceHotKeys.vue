<template>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Description</th>
      <th scope="col">Hot Key Name</th>
      <th scope="col">Mode Name</th>
      <th scope="col">Area Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Zoom</td>
      <td>Middle Mouse</td>
      <td>Object, Edit</td>
      <td>View Port</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Panning Left/Right</td>
      <td>Shift+Middle Mouse Button</td>
      <td>Object, Edit</td>
      <td>View Port</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Top Ortho View</td>
      <td>NumPad 7</td>
      <td>Object, Edit</td>
      <td>View Port</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Bottom Ortho View</td>
      <td>Ctrl+NumPad 7</td>
      <td>Object, Edit</td>
      <td>View Port</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Front Ortho View</td>
      <td>NumPad 1</td>
      <td>Object, Edit</td>
      <td>View Port</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Back Ortho View</td>
      <td>Ctrl+NumPad 1</td>
      <td>Object, Edit</td>
      <td>View Port</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Left Ortho View</td>
      <td>NumPad 3</td>
      <td>Object, Edit</td>
      <td>View Port</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Right Ortho View</td>
      <td>Ctrl+NumPad 3</td>
      <td>Object, Edit</td>
      <td>View Port</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Grab</td>
      <td>G</td>
      <td>Object, Edit</td>
      <td>View Port</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Grab Exclude Axis</td>
      <td>G, Shift+(X,Y, or Z)</td>
      <td>Object, Edit</td>
      <td>View Port</td>
    </tr>
  </tbody>
</table>
  </template>
  <script>
     export default {
      name: 'BlenderReferenceHotKeys',
      props: {
        msg: String
      },
      mounted:function(){
        this.method1() //method1 will execute at pageload
      },
      methods: {
        greet() {                
                alert(`Hello`)              
              }
         }
        }    
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    
    </style>