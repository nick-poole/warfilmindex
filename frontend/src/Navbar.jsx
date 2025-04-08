// src/Navbar.jsx
import { Container, Group, Title } from '@mantine/core';

export default function Navbar() {
	return (
		<header style={{ padding: '1rem 0', borderBottom: '1px solid #ccc' }}>
			<Container size="md">
				<Group position="apart">
					<Title order={2}>War Film Index</Title>
					<Group>
						<a href="/" style={{ textDecoration: 'none', color: '#333' }}>
							Home
						</a>
						<a href="/about" style={{ textDecoration: 'none', color: '#333' }}>
							About
						</a>
						<a href="/conflicts" style={{ textDecoration: 'none', color: '#333' }}>
							Conflicts
						</a>
						<a href="/films" style={{ textDecoration: 'none', color: '#333' }}>
							Films
						</a>
					</Group>
				</Group>
			</Container>
		</header>
	);
}
