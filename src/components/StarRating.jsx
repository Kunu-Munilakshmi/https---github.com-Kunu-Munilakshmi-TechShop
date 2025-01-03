import React from "react";

const StarRating = ({ product }) => {
  const maxStars = 5; // Total number of stars
  const filledStars = product.rateCount; // Get rateCount from the product object
  const emptyStars = maxStars - filledStars; // Remaining empty stars

  return (
    <div >
      {/* Render filled stars */}
      {Array.from({ length: filledStars }, (_, index) => (
        <span key={`filled-${index}`} style={{ color: "red" }}>
          ★
        </span>
      ))}

      {/* Render empty stars */}
      {Array.from({ length: emptyStars }, (_, index) => (
        <span key={`empty-${index}`} style={{ color: "lightgray" }}>
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
