import Panel from "@/components/Panel";
import Products from "@/components/Products";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <main className="p-6">
      <Panel
        iconText="ALPHA"
        header="Important info"
        contentText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nam
          cum totam, odit quibusdam facere maxime ut, ipsa repellendus
          recusandae corporis similique tenetur dolorem illum eum, animi
          necessitatibus quod optio."
      />
      <Products />
      <Subscribe />
    </main>
  );
}
