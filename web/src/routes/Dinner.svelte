<script>
  import {dinner} from '../../testMenu';
  import MealCard from '../components/MealCard.svelte';

  const meals = dinner;
</script>

<MealCard {meals} />
