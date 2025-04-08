// src/Header.jsx
import { Title, Container } from '@mantine/core';

export default function Header() {
  return (
    <header style={{ padding: '1rem 0', borderBottom: '1px solid #ccc' }}>
      <Container size="md">
        <Title order={2}>War Film Index</Title>
      </Container>
    </header>
  );
}
