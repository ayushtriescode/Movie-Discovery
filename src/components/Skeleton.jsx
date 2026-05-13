export default function Skeleton({ type }) {
  const CLASSES = "bg-zinc-800 animate-pulse rounded-md";

  if (type === "hero") {
    return (
      <div className={`h-[60vh] md:h-[85vh] w-full ${CLASSES}`} />
    );
  }

  if (type === "row") {
    return (
      <div className="my-8 md:my-12 px-6 md:px-16">
        <div className={`h-6 w-48 mb-4 ${CLASSES}`} />
        
        <div className="flex space-x-4 overflow-hidden">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={`min-w-[128px] md:min-w-[192px] lg:min-w-[224px] h-48 md:h-72 ${CLASSES}`} />
          ))}
        </div>
      </div>
    );
  }

  return null;
}