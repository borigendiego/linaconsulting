import React from 'react';
//Components
import MyCustomForm from '../../common/myCustomForm';
//Validations
import { required, email } from './fieldValidations'

const Form = () => {
    return (
        <div className={'form-container'}>
            <h2 className={'form-title'}>Free Consultation</h2>
            <div className={'form-content'}>
                <MyCustomForm
                    fields={[
                        {
                            name: 'name',
                            type: 'text',
                            label: 'Name (Required)',
                            size: 'half',
                            validations: [required],
                        },
                        {
                            name: 'mail',
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
                />
            </div>
        </div>
    )
};

export default Form;