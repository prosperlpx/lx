<script>
  import { mainTxtColor } from "../lib/Stores";
</script>

<main>
  <section id="cost" class="scroll-mt-40 py-6">
    <div>
      <h2 class={`text-center text-5xl sm:text-6xl font-bold ${$mainTxtColor}`}>
        Cost
      </h2>
    </div>

    <div class="flex flex-col sm:flex-row gap-3 w-fit mx-auto py-8">
      <div class="w-50 h-80 bg-red-400"></div>
      <div class="w-50 h-80 bg-blue-400 sm:mt-8"></div>
    </div>
  </section>
</main>
