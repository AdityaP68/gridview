import styles from '../styles/Item.module.css'
import DataItem from './DataItem'

export default function DataDisplay(){
    return (
        <div className= {styles.grid_wrapper}>
            <DataItem/>
            <DataItem/>
            <DataItem/>
            <DataItem/>
            <DataItem/>
            <DataItem/>
            <DataItem/>
            <DataItem/>
        </div>
    )
}