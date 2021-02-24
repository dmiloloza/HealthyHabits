<script>
  //db - firestore database
  import {db} from '../config/firebase';
  import MealCard from './MealCard.svelte';

  let meals = [];

  db.collection('breakfast').get()
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
