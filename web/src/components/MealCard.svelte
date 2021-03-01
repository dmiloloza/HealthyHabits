<script>
  export let description;
  export let image;
  export let imgAlt;
  export let ingredients = [];
  export let title;
</script>

<section>
  <h2>{title}</h2>
  <img alt={imgAlt} src={image} width='150px'>
  <ul>
    {#each ingredients as ingredient }
      <li>{ingredient}</li>
    {/each}
  </ul>
  {#if description}
    <p>{description}</p>
  {/if}
</section>
