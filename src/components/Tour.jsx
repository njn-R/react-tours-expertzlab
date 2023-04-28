import React, {useState} from 'react'

const Tour = ({ tourList, handleDelete }) => {
  const [readMore, setReadMore] = useState(false);
  const { name, image, info, price, id } = tourList

  return (
    <>
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <div className="tour-price">{`₹${price}`}</div>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "Show Less" : "Show More"}
            </button>
          </p>
          <button className="delete-btn" onClick={() => handleDelete(id)}>
            Not Interested
          </button>
        </footer>
      </article>
    </>
  );
};

export default Tour