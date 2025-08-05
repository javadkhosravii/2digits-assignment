import Hero from '@/Components/Hero';
import { fetchHomePage } from '@/server/prepr';

export default async function Home() {
  const homepage = await fetchHomePage();

  return (
    <main className="flex h-screen w-full flex-col items-center justify-between">
      {homepage?.page_header && (
        <Hero
          title={homepage.page_header.title}
          text={homepage.page_header.text}
          image={homepage.page_header.image}
        />
      )}
    </main>
  );
}
