import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/fetchService';
import { NoReview, ReviewList } from './Rewies.styled.jsx';
function Review() {
  const { id } = useParams();
  const [review, setReview] = useState('');

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await getMovieReviews(id);
        // console.log(res);
        setReview(prevProps => res);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [id]);

  return (
    <>
      {review.length === 0 ? (
        <NoReview>We dont have any reviews for this movie</NoReview>
      ) : (
        <ReviewList>
          {review.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ReviewList>
      )}
    </>
  );
}

export default Review;
