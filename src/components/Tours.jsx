import React, {useEffect, useState} from "react";
import Tour from "./Tour";

const Tours = ({ tours }) => {
    const [tourList, setTourList] = useState(tours);
    const [isEmpty, setIsEmpty] = useState(false);

    const handleDelete = (id) => {
       const newTourList = tourList.filter((data) => data.id !== id);
       setTourList(newTourList);
    };

    const resetTours = () => {
        setTourList(tours);
        setIsEmpty(false);
    };

    useEffect(() => {
      if (tourList.length === 0) {
        setIsEmpty(true);
      }
    }, [tourList]);

    const ResetButton = () => {
      return (
        isEmpty && (
          <React.Fragment>
            <h4>There are currently no tours available.</h4>
            <button className='btn btn-secondary' onClick={() => resetTours()}>
              Reset Tours
            </button>
          </React.Fragment>
        )
      )
    };
    
    
  return (
    <>
      <div className="title">
        <h1>Our Tours</h1>
        <div className="underline"></div>
      </div>
      <div>
        {tourList.map((tour) => {
          return (
            <Tour key={tour.id} tourList={tour} handleDelete={handleDelete} />
          );
        })}
        <ResetButton />
      </div>
    </>
  );
};

export default Tours;
