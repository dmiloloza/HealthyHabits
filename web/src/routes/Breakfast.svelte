<script>
  import {breakfast} from '../../testMenu';
  import MealCard from '../components/MealCard.svelte';

  const meals = breakfast;
</script>

<MealCard {meals} />
