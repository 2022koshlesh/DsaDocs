// src/components/ui/skeleton.jsx

// Optional: Define `cn` if not using your own utility
const cn = (...classes) => classes.filter(Boolean).join(" ");

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };
