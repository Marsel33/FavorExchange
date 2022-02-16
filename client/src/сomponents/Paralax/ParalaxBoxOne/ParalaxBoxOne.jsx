import {Parallax} from 'react-parallax';
import Exchnge from '../img/job_exchange.jpeg'
import style from '../Paralax.module.css'

const ParalaxBoxOne = () => (
    <Parallax className={style.image} bgImage={Exchnge} strength={800}>
        <div className={style.content}>

        </div>
    </Parallax>
);

export default ParalaxBoxOne
