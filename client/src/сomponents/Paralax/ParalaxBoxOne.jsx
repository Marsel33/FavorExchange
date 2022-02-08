import { Parallax } from 'react-parallax';
import Exchnge from './img/exchange.jpeg'
import style from './Paralax.module.css'

const ParalaxBoxOne = () => (
    <Parallax className={style.image} bgImage={Exchnge} strength={800}>
        <div className={style.content}>
            <span className={style.control_text}> Первый блок стены</span>
        </div>
    </Parallax>
);

export default ParalaxBoxOne
