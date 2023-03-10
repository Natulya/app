import LoaderStyles from './Loader.module.css'

export function Loader() {
  return (
    <div className="d-flex justify-content-center">
      <div className={LoaderStyles['lds-spinner']}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
