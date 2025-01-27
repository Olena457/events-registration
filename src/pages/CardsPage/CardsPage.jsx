import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/createCard/operationsCreateCard.js';
import {
  selectCreateCardData,
  selectCreateCardLoading,
} from '../../redux/createCard/selectorsCreateCard.js';
import Loader from '../../components/Loader/Loader.jsx';
import CardsList from '../../components/CardsList/CardsList.jsx';
import { Outlet, useParams } from 'react-router-dom';
import styles from './CardsPage.module.css';

const CardsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cards = useSelector(selectCreateCardData);
  const loading = useSelector(selectCreateCardLoading);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const card = useMemo(() => cards.find(card => card.id === id), [cards, id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : cards.length > 0 ? (
        <div className={styles.wrapperCard}>
          <CardsList cards={cards} />
          <Outlet context={{ card }} />
        </div>
      ) : (
        <div className={styles.wrapperNoEvent}>
          <h4 className={styles.title}>No events found</h4>
        </div>
      )}
    </>
  );
};

export default CardsPage;
