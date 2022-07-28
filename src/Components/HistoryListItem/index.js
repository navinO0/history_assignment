import './index.css'

const SearchHistoryItem = props => {
  const {eachItem, onDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachItem
  const deletion = () => {
    onDelete(id)
  }
  return (
    <li className="list-item-container">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="web-item-container">
        <img src={logoUrl} className="brand-logo" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domine-url">{domainUrl}</p>
      </div>
      <button testid="delete" type="button" className="delete-img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          onClick={deletion}
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default SearchHistoryItem
