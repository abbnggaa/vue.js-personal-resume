<script setup>
  import {
    RouterLink,
    RouterView
  } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
  import Footer from './components/Footer.vue';
</script>

<template>
  <!-- header -->
  <header class="ds-header ds-header-home">
    <div class="container">
      <div class="ds-header-inner">
        <a href="index.html" class="ds-logo">Anggaa</a>
      </div>
    </div>
  </header>
  <!-- header -->

  <!-- banner -->
  <div class="ds-banner-section">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
          <div class="ds-banner">
            <h1 class="ds-main-heading">Want to know more about me?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laborum consectetur in velit fugiat.
              Voluptatibus id, temporibus ab vitae repellendus ducimus minus esse suscipit ex architecto autem, porro
              consectetur ipsam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cumque odit soluta obcaecati
              necessitatibus minima fuga amet sit aperiam aut rem, aliquid officiis cum. Mollitia hic consequatur a
              expedita velit?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tenetur quis expedita consectetur sunt aut,
              ipsum asperiores, repellendus, sint quidem amet vel saepe facere voluptates neque delectus voluptas dolor
              odit?</p>
            <RouterLink to="/keahlian"><a href="#" class="ds-buttan">Keahlian Saya <i
                  class="ri-arrow-right-line"></i></a></RouterLink>
            <RouterLink to="/keahlian"><a href="#" class="ds-buttan">Keahlian Saya <i
                  class="ri-arrow-right-line"></i></a></RouterLink>
            <p><strong>Lorem ipsum dolor sit amet consectetur.</strong></p>
          </div>
        </div>
        <figure><img src="@/assets/images/e-book.jpg" width="" height="" alt="banner-image"></figure>
      </div>
    </div>
  </div>
  <!-- banner -->

  <RouterView />

  <!-- book -->
  <div class="ds-book-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
          <!-- ds-bool-listing-section -->
          <div class="ds-book-listing-section">
            <div class="ds-book-list">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ds-book-list-img">
                  <figure><img src="@/assets/images/e-book-feature2.jpg" width="" height="" alt=""></figure>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ds-book-list-content">
                  <p>Transform your career and company, with this free book by Apple and Electronic Arts designBring a
                    business mind to design, and transform your career and company, with this free book by Apple and
                    Electronic Arts design Transform your career and company, with this free book by Apple and
                    Electronic Arts designBring a business mind to design, and transform your career acompany, with this
                    free book by Apple and Electronic Arts designBring a business mind to design.</p>

                  <p>Bring a business mind to design, and transform your career and company, with this free book by
                    Apple and Electronic Arts design Bring a business mind to design</p>
                </div>
              </div>
            </div>
          </div>
          <!-- ds-bool-listing-section -->
        </div>
      </div>
    </div>
  </div>
  <!-- book -->

  <!-- book-add -->
  <div class="ds-book-add-section">
    <div class="container">
      <span>Lorem ipsum dolor sit amet consectetur.</span>
      <h2>click to see more about my portfolio</h2>
      <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus porro recusandae similique quibusdam, voluptatum unde, molestias aliquid ipsa facilis quidem tenetur eveniet blanditiis magnam enim corrupti repudiandae cumque commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eius nostrum quibusdam labore voluptatem, cum, blanditiis nulla nobis provident cumque quas amet fugit corrupti earum odit enim odio? Dolores, pariatur.</p>
      <a href="https://www.instagram.com/ehhanggaa/" class="ds-buttan">Instagram</a>
      <footer class="ds-footer">
        <Footer />
      </footer>
    </div>
  </div>
  <!-- book-add -->

</template>

<style scoped>
  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }
  }
</style>