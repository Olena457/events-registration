import styles from './FavoritesCardsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import CardsList from '../../components/CardsList/CardsList.jsx';
import {
  selectFavorites,
  selectFavoritesLoading,
} from '../../redux/favorites/selectorsFavorites.js';
import Loader from '../../components/Loader/Loader.jsx';
import { useEffect } from 'react';
import { fetchFavorites } from '../../redux/favorites/operationsFavorites.js';

const FavoritesCardsPage = () => {
  const favoriteCards = useSelector(selectFavorites);
  const isLoading = useSelector(selectFavoritesLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <div className={styles.main}>
      {isLoading && <Loader />}

      {favoriteTeachers.length > 0 ? (
        <CardsList teachers={favoriteCards} />
      ) : (
        <p>No favorites cards yet.</p>
      )}
    </div>
  );
};

export default FavoritesCardsPage;
