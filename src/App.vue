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
            <p>Professional experience</p>
            <p>Has been involved in the project development of the Sarpras application for the Taruna Bhakti Vocational High School Depok, Development of eCommerce applications & Fullstack Developer</p>
            <p>A side project that I made</p>
            <p>making video games characters using blender3d & making video games using godot engine</p>
            <RouterLink to="/"><a href="#" class="ds-buttan">About Me</a></RouterLink>
            <p><strong>click to see my personal data</strong></p>
          </div>
        </div>
        <figure><img src="@/assets/images/e-book.jpg" width="" height="" alt="banner-image"></figure>
      </div>
    </div>
  </div>
  <!-- banner -->

  <!-- book -->
  <div class="ds-book-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
          <!-- ds-book-content -->
          <div class="ds-book-content">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <h2 class="ds-sub-heading">Experience</h2>
                <p>has experience developing many websites from landing pages to websites that are equipped with payments and much more</p>
                <RouterLink to="/porto"><a href="#" class="ds-buttan mt-4">Porto</a></RouterLink>
              </div>
              <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <ul>
                  <li>
                    <span>01</span>Making a product website using Html, CSS and Bootstrap
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 90%"
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      </div>
                    </div>

                  </li>
                  <li>
                    <span>02</span>Making a website display design using CSS, JS and Bootstrap
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 80%"
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      </div>
                    </div>

                  </li>
                  <li>
                    <span>03</span>Creating an agenda table and relations using Laravel
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: 90%"
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      </div>
                    </div>

                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- ds-book-content -->
        </div>
      </div>
    </div>
  </div>
  <!-- book -->

  <!-- book -->
  <RouterView />
  <!-- book -->

  <!-- book-add -->
  <div class="ds-book-add-section">
    <div class="container">
      <span>get to know me better</span>
      <h2>click to see more about my portfolio</h2>
      <p class="mb-5">I usually publish my projects on Instagram and GitHub for everyone to see. maybe I will develop a new project such as a website about a product, an e-commerce website, create a video game character and much more. to see it can check on my instagram and github</p>
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