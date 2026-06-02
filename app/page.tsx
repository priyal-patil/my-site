import { fetchHomepage } from "@/lib/contentstack";

export default async function HomePage() {
  try {
    const entry = await fetchHomepage<{ title?: string }>();
    return (
      <main>
        <h1>{entry?.title ?? "Homepage"}</h1>
      </main>
    );
  } catch (error) {
    console.error("Failed to fetch homepage:", error);
    return (
      <main>
        <h1>Homepage</h1>
      </main>
    );
  }
}
