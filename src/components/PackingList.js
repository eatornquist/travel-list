// import initialItems from '../data'
import Item from './Item'

export default function PackingList({ items }) {
  return (
    <div className="list">
      <ul className="list">
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}
