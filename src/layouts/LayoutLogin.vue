<template>
  <q-layout
    view="lHh Lpr lFf"
    class="img-background"
  >
      <q-tabs class="navigation" align="center" position="top" no-pane-border>
      <q-route-tab to="/1">Page 1</q-route-tab>
      <q-route-tab to="/2">Page 2</q-route-tab>
      <q-route-tab to="/">Index</q-route-tab>
    </q-tabs>This is <b> {{$options.name}}</b>
      <slot />
  </q-layout>
</template>

<style>
::-webkit-scrollbar {
  display: none;
}
.img-background {
  background: #fff;
  /* url(../statics/background-img.jpg); */
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: solid 1px black;
}
</style>

<script>
export default {
  name: 'LayoutLogin'
}
</script>
