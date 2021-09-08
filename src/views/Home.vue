<template>
  <div>
    <div>
      <Navigation />
    </div>
    <div id="container">
      <div id="right" class="row align-items-start">
        <div id="items" class="col-4">
          <Notes
            @getNote:id="getNote"
            @restore:note="restore"
            @favorites:id="favorites"
            @deleteNote:id="deleteNote"
            @handleInput:value="handleInput"
          />
        </div>
        <div id="note" class="col-8">
          <router-view v-bind:note="note" />
          <div
            v-if="note.id"
            class="d-flex flex-row-reverse bd-highlight actions pr-5"
          >
            <div class="p-2 bd-highlight"></div>
            <div class="p-2 bd-highlight">memo pad</div>
            <div class="p-2 bd-highlight">
              <i
                title="Download this note"
                v-on:click="download"
                class="bi bi-cloud-download-fill"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myMixin from "../mixins/mixins";
import Navigation from "./Navigation.vue";
import Notes from "../components/Note.vue";
export default {
  name: "Home",
  mixins: [myMixin],
  components: { Navigation, Notes },
  data() {
    return {
      selected: -1,
      note: new Object(),
    };
  },
  methods: {
    handleInput: function (val) {
      const value = val;
      this.$store.commit("handleInput", { value });
    },
    restore: function (item) {
      const note = item;
      this.$store.dispatch("restoreNote", { note });
      this.cleanNote();
    },
    favorites: function (key) {
      const id = key;
      this.$store.dispatch("favorites", { id });
    },
    deleteNote: function (key) {
      const id = key;
      this.cleanNote();
      if (this.$store.getters.menuActive === 4) {
        if (confirm("are you sure to permanently delete this note?"))
          this.$store.dispatch("delete", { id });
      } else {
        this.$store.dispatch("traslateToTrash", { id });
      }
    },
    cleanNote: function () {
      this.note = new Object();
    },
    getNote: function (id) {
      id = id ? id : 1;
      this.$store.commit("setActiveNote", { id });
      this.note = this.$store.getters.activeNote;
      this.selected = id;
      this.enableElement("#text-note");
      this.setFocus("#text-note");
    },
  },
  mounted() {},
};
</script>
