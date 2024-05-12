import { useState } from 'react';
        function Header({title}){
            
            return <h1>{title}</h1>
        }
        function Homepage(){
            const names =["tien","pham","trs"]
            const [likes,setLikes] = React.useState(0)
            function handleClick() {
                setLikes(likes + 1)
            }

            return (
                <div>
                    <Header title="React"/>
                    <ul>
                        {
                            names.map((e) => {
                                return <li key ={e} >{e}</li>
                                })
                        }
                    </ul>
                    <button onClick={handleClick}>Like{likes}</button>
                </div>
            )
        }
export default function HomePage(){
    
}
const root = ReactDOM.createRoot(app)
root.render(<Homepage />)
