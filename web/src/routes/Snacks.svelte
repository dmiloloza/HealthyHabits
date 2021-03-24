<script>
  import {snacks} from '../../testMenu';
</script>

{#each snacks as meal }
  <h2>{meal.title}</h2>
  <img alt='{meal.imageAlt}' src='{meal.image}' width='200' />
  {#each meal.ingredients as ingredient }
    <ul>
      <li>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>
    </ul>
  {/each}
{/each}

