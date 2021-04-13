<script>
  import {snacks} from '../../testMenu';
  import MealCard from '../components/MealCard.svelte';

  const meals = snacks;
</script>

<MealCard {meals} />
