<script>
  export let title = 'Zobene pahuljice s bananom';
  export let img;
  export let imgAlt;
  export let description = 'Priprema: Zobene pahuljice prelijte sa 160 ml vruće vode i ostavite nekoliko minuta da nabubre. Dodajte bananu, lan i sjeckane lješnjake.';
  export let ingredients = [
    `35 g zobenih pahuljica`,
    `150 ml vode`,
    `1 manja banana`,
    '5 g sjemenki lana',
    '10 g lješnjaka'
  ];
</script>


<section>
  <h2>{title}</h2>
  <img alt='slika zobenih' src=''>
  <ul>
    {#each ingredients as ingredient }
      <li>{ingredient}</li>
    {/each}
  </ul>
  <p>{description}</p>
</section>

