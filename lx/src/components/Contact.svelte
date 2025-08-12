<script>
  import { onMount } from "svelte";
  import { mainTxtColor, bgColor } from "../lib/Stores";
  let inputRef;

  onMount(() => {
    inputRef.focus();
  });

  let message = "";
  let sending = false;

  async function sendMessage() {
    sending = true;
    try {
      const response = await fetch(
        "https://discord.com/api/webhooks/1404264903669452861/S0wtwiqDrHXo_reoaGlNIHFKn-8md8WpTnOS2qQnZDIBUNmY7vc6_VcN5FiGkLw6cQ13",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: message,
          }),
        },
      );
      const data = await response.json();
      console.log(data);
      message = "";
    } catch (error) {
      console.log(error);
    } finally {
      sending = false;
    }
  }
</script>

<main class="max-w-4xl mx-auto px-8 pb-12">
  <section id="contact" class="scroll-mt-60 my-16 sm:my-20">
    <h2 class={`text-center text-5xl sm:text-6xl font-bold ${$mainTxtColor}`}>
      Contact Us
    </h2>
    <form onsubmit={sendMessage}>
      <div class="flex flex-col">
        <label
          for="Message"
          class={`${$mainTxtColor} text-2xl mt-8 mb-4 font-medium`}
          >Message</label
        >
        <textarea
          name="message"
          id="message"
          class={`border-2 rounded-xl p-4 ${$mainTxtColor} ${$bgColor}`}
          rows="8"
          cols="10"
          required
          bind:value={message}
          bind:this={inputRef}
          placeholder={`Please provide your discord username with the message:\n\nEx: @yourUsername and message`}
        ></textarea>
      </div>

      <div class="flex flex-row-reverse sm:flex-row justify-between px-2 my-2">
        <button
          class="bg-blue-500 p-2 rounded-lg mt-4 cursor-pointer text-white"
          type="submit"
        >
          Send to Discord
        </button>
      </div>
    </form>
  </section>
</main>
