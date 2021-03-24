<script>
  import {Router, Link, Route} from 'svelte-routing';
  import Home from '../../routes/Home.svelte';
  import Breakfast from '../../routes/Breakfast.svelte';
  import Lunch from '../../routes/Lunch.svelte';
  import Dinner from '../../routes/Dinner.svelte';
  import Snacks from '../../routes/Snacks.svelte';

  export let url = '';
</script>

<Router url='{url}'>
  <nav>
    <h2>Healthy Habits</h2>
    <Link to='/'>Početna</Link>
    <Link to='/breakfast'>Doručak</Link>
    <Link to='/lunch'>Ručak</Link>
    <Link to='/dinner'>Večera</Link>
    <Link to='/snacks'>Međuobrok</Link>
  </nav>
  <div>
    <Route path='/'><Home /></Route>
    <Route component='{Breakfast}' path='/breakfast' />
    <Route component='{Lunch}' path='/lunch' />
    <Route component='{Dinner}' path='/dinner' />
    <Route component='{Snacks}' path='/snacks' />
  </div>
</Router>
