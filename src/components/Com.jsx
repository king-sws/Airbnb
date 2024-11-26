const Com = () => {
  return (
    <div  className="px-24 pt-8 w-full relative">
      <div className="grid my-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center items-center">
        {/* Replace image paths with actual image URLs */}
        <img src="./prologis.png" alt="Prologis" className="w-[50%] mb-4 " />
        <img src="./tower.png" alt="Tower" className="w-[50%] mb-4 " />
        <img src="./equinix.png" alt="Equinix" className="w-[50%]" />
        <img src="./realty.png" alt="Realty" className="w-[50%]" />
      </div>
    </div>
  );
};

export default Com;
