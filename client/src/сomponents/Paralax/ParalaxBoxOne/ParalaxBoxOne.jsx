import { Parallax } from 'react-parallax';
import Exchnge from '../img/job_exchange.jpeg'
import style from '../Paralax.module.css'

const ParalaxBoxOne = () => (
    <Parallax className={style.image} bgImage={Exchnge} strength={800}>
        <div className={style.content}>
            <span className={style.control_text}>
                Первоначально люди вступают в простой товарный обмен или такие отношения обмена, при которых продажа и купля товаров совпадали во времени и происходили без участия денег. Форма товарного обмена имеет следующий вид: Т (товар) -- Т (товар).
                В результате развития товарообмена открывались все новые возможности для обособления все новых видов деятельности, так как возрастала гарантия получения недостающих благ или продуктов, от производства которых товаропроизводитель сознательно отказался.
            </span>
        </div>
    </Parallax>
);

export default ParalaxBoxOne
