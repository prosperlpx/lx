<script>
  import light_bulb from "../assets/light_bulb.png";
  import dog from "../assets/dog.jpg";
</script>

<div class="p-6">
  <h2 class={`font-bold text-center text-3xl sm:text-4xl text-white`}>
    Core Team
  </h2>

  <ul class="flex items-center gap-6 sm:gap-12 w-fit mx-auto mt-8">
    <li class="flex flex-col items-center gap-4 text-white text-center">
      <img src={dog} alt="dog" class="rounded-full w-12 h-12 sm:w-14 sm:h-14" />
      <p>Lead Designer</p>
    </li>

    <li class="flex flex-col items-center gap-4 text-white text-center">
      <img
        src={light_bulb}
        alt="light_bulb"
        class="rounded-full w-12 h-12 sm:w-14 sm:h-14"
      />
      <p>Lead Developer</p>
    </li>
  </ul>
</div>
