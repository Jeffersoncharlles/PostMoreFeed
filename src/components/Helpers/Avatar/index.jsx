import styles from './styles.module.css'

// interface Props {
//     src: string;
//     alt?: string;
// }

export const Avatar = ({ src, alt, hasBorder = true }) => {

    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
            alt={alt}
        />
    );
}