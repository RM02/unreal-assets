<template>
  <div class="logo-container">
    <img class="img" src="/img1.png" alt="" width="853" sizes="(max-width: 991px) 100vw, 852.9977416992188px">
    <h1 class="heading">UNREAL ASSETS</h1>
    <div class="text-block-4">Premium game-ready assets - Simplified</div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'main'
}
</script>
<style scoped>
.heading {
    margin-top: -100px;
    font-family: 'Chakra Petch',sans-serif;
    color: #fff;
    font-size: 56px;
    font-weight: 500;
    text-align: center;
}
h1 {
    font-size: 38px;
    line-height: 44px;
    margin-top: 20px;
}
h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin-bottom: 10px;
}
.text-block-4 {
    font-family: 'Chakra Petch',sans-serif;
    color: #fff;
}
.logo-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100vw;
    height: 90vh;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
@media screen and (min-width: 1440px) {
  .logo-container {
      height: 90vh;
  }
}
@media screen and (max-width: 991px) {
  .logo-container {
      height: 80vh;
  }
}
@media screen and (max-width: 767px){
  img {
      width: 100%;
  }
}
@media screen and (max-width: 767px){
  .heading {
      margin-top: -30px;
  }
}
@media screen and (max-width: 479px){
  .heading {
      margin-top: -20px;
      font-size: 24px;
  }
}
</style>
