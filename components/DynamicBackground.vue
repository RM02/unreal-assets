<template>
  <div>
    <div class="grain-background"></div>
    <div
      data-poster-url="https://uploads-ssl.webflow.com/6262efd7043c83bbf5b66ecd/6272c3ad418dcd6a910e4a31_UABACKGROUND-poster-00001.jpg"
      data-video-urls="https://uploads-ssl.webflow.com/6262efd7043c83bbf5b66ecd/6272c3ad418dcd6a910e4a31_UABACKGROUND-transcode.mp4,https://uploads-ssl.webflow.com/6262efd7043c83bbf5b66ecd/6272c3ad418dcd6a910e4a31_UABACKGROUND-transcode.webm"
      data-autoplay="true"
      data-loop="true"
      data-wf-ignore="true"
      data-beta-bgvideo-upgrade="false"
      class="background-video w-background-video w-background-video-atom"
    >
      <video
        id="04e0eeef-35f8-81a1-2370-302ef6140fc8-video"
        autoplay=""
        loop=""
        style="
          background-image: url('https://uploads-ssl.webflow.com/6262efd7043c83bbf5b66ecd/6272c3ad418dcd6a910e4a31_UABACKGROUND-poster-00001.jpg');
        "
        muted=""
        playsinline=""
        data-wf-ignore="true"
        data-object-fit="cover"
      >
        <source
          src="https://uploads-ssl.webflow.com/6262efd7043c83bbf5b66ecd/6272c3ad418dcd6a910e4a31_UABACKGROUND-transcode.mp4"
          data-wf-ignore="true"
        />
        <source
          src="https://uploads-ssl.webflow.com/6262efd7043c83bbf5b66ecd/6272c3ad418dcd6a910e4a31_UABACKGROUND-transcode.webm"
          data-wf-ignore="true"
        />
      </video>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.grain-background {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
  background-color: rgba(0, 0, 0, 0.87);
  background-image: url(https://uploads-ssl.webflow.com/6262efd…/6272c1d…_pexels-saulo-zayas-246213.jpg);
  background-position: 50% 50%;
  background-size: cover;
  opacity: 0.22;
  mix-blend-mode: luminosity;
}
.background-video {
  position: fixed;
  z-index: -2;
  width: 100%;
  height: 100%;
  opacity: 0.2;
}
.w-background-video {
  position: fixed;
  overflow: hidden;
  height: 500px;
  color: #fff;
}
.w-background-video > video {
  background-size: cover;
  background-position: 50% 50%;
  position: fixed;
  margin: auto;
  width: 100%;
  height: 100%;
  right: -100%;
  bottom: -100%;
  top: -100%;
  left: -100%;
  object-fit: cover;
  z-index: -1;
}
</style>
