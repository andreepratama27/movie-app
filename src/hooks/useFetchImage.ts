import { useEffect, useState } from "react";

export function useFetchImage({ path }: { path: string }) {
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState("");

  const fetchImage = (src: string) => {
    const loadingImage = new Image();
    loadingImage.src = `https://image.tmdb.org/t/p/original/${src}`;

    loadingImage.onload = () => {
      setCurrentImage(loadingImage.src);
      setLoading(false);
    };

    loadingImage.onerror = () => {
      setCurrentImage("/public/no-photo.png");
    };
  };

  useEffect(() => {
    fetchImage(path);
  }, []);

  return { loading, currentImage };
}
