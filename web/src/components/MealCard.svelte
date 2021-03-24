<script>
  export let category;
  // export let imgAlt;
  // export let image;
  // export let title;
  // export let description;
  // export let ingredients = {};

</script>

<main>
  <img alt='{category.imageAlt}' src='{category.image}' width='200' />
  <h2>{category.title}</h2>
  <p><b>Priprema:</b> {category.description}</p>
  {#each ingredients as ingredient }
    <ul>
      <li>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>
    </ul>
  {/each}
</main>
