import { Spinner, LoaderContainer } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderContainer>
      <Spinner
        strokeColor="red"
        strokeWidth="4"
        animationDuration="0.75"
        width="50"
        visible={true}
      />
    </LoaderContainer>
  );
}
