import React,{ useState,useEffect } from "react"

const Home = () =>{
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() =>{
        (async () =>{
            const response = await fetch("/rent/jhome");
            const data = await response.json();
            console.log(data)
            setData(data)
            setLoading(false)
        })();
    },[])

    return(
        <div>
            {loading ? <h1>wait</h1> : 
                <ul>
                {data.map(item => (
                  <li key={item.id}>
                    <a href={item.url}>{item.title}</a>
                  </li>
                ))}
              </ul>
            }
        </div>
    )
}

export default Home