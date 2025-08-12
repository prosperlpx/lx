<script>
  import { mainTxtColor } from "../lib/Stores";
</script>

<main>
  <section id="cost" class="scroll-mt-40 py-6 mt-16 sm:mt-24">
    <div>
      <h2 class={`text-center text-5xl sm:text-6xl font-bold ${$mainTxtColor}`}>
        Cost
      </h2>
    </div>

    <div
      class="flex flex-col sm:flex-row gap-3 sm:gap-8 mt-6 w-fit mx-auto py-8 text-[#000000d5]"
    >
      <!-- static or landing page price -->
      <div class="w-50 h-90 bg-yellow-300 rounded-2xl">
        <div class="mt-26 text-2xl px-3 font-medium">
          <p class="text-center">For Landing pages and static sites.</p>
          <p class="text-center text-5xl mt-5 font-bold">$300</p>
        </div>
      </div>

      <!-- for full fledge apps and more -->
      <div class="w-50 h-90 bg-blue-300 mt-8 sm:mt-12 rounded-2xl">
        <div class="mt-12 text-2xl px-3 font-medium space-y-3 text-center">
          <p class="text-center">
            For a full fledged web app, services, mobile apps and more. The cost
            vary speak with us on discord:
          </p>
          <a
            href="https://discord.gg/q4fX7rf4"
            rel="noopener noreferrer"
            target="_blank"
            class="text-blue-600 font-bold"
          >
            lapXpec ➚
          </a>
        </div>
      </div>
    </div>
  </section>
</main>
