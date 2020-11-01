<template>
  <q-layout
    view="lHh Lpr lFf"
  >
      <q-tabs class="navigation" align="center" position="top" no-pane-border>
      <q-route-tab to="/1">Page 1</q-route-tab>
      <q-route-tab to="/2">Page 2</q-route-tab>
      <q-route-tab to="/">Index</q-route-tab>
    </q-tabs>This is <b> {{$options.name}}</b>
      <slot />
  </q-layout>
</template>
<script>
export default {
  name: 'LayoutLogin'
}
</script>
