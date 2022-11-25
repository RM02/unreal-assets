<template>
  <v-app>
    <v-main>
      <v-navigation-drawer
        dark
        v-model="drawer"
        absolute
        temporary
      >
        <v-list>
          <div>
            <v-list-item>
              <v-list-item-title>
                <v-menu offset-x class="start-here">
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
      </v-navigation-drawer>
      <DynamicBackground/>
      <Nuxt/>
      <Footer/>
      <div class="drawer-box">
        <div class="drawer-box-wrapper">
          <v-btn
            class="ma-2"
            @click="drawer = !drawer"
          >
            <v-icon v-if="drawer==false" color="#fff">
              mdi-menu
            </v-icon>
            <v-icon v-else color="#fff">
              mdi-close
            </v-icon>
          </v-btn>
        </div>
      </div>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data: () => {
    return {
      drawer: false
    }
  }
}
</script>
<style scoped>
  .drawer-btn {
      display: none;
  }
  .drawer-box {
    display: none;
  }
  .drawer-box-wrapper {
    display: none;
  }
  aside {
    display: none;
  }
@media screen and (max-width: 767px){
  .drawer-btn {
    display: block;
    background: #000 !important;
  }
  .drawer-box {
      display: -ms-grid;
      display: grid;
      width: 48.0203735291233%;
      margin-right: auto;
      margin-left: auto;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      grid-auto-columns: 1fr;
      grid-column-gap: 16px;
      grid-row-gap: 16px;
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      -ms-grid-rows: auto;
      grid-template-rows: auto;
  }
  .drawer-box-wrapper {
    display: block;
    margin-right: auto;
    margin-left: auto;
    background: #000;
    z-index: 100;
  }
  aside {
    width: 100% !important;
    background-color: black !important;
    display: block;
  }
}
</style>
