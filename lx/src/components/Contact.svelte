<script>
  import { mainTxtColor, bgColor } from "../lib/Stores";
</script>

<main class="py-20 max-w-4xl mx-auto p-6">
  <section id="contact" class="scroll-mt-40">
    <h2 class={`text-center text-5xl sm:text-6xl font-bold ${$mainTxtColor}`}>
      Contact Us
    </h2>
    <form>
      <div class="flex flex-col">
        <label
          for="Message"
          class={`${$mainTxtColor} text-2xl mt-8 mb-4 font-medium`}
          >Message:</label
        >
        <textarea
          name="message"
          id="message"
          class={`border-2 rounded-xl p-4 ${$mainTxtColor} ${$bgColor}`}
          rows="10"
          cols="10"
          required
        ></textarea>
      </div>

      <div class="flex flex-row-reverse sm:flex-row justify-between px-2 my-2">
        <button
          class="bg-blue-500 p-2 rounded-lg mt-4 cursor-pointer text-white"
        >
          Send Mail
        </button>

        <button
          class="bg-blue-500 p-2 rounded-lg mt-4 cursor-pointer text-white"
        >
          Discord Server
        </button>
      </div>
    </form>
  </section>
</main>
