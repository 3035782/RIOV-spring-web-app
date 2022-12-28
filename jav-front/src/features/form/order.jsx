import { useMemo } from 'react';
import { useState } from 'react'
import { createData } from '../../actions/actions';
import Input from '../../components/input/input'
import './form.css'

export default function CreateOrderForm({ close }) {
    const [producer, setProducer] = useState('');
    const [consumer, setConsumer] = useState('');
    const [price, setPrice] = useState(false);

    const memoDisabled = useMemo(() => {
        return (!producer || !consumer || !price);
    }, [producer, consumer, price])

    const submit = (e) => {
        e.preventDefault();
        createData('order', {
            producer: producer,
            consumer: consumer,
            price: price,
            delivered: false
        })
    }

    return (
        <form className="container_form" onSubmit={submit}>
            <div className="button_form">
                <button onClick={close}>Закрыть</button>
                <button type="submit" className={memoDisabled ? 'disabled' : ''} disabled={memoDisabled} >Отправить</button>
            </div>
            <Input label='Исполнитель' change={(e) => setProducer(e.value)} />
            <Input label='Заказчик' change={(e) => setConsumer(e.value)} />
            <Input label='Цена' change={(e) => setPrice(e.value)} />
        </form>
    )
}