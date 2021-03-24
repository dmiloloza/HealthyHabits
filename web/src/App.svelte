<script>
  import Header from './components/layout/Header.svelte';
  import Footer from './components/layout/Footer.svelte';

  /*  let mealType;

    function addMeal(type) {
      mealType = null;

      setTimeout(() => {
        showDialog.value = true;
        mealType = type;
      });
    }

    let showDialog = {
      value: false
    };*/
</script>

<Header />
<!--{#if mealType}-->
<!--  <Meals {mealType} {showDialog} />-->
<!--{/if}-->
<!--<main>-->
<!--  <span>-->
<!--    <h3>Doručak</h3>-->
<!--      <button on:click={() => addMeal('breakfast')}>Add Meal</button>-->
<!--    <h3>Međuobrok</h3>-->
<!--     <button on:click={() => addMeal('snack')}>Add Meal</button>-->
<!--    <h3>Ručak</h3>-->
<!--      <button on:click={() => addMeal('lunch')}>Add Meal</button>-->
<!--    <h3>Međuobrok</h3>-->
<!--     <button on:click={() => addMeal('snack')}>Add Meal</button>-->
<!--    <h3>Večera</h3>-->
<!--      <button on:click={() => addMeal('dinner')}>Add Meal</button>-->
<!--  </span>-->
<!--</main>-->

<Footer />
