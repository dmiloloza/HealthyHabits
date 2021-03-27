<script>
  import {Accordion, AccordionItem} from 'carbon-components-svelte';
  import {Button} from 'carbon-components-svelte';
  import Add16 from 'carbon-icons-svelte/lib/Add16';

  export let meals;
</script>

<article>
  {#each meals as meal }
    <h2>{meal.title}</h2>
    <img alt='{meal.imageAlt}' src='{meal.image}' width='200' />
    <Button iconDescription='Dodaj u jelovnik' icon={Add16} />
    <Accordion align='start'>
      <AccordionItem title='Sastojci'>
        {#each meal.ingredients as ingredient }
          <p>{ingredient.amount} {ingredient.unit} {ingredient.name}</p>
        {/each}
      </AccordionItem>
      {#if meal.description}
        <AccordionItem title='Priprema'>
          <p>{meal.description}</p>
        </AccordionItem>
      {/if}
    </Accordion>
  {/each}
</article>

<!--{#each meals as meal }-->
<!--  <h2>{meal.title}</h2>-->
<!--  <img alt='{meal.imageAlt}' src='{meal.image}' width='200' />-->
<!--      {#each meal.ingredients as ingredient }-->
<!--        <ul>-->
<!--          <li>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>-->
<!--        </ul>-->
<!--      {/each}-->
<!--      <b>Priprema:</b> {meal.description}-->
<!--  <button>Dodaj u jelovnik</button>-->
<!--{/each}-->

