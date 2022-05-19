import './BtnContainer.css'

const BtnContainer = ({children}) =>{
    return (
        <div data-testid="btnContainer" className="BtnContainer">{children}</div>
    )
}

export default BtnContainer;