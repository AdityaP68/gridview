import itemstyles from "../styles/Item.module.css";

export default function DataItem() {
  return (
    <div className={itemstyles.container}>
      <div className={itemstyles.img}>A</div>
      <div className={itemstyles.wrapper}>
        <div className={itemstyles.data}>
          <span>Heading</span>
          <p>this is the description of the item</p>
        </div>
        <button>Check Out</button>
      </div>
    </div>
  );
}
