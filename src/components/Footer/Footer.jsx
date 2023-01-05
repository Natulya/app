import foterStyles from './footer.module.css'

export function Footer({ clearAllTodos }) {
  const clearAllHandler = () => {
    clearAllTodos()
  }

  return (
    <footer className={foterStyles.wr}>
      <div>
        <button onClick={clearAllHandler} type="button" className="btn btn-primary">
          Clear all
        </button>
      </div>
    </footer>
  )
}
