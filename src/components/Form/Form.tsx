import {FC, useMemo, useState} from 'react';
import {DatePicker} from "antd";
import Picker from "./Picker/Picker";
import TextArea from "antd/es/input/TextArea";
import styles from './Form.module.scss'
import Buttons from "./Buttons/Buttons";

const {RangePicker} = DatePicker

export interface ISelect {
    value: string | number
    label: string | number
}

export interface IData {
    tower: string
    floor: number
    room: number
    date: any
    text: string
}

const Form: FC = () => {
    const [keyValue, setKeyValue] = useState<any>('')
    const [data, setData] = useState<IData>({tower: '', floor: 0, room: 0, date: '', text: ''})
    const listFloor: ISelect[] = useMemo(() => (Array.from({length: 27}, (v, k) => k + 1).map((item: any) => ({
        value: item,
        label: item
    })).slice(3)), [data.floor])
    const listRooms: ISelect[] = useMemo(() => (Array.from({length: 10}, (v, k) => k + 1).map((item: any) => ({
        value: item,
        label: item
    }))), [data.room])
    const listTowers: ISelect[] = useMemo(() => ([
        {
            label: 'A',
            value: 'A'
        },
        {
            label: 'B',
            value: 'B'
        },
    ]), [data.tower])

    const clearForm = () => {
        setData({date: '', text: '', room: 0, floor: 0, tower: ''})
        setKeyValue(new Date())
    }
    const handleSubmit = (event:any) => {
        event.preventDefault()
        console.log(JSON.stringify(data))
        clearForm()
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <Picker title={'Башня'} value={data.tower} onChange={(val) => setData({...data, tower: val})}
                    options={listTowers}/>
            <Picker title={'Этаж'} value={data.floor} onChange={(val) => setData({...data, floor: val})}
                    options={listFloor}/>
            <Picker title={'Переговорка'} value={data.room} onChange={(val) => setData({...data, room: val})}
                    options={listRooms}/>
            <div className={styles.picker}>
                <h4>Выбор даты</h4>
                <RangePicker key={keyValue} allowClear={true} placeholder={['с', 'по']}
                             onChange={(_: any, val: string[]) => setData({...data, date: val})}/>
            </div>
            <div className={styles.picker}>
                <h4>Комментарии</h4>
                <TextArea className={styles.textarea} value={data.text}
                          onChange={(e) => setData({...data, text: e.target.value})}/>
            </div>
            <Buttons clearForm={clearForm}/>
        </form>
    );
}

export default Form;