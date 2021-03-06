import React from 'react';
//Components
import { Form } from 'hippo-components';
//Validations
import { required, email } from './fieldValidations';
//css
import styles from '../contactPage.module.scss';

const LinaForm = () => {
    return (
        <div className={styles.form_container}>
            <h2 className={'form-title'}>Free Consultation</h2>
            <div className={'form-content'}>
                <Form
                    fields={[
                        {
                            name: 'name',
                            type: 'text',
                            label: 'Name (Required)',
                            size: 'half',
                            validations: [required],
                        },
                        {
                            name: 'customerEmail',
                            type: 'text',
                            label: 'Email (Required)',
                            size: 'half',
                            validations: [email],
                        },
                        {
                            name: 'subject',
                            type: 'text',
                            label: 'Subject',
                        },
                        {
                            name: 'message',
                            type: 'textArea',
                            label: 'Message',
                        }
                    ]}
                    onSuccessMessage={'Your message has been successfully sent. We will contact you very soon!'}
                    onErrorMessage={'Please try again in some minutes'}
                    submitButtonLabel={'Send Request'}
                    customClass={'lina-contact-form'}
                    emailServiceURL={''}
                />
            </div>
        </div>
    )
};

export default LinaForm;
