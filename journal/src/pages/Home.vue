<template>
<ion-app>
  <Menu/>
  
  <ion-page class="ion-page" main>
    <Toolbar/>
    <ion-content padding>
      <h1>Main Content</h1>
      <p>Click the icon in the top left to toggle the menu.</p>
    </ion-content>
  </ion-page>
</ion-app>
</template>

<script>
import Menu from "../components/Menu";
import Toolbar from "../components/Toolbar";
export default {
    components: {
        Menu: Menu,
        Toolbar: Toolbar
    }
}
</script>

<style lang="scss" scoped>

</style>