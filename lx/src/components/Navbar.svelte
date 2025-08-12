<script>
  import lapxpec_logo from "../assets/lapxpec_logo.png";
  import { isDarkMode, bgColor, isOpenMenu } from "../lib/Stores";
  import brightness from "../assets/brightness.png";
  import darkness from "../assets/darkMode.svg";
  import MobileNav from "./MobileNav.svelte";

  function changeToggle() {
    isOpenMenu.update((menu) => !menu);
  }

  export let toggleMode;
</script>

<header class="bg-[#098F90] text-white sticky top-0 z-10">
  <nav
    class="flex max-w-4xl mx-auto items-center gap-12 justify-between py-3 px-6"
  >
    <!-- the logo image and text -->
    <div>
      <a
        href="#home"
        class="flex items-center text-2xl sm:text-4xl font-bold gap-2 w-fit"
      >
        <img src={lapxpec_logo} alt="lapxpec_logo" class="w-10" />
        <h2>LapXpec.</h2>
      </a>
    </div>

    <!-- the navigation for desktop -->
    <ul
      class="hidden sm:flex items-center space-x-8 font-medium sm:text-sm md:text-lg"
    >
      <a href="#about">
        <li>About</li>
      </a>

      <a href="#cost">
        <li>Cost</li>
      </a>

      <li class="flex items-center gap-6">
        <a href="#contact">Contact Us</a>
        {#if !$isDarkMode}
          <button
            class="cursor-pointer bg-white p-1 rounded-lg"
            onclick={toggleMode}
          >
            <img src={brightness} alt="discord_logo" class="w-6" />
          </button>
        {:else}
          <button class="cursor-pointer p-1" onclick={toggleMode}>
            <img src={darkness} alt="discord_logo" class="w-6" />
          </button>
        {/if}
      </li>
    </ul>

    <!-- the navigation for mobile -->
    <div class="sm:hidden flex items-center gap-3">
      <div class="pt-4">
        {#if !$isDarkMode}
          <button
            class="cursor-pointer bg-white p-1 rounded-lg"
            onclick={toggleMode}
          >
            <img src={brightness} alt="discord_logo" class="w-6" />
          </button>
        {:else}
          <button class="cursor-pointer p-1" onclick={toggleMode}>
            <img src={darkness} alt="discord_logo" class="w-6" />
          </button>
        {/if}
      </div>

      <div>
        {#if $isOpenMenu}
          <button class="text-4xl cursor-pointer" onclick={changeToggle}>
            &#9776;
          </button>
        {:else}
          <!-- the close button and the nav for mobile here -->
          <button class="text-4xl cursor-pointer" onclick={changeToggle}>
            &times;
          </button>
          <MobileNav />
        {/if}
      </div>
    </div>
  </nav>
</header>
