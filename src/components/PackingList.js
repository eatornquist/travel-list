// import initialItems from '../data'
import Item from './Item'

export default function PackingList({ items, onDeleteItem, onToggleItems }) {
  return (
    <div className="list">
      <ul className="list">
        {items.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} onToggleItems={onToggleItems} key={item.id} />
        ))}
      </ul>
    </div>
  )
}
