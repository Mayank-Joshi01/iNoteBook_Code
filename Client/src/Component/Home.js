import React from 'react'
import Notes from './Notes'



const Home = (props) => {

    return (<>
       <Notes Showalert={props.Showalert}/>

    </>
    )
}

export default Home