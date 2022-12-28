import { useMemo } from 'react';
import { useState } from 'react'
import { updateData } from '../../actions/actions';
import Input from '../../components/input/input'
import './form.css'
import CheckBox from "../../components/input/checkbox";

export default function UpdateOrderForm({ idf, close }) {
    const [id,] = useState(idf['id']);
    console.log(idf['price'])
    const [price, setPrice] = useState(idf['price']);
    const [deliverId, setDeliver] = useState();
    const [isDelivered, setDelivered] = useState(idf['delivered']);

    const memoDisabled = useMemo(() => {
        return (!id);
    }, [id, price, isDelivered])

    const submit = (e) => {
        e.preventDefault();
        updateData('order', {
            id: id,
            price: price,
            deliverId: deliverId,
            delivered: isDelivered
        }, id)
    }

    return (
        <form className="container_form" onSubmit={submit}>
            <div className="button_form">
                <button type="button" onClick={close}>Закрыть</button>
                <button type="submit" className={memoDisabled ? 'disabled' : ''} disabled={memoDisabled} >Отправить</button>
            </div>
            <Input disabled={true} label='id' value={id} />
            <Input value={price} label='Цена' change={(e) => setPrice(e.value)} />
            <Input label='Идентификатор доставщика' change={(e) => setDeliver(e.value)} />
            <CheckBox checked={isDelivered} label='Доставлено' change={(e) => setDelivered(e.checked)} />
        </form>
    )
}