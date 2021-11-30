function InputField({ labelName, inputType, inputId, inputName, formValue, setFormValue }) {

    return (
        <>
            <label htmlFor={inputName} className="form-in-line"> {labelName}
                <input
                    type={inputType}
                    id={inputId}
                    name={inputName}
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                />
            </label>
        </>
    );
}

export default InputField;



