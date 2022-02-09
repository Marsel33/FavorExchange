import { Parallax } from 'react-parallax';
import avrasya from '../img/elecktro_job.jpeg'
import style from '../Paralax.module.css'

const ParalaxBoxTwo = () => (
    <Parallax className={style.image} bgImage={avrasya} strength={800}>
        <div className={style.content}>
            <span className={style.control_text}> Второй блок стены</span>
        </div>
    </Parallax>
);

export default ParalaxBoxTwo
