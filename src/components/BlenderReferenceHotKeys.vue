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
      <td>G (Optional - Confine to Axis by typing G+ (X,Y, or Z))</td>
      <td>Object, Edit</td>
      <td>Transform Object</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Grab Exclude Axis</td>
      <td>G, Shift+(X,Y, or Z)</td>
      <td>Object, Edit</td>
      <td>Transform Object</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Rotate </td>
      <td>R</td>
      <td>Object, Edit</td>
      <td>Transform Object</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Rotate Exclude Axis</td>
      <td>R, Shift+(X,Y, or Z)</td>
      <td>Object, Edit</td>
      <td>Transform Object</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Scale </td>
      <td>S</td>
      <td>Object, Edit</td>
      <td>Transform Object</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Scale Exclude Axis</td>
      <td>S, Shift+(X,Y, or Z)</td>
      <td>Object, Edit</td>
      <td>Transform Object</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Delete Object</td>
      <td>X</td>
      <td>Object, Edit</td>
      <td>Transform Object</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Duplicate Object</td>
      <td>Shift+D</td>
      <td>Object, Edit</td>
      <td>Transform Object</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Join Object</td>
      <td>Ctrl+D</td>
      <td>Object</td>
      <td>Transform Object</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Extrude</td>
      <td>E</td>
      <td>Edit</td>
      <td>Edit Object</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Fill</td>
      <td>F</td>
      <td>Edit</td>
      <td>Edit Object</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Splice</td>
      <td>Ctrl+R</td>
      <td>Edit</td>
      <td>Edit Object</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Bevel</td>
      <td>Ctrl+B</td>
      <td>Edit</td>
      <td>Edit Object</td>
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