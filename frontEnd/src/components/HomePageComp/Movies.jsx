import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Movies = () => {
    
    const data = useParams();

    useEffect(() => {
        console.log(data);
    }, [data]);

  
    return (
    <div>
      <h1>Displaying {data.key ? data.key : ''} Movies</h1>
    </div>
  )
}

export default Movies
