<script setup>
import TermImg from "../assets/term.png"
import MarbleImg from "../assets/marble.jpg"
import Mensware from "../assets/menswear.png"
import Newspaper from "../assets/newspaper.png"

let array = [
  {title: "Great type", img: TermImg, datetime: "2020-01-01", url: "google.com" },
  {title: "JKR's take on brand strateg for Marble", img: MarbleImg, datetime: "2020-01-01", url: "https://jkrglobal.com/" },
  {title: "Great type", img: Mensware, datetime: "2020-01-01", url: "google.com" },
  {title: "Great type", img: Newspaper, datetime: "2020-01-01", url: "google.com" },
  {title: "Great type", img: TermImg, datetime: "2020-01-01", url: "google.com" },
  {title: "Great type", img: TermImg, datetime: "2020-01-01", url: "google.com" },
]
</script>

<template>
  <div class="list-info">
    <h2>Boundary Pushing Work</h2>
    <p>
      Presenting featured work which pushes the boundaries of type. Feel free to submit your featured work at: featured@tru.com
    </p>
  </div>
  <div class="gall">
    <div v-for="(item, index) in array" :key="index" class="gallery-item">
      <img :src="item.img" alt="">
      <p class="list-item-title details">{{item.title}}</p>
    </div>
  </div>
</template>

<style lang="scss">
.gallery {
  grid-column: span 5;
  display: grid;
  gap: 2em;
  row-gap: 4em;
  padding-bottom: 7em;
  --xxx: 184.955px;
  grid-template-columns: var(--xxx) var(--xxx) repeat(4, 1fr);
}

.gall {
  //background: red;
  //height: 2em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column: span 4;
  gap: 2em;
  text-transform: lowercase;
  //padding: 2em 0px;
  padding-bottom: 7em;
}

.gallery-item {
  cursor: pointer;

  &:nth-child(2) {
    grid-column: span 2;
  }


  &:nth-child(4) {
    grid-column: span 2;
  }

  img {
    width: 100%;
    height: 8em;
    object-fit: cover;
  }

  p { 
    padding-top: 0.5em;
  }
}
</style>