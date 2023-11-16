import { useParams } from 'react-router-dom';
import useProductItem from '@/utils/useProductItem';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductDescription from '@/components/ProductDetails/ProductDescription';
import ProductImage from '@/components/ProductDetails/ProductImage';
import GalleryLink from '@/components/ProductDetails/GalleryLink';

export default function ProductDetails() {
  const { productId } = useParams();
  const { data } = useProductItem(productId);

  // 제품 정보 데이터
  const productInfo = [
    { label: 'Price', value: `KRW ${data.price}` },
    { label: 'Size', value: `${data.size}` },
    { label: 'Texture', value: `${data.texture}` },
  ];

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    if (data && data.price) {
      const price = data.price.replace(/[^\d]/g, '');
      setTotalPrice(Number(price) * quantity);
    }
  }, [data, quantity]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!data || !data.price || !data.size || !data.texture) {
    return null;
  }

  return (
    <main className="h-screen relative flex flex-col items-center justify-center">
      <div className="flex flex-col">
        {/* 갤러리 연결 링크 */}
        <GalleryLink />
        {/* 제품 이미지와 캡션 */}
        <div className="flex items-center justify-center">
          <ProductImage data={data} />
          {/* 제품 설명 및 상세 정보 */}
          <ProductDescription
            data={data}
            productInfo={productInfo}
            quantity={quantity}
            totalPrice={totalPrice}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        </div>
      </div>
    </main>
  );
}
