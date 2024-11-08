<script>

  let email = $state('');
  let password = $state('')


  /** @type {{ data: import('./$types').PageData, form: import('./$types').ActionData }} */
  let {data, form} = $props();
</script>


<form method="POST" >
  {#if form?.mising} <p>The email field is required</p>{/if}
  {#if form?.incorrect} <p>invalid credentials</p>{/if}

    <label>
      Email
      <input name="email" type="email" bind:value={email}>
    </label>
    <label>
      Password
      <input name="password" type="password" bind:value={password}>
    </label>
    <button>Log in</button>

</form>