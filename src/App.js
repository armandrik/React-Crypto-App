import React from 'react'
import './App.css';
import { getDataAxios } from './services/axiosGet';
import { Coin } from './views/Coin';
import { Routes, Route } from 'react-router-dom';
import { Describe } from './views/Describe';
import { EnterPage } from './views/EnterPage';
import Pagination from './views/Pagination';
import { Header } from './views/Header';
import { Slider } from './views/Slider';

function App() {

  //states
  const [coin, setCoin] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [search, setSearch] = React.useState('');
  const [postsPerPage] = React.useState(10);
  const [describe, setDescribe] = React.useState('bitcoin')
  const [isLoading, setIsLoading] = React.useState(false);

  //functions
  const findeCoin = (e) => {
    setSearch(e.target.value);
  }

  const postId = (data) => {
    setDescribe(data)
  }

  //useeffect
  React.useEffect(() => {
    (async () => {
      setIsLoading(true)
      const result = await getDataAxios();
      setCoin(result);
      setIsLoading(false)
    })();
  }, [])

  //pagination
  const filteredCoins = coin.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredCoins.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<EnterPage />} />
        <Route path='/main' exact element={<>
          <Header findeCoin={findeCoin} />
          <Slider />
          {isLoading ? <h1 className='loading'>loading . . . <div className="loader"></div></h1> :
            <div className='meta-coin-container'>
              {currentPosts.map(item =>
                <Coin
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  rank={item.market_cap_rank}
                  img={item.image}
                  symbol={item.symbol}
                  volume={item.total_volume}
                  price={item.current_price}
                  getId={postId}
                />
              )}
            </div>
          }
          <Pagination postsPerPage={postsPerPage} totalPosts={coin.length} paginate={paginate} currentPage={currentPage} />
        </>} />
        <Route path='/describe' element={<Describe coinId={describe} />} />
      </Routes>
    </div>
  );
}

export default App;