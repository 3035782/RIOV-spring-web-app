import { useMemo } from 'react';
import { useState } from 'react'
import { createData } from '../../actions/actions';
import Input from '../../components/input/input'
import './form.css'
import CheckBox from "../../components/input/checkbox";

export default function CreateDeliverForm({ close }) {
    const [name, setName] = useState('');
    const [isVerify, setVerity] = useState(false);

    const memoDisabled = useMemo(() => {
        return (!name);
    }, [name, isVerify])

    const submit = (e) => {
        e.preventDefault();
        createData('deliver', {
            name: name,
            verify: isVerify
        })
    }

    return (
        <form className="container_form" onSubmit={submit}>
            <div className="button_form">
                <button onClick={close}>Закрыть</button>
                <button type="submit" className={memoDisabled ? 'disabled' : ''} disabled={memoDisabled} >Отправить</button>
            </div>
            <Input label='Имя' change={(e) => setName(e.value)} />
            <CheckBox label='Верифицированный' change={(e) => setVerity(e.checked)
            } />
        </form>
    )
}