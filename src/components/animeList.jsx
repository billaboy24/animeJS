import React ,{useState}from 'react';
import AnimeCard from '../commons/animeCard';
import Pagination from '../commons/pagination';
import { paginate } from '../utils/pagination';



function Anime()  {
    
    const [animeList,setAnimeList]=useState([]);
    const [search,setSearch]=useState("");
   
    const [currentPage,setCurrentPages]=useState(1)
    const pageSize=6;
    
  
  
    const HandleSearch = e => {
        e.preventDefault();

		FetchAnime(search);
      }
  
      const FetchAnime = async (query) => {
          const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=50`)
              .then(res => res.json());
  
          setAnimeList(temp.results);
      }
      const handlePage = page=> setCurrentPages(page);

     
      

      const anime=paginate(animeList,currentPage,pageSize)

     
      
    return ( 
        <main>
        <h1>The<strong>Anime</strong>List</h1> 
        <div className="container-xxl">
            <form 
               
                onSubmit={HandleSearch}>
                <input 
                    type="search"
                    className='form-control'
                    placeholder="Search for an anime..."
                    required
                    value={search}
                    onChange={e => setSearch(e.target.value)}/>
            </form>
        </div>
        <div className="anime-list">
            {anime.filter((val=>{
               if( val.title.toLowerCase().includes(search.toLowerCase())){
                   return val
               }return val
               
            })).map(anime => (
                
              <AnimeCard
						anime={anime}
						key={anime.mal_id}
                         />
            ))}
        </div>
     
        <Pagination 
        itemCount={animeList.length} 
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePage}
        />
    </main>
     );
}
 
export default Anime;