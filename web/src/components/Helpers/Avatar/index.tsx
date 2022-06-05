import styles from './styles.module.css'

interface Props {
    src: string;
    alt?: string;
    hasBorder?: boolean
}

export const Avatar = ({ src, alt, hasBorder = true }: Props) => {

    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
            alt={alt}
        />
    );
}