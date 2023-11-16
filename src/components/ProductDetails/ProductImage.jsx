import { getPbImageURL } from '@/utils';

function ProductImage({ data }) {
  return (
    // 작품 이미지 및 캡션
    <figure className="my-5 mr-10">
      <img
        src={getPbImageURL(data, 'image')}
        alt={data.title}
        className="w-80"
      />
      <figcaption className="mt-1">
        {data.title} <br /> photo by {data.photographer} <br />
        <span className="text-xs mt-[5px]">{data.production_date}</span>
      </figcaption>
    </figure>
  );
}

export default ProductImage;
