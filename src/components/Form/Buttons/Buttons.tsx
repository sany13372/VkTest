import {FC} from 'react';
import styles from "../Form.module.scss";
import {Button} from "antd";

const Buttons: FC<{clearForm:() => void}> = ({clearForm}) => {
    return (
        <div className={styles.buttons}>
            <Button htmlType={'submit'}>Отправить</Button>
            <Button onClick={() => clearForm()}>Очистить</Button>
        </div>
    );
}

export default Buttons;