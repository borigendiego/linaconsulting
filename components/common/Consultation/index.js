import React from 'react';
import Link from 'next/link';
//css
import styles from './consultation.module.scss'

const Consultation = () => {
    return(
        <div className={styles.consultationContainer}>
            <div className={styles.consultationContent}>
                <p className={styles.consultationText}>Get a free Consultation</p>
                <Link href={'/contact'} className={styles.linkConsultation}>
                    <p style={{textAlign: 'center'}}>Apply Now</p>
                </Link>
            </div>
        </div>
    )
};

export default Consultation;