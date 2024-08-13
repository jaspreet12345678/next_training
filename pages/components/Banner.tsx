import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';

interface ImageProps {
  images: { src: string, alt: string }[];
}

const Banner: React.FC<ImageProps> = ({ images }) => {
    
  const [height, setHeight] = useState<string | undefined>('auto');

  useEffect(() => {
    setHeight('500px');
  }, []);

  const itemTemplate = (item: { src: string, alt: string }) => {
    return (
      <img src={item.src} alt={item.alt} style={{ width: '100%', height }} />
    );
  };

  return (
    <div style={{ padding: '20px',width:'100%' }}>
      <Galleria value={images} numVisible={5} circular style={{ maxWidth: '100%' }}
                showThumbnails={false} showItemNavigators item={itemTemplate} />
    </div>
  );
};

export default Banner;
