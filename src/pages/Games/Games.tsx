import { Route, Routes } from 'react-router';
import GamesEntry from './GamesEntry';
import Sprint from './Sprint';

const Games = () => (
  <Routes>
    <Route path={`/`} element={<GamesEntry />} />
    <Route path={`sprint`} element={<Sprint />} />
    {/* <Route path="audiochallenge" element={<AudioChallenge />} />  */}
  </Routes>
);

export default Games;
