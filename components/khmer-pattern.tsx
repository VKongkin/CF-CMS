export function KhmerPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 opacity-5 ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="khmer-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Simplified Khmer-inspired geometric pattern */}
            <circle cx="50" cy="50" r="20" fill="currentColor" opacity="0.3" />
            <path d="M30 30 L70 30 L70 70 L30 70 Z M40 40 L60 40 L60 60 L40 60 Z" fill="currentColor" opacity="0.2" />
            <path d="M50 10 L60 30 L50 50 L40 30 Z" fill="currentColor" opacity="0.4" />
            <path d="M10 50 L30 60 L50 50 L30 40 Z" fill="currentColor" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#khmer-pattern)" />
      </svg>
    </div>
  )
}
