<script>
  import { bgColor, mainTxtColor } from "../lib/Stores";
  import discord from "../assets/discord.png";
</script>

<main
  class={`absolute left-0 min-h-screen min-w-screen top-17 ${$bgColor} ${$mainTxtColor} overflow-hidden`}
>
  <ul class="flex flex-col text-center mt-32 text-6xl font-bold space-y-14">
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
      <a href="#contact">
        <img src={discord} alt="discord" class="w-10" />
      </a>
    </li>
  </ul>
</main>
