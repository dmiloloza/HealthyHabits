<script>
  export let description;
  export let image;
  export let imgAlt;
  export let ingredients = [];
  export let title;
</script>

<section>
  <h2>{title}</h2>
  <img alt={imgAlt} src={image}>
  <ul>
    {#each ingredients as ingredient }
      <li>{ingredient.quantity} {ingredient.unit} {ingredient.name} </li>
    {/each}
  </ul>
  <p>{description}</p>
</section>
