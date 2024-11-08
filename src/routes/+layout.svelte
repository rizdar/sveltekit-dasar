<script>
  import "../app.css";
  let { children } = $props();
</script>

<nav class="p-2 flex justify-center gap-3 bg-purple-800 text-white">
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/settings">Settings</a>
</nav>

{@render children()}