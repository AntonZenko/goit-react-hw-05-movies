import { useState } from 'react';

const Movies = () => {
  const [serchValue, setSerchValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const { value } = e.target.elements.query;

    setSerchValue(value);

    e.target.children.query.value = '';
  }
  console.log(serchValue);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default Movies;
