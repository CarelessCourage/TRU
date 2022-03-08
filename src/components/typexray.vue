<template>
  <div class="wrapper">
    <div class="accender"></div>
    <h1 class="logo2"><slot></slot></h1>
  </div>
</template>

<style lang="scss">
.wrapper {
  position: relative;
  width: max-content;
  margin: auto;

  .accender, 
  .accender::after, 
  .accender::before {
    content: "";
    position: absolute;
    top: -0.4rem;
    left: 0px;
    width: 100%;
    height: 0.95rem;
    background: rgb(245, 202, 245);
    z-index: -1;
    border-top: dotted 3px var(--shade2);
    border-bottom: dotted 3px var(--shade2);
    animation: getitxx 0.8s backwards ease-in-out 1.6s;
  }
  .accender::before {
    top: 3.46rem;
  }
  .accender::after {
    top: 6.93rem;
  }
  .accender {
    height: 1.2rem;
  }
}

.wrapper h1 { 
  text-transform: capitalize;
  font-variation-settings: "wght" 900, "wdth" 100, "CNTR" 10;
  font-size: 4rem;
  line-height: 3.5rem;
  letter-spacing: -3px;
  width: max-content;
  margin: auto;
  position: relative;
}

.wrapper {
  h1::after, 
  h1::before {
    content: "";
    position: absolute;
    top: 2.86rem;
    left: 0px;
    width: 100%;
    height: 0.4rem;
    background: var(--flavor);
    z-index: -1;
    animation: getitx 0.4s backwards ease-in-out 0.8s;
  }
  h1::before {
    top: 6.35rem;
  }
}

@keyframes getitx {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

@keyframes getitxx {
  0% {
    width: 0%;
    max-height: 0rem;
  }
  50% {
    width: 100%;
    max-height: 0rem;
  }
  100% {
    width: 100%;
    max-height: 1rem;
  }
}
</style>