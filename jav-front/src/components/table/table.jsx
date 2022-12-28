import React, { useCallback, useContext, useEffect, useState } from 'react';
import { createData, deleteData } from '../../actions/actions'
import './table.css'

export default function Table({ head = [], body = [], data = [], endpoint, upd, reload }) {

    return (
        <table>
            <thead>
                <tr>
                    {
                        head.map((el, index) => (
                            <td key={index}>{el}</td>
                        ))
                    }
                    <td className="action"></td>
                    <td className="action"></td>
                </tr>
            </thead>

            <tbody>
                {
                    data.map((obj, index) => (
                        <tr key={index}>
                            {

                                body.map((element, i) => (
                                    <td key={i}>{`${obj[element]}`}</td>
                                ))

                            }
                            <td className="action" onClick={() => upd(obj)}>upd</td>
                            <td className="action" onClick={() => deleteData(endpoint, obj['id']).then(() => reload())}>del</td>

                        </tr>
                    ))
                }

            </tbody>
        </table>
    )
}