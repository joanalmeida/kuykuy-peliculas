<template>
  <div id="home">
    <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-vcentered">
            <div class="column is-5">
              <!-- Img here -->
              <figure class="image is-4by3">
                <img class="promo-img" src="http://az616578.vo.msecnd.net/files/2017/02/26/636237341865706889-619832852_movies.jpg">
              </figure>
            </div>
            <div class="column is-6 is-offset-1">
              <h1 class="title is-2">
                Las pelis de ParquePa
              </h1>
              <h2 class="subtitle is-4">
                Donde la posta de las pelis se hace ver
                {{ msg }}
              </h2>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'This is the Home component modified'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.promo-img {
  border-radius: 10px;
  border: 10px solid #FFF;
}
</style>
