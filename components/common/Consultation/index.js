import React from 'react';
import Link from 'next/link';
//css
import styles from './consultation.module.scss'

const Consultation = () => {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.text}>Get a free Consultation</p>
                <Link href={'/contact'}>
                    <a className={styles.link}>Apply Now</a>
                </Link>
            </div>
        </div>
    )
};

export default Consultation;