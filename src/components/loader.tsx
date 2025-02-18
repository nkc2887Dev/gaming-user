import "@/styles/loader.css";

export default function Loader({ className }: { className: string }) {
  return (
    <div className={`${className} loader`}>
      <div className="pac-man"></div>
      <div className="point p1"></div>
      <div className="point p2"></div>
    </div>
  );
}
