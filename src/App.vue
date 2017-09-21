<template>
  <div id="app">
    <!--img src="./assets/logo.png"-->
    <section id="main" class="hero is-fullheight is-dark">
      <!-- Hero header: will stick at the top -->
      <div class="hero-head">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
              <a class="nav-item">
                <!--img src="../public/images/bulma-icon.png" alt="Logo"-->
                Icono Bulma
              </a>
            </div>
            <span class="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div class="nav-right nav-menu">
              <a class="nav-item is-active">
                Titulo
              </a>
              <a class="nav-item">
                Examples
              </a>
              <a class="nav-item">
                Documentation
              </a>
              <span class="nav-item">
                <a class="button is-primary is-inverted">
                  <span class="icon">
                    <i class="fa fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
            </div>
          </div>
        </header>
      </div>

      <!-- Hero content: will be in the middle -->
      <router-view></router-view>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <div class="container">
          <div class="tabs is-centered">
            <ul>
              <li><a href="http://bulma.io">Un link copado</a></li>
              <li><a href="http://bulma.io">El del medio</a></li>
              <li><a href="http://bulma.io">Y otro link mas feo</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#main {
  background-image: linear-gradient(rgba(9, 255, 248, 0.5), rgb(90, 6, 6)), linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(http://az616578.vo.msecnd.net/files/2017/01/09/636195801180777409-192823240_movies.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
