<script>
  import Navbar from "./components/Navbar.svelte";
  import Hero from "./components/Hero.svelte";
  import Cost from "./components/Cost.svelte";
  import Contact from "./components/Contact.svelte";
  import Footer from "./components/Footer.svelte";
  import {
    mainColor,
    bgColor,
    mainTxtColor,
    isDarkMode,
    heroHeadingTxtCol,
  } from "./lib/Stores";
  import AboutUs from "./components/AboutUs.svelte";

  let initial = "";
  const change = [
    // "Web Apps..",
    "Landing Pages..",
    "AI Powered Apps..",
    "Web Services..",
    // "Mobile Apps..",
    // "and More..",
  ];
  let index = 0;
  let intervalId;

  function toggleMode() {
    isDarkMode.update((mode) => !mode);
    console.log($isDarkMode);
    if ($isDarkMode) {
      bgColor.set("bg-black");
      mainTxtColor.set("text-white");
      heroHeadingTxtCol.set("text-white");
      console.log($bgColor);
    } else if (!$isDarkMode) {
      bgColor.set("bg-white");
      mainTxtColor.set("text-black");
      heroHeadingTxtCol.set("text-[#000000d5]");
      console.log($bgColor);
    }
  }
  // setting dark or light mode
</script>

<main class={`${$bgColor} min-h-screen`}>
  <!-- there should be tools used to build:
include figma, browsers, html, css, javascript, svelte, react, php, more... -->
  <Navbar {toggleMode} />
  <Hero {index} {intervalId} {change} {initial} />
  <AboutUs />
  <Cost />
  <Contact />
  <Footer />
</main>
