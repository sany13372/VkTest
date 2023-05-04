import {FC} from 'react';
import {ISelect} from "../Form";
import {Select} from "antd";
import styles from '../Form.module.scss'

interface IPicker {
    title:string
    value: string | number
    onChange:(val:any) => void
    options: ISelect[]
}

const Picker: FC<IPicker> = ({title,value,onChange ,options}) => {
    return (
        <div className={styles.picker}>
            <h4>{title}</h4>
            <Select value={value} onChange={onChange} options={options}/>
        </div>
    );
}

export default Picker;