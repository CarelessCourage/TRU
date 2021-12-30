<template>
  <div class="tile">
    <slot></slot>
    <div class="gradient"></div>
    <div class="yellow"></div>
  </div>
</template>

<style lang="scss">
  .tile {
    border-radius: 0.4rem;
    height: 250px;
    padding: 2em;
    display: flex;
    align-items: center;
    justify-content: center;

    //background: var(--flavor);
    position: relative;
    overflow: hidden;
  
    cursor: pointer;

    h3 {
      transition: 0.8s;
      position: relative;
      z-index: 2;
    }

    &:hover {
      .gradient {
        //top: 100%;
        opacity: 1;
      }
      h3 {
        color: var(--background);
      }
    }
  }

  .gradient {
    opacity: 0;
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 50% 100%,black,var(--foreground),#0075c3,#fff3c7);
    transition: 0.8s;
    transform: scale(1);
  }

  .yellow {
    position: absolute;
    z-index: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: 0.8s;
    background: var(--flavor);
    animation: slideup 0.8s backwards ease-in-out;
    animation-delay: 0s;
  }

  .tile:nth-child(2) .yellow {
    animation-delay: 0.4s;
  }

  .tile:nth-child(3) .yellow {
    animation-delay: 0.8s;
  }


  @keyframes slideup {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  </style>