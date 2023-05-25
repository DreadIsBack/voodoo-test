export default function Subscribe() {
  return (
    <section className="mt-[98px] text-center text-sm">
      <p>Be the first one to know when we launch our beta!</p>
      <div className="mt-6 flex justify-center gap-3">
        <input
          type="email"
          className="p-4 w-full max-w-[518px] font-semibold placeholder:text-black"
          placeholder="E-mail"
        />
        <button className="p-4 shrink-0 rounded bg-[#ED5E21] font-semibold">
          Sign-up
        </button>
      </div>
    </section>
  );
}
