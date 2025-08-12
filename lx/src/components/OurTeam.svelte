<script>
  import pfp from "../assets/pfp.jpeg";
  import core_dev from "../assets/core_dev.jpeg";
  import teamwork from "../assets/teamwork.png";
</script>

<div class="p-6 my-12">
  <div class="space-y-4">
    <img src={teamwork} alt="teamwork" class="w-12 mx-auto" />
    <h2 class={`font-bold text-center text-3xl sm:text-4xl text-white`}>
      Core Team
    </h2>
  </div>

  <ul class="flex items-center gap-12 sm:gap-24 w-fit mx-auto mt-12">
    <li class="flex flex-col items-center gap-4 text-[#f5f5f5] text-center">
      <img src={pfp} alt="dog" class="rounded-full w-12 h-12 sm:w-14 sm:h-14" />
      <p>Team Lead <br /> & Marketer</p>
    </li>

    <li class="flex flex-col items-center gap-4 text-[#f5f5f5] text-center">
      <img
        src={core_dev}
        alt="core_team"
        class="rounded-full w-12 h-12 sm:w-14 sm:h-14"
      />
      <p>Web <br />Developer</p>
    </li>
  </ul>
</div>
