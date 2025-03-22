"use client";
import React from "react";

function MainComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    {
      name: "Telegram",
      icon: "fa-brands fa-telegram",
      href: "https://t.me/ilovemymari",
    },
    {
      name: "Steam",
      icon: "fa-brands fa-steam",
      href: "https://steamcommunity.com/id/ilovemymari",
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#000000] flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center space-y-6">
        <div>
          <img
            src="https://ucarecdn.com/d1bd61e5-036c-4d8f-8d57-3617fcac3e7b/-/format/auto/"
            alt="Anime Art"
            className="w-24 h-24 object-cover rounded-lg"
          />
        </div>

        <div className="text-center">
          <h1 className="text-white text-4xl font-bold mb-2 font-inter">
            ilovemymari
          </h1>
          <p className="text-white text-lg font-inter">ilovemymari</p>
        </div>

        <div className="flex justify-center gap-10 my-8 w-full max-w-[150px]">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              className="text-white hover:text-blue-400 transition-colors duration-300 text-3xl"
              aria-label={link.name}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>

      <footer className="fixed bottom-0 w-full p-6 text-center">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-white text-sm font-inter">© 2024</p>
          <p className="text-white text-sm font-inter">
            Made by Hero with ❤️
          </p>
          <a
            href=""
            className="text-white hover:text-blue-400 transition-colors duration-300 text-sm font-inter"
          >
            Buy me some food
          </a>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;