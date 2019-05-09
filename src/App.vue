<template>
  <div class="wrapper">
    <div class="upper-nav">
      <ul class="social-icons">
        <li>
          <a href="https://twitter.com/perfectiongrou2" target="blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" /></a>
        </li>
        <li>
          <a href="https://www.facebook.com/Perfection-Construction-LLC-930607747004603/" target="blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook'  }" /></a>
        </li>
        <li>
          <a href="https://ae.linkedin.com/in/perfection-group-998ab111" target="blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" /></a>
        </li>
      </ul>
      <ul class="upper-bar-lift-list">
        <li>
          <span>PO Box: 90974, Dubai UAE</span>
        </li>
        <li>
         <span>Tel: +971 4 2545 015</span>
        </li>
        <li>
         <span> Mail: info@perfectionuae.com</span>
        </li>
      </ul>
    </div>
    <div class="main-nav">
      <b-navbar toggleable="lg" type="light"  >
           <a class="navbar-brand" href="#">
             <b-img class="logo" src="static/transparentlogo.png"></b-img>
           </a>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto sapces">
          <b-link to= "/" class="mr-5 mt-2">Home</b-link>
          <b-nav-item-dropdown class="nav-dropdown mr-5"  text="Our Companies"  >
            <b-dropdown-item href="#">Modern Supplies</b-dropdown-item>
            <b-dropdown-item href="#">Pile Stone</b-dropdown-item>
            <b-dropdown-item href="#">Mega View</b-dropdown-item>
            <b-dropdown-item href="#">DesArt</b-dropdown-item>
            <b-dropdown-item href="#">Perfection Metal</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown class="nav-dropdown mr-5"  text="About Us" >
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
