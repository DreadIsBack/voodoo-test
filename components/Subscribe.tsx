export default function Subscribe() {
  return (
    <div className="mt-[98px] text-center text-sm">
      <p>Be the first one to know when we launch our beta!</p>
      <div className="mt-6">
        <input
          type="email"
          className="p-4 font-semibold placeholder:text-black"
          placeholder="E-mail"
        />
        <button className="ml-3 p-4 rounded bg-[#ED5E21] font-semibold">
          Sign-up
        </button>
      </div>
    </div>
  );
}
