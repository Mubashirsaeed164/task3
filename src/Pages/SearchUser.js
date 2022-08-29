import React, { useState } from 'react'
import Loading from '../Component/Loading/Loading'
import Navigation from '../Component/navigation/Navigation'
import UsersDisplay from './UsersDisplay'
import { userApi } from '../lib/Unsplashapi'
function SearchUser(props) {

    const [query, setQuery] = useState('')
    const [userData, setUserData] = useState([])
    const [pages, setPages] = useState(2)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    
    const apiCall = (page_count) => {
        setIsLoading(true)
        return userApi(query, page_count)
        .then((res) => {
            console.log(res)
            return res 
        })
        .catch((error) => {
            setErrorMessage(error)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }
    
    const handelSearch = async (e,page_count = 1) => {
        e.preventDefault()
        console.log(page_count)
        const result = await apiCall(page_count)
        if (result){
            // console.log(result)
            setUserData(result)
        }
        else {
            
            return "Error"
        }  
    }

    const pageIncrement = async () => {
        setPages((prev) => {
          return  prev + 1
        })
        const newData = await apiCall(pages)
        setUserData([...userData, ...newData])
    }

    return (
        <>
        <Navigation/>
        <div className="container">
            <div className="search-box">
                <h2>Search Users</h2>
                <div className="search">
                    <div className="search-field">
                        <form onSubmit={(e)=> handelSearch (e)}>
                            <input 
                            type="text" 
                            name='user'
                            placeholder="Search User here ..."
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            // onKeyPress={e => e.key === 'Enter' && handleSearch()}
                            />   
                        </form>
                    </div>
                </div>
                {/* <div>
                    <button type="text" onClick={()=> {pageIncrement()}}>Load More</button>
                </div> */}
            </div>
            {
                isLoading ? <Loading/> : <UsersDisplay users={userData} load={pageIncrement}/>
            }
            {
                errorMessage && <div className='error'>{errorMessage}</div>
            }
        </div>
        </>
    )
}

export default SearchUser