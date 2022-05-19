import './Container.css'

const Container = ({ children }) => {
    return (
        <div data-testid="Container" className='container'>{children}</div>
    )
}

export default Container;