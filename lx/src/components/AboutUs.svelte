<script>
  import { isDarkMode, mainTxtColor } from "../lib/Stores";
  import DisplayProductOne from "./displayAboutProduct/DisplayProductOne.svelte";
  import DisplayProductThree from "./displayAboutProduct/DisplayProductThree.svelte";
  import DisplayProductTwo from "./displayAboutProduct/DisplayProductTwo.svelte";
  import ToolsUsed from "./displayAboutProduct/ToolsUsed.svelte";
  import OurTeam from "./OurTeam.svelte";
</script>

<main class="py-20 px-8 mx-auto max-w-4xl">
  <section id="about" class="scroll-mt-40">
    <div
      class="bg-gradient-to-t from-black to-[#229B9C] bg-clip-content rounded-3xl"
    >
      <div class="pt-12 space-y-6">
        <h2 class={`text-center text-5xl sm:text-6xl font-bold text-teal-300`}>
          About Us
        </h2>

        <p class={`text-[#f5f5f5] w-3/4 mx-auto pb-4 text-center`}>
          We help bring that project, idea into reality. Walking you through the
          hastle of designing, development, deployment, SEO, and more. Our
          vision is to build softwares, applications that meets users needs.
        </p>

        <OurTeam />
      </div>

      <div class="py-8">
        <DisplayProductOne />
        <DisplayProductTwo />
        <DisplayProductThree />
      </div>

      <ToolsUsed />
    </div>
  </section>
</main>
