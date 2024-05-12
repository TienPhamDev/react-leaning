import { useState } from 'react';
        function Header({title}){
            
            return <h1>{title}</h1>
        }
        function Homepage(){
            const names =["tien","pham","trs"]
            

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
                    
                </div>
            )
        }
export default function HomePage(){
    
}
const root = ReactDOM.createRoot(app)
root.render(<Homepage />)
