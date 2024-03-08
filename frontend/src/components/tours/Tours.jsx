import {tours} from '../utils'
import Tour from './tour/Tour'
const Tours =()=> {
    return(
        <>
         <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'2rem'}}>
            {tours.map((tour,i)=>(
                <div key={i}>
                    <Tour tour={tour}/>
                </div>
            ))}
        </div>

        </>
    )
}
export default Tours