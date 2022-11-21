<template>
  <div id="navbar">
    <v-list class="navbar2_container">
      <div id="nav-container">
        <v-list-item>
          <v-list-item-title>
            <v-menu top class="start-here">
              <template v-slot:activator="{ on }">
                <v-btn dark v-on="on"><a>START HERE</a></v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title><a href="/character-creation">CHARACTER CREATION</a></v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title><a href="/item-creation">ITEM CREATION</a></v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title><a href="/unreal-engine-cinematics">UNREAL ENGINE CINEMATICS</a></v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title><a href="concept-art">CONCEPT ART</a></v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title><a href="custom-rig">CUSTOM RIG</a></v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title><a href="quick-rig">QUICK RIG</a></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title><a href="/process">PROCESS</a></v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title><a href="https://sketchfab.com/metacaptain">PORTFOLIO</a></v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title><a href="https://docs.google.com/forms/d/e/1FAIpQLSfvsytuj-h7otj1WdwHvqdJoBjSV2_XfMtQOHTfCTfdBKHgBQ/viewform">CONTACT</a></v-list-item-title>
        </v-list-item>
      </div>
    </v-list>
  </div>
</template>
<script>
export default {

}
</script>
