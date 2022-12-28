import { useState } from 'react';
import './App.css';
import MainTable from './features/mainTable';
import CreateDeliverForm from "./features/form/deliver";
import UpdateDeliverForm from "./features/form/deliver_update";
import CreateOrderForm from "./features/form/order";
import UpdateOrderForm from "./features/form/order_update";

let sectionSelect = [{ label: 'Доставщики' }, { label: 'Заказы' }]

function App() {

  const [section, setSection] = useState('Доставщики');
  const [state, setState] = useState(['Список']);

  const openList = (e) => {
    setSection(e);
    setState(['Список']);
  }

  const openUpdate = (e) => setState(['Обновление', e]);

  return (
    <div className="App">
      <div className="selector_container">
        {
          sectionSelect.map(({ label }, index) => (
            <button className={`select_button ${section === label && 'active_select_button'}`} onClick={() => { setSection(label); setState(['Список']) }} key={index}>{label}</button>
          ))
        }
      </div>

      {
        state[0] === 'Список' && <div className="button_form"> <button onClick={() => setState(['Создание'])}>Создать</button> </div>
      }

      <div className="content_container">
        {
          section === 'Доставщики' && state[0] === 'Создание' && <CreateDeliverForm close={() => openList('Доставщики')} />
        }
        {
          section === 'Доставщики' && state[0] === 'Список' && <MainTable head={['id', 'Имя', 'Подтверждённый']} body={['id', 'name', 'verify']} endpoint={'deliver'} upd={openUpdate} />
        }
        {
          section === 'Доставщики' && state[0] === 'Обновление' && <UpdateDeliverForm idf={state[1]} close={() => openList('Доставщики')} />
        }
        {
          section === 'Заказы' && state[0] === 'Создание' && <CreateOrderForm close={() => openList('Заказы')} />
        }
        {
          section === 'Заказы' && state[0] === 'Список' && <MainTable head={['id', 'Исполнитель', 'Заказчик', 'Цена', 'Доставлено']} body={['id', 'producer', 'consumer','price', 'delivered']} endpoint={'order'} upd={openUpdate} />
        }
        {
          section === 'Заказы' && state[0] === 'Обновление' && <UpdateOrderForm idf={state[1]} close={() => openList('Заказы')} />
        }

      </div>
    </div>
  );
}

export default App;
