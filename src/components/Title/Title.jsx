import css from './Title.module.css';

export const Title = ({ title }) => {
  return (
    <>
      <h1 className={css.title}>{title}</h1>
    </>
  );
};
