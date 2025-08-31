export default function ProductBanner({ pro }) {
  return (
    <div>
     {
    pro.banner.map((img, index) => (
      <img key={index} src={img.url} alt={img.alt} className='w-[500px] h-[300px]  rounded-lg ' />
   ))}
    </div>
  );
}
