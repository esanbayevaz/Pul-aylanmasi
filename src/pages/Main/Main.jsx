import React, { useContext, useState } from 'react'
import { Context } from '../../context/context'
import Table from './Table'
import "../Main/Table.css"

function Main() {
    const { price, setPrice, history, setHistory } = useContext(Context)
    const [sum, setSum] = useState(0)
    const data = new Date()


    const day = data.getDate()
    const month = data.getMonth()
    const yer = data.getFullYear()
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month + 1}` : month + 1;


    const addCard = e => {
        e.preventDefault();
        const forma = new FormData(e.target)
        const { fcart, scart } = Object.fromEntries(forma.entries())
        const newHistory = {
            fistCart: fcart,
            secondCard: scart,
            price: price,
            data: `${formattedDay}-${formattedMonth}-${yer}`
        }
        if (price >= sum) {
            setHistory([...history, newHistory])
            setPrice([p => p - sum])
        }
        else {
            alert("pulingiz yetmaydi")
        }
    }
    console.log(history);
    const clearHistory = () => {
        setHistory([])
    }
    return (
        <div className='w-[600px] ml-[335px]'>
            <form onSubmit={addCard} className='w-screen  p-10 flex flex-row gap-7 border-2 bg-amber-400  items-center -mt-[730px] ' >
                <input required type="text" className='w-[200px] py-2 px-2 rounded-xl border-2 border-gray-300' placeholder='jonatuvchi karta' name="fcart" id="" />

                <input required type="text" className='w-[200px] py-2 px-2 rounded-xl border-2 border-gray-300' placeholder='qabul karta ' name="scart" id="" />

                <input required type="number" autoComplete='off' className='w-[200px] py-2 px-2 rounded-xl border-2 border-gray-300' placeholder='otkaziladigon summa' onChange={e => setSum(e.target.value)} id="" />
                <button className=' bg-orange-500 text-white rounded-2xl py-1 text-lg px-2 '>Pul otkazish</button>
            </form>

            <div className='flex flex-row gap-5  px-10 pt-5 ' >
                <button className=' bg-orange-500 text-lg text-white px-5 py-2 rounded-lg' onClick={clearHistory}>History Delete</button>
            </div>

            <div className=' w-[500px] p-10 '>
                {history.length > 0 ?
                    <table id='customers'  >
                        <thead>
                            <tr>
                                <th>{history.length > 0 && '№'} </th>
                                <th>{history.length > 0 && 'Yuborilgan karta'}</th>
                                <th>{history.length > 0 && 'Qabul qilgan karta'}</th>
                                <th>{history.length > 0 && 'Tushgan miqdor'}</th>
                                <th>{history.length > 0 && 'Tanlangan sana'}</th>
                            </tr>
                        </thead>
                        <Table history={history} />
                    </table>
                    :
                    <h1>History is cleared </h1>
                }
            </div>
        </div>
    )
}

export default Main