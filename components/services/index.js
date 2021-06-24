import React from 'react';
//css
import styles from './services.module.scss'
//Components
import SectionLayout from '../common/SectionLayout/SectionLayout';
import Tile from './Tile';
import Pyramid from '../common/Pyramid/Pyramid';
import MobileCarousel from '../common/mobileCarousel';
//Constants
import { SERVICES_TEXT, TILE_DATA } from './constants';

const Services = () => {
    return (
        <div className={styles.container} id={'SERVICES'}>
            <Pyramid>
                <h2 className={styles.pyramid_title}>Welcome to Lina Consulting</h2>
                <p className={styles.pyramid_text}>{SERVICES_TEXT}</p>
            </Pyramid>
            <SectionLayout
                sectionTitle={'Our Services'}
                sectionSubTitle={'Design & Marketing Services:'}
                sectionId={'SERVICES'}
                layoutWidth={'lg'}
            >
                <div className={styles.tile_container}>
                    {TILE_DATA.map((value, index) => <Tile tileData={value} key={value.title} imageKey={index} />)}
                </div>
                <MobileCarousel
                    slides={TILE_DATA.map((value, index) => <Tile tileData={value} key={index} />)}
                />
            </SectionLayout>
        </div>
    )
};

export default Services;
