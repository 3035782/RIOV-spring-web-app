import { useMemo } from 'react';
import { useState } from 'react'
import { updateData } from '../../actions/actions';
import Input from '../../components/input/input'
import './form.css'
import CheckBox from "../../components/input/checkbox";

export default function UpdateDeliverForm({ idf, close }) {
    const [id,] = useState(idf['id']);
    const [name, setName] = useState(idf['name']);
    const [isVerify, setVerity] = useState(idf['verify']);

    const memoDisabled = useMemo(() => {
        return (!id);
    }, [id, name, isVerify])

    const submit = (e) => {
        e.preventDefault();
        updateData('deliver', {
            id: id,
            name: name,
            verify: isVerify
        }, id)
    }

    return (
        <form className="container_form" onSubmit={submit}>
            <div className="button_form">
                <button type="button" onClick={close}>Закрыть</button>
                <button type="submit" className={memoDisabled ? 'disabled' : ''} disabled={memoDisabled} >Отправить</button>
            </div>
            <Input disabled={true} label='id' value={id} />
            <Input label='Имя' change={(e) => setName(e.value)} />
            <CheckBox checked={isVerify} label='Верифицированный' change={(e) => setVerity(e.checked)} />
        </form>
    )
}