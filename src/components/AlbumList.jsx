import{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbumsLoading, fetchAlbumsSuccess, fetchAlbumsFailed} from "../redux/albumSlice";

const AlbumsList = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.album?.items);
  const status = useSelector((state) => state.album?.status);
  const error = useSelector((state) => state.album?.error);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchAlbumsLoading());
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await response.json();
        dispatch(fetchAlbumsSuccess(data));
      } catch (err) {
        dispatch(fetchAlbumsFailed(err.message));
      }
    };

    if (status === 'idle') {
      fetchData();
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  if (!albums) {
    return <p>No albums found.</p>; 
  }

  return (
    <ul>
      {albums.map((album) => (
        <li key={album.id}>{album.title}</li>
      ))}
    </ul>
  );
};

export default AlbumsList;