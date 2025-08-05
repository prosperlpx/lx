<script>
  import { onMount, onDestroy } from "svelte";
  import rocketride from "../assets/rocketride.png";
  import rocketlaunch from "../assets/rocketlaunch.png";
  import rocketman from "../assets/rocketman.png";
  import discord from "../assets/discord.png";
  import {
    mainTxtColor,
    heroHeadingTxtCol,
    headingTxtLgScreen,
    headingTxtSmScreen,
    isOpenMenu,
  } from "../lib/Stores";
  import { scale } from "svelte/transition";
  export let change;
  export let index;
  export let intervalId;
  export let initial;

  let initialImg = "";
  let changeImg = [rocketride, rocketlaunch, rocketman];
  let newInterval = intervalId;

  // for the text change
  onMount(() => {
    intervalId = setInterval(() => {
      index = (index + 1) % change.length;
    }, 60000); //changes text every 4 seconds
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });

  // for the image change
  onMount(() => {
    newInterval = setInterval(() => {
      index = (index + 1) % changeImg.length;
    }, 3000); //changes text every 1 seconds
  });

  onDestroy(() => {
    clearInterval(newInterval);
  });

  //reactive declaration for the text change
  $: initial = change[index];
  // reactive declaration for the image change
  $: initialImg = changeImg[index];
</script>

<main class="mx-auto max-w-4xl overflow-hidden">
  <section
    id="home"
    class="mt-16 sm:mt-12 flex scroll-mt-40 flex-col-reverse items-center justify-between gap-12 p-6 sm:flex-row"
    in:scale={{ duration: 500 }}
    out:scale={{ duration: 500 }}
  >
    <div class="sm:w-2/3">
      <h1
        class={`${$headingTxtSmScreen} sm:${$headingTxtLgScreen} font-bold ${$heroHeadingTxtCol} sm:text-left text-center`}
      >
        Building the next Big thing with Sleek Ui? <br />
        <p
          class="py-4 bg-gradient-to-l from-blue-600 to-[#098F90] bg-clip-text text-transparent"
        >
          {initial}
        </p>
      </h1>

      <p
        class={`${$mainTxtColor} text-[16px] sm:text-xl text-center sm:text-left py-4 space-y-2`}
      >
        We help walk you through the hastle of designing and development.<br
        /><span class="text-[#098F90]">Make your project live with us! 🫶</span>
      </p>
    </div>

    <!-- this is for the image -->

    {#if initialImg === ""}
      <img src={rocketride} alt="" class="w-2/3 sm:w-1/2" />
    {:else}
      <img src={initialImg} alt="" class="w-2/3 sm:w-1/2" />
    {/if}
  </section>

  <!-- this redirects to our discord server where you attend to clients and give  -->

  {#if $isOpenMenu}
    <img
      src={$isOpenMenu && discord}
      alt={$isOpenMenu ? "discord" : ""}
      class={`fixed w-8 h-8 sm:w-10 sm:h-10 z-20 bg-white p-1 rounded-full top-142 sm:right-4 sm:top-138 lg:right-32 lg:top-130 ml-3 sm:ml-0 cursor-pointer`}
    />
  {:else}
    {""}
  {/if}
</main>
