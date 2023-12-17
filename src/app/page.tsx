import Button from '../components/Button';

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Button
        style={{
          backgroundColor: 'blue',
          fontSize: 24,
          color: 'white',
          borderRadius: 8,
          borderColor: 'transparent',
        }}
      />
    </main>
  );
}
