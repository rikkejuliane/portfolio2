export default function Footer() {
  return (
    <footer className="w-full h-[115px] mt-[120px]  bg-wine text-center text-[18px] text-lightpink font-medium text-center font-montserrat flex items-center justify-center">
      <p>
        &copy; {new Date().getFullYear()} Rikke Juliane - Designed, coded, and
        mostly hand-drawn.
      </p>
    </footer>
  );
}
