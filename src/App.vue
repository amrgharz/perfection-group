<template>
  <div class="wrapper">
    <div class="upper-nav">
      <ul>
        <li>
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
        </li>
        <li>
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
        </li>
        <li>
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
        </li>
      </ul>
      <ul class="upper-bar-lift-list">
        <li>
          location
        </li>
        <li>
          telephone
        </li>
        <li>
          email
        </li>
      </ul>
    </div>
    <div class="logo">
      <img src="../pictures/logo.png"/>
      <span class="site-identity">We build a Project to suit your needs from the foundation to the key delivering.</span>
    </div >
    <div class="main-nav">
      <b-navbar toggleable="lg" type="light" >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto sapces">
          <b-link to= "/" class="mr-5 mt-2">Home</b-link>
          <b-nav-item-dropdown class="nav-dropdown mr-5"  text="Our Projects" >
            <b-dropdown-item href="#">Our Vision & Mission</b-dropdown-item>
            <b-dropdown-item href="#">Our Profile</b-dropdown-item>
            <b-dropdown-item href="#">Our Strength</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown class="nav-dropdown mr-5"  text="About Us"  >
            <b-dropdown-item href="#">Our Vision & Mission</b-dropdown-item>
            <b-dropdown-item href="#">Our Profile</b-dropdown-item>
            <b-dropdown-item href="#">Our Strength</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-link to= "page-1" class="mr-5 mt-2" >Contact Us</b-link>
          <b-link to= "/random-bad-url" class="mt-2">Careers</b-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</div>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        name: 'Home',
        to: '/'
      },
      {
        name: 'Page 1',
        to: '/page-1'
      },
      {
        name: 'Bad Link',
        to: '/random-bad-url'
      }
    ]
  })
}
</script>
