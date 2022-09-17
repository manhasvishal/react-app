import './Input.css'

function Input(props) {
    return (
        <div>
            <label for="fname">{props.text}</label>
            <input type="text" id="fname" name="firstname" placeholder={props.text} />
        </div>
    )
}

export default Input;
