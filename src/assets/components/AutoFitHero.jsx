import React, { useState, useEffect, useRef } from "react";
export default function AutoFitHero({
  src,
  alt = "hero",
  minHeight = "70vh",
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  const handleLoad = (e) => {
    console.log("Image loaded successfully:", src);
    const img = e.target;
    setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
    setLoaded(true);
    setError(false);
  };

  const handleError = (e) => {
    console.error("Image failed to load:", src, e);
    setError(true);
    setLoaded(true);
  };

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current && imgRef.current && dimensions.width > 0) {
        const container = containerRef.current;
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        
        const imgAspect = dimensions.width / dimensions.height;
        const containerAspect = containerWidth / containerHeight;
        
        if (imgAspect > containerAspect) {
          imgRef.current.style.width = '100%';
          imgRef.current.style.height = 'auto';
        } else {
          imgRef.current.style.width = 'auto';
          imgRef.current.style.height = '100%';
        }
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [dimensions]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ height: 'auto' }}
      aria-label="Hero section"
    >
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      )}

      {!error && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ 
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain'
          }}
        />
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="text-center px-4">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-white text-lg font-semibold mb-2">Image not found</p>
            <p className="text-gray-400 text-sm break-all max-w-md">
              {typeof src === "string" ? src : "Invalid image source"}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}