import React from 'react';
import ProductActions from './ProductActions';
import OrderExchange from './OrderExchange';

function ProductDescription({
  data,
  productInfo,
  quantity,
  totalPrice,
  increaseQuantity,
  decreaseQuantity,
}) {
  return (
    <section className="w-72 h-[555px] flex flex-col">
      {/* 제품 설명 */}
      <article className="flex-grow text-base text-justify">
        {data.description}
      </article>
      {/* 제품 상세 정보 */}
      <section className="mb-4 text-sm">
        {/* 제목 */}
        <h3 className="border-b-2 border-gray-600 mb-2 pb-2">{data.title}</h3>
        {/* 가격, 사이즈, 재질 등의 정보 표시 */}
        {productInfo.map((data) => (
          <dl
            key={data.label}
            className="border-b-2 border-gray-600 mb-2 flex justify-between pb-2"
          >
            <dt>{data.label}</dt>
            <dd>{data.value}</dd>
          </dl>
        ))}
      </section>
      <p className="font-semibold mb-1">{data.title}</p>
      {/* 수량 체크 */}
      <div className="flex justify-between ml-1 mb-4">
        <span className="flex gap-2 p-1">
          <button onClick={decreaseQuantity}>-</button>
          <p>{quantity}</p>
          <button onClick={increaseQuantity}>+</button>
        </span>
        <span>KRW {totalPrice && totalPrice.toLocaleString()}</span>
      </div>
      <div className="flex justify-between w-full">
        {/* 구매하기, 장바구니 버튼 */}
        <ProductActions />
      </div>
      <div className="flex gap-11 justify-center">
        {/* 교환, 주문 모달 창 */}
        <OrderExchange />
      </div>
    </section>
  );
}

export default ProductDescription;
