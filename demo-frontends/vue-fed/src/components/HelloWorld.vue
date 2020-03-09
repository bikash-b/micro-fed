<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>

            <b-nav-item href="#">
                <span style="color: #FFFFFF"> MF </span>
            </b-nav-item>

            <b-nav-item href="home">Home</b-nav-item>

            <!-- Navbar dropdowns -->
            <b-nav-item href="angular-comp">Component (Angular)</b-nav-item>

            <b-nav-item href="#">Component (React)</b-nav-item>

            <b-nav-item href="#">Component (Vue)</b-nav-item>

            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
import { BNavbar, BNavbarNav, BNavItem } from 'bootstrap-vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    'b-navbar': BNavbar,
    'b-navbar-nav': BNavbarNav,
    'b-nav-item': BNavItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://unpkg.com/bootstrap@4.4.1/dist/css/bootstrap.css");
@import url("https://unpkg.com/bootstrap-vue@2.5.0/dist/bootstrap-vue.css");
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
