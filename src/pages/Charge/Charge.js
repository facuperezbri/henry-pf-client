import Charge from "../../components/Charge/Charge";
import Nav from "../../components/Nav/Nav";
import styles from './Charge.module.css'

export default function ChargePage () {
    return (
        <div className={styles.container}>
            <Nav />
            <Charge />
        </div>
    )
}
