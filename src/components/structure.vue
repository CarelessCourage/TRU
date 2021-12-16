<template>
<div class="wrapper paragraphs">
  <h1>Thjis is a title</h1>
  <h3>The type which, through any arbitrary warping of design or excess</h3>
  <p><span>In contemporary use,</span> the practice and study of 
    typography include a broad range, covering all aspects of letter 
    design and application, both mechanical (typesetting, type design, 
    and typefaces) and manual (handwriting and calligraphy).
  </p>
  <p class="details">Typography is the art and technique of arranging type to make 
    written language legible, readable and appealing when displayed. The arrangement 
    of type involves selecting typefaces, point sizes, line lengths, line-spacing 
    (leading), and letter-spacing (tracking), as well as adjusting the space between 
    pairs of letters (kerning[1]).
  </p>
  <h2>Thjis is a sub title</h2>
  <p>
    Typography is the work of typesetters (also known as compositors), 
    typographers, graphic designers, art directors, manga artists, 
    comic book artists, and, now, anyone who arranges words, letters, 
    numbers, and symbols for publication, display, or distribution, 
    from clerical workers and newsletter writers to anyone self-publishing 
    materials. 
  </p>
</div>
</template>

<style lang="scss">

.wrapper {
  max-width: 40em;
}

$mobile: 360px;
$phablet: 540px;
$tablet: 850px;
$desktop: 1200px;

.paragraphs {
  h1, h2, h3, p {
    margin: 0 0 2rem;
  }
}

html {
  font-size: clamp(9px, 1vw, 18px);
  --text-contrast: 90;
  --text-weight: 900;
}

h1, h2, h3, p.details, button {
  max-width: 55ch;
  text-transform: lowercase;
}

h1 {
  font-size: 6rem;
  line-height: 8rem;
  font-variation-settings: "wght" 900, "wdth" 100, "CNTR" 80;
}

h1.element {
  font-size: clamp(7rem, 1vw, 10rem);
  line-height: 12rem;
  font-variation-settings: "wght" var(--text-weight), "wdth" 100, "CNTR" var(--text-contrast);
}

h2 {
  font-size: 4rem;
  line-height: 4rem;
  font-variation-settings: "wght" 500, "wdth" 100, "CNTR" 70;
}

h3 {
  font-size: 3rem;
  line-height: 4rem;
  letter-spacing: -0.5px;
  font-variation-settings: "wght" 900, "wdth" 100, "CNTR" 90;
  max-width: 20ch;
}

p, button {
  font-size: 1rem;
  line-height: 1.3rem;
  letter-spacing: 0px;
  max-width: 55ch;
  font-variation-settings: "wght" 400, "wdth" 100, "CNTR" 0;
  span {
    font-size: 1.3rem;
    font-variation-settings: "wght" 900, "wdth" 100, "CNTR" 0;
  }
}

p.details {
  font-size: 0.8rem;
  line-height: 1.1rem;
  font-variation-settings: "wght" 800, "wdth" 100, "CNTR" 0;
  opacity: .3;
}

button {
  font-variation-settings: "wght" 800, "wdth" 100, "CNTR" 0;
}

button {
  cursor: pointer;
  border-radius: var(--radius);
  background: var(--flavor);
  color: var(--background);
  padding: 0rem 5rem;
  min-height: 4.5rem;
  border: none;
  transition: .4s ease-in-out;
  &:hover {
    letter-spacing: 0.2rem;
    opacity: .8;
    transition: .2s ease-in-out;
  }
  &:active {
    letter-spacing: -0.2rem;
    opacity: .4;
    transition: .2s ease-in-out;
  }
}

p.web,
button,
.text.web, 
.text.web p{
  font-size: 1.5rem;
  line-height: 2rem;
  span {
    font-size: 1.7rem;
  }
}
</style>