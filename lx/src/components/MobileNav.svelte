<script>
  import { bgColor, mainTxtColor } from "../lib/Stores";
  import { isOpenMenu } from "../lib/Stores.js";
  import discord from "../assets/discord.png";

  const closeMenu = () => isOpenMenu && isOpenMenu.update((menu) => !menu);
</script>

<button
  class={`absolute left-0 min-h-screen min-w-screen top-17 ${$bgColor} ${$mainTxtColor} overflow-hidden`}
  onclick={closeMenu}
>
  <ul class="flex flex-col text-center text-6xl font-bold space-y-10">
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#about">About</a>
    </li>

    <li>
      <a href="#cost">Cost</a>
    </li>

    <li>
      <a href="#contact">Contact Us</a>
    </li>

    <li class="bg-white p-2 rounded-2xl mx-auto">
      <a
        href="https://discord.gg/q4fX7rf4"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={discord} alt="discord" class="w-10" />
      </a>
    </li>
  </ul>
</button>
