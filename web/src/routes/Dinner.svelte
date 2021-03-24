<script>
  import {dinner} from '../../testMenu';
</script>

{#each dinner as meal }
  <h2>{meal.title}</h2>
  <img alt='{meal.imageAlt}' src='{meal.image}' width='200' />
  <p><b>Priprema:</b> {meal.description}</p>
  {#each meal.ingredients as ingredient }
    <ul>
      <li>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>
    </ul>
  {/each}
{/each}
