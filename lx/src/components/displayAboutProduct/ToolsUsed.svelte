<script>
  import { onMount, onDestroy } from "svelte";
  import cssLogo from "../../assets/tools/cssLogo.png";
  import figmalogo from "../../assets/tools/figmaLogo.png";
  import php_logo from "../../assets/tools/php_logo.png";
  import svelte_logo from "../../assets/tools/svelte_logo.png";
  import react_logo from "../../assets/tools/react_logo.png";
  import html from "../../assets/tools/html.svg";

  let images = [figmalogo, php_logo, cssLogo, svelte_logo, react_logo, html];

  // duplicate images or seamless looping
  const sliderImages = [...images, ...images, ...images];
</script>

<div class="py-6">
  <h2 class="text-white font-bold text-center text-3xl">Tools Used 🛠</h2>
  <div
    class="slider-wrapper relative overflow-hidden w-[14rem] sm:w-[30rem] mx-auto m-4 rounded-full"
  >
    <!-- slider track container -->
    <div class="slider rounded-xl items-center p-4">
      {#each sliderImages as image, i}
        <div class="slide items-center">
          <img
            src={image}
            alt="Slide {(1 % images.length) + 1}"
            class="w-12 h-12 p-1 rounded-full bg-white"
          />
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  /* .slider-wrapper {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    padding: 1rem 0;
  } */

  .slider {
    display: flex;
    width: max-content;
    animation: scroll 20s linear infinite;
    will-change: transform; /* optimizes animation performance */
  }

  .slide {
    flex: 0 0 80px;
    width: 120px;
    height: 80px;
    margin-left: 18px;
  }

  /* .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */

  /* animation keyframes */
  @keyframes scroll {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }
</style>
