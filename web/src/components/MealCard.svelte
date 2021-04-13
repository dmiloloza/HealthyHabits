<script>
  import {fly} from 'svelte/transition';

  export let meals;

  let visibleIngredients = false;
  let visibleDescription = false;
</script>

{#each meals as meal }
  <h2>{meal.title}</h2>
  <img alt='{meal.imageAlt}' src='{meal.image}' width='200' />
  <label>
    <input type='checkbox' bind:checked={visibleIngredients}>Sastojci
  </label>

  {#if visibleIngredients}
    <p transition:fly='{{ y: 200, duration: 500 }}'>
      {#each meal.ingredients as ingredient }
        <ul>
          <li>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>
        </ul>
      {/each}
    </p>
  {/if}

  <label>
    <input type='checkbox' bind:checked={visibleDescription}>Priprema
  </label>

  {#if visibleDescription}
    <p transition:fly='{{ y: 200, duration: 500 }}'>
      <b>Priprema:</b> {meal.description}
    </p>
  {/if}

  <button>Dodaj u jelovnik</button>
{/each}
