import React from "react";

const HomeCards = () => {
  // Sample data for the cards
  const cardsData = [
    { title: "Card 1", content: "This is the first card." },
    { title: "Card 2", content: "This is the second card." },
    { title: "Card 3", content: "This is the third card." },
    { title: "Card 4", content: "This is the fourth card." },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-gray-200 p-40 rounded-lg shadow-lg mb-8"
          >
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="text-gray-700">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
