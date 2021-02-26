<script>
  export let title = '***Zobene pahuljice s bananom***';
  export let image;
  export let imgAlt;
  export let description = '***Priprema: Zobene pahuljice prelijte sa 160 ml vruće vode i ostavite nekoliko minuta da nabubre. Dodajte bananu, lan i sjeckane lješnjake.***';
  export let ingredients = [
    {name: 'flower', unit:'g', quantity: '**500' },
    {name: 'water', unit:'dcl', quantity: '3' },
    {name: 'eggs', unit:'kom', quantity: '2**' },
  ];
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
