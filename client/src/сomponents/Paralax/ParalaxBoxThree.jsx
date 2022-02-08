import { Parallax } from 'react-parallax';
import vstrechnye from './img/vstrechnye-postavki-tovara.jpeg'
import style from './Paralax.module.css'

const ParalaxBoxThree = () => (
    <Parallax className={style.image} bgImage={vstrechnye} strength={800}>
        <div className={style.content}>
            <span className={style.control_text}> Третий блок стены</span>
        </div>
    </Parallax>
);

export default ParalaxBoxThree
