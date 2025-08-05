<script>
  import { mainTxtColor } from "../lib/Stores";
</script>

<footer class="bg-[#098F90] text-white">
  <div
    class="flex max-w-4xl mx-auto items-center gap-12 justify-between py-3 px-6"
  >
    <!-- for the brand name and, email and discord link -->
    <div>
      <h2 class={`text-2xl text-black font-medium`}>LapXpec.</h2>
      <p class="text-sm">
        Email:
        <a href="mailto:inquiries@acmerockets.com">lapXpec@gmail.com</a>
        <br />
        Discord:
        <a href="#discord link here">lapXpec</a>
      </p>
    </div>

    <!-- the nav would show only when it is in desktop screen -->
    <nav class="hidden sm:flex flex-col text-center">
      <a href="#home"> Home </a>

      <a href="#about"> About </a>

      <a href="#cost"> Cost </a>
    </nav>

    <!-- for the copyright -->
    <div class="font-medium">
      <p>Copyright &COPY; 2025</p>
      <p>All Rights Reserved</p>
    </div>
  </div>
</footer>
