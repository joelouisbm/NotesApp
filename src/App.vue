<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#menu {
  position: fixed;
  height: 100%;
  text-align: left;
  z-index: 3;
}

#container {
  padding-left: 292px;
  height: 100%;
  position: fixed;
  width: 100%;
}

#items {
  background: #e5e5e5;
  height: 100%;
  padding: 0;
}

#note {
  background-color: #fff;
  padding-left: 0;
  height: 100%;
}

#right {
  height: 100%;
}

.list-group-numbered > li::before {
  content: none;
  counter-increment: none;
}

.list-group-item {
  cursor: pointer;
  background: transparent;
  border: none;
}

.list-group-item.active {
  border-radius: 0;
}

.bi {
  cursor: pointer;
}

.ic{
  margin-right: 10px;
}

.ms-2{
  width: 100%;
}

.nav-link {
  cursor: pointer !important;
}
</style>
