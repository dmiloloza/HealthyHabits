<script>
  import { Button } from "carbon-components-svelte";
  import TrashCan16 from "carbon-icons-svelte/lib/TrashCan16";
</script>



<main>
  <section>
    <h2>Doručak</h2>
    <img alt='breakfast' src='./images/Savršeni omlet s povrćem.jpg' width='200'>
  </section>
  <Button>Dodaj Doručak</Button>
  <Button kind="danger-tertiary" iconDescription="Delete" icon={TrashCan16} />
  <section>
    <h2>Međuobrok</h2>
    <img alt='snack' src='./images/Grožđe.jpg' width='200'>
  </section>
  <Button>Dodaj Međuobrok</Button>
  <Button kind="danger-tertiary" iconDescription="Delete" icon={TrashCan16} />
  <section>
    <h2>Ručak</h2>
    <img alt='lunch' src='./images/Pureća prsa s mozzarellom i rajčicom.jpg' width='200'>
  </section>
  <Button>Dodaj Ručak</Button>
  <Button kind="danger-tertiary" iconDescription="Delete" icon={TrashCan16} />
  <section>
    <h2>Međuobrok</h2>
    <img alt='snack' src='./images/Protein mliječni napitak.jpg' width='200'>
  </section>
  <Button>Dodaj Međuobrok</Button>
  <Button kind="danger-tertiary" iconDescription="Delete" icon={TrashCan16} />
  <section>
    <h2>Večera</h2>
    <img alt='dinner' src='./images/Krem juha od bundeve.jpg' width='200'>
  </section>
  <Button>Dodaj Večeru</Button>
  <Button kind="danger-tertiary" iconDescription="Delete" icon={TrashCan16} />
</main>
