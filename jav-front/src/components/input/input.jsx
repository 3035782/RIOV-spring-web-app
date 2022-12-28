import './input.css'

export default function Input({ label, type, value, placeholder, change , disabled=false}) {
    return (
        <label>
            <p>{label}</p>
            <input disabled={disabled} type={type} value={value} placeholder={placeholder} onChange={({ target }) => change(target)} />
        </label>
    )
}