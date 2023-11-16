import { Link } from 'react-router-dom';

function GalleryLink() {
  return (
    <Link to={`/lumieleu/gallery`} className="flex gap-2">
      <img
        src="../../../public/imgs/BackArrow.svg"
        alt="이전 페이지"
        className="w-9"
      />
      <p className="text-base font-semibold">GALLERY</p>
    </Link>
  );
}

export default GalleryLink;
