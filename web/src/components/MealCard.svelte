<script>
  import {Accordion, AccordionItem} from 'carbon-components-svelte';
  import {Button} from 'carbon-components-svelte';
  import Add16 from 'carbon-icons-svelte/lib/Add16';

  export let meals;
</script>

{#each meals as meal }
  <h2>{meal.title}</h2>
  <img alt='{meal.imageAlt}' src='{meal.image}' width='200' />
  <Button iconDescription='Dodaj u jelovnik' icon={Add16} />
  <Accordion align='start'>
    <AccordionItem title='Sastojci'>
      {#each meal.ingredients as ingredient }
        <ul>
          <li>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>
        </ul>
      {/each}
    </AccordionItem>
    {#if meal.description.length}
      <AccordionItem title='Priprema'>
        <p>{meal.description}</p>
      </AccordionItem>
    {/if}
  </Accordion>
{/each}

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
