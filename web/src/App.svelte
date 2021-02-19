<script>
  import firebase from 'firebase/app';
  import { Firestore } from './config/firebase';

  const saveMessage = () => {
    return firebase.firestore().collection('messages').add({
      text: 'test message',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(error => {
      console.error('Error writing new message to database', error);
    });
  };
</script>

<main>
  <h1>Zdrav život postaje navika</h1>
</main>

<button on:click={saveMessage}>Firestore Test</button>

<footer>
  <img alt='no css, no problems' height='200' src='i-got-99.jpg' width='200' />
</footer>
