import { MantineProvider, AppShell, Title } from '@mantine/core';
import Navbar from './Navbar';
import Header from './Header'; // 👈 new import
import FilmCard from './FilmCard';


function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell
  padding="md"
  navbar={<Navbar />}
  header={<Header />}
  styles={(theme) => ({
    main: {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[8]
          : theme.colors.red[0],
    },
  })}
>
  <Title order={1}>Featured Film</Title>
  <FilmCard />
</AppShell>

    </MantineProvider>
  );
}





export default App;
