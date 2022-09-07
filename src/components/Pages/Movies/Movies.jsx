import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { FilmList } from '../FilmList/Filmlist';
import { searchMovie } from '../../services/fetchService';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Form, Input, Button } from './Movies.styled';

const emptyResponseNotify = () =>
  Notify.warning('Sorry, no movies were found matching your search');
const emptyRequestNotify = () => Notify.failure('Type something to search');

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [response, setResponse] = useState([]);
  const query = searchParams.get('query');

  function formQuery(e) {
    const key = e.target.children.query.name;
    const value = e.target.children.query.value;

    return { [key]: value };
  }

  function handleSubmit(e) {
    e.preventDefault();

    const params = formQuery(e);
    if (!params.query) {
      return emptyRequestNotify();
    }
    setSearchParams(params);

    e.target.children.query.value = '';
  }

  useEffect(() => {
    query
      ? searchMovie(query).then(response => {
          if (response.length === 0) {
            return emptyResponseNotify();
          }
          setResponse(response);
        })
      : setResponse([]);
  }, [query]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" />
        <Button type="submit">Search</Button>
      </Form>

      {query && response.length !== 0 && <FilmList filmList={response} />}
    </>
  );
}
