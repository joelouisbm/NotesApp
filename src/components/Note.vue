<template>
  <div>
    <div class="m-3">
      <input
        placeholder="Search..."
        type="text"
        class="form-control"
        id="search"
        v-model="query"
        @input="$emit('handleInput:value', query)"
      />
    </div>
    <ol class="list-group list-group-numbered">
      <li
        :key="note.id"
        v-for="note in $store.getters.notes"
        v-bind:class="[
          selected === note.id ? 'active' : '',
          'list-group-item d-flex justify-content-between align-items-start',
        ]"
      >
        <div
          v-on:click="$emit('getNote:id', note.id), (selected = note.id)"
          class="ms-2 me-auto"
        >
          <div class="fw-bold">{{ note.title }}</div>
          {{ `${note.text.substring(0, 50)}...` }}
        </div>
        <i
          v-if="$store.getters.menuActive === 4"
          v-on:click="$emit('restore:note', note)"
          class="bi bi-arrow-counterclockwise mt-2 ic"
        ></i>
        <i
          v-if="$store.getters.menuActive !== 4"
          v-on:click="$emit('favorites:id', note.id)"
          v-bind:class="[
            note.favorite ? 'bi-star-fill' : 'bi-star',
            'bi  mt-2 ic',
          ]"
        ></i>
        <i
          v-on:click="$emit('deleteNote:id', note.id)"
          class="bi bi-trash mt-2"
        ></i>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "NotesApp",
  data() {
    return {
      query: "",
      selected: -1,
    };
  },
};
</script>