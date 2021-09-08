<template>
  <div
    id="menu"
    class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
    style="width: 280px"
  >
    <a
      href="/"
      class="
        d-flex
        align-items-center
        mb-3 mb-md-0
        me-md-auto
        text-white text-decoration-none
      "
    >
      <span class="fs-4">Notes App</span>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li v-for="menu in $store.getters.menu" :key="menu.id">
        <a
          v-on:click="activateMenu(menu.id)"
          v-bind:class="[
            selected === menu.id ? 'active' : '',
            'nav-link text-white',
          ]"
        >
          <i v-bind:class="[`bi`, menu.icon]"></i>
          {{ menu.title }}</a
        >
      </li>
    </ul>
    <hr />
    <div class="dropdown"></div>
  </div>
</template>

<script>
export default {
  name: "MenuApp",
  data() {
    return {
      selected: 2,
    };
  },
  methods: {
    activateMenu(menuID) {
      this.$parent.cleanNote();      
      this.selected = menuID;
      if (menuID === 1) {
        let note = {
          id: this.$store.getters.id,
          title: "# Hello",
          text: " # Hello",
          favorite: false,
        };
        this.$store.dispatch("addNote", { note });
        this.$parent.getNote(note.id);
      } else {
        const id = menuID;
        this.$store.commit("setMenu", { id });
      }
    },
  },
  mounted() {
    this.activateMenu(2);
  },
};
</script>
