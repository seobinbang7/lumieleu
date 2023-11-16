import { Link } from 'react-router-dom';

function ProductActions() {
  return (
    // 구매하기, 장바구니 버튼
    <div className="flex justify-between w-full">
      <Link
        to={`/lumieleu/order`}
        className="mr-2 basis-2/3 bg-black text-white h-[50px] rounded-md flex items-center justify-center"
      >
        <button>구매하기</button>
      </Link>
      <Link
        to={`/lumieleu/cart`}
        className="basis-1/3 border-2 border-black rounded-md h-[50px] flex items-center justify-center"
      >
        <button>장바구니</button>
      </Link>
    </div>
  );
}

export default ProductActions;
