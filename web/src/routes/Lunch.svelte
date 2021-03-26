<script>
  import {lunch} from '../../testMenu';
  import MealCard from '../components/MealCard.svelte';

  const meals = lunch;
</script>

<MealCard {meals} />
