export const Brands = () => {
  const brandsList = [
    { id: 1, logo: "/images/Group.png" },
    { id: 2, logo: "/images/zara-logo.png" },
    { id: 3, logo: "/images/gucci-logo.png" },
    { id: 4, logo: "/images/prada-logo.png" },
    { id: 5, logo: "/images/calvin.png" },
  ];

  return (
    <div className="w-full bg-black py-8 px-6">
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-16">
        {brandsList.map((brand) => (
          <img
            key={brand.id}
            src={brand.logo}
            alt={`Brand ${brand.id}`}
            className="h-6 sm:h-8 lg:h-10 object-contain"
          />
        ))}
      </div>
    </div>
  );
};
