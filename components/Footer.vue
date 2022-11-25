<template>
  <div id="navbar">
    <v-list class="navbar2_container">
      <div id="nav-container">
        <v-list-item v-for="(section, index) of menuConfig" :key="index">

            <v-menu top class="start-here" v-if="section.children.length > 0">
              <template v-slot:activator="{ on }">
                <v-btn dark v-on="on"><a>{{section.label}}</a></v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(submenu, subindex) of section.children" :key="subindex">
                  <v-list-item-title><a :href="submenu.path">{{submenu.label}}</a></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-list-item-title v-else>
              <a :href="section.path">{{section.label}}</a>
            </v-list-item-title>
        </v-list-item>
      </div>
    </v-list>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuConfig: [
        {
          label: 'START HERE',
          path: '',
          icon: '',
          children: [
            {
              label: 'CHARACTER CREATION',
              path: '/character-creation'
            },
            {
              label: 'ITEM CREATION',
              path: '/item-creation'
            },
            {
              label: 'UNREAL ENGINE CINEMATICS',
              path: '/unreal-engine-cinematics'
            },
            {
              label: 'CONCEPT ART',
              path: '/concept-art'
            },
            {
              label: 'CUSTOM RIG',
              path: '/custom-rig'
            },
            {
              label: 'QUICK RIG',
              path: '/quick-rig'
            }
          ]
        },
        {
          label: 'PROCESS',
          path: '/process',
          icon: '',
          children: []
        },
        {
          label: 'PORTFOLIO',
          path: 'https://sketchfab.com/metacaptain',
          icon: '',
          children: []
        },
        {
          label: 'CONTACT',
          path: 'https://docs.google.com/forms/d/e/1FAIpQLSfvsytuj-h7otj1WdwHvqdJoBjSV2_XfMtQOHTfCTfdBKHgBQ/viewform',
          icon: '',
          children: []
        }
      ]
    }
  }
}
</script>
