
function Header({title}){
            
        return <h1>{title}</h1>
    }
export default function HomePage(){
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