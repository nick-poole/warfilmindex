// src/FilmCard.jsx
import { Card, Image, Text, Badge, Group } from '@mantine/core';

export default function FilmCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://m.media-amazon.com/images/I/61yYNBjFRjL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          height={360}
          alt="1917 poster"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>1917</Text>
        <Badge color="blue" variant="light">
          WWI
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        A stunning visual take on trench warfare and the loneliness of duty.
      </Text>
    </Card>
  );
}
