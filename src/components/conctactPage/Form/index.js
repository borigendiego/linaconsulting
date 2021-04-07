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
                            name: 'Message',
                            type: 'textArea',
                            label: 'Message',
                        }
                    ]}
                    onSuccessMessage={'Your message has been successfully sent. We will contact you very soon!'}
                    onErrorMessage={'Please try again or send and email to: kamlesh.lad@linaconsulting.com'}
                    submitButtonLabel={'Send Request'}
                    customClass={'lina-contact-form'}
                />
                {/*<form>
                    <section className={'form-item'}>
                        <input type={'text'} name={'name'} id={'name'} className={'form-input half left'}/>
                        <input type={'text'} name={'lastname'} id={'lastname'} className={'form-input half'}/>
                    </section>
                    <section className={'form-item'}>
                        <input type={'text'} name={'email'} id={'email'} className={'form-input'}/>
                    </section>
                    <section className={'form-item'}>
                        <textarea id={'message'} name={'message'} rows={'5'} cols={'40'} className={'form-input text-box'}/>
                    </section>
                    <section className={'form-item'}>
                        <input type={'submit'} value={'Send Request'} className={'form-button'}/>
                    </section>
                </form>*/}
            </div>
        </div>
    )
};

export default Form;