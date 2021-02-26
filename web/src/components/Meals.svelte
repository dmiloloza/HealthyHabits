<script>
  import {firestore} from '../config/firebase';
  import MealCard from './MealCard.svelte';

  export let mealType;

  let showMeals = true;
  let meals = [];
  let filter;

  firestore.collection(mealType).get()
  .then(data => {
    meals = data.docs.map(value => value.data());
  })
  .catch(err => console.error(err));
</script>

<!--TODO-->
<!--filter Meals-->
<div>
  <input bind:value={filter} type='text'>
</div>

{#if showMeals}
  <div class='backdrop'>
    <div class='modal'>
      {#each meals as meal}
        <MealCard {...meal} />
      {/each}
    </div>
  </div>
{/if}
