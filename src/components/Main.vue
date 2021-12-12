<template>
  <v-container>
    <!-- <router-link to="/profile">Перейти к Profile</router-link> -->
    <div><NoteBar :notes.sync="notes" /></div>
  </v-container>
</template>

<script>
import bridge from "@vkontakte/vk-bridge";

import NoteBar from "./Notes/NoteBar";

export default {
  name: "Main",
  components: {
    NoteBar,
  },
  data: () => ({
    notes: [],
  }),
  created() {
    this.getNotes();
  },
  methods: {
    getNotes() {
      bridge.send("VKWebAppStorageGet", { keys: ["notes"] }).then((res) => {
        this.notes = JSON.parse(res.keys[0].value);
      });
    },
  },
};
</script>
