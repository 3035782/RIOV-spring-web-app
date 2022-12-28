import React, { useState } from "react";
import { useEffect } from "react";
import { getAllElements, getData } from "../actions/actions";
import Table from "../components/table/table";

export default function MainTable(props) {
    const [data, setData] = useState()

    useEffect(() => {//для вызова запроса на сервер
        getAllElements(props.endpoint).then((e) => setData(e)) //вызов функции запроса на сервер
    }, [])


    return (
        <Table
            head={props.head} //название колонок в таблице
            body={props.body} //название ключа объекта для отрисовки
            data={data} //массив объектов
            endpoint={props.endpoint}
            upd={props.upd}
            reload={() => getAllElements(props.endpoint).then((e) => setData(e))}
        />
    )
}