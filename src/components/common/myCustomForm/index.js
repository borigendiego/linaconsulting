import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
//Hook
import useContactForm from './useContactForm';
//Component
import MyInput from './CustomInput';
//Styles
import './customForm.scss';

const MyCustomForm = ({ fields, onSuccessMessage, onErrorMessage, customClass, submitButtonLabel }) => {
    const [messageSent] = useState('');
    const initialValues = {
        name: '',
        mail: '',
        subject: '',
        message: '',
    };

    const {
        values,
        handleChange,
        errors,
        handleSubmit,
    } = useContactForm({
        initialValues,
        fields,
        onSubmit: (form) => {
            axios.post(
                'https://thehippoapi.netlify.app/.netlify/functions/api/mail',
                {
                    projectEmail: ['borigendiego@gmail.com'],
                    subject: 'My first test email',
                    message: 'Este es el mail posta'
                    },
            {headers: {'Content-Type': 'application/json'}}
                )
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            /*//TODO: Move emails sender to a proper API
            emailjs.sendForm(
                process.env.REACT_APP_MAIL_VALUE,
                process.env.REACT_APP_TEMPLATE_ID,
                form, process.env.REACT_APP_USER_ID)
                .then(() => {
                    setValues(initialValues);
                    setMessageSent('succeed');
                }, (error) => {
                    console.log(error.text);
                    setMessageSent('error');
                });*/
        }
    });

    const renderSentMessage = () => {
        if (messageSent === 'succeed') {
            return <div className={'message succeed'}>
                <h2>Thank you!</h2>
                <p>{onSuccessMessage}</p>
            </div>
        }
        if (messageSent === 'error') {
            return <div className={'message error'}>
                <h2>Something went wrong</h2>
                <p>{onErrorMessage}</p>
            </div>
        }
        return null;
    };

    return (
        <form className={`contact-form ${customClass}`} onSubmit={(event) => handleSubmit(event)}>
            {
             fields.map((field) => {
                 const { name, type, label, validations, selectOptions, size } = field;

                 switch (type) {
                     case 'text':
                         return (
                             <MyInput
                                 key={name}
                                 fieldName={name}
                                 id={name}
                                 fieldType={'text'}
                                 label={label}
                                 handleChange={handleChange}
                                 value={values[name]}
                                 validations={validations}
                                 errors={errors}
                                 size={size}
                             />
                         );
                     case 'textArea':
                         return (
                             <section className={'contact-item'} key={name}>
                                 <label className={'contact-label'}>{label}</label>
                                 <textarea
                                     name={name}
                                     id={name}
                                     onChange={handleChange}
                                     value={values[name]}
                                     rows={'5'}
                                     cols={'40'}
                                     className={'contact-input-box'}
                                 />
                             </section>
                         );
                     case 'select':
                         return (
                             <select key={name} className={'contact-select'}>
                                 {
                                     selectOptions.map(option => <option value={option.value}>{option.label}</option>)
                                 }
                             </select>
                         );
                     default:
                         return (
                         <MyInput
                             key={name}
                             fieldName={name}
                             id={name}
                             fieldType={'text'}
                             label={label}
                             handleChange={handleChange}
                             value={values[name]}
                             validations={validations}
                             errors={errors}
                         />
                     )
                 }
             })
            }
            {renderSentMessage()}
            <section className={'contact-item'}>
                <input type={'submit'} value={submitButtonLabel ? submitButtonLabel : 'SEND'} className={'contact-input-button'}/>
            </section>
        </form>
    )
};

MyCustomForm.propTypes = {
    fields: PropTypes.array,
    onSuccessMessage: PropTypes.string,
    onErrorMessage: PropTypes.string,
    customClass: PropTypes.string,
    submitButtonLabel: PropTypes.string,
};

export default MyCustomForm