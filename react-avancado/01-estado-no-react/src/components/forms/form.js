import { useState } from 'react';

const Form = (props) => {

    const [inputs, setinputs] = useState({
        Image: ''
    })

    const handleInputChange = (event) => {
        setinputs({
            image: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addCard(inputs)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='image'>Endereço da imagem da carta</label>
                    <input type="text" id="image" name="image" onChange={handleInputChange} value={inputs.image} />
                </div>
                <input type="submit" />

            </form>
        </>
    )
}

export default Form;