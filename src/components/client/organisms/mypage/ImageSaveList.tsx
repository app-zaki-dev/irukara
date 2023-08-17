'use client';

import { Suspense, useMemo, useState } from 'react';
import Image from 'next/image';
import { SaveImageData } from '@/common/types/fetchData';
import textTruncate from '@/common/libs/textTruncate';

interface ImageDataProps {
  mode: number;
}

// 遅延
// await new Promise((resolve) => setTimeout(resolve, 1000))

export default function ImageSaveList({ mode }: ImageDataProps) {
  console.log('image save props', mode);
  const [imageData, setImageData] = useState<SaveImageData>();
  const [imageCount, setImageCount] = useState<number>(0);

  useMemo(async () => {
    const endpoint = `/api/image?mode=${mode}`;
    const res = await fetch(endpoint, {
      method: 'GET',
      cache: 'force-cache',
    });
    const { imageData } = await res.json();
    setImageCount(imageData.count);
    setImageData(imageData.data);
  }, []);
  console.log('外側', imageData, imageCount);

  return (
    <div>
      {imageCount > 0 && Array.isArray(imageData) ? (
        imageData.map((item) => (
          <div key={item.imageId}>
            <Suspense fallback='イラスト画像関係をローディング'>
              <Image
                src={item.imageUrl}
                alt='イラスト画像'
                width={50}
                height={50}
              />
              <div>{textTruncate(item.prompt, 20)}</div>
            </Suspense>
          </div>
        ))
      ) : (
        <div>
          {mode === 1 ? 'イラストデータ' : 'リアル画像データ'}が見つかりません
        </div>
      )}
    </div>
  );
}
