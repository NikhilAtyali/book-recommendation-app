import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const bookDetails = [
    {
      name: "The Wonder that was India",
      Author: ": A.L.Basham",
      category: "History",
    },
    {
      name: "Rebel Sultans",
      Author: ": Manu Pillai",
      category: "History",
    },
    {
      name: "The Ocean of Churn",
      Author: ": Sanjeev Sanyal",
      category: "History",
    },
    {
      name: "Papilon",
      Author: ": Henri Charrière",
      category: "Novel",
    },
    {
      name: "Malgudi Days",
      Author: ": R.K.Narayan",
      category: "Novel",
    },
    {
      name: "The Magic of The Lost Temple",
      Author: ": Sudha Murti",
      category: "Novel",
    },
    {
      name: " Harry Potter",
      Author: ": J.K.rollins",
      category: "Fiction",
    },
    {
      name: "Songs of Ice and Fire",
      Author: ": R.R.Martin",
      category: "Fiction",
    },
    {
      name: "The Prestige ",
      Author: ": Christopher Priest",
      category: "Fiction",
    },
    {
      name: "Wings of Fire",
      Author: ": Dr.A.P.J.Abdul Kalam",
      category: "Autobiography",
    },
    {
      name: "Autobiography Of A Yogi",
      Author: ": Paramhansa Yogananda",
      category: "Autobiography",
    },
    {
      name: "My India",
      Author: ": Jim Corbett",
      category: "Autobiography",
    },
  ];

  const bookCategory = ["History", "Novel", "Fiction", "Autobiography"];

  return (
    <div className="App">
      <h1>Books</h1>
      <hr />
      <p>Checkout my books. Select a genre to get started</p>
      {bookCategory.map((category) => {
        return (
          <button
            onClick={() => {
              setSelectedCategory(category);
            }}
          >
            {category}
          </button>
        );
      })}

      <hr />
      {bookDetails.map((book) => {
        if (selectedCategory === book.category) {
          return (
            <div className="book-name">
              {book.name}
              <span>{book.Author}</span>
            </div>
          );
        }
      })}
    </div>
  );
}
