import React from 'react';
//Components
import SectionLayout from '../common/SectionLayout/SectionLayout';
import Box from './boxes';
//Styles
import styles from  './approach.module.scss';
//Constants
import { BOXES_DATA } from './constants';

const Approach = () => {

    return (
        <div id={'APPROACH'}>
            <SectionLayout
                sectionTitle={'Our Approach'}
                sectionSubTitle={'Our 6 Pillars of a Success Marketing Campaign'}
                sectionId={'APPROACH'}
            >
                <div className={styles.container}>
                    {BOXES_DATA.map((value) => <Box key={value.title} boxData={value} />)}
                </div>
            </SectionLayout>
        </div>
    )
};

export default Approach;