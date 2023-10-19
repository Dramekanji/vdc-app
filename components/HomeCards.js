import React from "react";

const HomeCards = () => {
  // Sample data for the cards with image URLs
  const cardsData = [
    {
      title: "Card 1",
      content: "This is the first card.",
      imageUrl:
        "https://www.lifeofpix.com/wp-content/uploads/2018/08/308-name05903-chim-1600x989.jpg",
    },
    {
      title: "Card 2",
      content: "This is the second card.",
      imageUrl:
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    },
    {
      title: "Card 3",
      content: "This is the third card.",
      imageUrl:
        "https://img.freepik.com/free-photo/close-up-young-handsome-man-isolated_273609-37393.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696723200&semt=ais",
    },
    {
      title: "Card 4",
      content: "This is the fourth card.",
      imageUrl:
        "https://st3.depositphotos.com/4218696/31686/i/450/depositphotos_316864392-stock-photo-happy-afro-family-gesturing-thumbs.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
        {cardsData.map((card, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-lg mb-8">
            <div className="md:flex">
              <div className="md:w-1/2 p-4">
                <h2 className="text-xl font-semibold">{card.title}</h2>
                <p className="text-gray-700">{card.content}</p>
              </div>
              <div className="md:w-1/2 p-4">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
