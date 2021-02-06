import React from 'react';
import './form.scss'

const Form = () => {
    return (
        <div className={'form-container'}>
            <h2 className={'form-title'}>Free Consultation</h2>
            <div className={'form-content'}>
                <form>
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
                </form>
            </div>
        </div>
    )
};

export default Form;