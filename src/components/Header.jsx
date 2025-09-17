import { NavLink } from "react-router-dom";

export const Header = () => {
  const stats = [
    { id: 1, value: "200+", label: "International Brands" },
    { id: 2, value: "2000+", label: "High-Quality Products" },
    { id: 3, value: "30,000+", label: "Happy Customers" },
  ];

  return (
    <header className="bg-[#F2F0F1]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 lg:px-12 py-12 lg:py-20">
        {/* Left side - Headings */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-black">
            FIND CLOTHES
            <br />
            THAT MATCHES
            <br />
            YOUR STYLE
          </h1>

          <p className="text-sm lg:text-base text-[#00000099] mt-4 max-w-md mx-auto lg:mx-0">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <NavLink to="/new-arrival">
            <button className="bg-black text-white mt-6 px-10 py-3 rounded-full text-base font-medium hover:cursor-pointer transition-transform duration-300 ease-in-out hover:translate-y-1 active:translate-y-2">
              Shop Now
            </button>
          </NavLink>

          {/* Stats */}
          <section className="mt-10">
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 text-center lg:text-left">
              {stats.map((stat, index) => (
                <div
                  key={stat.id}
                  className={`${
                    index < stats.length - 1
                      ? "sm:border-r border-gray-300"
                      : ""
                  } px-2`}
                >
                  <h2 className="text-2xl lg:text-3xl font-semibold text-black">
                    {stat.value}
                  </h2>
                  <p className="text-[#00000099] mt-1 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right side - Hero Image with Vectors */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src="images/Hero1.png"
            alt="Hero"
            className="w-full max-w-md lg:max-w-lg h-auto object-contain rounded-full"
          />

          {/* Decorative Vectors */}
          <img
            src="images/Vector1.png"
            alt="Vector1"
            className="absolute left-5 top-1/3 w-8 sm:w-10 lg:w-10"
          />
          <img
            src="images/Vector.png"
            alt="Vector2"
            className="absolute right-5 top-10 w-14 sm:w-18 lg:w-12"
          />
        </div>
      </div>
    </header>
  );
};
