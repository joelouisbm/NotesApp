<template>
  <div id="editor">
    <textarea id="text-note" :disabled="!note.id" v-model="note.text" @input="update()"></textarea>
  </div>
</template>

<script>
export default {
  props: {
    note: new Object(),  
  },
  methods: {    
    update: function () {              
      this.note.title = this.note.text.substring(0, 16);
      const note = {
        id: this.note.id,
        title: this.note.title,
        text: this.note.text,
        favorite: this.note.favorite,
      };
      this.$store.dispatch("updateNote", { note });
    },
  },
};
</script>
<style scoped>
#editor {
  margin: 0;
  height: calc(100% - 50px);
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}

textarea {
  display: inline-block;
  width: 100%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  resize: none;
  outline: none;
  background-color: #fff;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}
</style>
