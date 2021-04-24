<template>
  <v-app id="inspire">
    <v-system-bar app color="#eee">
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="#fff" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>

        <div class="username" @click="showRole">{{ tekst }}</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text, path] in links"
          :key="icon"
          link
          :to="path"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <v-row>
          <v-col v-for="card in cards" :key="card" cols="12">
            <v-card>
              <v-subheader>{{ card }}</v-subheader>

              <router-view v-if="card === 'Today'"></router-view>

              <v-list v-else-if="card === 'Yesterday'" two-line>
                <template v-for="[dan, datum] in dates">
                  <v-list-item :key="dan">
                    <v-list-item-avatar color="grey darken-1">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>{{ dan }}</v-list-item-title>

                      <v-list-item-subtitle>
                        {{ datum }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>

              <div class="d-flex pa-2" v-else>
                <v-card
                  class="mx-auto"
                  max-width="344"
                  v-for="[img, title, subtitle] in otherCardInfo"
                  :key="title"
                >
                  <v-img :src="img" height="200px"></v-img>

                  <v-card-title>
                    {{ title }}
                  </v-card-title>

                  <v-card-subtitle>
                    {{ subtitle }}
                  </v-card-subtitle>
                </v-card>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    cards: ["Today", "Yesterday", "Other"],
    drawer: null,
    links: [
      ["mdi-inbox-arrow-down", "Pristigla Pošta", "/inbox"],
      ["mdi-send", "Poslano", "/sent"],
      ["mdi-delete", "Otpad", "/trash"],
      ["mdi-alert-octagon", "Neželjena Pošta", "/spam"],
    ],
    tekst: "Mile Raspudić",
    dates: [
      ["Ponedjeljak", "26.04.2021"],
      ["Utorak", "27.04.2021"],
      ["Srijeda", "28.04.2021"],
      ["Četvrtak", "29.04.2021"],
      ["Petak", "30.04.2021"],
      ["Subota", "01.05.2021"],
      ["Nedjelja", "02.05.2021"],
    ],
    otherCardInfo: [
      [
        "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        "Top Western Roadtrips",
        "100 Miles of wonder"
      ],
      [
        "https://wallpaperaccess.com/full/1094561.jpg",
        "Explore SpaceX",
        "See where future is making",
      ],
      [
        "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        "Cooking bootcamp",
        "Learn from the best",
      ],
    ],
  }),
  methods: {
    showRole: function () {
      if (this.tekst === "Mile Raspudić") {
        this.tekst = "Administrator";
      } else {
        this.tekst = "Mile Raspudić";
      }
    },
  },
};
</script>

<style>
.username {
  cursor: pointer;
  user-select: none;
}

h1 {
  padding: 2rem;
}
</style>
