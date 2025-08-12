<script>
  import Kratos from "./displayAboutProduct/Kratos.svelte";
  import Memefi from "./displayAboutProduct/Memefi.svelte";
  import AiPrj from "./displayAboutProduct/AiPrj.svelte";
  import ToolsUsed from "./displayAboutProduct/ToolsUsed.svelte";
  import OurTeam from "./OurTeam.svelte";
</script>

<main class="mt-16 sm:mt-24 px-8 mx-auto max-w-4xl">
  <section id="about" class="scroll-mt-40">
    <div
      class="bg-gradient-to-t from-black to-[#229B9C] bg-clip-content rounded-3xl"
    >
      <div class="pt-12 space-y-6">
        <h2 class={`text-center text-5xl sm:text-6xl font-bold text-teal-300`}>
          About Us
        </h2>

        <p
          class={`text-[#f5f5f5] w-3/4 mx-auto pb-4 text-justify sm:text-center text-lg sm:text-xl`}
        >
          At LapXpec, we're obsessed with the intersection of cutting-edge
          design and web3 innovation. We craft sleek, intuitive web and mobile
          experiences that don't just function, they captivate. The future of
          decentralized tech deserves interfaces that are as seamless as they
          are powerful and that's where we come in. Our team blends razor-sharp
          UX/UI design with deep blockchain expertise to build products that
          users love and brands trust. Because in the decentralized world, users
          experience shouldn't be an afterthought, it should be the foundation.<br
          />
          <br />Let's build the future,
          <span class="text-yellow-300">beautifully</span> 🚀.
        </p>

        <OurTeam />
      </div>

      <div class="space-y-22 py-10">
        <Kratos />
        <Memefi />
        <AiPrj />
      </div>

      <ToolsUsed />
    </div>
  </section>
</main>
