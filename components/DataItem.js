import itemstyles from '../styles/Item.module.css'


export default function DataItem(){
    return (
        <div className={itemstyles.container}>
                <div className={itemstyles.img}>A</div>
                <div className={itemstyles.data}>LoremIpsum</div>

        </div>
    )
}