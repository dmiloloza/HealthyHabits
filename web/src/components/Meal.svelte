<script>
  //db - firestore database
  import {firestore} from '../config/firebase';
  import MealCard from './MealCard.svelte';

  let meals = [];

  firestore.collection('breakfast').orderBy('title','asc').get()
  .then(data => {
    meals = data.docs.map(value => value.data());
  })
  .catch(err => console.error(err));
</script>

<div>
  {#each meals as meal}
    <MealCard {...meal} />
  {/each}
</div>
