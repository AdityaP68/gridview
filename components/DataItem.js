import itemstyles from "../styles/Item.module.css";

export default function DataItem({
  heading = "this is heading",
  description = "this is description",
}) {
  return (
    <div className={itemstyles.container}>
      <div className={itemstyles.img}>A</div>
      <div className={itemstyles.wrapper}>
        <div className={itemstyles.data}>
          <span>{heading}</span>
          <p>{description}</p>
        </div>
        <button>Check Out</button>
      </div>
    </div>
  );
}
