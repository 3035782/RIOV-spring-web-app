import './input.css'

export default function CheckBox({ label, type='checkbox', checked, placeholder, change }) {
    return (
        <div className='checkbox'>
            <input type={type} checked={checked} placeholder={placeholder} onChange={({ target }) => change(target)} />
            <p>{label}</p>
        </div>
    )
}