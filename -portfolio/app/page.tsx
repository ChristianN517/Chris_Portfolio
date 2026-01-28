import IconButton from "@/components/iconButton";

export default function Home() {
  return (
    <main className="home-container">
      <h1 className="title">My Portfolio</h1>

      <IconButton
        src="/icons/3dicons-notebook-dynamic-color.png"
        label="Projects"
        href="/projects_page"
        style={{ top: "40%", left: "20%" }}
      />

      <IconButton
        src="/icons/3dicons-cube-dynamic-color.png"
        label="About"
        href="/about_page"
        style={{ top: "60%", left: "50%" }}
      />

      <IconButton
        src="/icons/3dicons-mobile-dynamic-color.png"
        label="Contact"
        href="/contact_page"
        style={{ top: "35%", left: "70%" }}
      />
    </main>
  );
}