import styles from './styles.module.css'

import IgniteLogo from '../../assets/logo.svg'

export const Header = () => {

    return (
        <header className={styles.container}>
            <img src={IgniteLogo} alt="Logo do feed" />
        </header>
    );
}