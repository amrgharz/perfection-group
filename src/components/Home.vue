<template>
  <div>
    <Slider
      animation="fade"
      v-model="sliderValue"
      :duration="5000"
      :speed="1000"
    >
      <SliderItem
        v-for="(i, index) in list"
        :key="index"
        @click="changeIndex(1);"
        :style="i"
      >
      </SliderItem>
    </Slider>
    
    <!-- <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col>
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
        </b-col>
      </b-row>
    </b-container>   -->
    <div class="triangle-down">
      <div id="triangle-down"></div>
    </div>
    <div class="intro-text">
      <h2>
        Our companies have what it takes to professionally personalize a project that suits your needs.
        A wide range of services to make your wishes a reality 
      </h2>
      <p >
         <h2>Please take the time and read our story.</h2>
         <b-button @click= 'toggleClasses()'>&#8595;</b-button>
         <p class="text-center" v-bind:class="[isActive ? 'show': 'hide']">
            The first chapter of our success story was in 2009 when Perfection Construction company was established
            by a number of ambitious individuals who believed in providing the construction sector in UAE with an
            unprecedented type of construction projects blended with both, special designs and high quality. Shortly
            afterwards, due to the rapid growth our business had witnessed, a strategic decision was made to acquire a
            promising company called Perfection Metal Industries LLC.
            After a while, to reflect the notion of the continuous natural growth of our ambitious business, we’ve added
            six more companies to the group holding the names of Pilestone Foundation Contractors & Surveys Works
            LLC, Dezart Joinery Works LLC, and Dezart Interior Decoration LLC, Megaview Aluminum and Glass Works
            LLC, Mega View Manufacture LLC and Modern Supplies General Trading LLC. This latter strategic and bold
            move stems from our belief that Perfection Group is willing and able to serve its precious clients with
            diversified services and products they are entitled to.

         </p>
         
      </p>
    </div>
    <!-- Section: Team v.1 -->
<section class="team-section text-center my-5">
  <hr>
  <!-- Section heading -->
  <h2 class="h1-responsive font-weight-bold my-5">The Head Office Team</h2>
  <!-- Section description -->
  <p class="grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
    eum porro a pariatur veniam.</p>

  <!-- Grid row -->
  <div class="row">

    <!-- Grid column -->
    <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
      <div class="avatar mx-auto">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" class="rounded-circle z-depth-1"
          alt="Sample avatar">
      </div>
      <h5 class="font-weight-bold mt-4 mb-3">SomeOne</h5>
      <p class="text-uppercase blue-text"><strong>Graphic designer</strong></p>
      <p class="grey-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci sed quia non numquam modi tempora eius.</p>
      <div class="centered">
      <ul class="list-unstyled mb-0 flexed">
        <!-- Twitter -->
        <a class="p-2 fa-lg fb-ic">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
        </a>
        <!-- Facebook -->
        <a class="p-2 fa-lg ins-ic">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
        </a>
        <!-- Linkedin -->
        <a class="p-2 fa-lg ins-ic">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" />
        </a>
      </ul>
      </div>
    </div>
    <!-- Grid column -->

    <!-- Grid column -->
    <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
      <div class="avatar mx-auto">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" class="rounded-circle z-depth-1"
          alt="Sample avatar">
      </div>
      <h5 class="font-weight-bold mt-4 mb-3">John Doe</h5>
      <p class="text-uppercase blue-text"><strong>Web developer</strong></p>
      <p class="grey-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ipsa accusantium
        doloremque rem laudantium totam aperiam. sed fualoi </p>
      <div class="centered">
      <ul class="list-unstyled mb-0 flexed">
        <!-- Twitter -->
        <a class="p-2 fa-lg fb-ic">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
        </a>
        <!-- Facebook -->
        <a class="p-2 fa-lg ins-ic">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
        </a>
        <!-- Linkedin -->
        <a class="p-2 fa-lg ins-ic">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" />
        </a>
      </ul>
      </div>
    </div>
    <!-- Grid column -->

    <!-- Grid column -->
    <div class="col-lg-3 col-md-6 mb-md-0 mb-5">
      <div class="avatar mx-auto">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" class="rounded-circle z-depth-1"
          alt="Sample avatar">
      </div>
      <h5 class="font-weight-bold mt-4 mb-3">Maria Smith</h5>
      <p class="text-uppercase blue-text"><strong>Photographer</strong></p>
      <p class="grey-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim est fugiat nulla id eu laborum. alksdnf</p>
      <div class="centered">
      <ul class="list-unstyled mb-0 flexed">
        <!-- Twitter -->
        <a class="p-2 fa-lg fb-ic">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
        </a>
        <!-- Facebook -->
        <a class="p-2 fa-lg ins-ic">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
        </a>
        <!-- Linkedin -->
        <a class="p-2 fa-lg ins-ic">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" />
        </a>
      </ul>
      </div>
    </div>
    <!-- Grid column -->

    <!-- Grid column -->
    <div class="col-lg-3 col-md-6">
      <div class="avatar mx-auto">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" class="rounded-circle z-depth-1"
          alt="Sample avatar">
      </div>
      <h5 class="font-weight-bold mt-4 mb-3">Tom Adams</h5>
      <p class="text-uppercase blue-text"><strong>Backend developer</strong></p>
      <p class="grey-text">Perspiciatis repellendus ad odit consequuntur, eveniet earum nisi qui consectetur
        totam officia voluptates perferendis voluptatibus aut yes.</p>
      <div class="centered">
      <ul class="list-unstyled mb-0 flexed">
        <!-- Twitter -->
        <a class="p-2 fa-lg fb-ic">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
        </a>
        <!-- Facebook -->
        <a class="p-2 fa-lg ins-ic">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />
        </a>
        <!-- Linkedin -->
        <a class="p-2 fa-lg ins-ic">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" />
        </a>
      </ul>
      </div>
    </div>
    <!-- Grid column -->

  </div>
  <!-- Grid row -->

</section>
<!-- Section: Team v.1 -->
    <hr> 
<section>
  <div class="container">
    <div class="row"> 
        <div class="col-lg-6 col-md-12">
          <h3 class="text-center">Our Vision </h3>
          <hr class="our-vision-hr">
          <p>To become a major player in the sector,
            signing under the prestigious projects for tomorrow’s world of business,
            harmonizing innovative and progressive technology with its experience,
            excellence and high-caliber work.
          </p>
        </div>
    
        <div class="col-lg-6 col-md-12">
          <b-img  class="" fluid src="https://designexecutives.com/images/ourvision-1436x960.jpg"></b-img>
        </div>
    </div>
  </div>
</section>
<hr>
<section>
  <div class="container">
    <div class="row"> 
        <div class="col-lg-6 col-md-12">
          <h3 class="text-center">Our Mission </h3>
          <hr class="our-vision-hr">
          <p> To Become one of the leaders in General,
              Civil as well as Structural Steel Construction Company preferred by Clients,
              Projects Managers and Consultants of UAE
          </p>
        </div>
    
        <div class="col-lg-6 col-md-12">
          <b-img  class="" fluid src="./static/mission.jpg"></b-img>
        </div>
    </div>
  </div>
</section>
<Footer/>
</div> 
</template>
<script>
import { Slider, SliderItem } from "vue-easy-slider";

export default {
  name: "App",
  components: {
    Slider,
    SliderItem
  },
  data() {
    return {
      list: [],
      sliderValue: 0,
      isActive: false
    };
  },
  methods: {
    changeIndex(index) {
      this.sliderValue = index;
    },
    toggleClasses: function(event){
       // Check value
       if(this.isActive){
         this.isActive = false;
       }else{
         this.isActive = true;
       }

    }
  },
  mounted() {
    setTimeout(
      () =>
        (this.list = [
          {
            backgroundImage: 'url("https://cdn.crello.com/common/69f09f26-f31c-41be-89a9-c786bec997ba_1024.jpg")',
            width: "100%",
            height: "100%"
          },
          {
            backgroundImage: 'url("https://www.freewebheaders.com/wordpress/wp-content/gallery/construction/construction-and-technology-header-4101.jpg")',
            width: "100%",
            height: "100%"
          },
          {
            backgroundImage: 'url("https://cdn.crello.com/common/69f09f26-f31c-41be-89a9-c786bec997ba_1024.jpg")',
            width: "100%",
            height: "100%"
          },
          {
            backgroundImage: 'url("https://www.freewebheaders.com/wordpress/wp-content/gallery/construction/construction-and-technology-header-4101.jpg")',
            width: "100%",
            height: "100%"
          }
        ]),
      1000
    );
  }
};
</script>




