import Header from '../components/Header'

const OnlyHeader = ({children}) => {
    return( 
    <div>
        <Header />
        <div className="container">{children}</div>
    </div>
    )
}

export default OnlyHeader