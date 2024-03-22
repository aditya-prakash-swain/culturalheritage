import React, { useState } from "react";

const slides = [
  {
    id: 1,
    image: "https://source.unsplash.com/random/800x600?slide1",
    title: "Slide 1",
    description: "This is slide 1",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/random/800x600?slide2",
    title: "Slide 2",
    description: "This is slide 2",
  },
  {
    id: 3,
    image: "https://skift.com/wp-content/uploads/2022/06/GettyImages-1208049833-scaled-e1654782364566-1024x682.jpg",
    title: "Slide 3",
    description: "This is slide 3",
  },
  {
    id: 4,
    image: "https://skift.com/wp-content/uploads/2022/06/GettyImages-1208049833-scaled-e1654782364566-1024x682.jpg",
    title: "Slide 4",
    description: "This is slide 4",
  },
];

function Carosel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative">
      <div className="relative h-60 md:h-80 lg:h-96 overflow-hidden shadow-md rounded"> {/* Responsive height */}
        <div
          className={`flex transition-transform duration-500 ease-in-out `}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="object-cover border-r-4 border-l-4 border-white"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-20 left-0 right-0 p-4 flex justify-between">
          <button
            className=" rounded-full border-gray-300 hover:border-2"
            onClick={() =>
              setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)
            }
          >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiElEQVR4nO2aSWsUURDHf8GYjChqJmbBkx4lon4Jl7jG3OJyU+LFhejV5ayeAgE/hxJDAipx342KS0w8uRxEvRkVlZHCf0OhM5Punl5G8Q8Nmbx6r+p11avtNfzHv4si0AOcAoaB58BH4Kse+/uZxoxmG9BCnaAA7AbGgB9AKeLzHRgFdgHNeWxgHnAYeOuE+gJcBI5KMyv0xufqadH/bOwYcElzgvlvgAG9nEywCXjpBLgD7AEWxVhrMbAXuOvWmwa6SRH2ps44hveAdQmuvwF44NYfSkM7nRLcGHwC9gNzkmbCrzUPAjNO2x1JLb5c6i7J66wkfawCJsVzSjLUhDa34G1gCdmhBbgq3i9lFbFQcOZ0HZhP9pgP3HRmFuvMnHHmZMEuL7Q6qzAHENnFBgc7izMR5szMSCbzbqGDXRAnzDvVCw65wx/KxI64OJGGi42LRmBCstmmqqJZqYIRr6X+sFGyvZ1NK7uch4iDTqUbN0gHDc6T7qhGOCYiy53ibOKp5t8X0zTQLx4jlQiKSqu/xEgAO9wmntUSvEIGSqtvvlWSc7sEuUA0tAOPNdeKqaWkj3Hx21Ju8LQGrZ6IooknGWnC44R4nqQMhjW4lfB5WNaa+N16zlIGLzRoVVwUc8pSEwG63Av8Ax80WAyhiUc5aSLAEvF/Rxl81WATldHgNpHmc4XZA3fQJ4i9kYcZbORyLRuJY1qTOZlWWzXT+mcO+7AGrQMY1f1mrZneau43CIjWPPurA2KPBq1bGAXtOWhmXPw2V0rGgqTROoD1mjQWXdK4sBLRqISxNmYtabxVcmlhn3icr0a0U0RWHBFzMxNq4aSBBtU6JmPfbIHmtQjXU3/YLNlehbmGGHBVXr01Hx5KtgNhJhRcr9cayvWCAecZQ18KdWvSjJpjeWMN8FkyRb7KGHJvwNqWeaFNTTmTZTDOAgW1hUryQnk0sRcAtyTDrVruGduUmAXXCvY7KxSBa+I9ncSFz3KnWjOz1WRzJqbE07LyZUkt3OHMbEa9V3OHSaNR3umzMyfL5RJFwTmAIA3pTjBi21WGrz4H07573+DUHnTt+2N+xVBU7hSkHSWZUpK3xbNq55BLZ0rKSC29Pq6+U5fcdpOeVl0a9Ypm3PUJgrTjQF5fQDSrKz6iEiBqk+GbKtO+vDZQDovUi7Wq7Zzqkvfuo5r3SvPPimZLtXriP/jL8RMhpXAUmuIBHwAAAABJRU5ErkJggg=="/>
          </button>
          <button
            className="  rounded-full border-gray-300 hover:border-2"
            onClick={() =>
              setCurrentSlide((currentSlide + 1) % slides.length)
            }
          >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADg0lEQVR4nO2ay08UQRDGfyiyazAiC7hwk6PBqP+ECgqK3FC8afAiEvTq46yeSEj4OzBIIFFDosYngk+eJ5WDEW8uEDRrOn6TdHAfM8POA8KXTHhUdXf1VHV19dcD29i6SAHtwF1gGJgGfgKreszvnyUzOmeAamKCJHABGAP+AFmPz29gFOgCElFMYDdwDVi0jFoBHgE35JmDeuO79FTrf0Z2E3isNk77b0CfXk4oOAUsWAa8Ai4CVT762gdcAl5b/c0DLQQI86YGrQHfAMdL2H8z8NbqfyAI79TLcDPAL+AKsLPUg/Cvz6tAxvJ2ulSdN8rdWWWdQwSPw8CMxpyTDRtCndXhS6CW8FANPNHYC4oKX0ha4fQMqCR8VALPrTDztWYGrXAym11UqLGiwiQAzynWWdhhrAk3ayYjm0x2c73ZOfuEyU5xQa+1+F2F2HVrnwgixfpFOTAp28ykCiKhUsEoHyN+OCnbFot5pcvKEEFhAnjnM52WWZn0XCHFMSmZ2ikoTGmMTz4n0632I/kUUiqrV3wWgG5Rr5TuTCbtY6NcBdby2XlWnT8keOwHPmg8cwBr8Nh+XG3bcgnvSWjOE2HA9sxHj565rXZ3cgmHJTxNeLA9Yybl1jNO9AzlEs5KaE5xYcL2zHtNrhiarLD8D0sSRlFXrfdMfRH9Wul+zyVclbCiSB53dtcgn0kXG7fDE/iayA5taLGeyFKEoZX2GFp1hUJryyz2YQkNAxiVJxpctusolH6dDdGQZ5t6Q2yX0LCFYXpiIyVKa75izCkaDQMY16IxZRWNe/MpjWoAQ2PGtYy/rPYPCimdl5LhYoPCC1Gjfg9WE7Kxs9hG81WKJ4gfWmXbFzfXEH1Snogh+TAl23rcNEhaXK8hlOOCPtk04+VSqEWNMiLHosZRYFk2eb7KGLDegKEto0KdSDljS7+fDpKihbIikqMgsfcoy2X1M7GRtzFtXSuYv8NCCniqsedLceHTaLnWhNkRwlkTcxrTVOUHStVx2gqzjLhXkw5LjXJlp2UrnNyU9Z7XzMC6U1ypbl/LdJUxZfXfH/Tde7Pldoe17/b5FUNKtZN9fJ4t8W1xUe/0WuVMVhWpKa9viXdqUtqu0FOjS6MO6YxbPIFTdvRE9QVEQqz4iI4AXkmGNZ1MO6OaQC5UiYs1p7b7OnP8sD6q+aHSfUg6bYXOE9tgk+Mvs7BwO2/6kC8AAAAASUVORK5CYII="/>
          </button>
        </div>
      </div>
      <br/>
    </div>
  );
}




export default Carosel;
