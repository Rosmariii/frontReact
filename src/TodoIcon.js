import { ReactComponent as CheckIcon } from './check.svg'

// const IconType = { 
//     "active" : <CheckIcon />  
// } 
function TodoIcon({ type, onClick }) {
    return (
        < span className= {`TodoItem-complited TodoItem-complited--${type}`} 
        onClick={onClick}
        >
        <CheckIcon className='Icon-svg' />
        {/* { IconType[type] } */}
        </span>
        
    )
}

export { TodoIcon }