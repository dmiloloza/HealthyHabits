<script>
  import {firestore} from '../config/firebase';
  import MealCard from './MealCard.svelte';
  import {onMount} from 'svelte';

  export let mealType;
  export let showDialog;

  let showMeals = true;
  let meals = [];
  let ingredients = [];
  let filter;

  onMount(async () => {
    const mealCollection = await firestore.collection(mealType).get();
    meals = mealCollection.docs.map(value => value.data());
  });
</script>

{#if showDialog.value}
  <div>
    <div>
      <button on:click={() => showDialog.value = false}>Close</button>

      <!--      TODO filter Meals-->
      <!--      <div>-->
      <!--        <input bind:value={filter} type='text' placeholder='Filter'>-->
      <!--      </div>-->

      {#each meals as meal}
        <MealCard {...meal} />
      {/each}
    </div>
  </div>
{/if}
