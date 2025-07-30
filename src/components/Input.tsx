import { IInput } from "@/types/index"

const Input = <TField extends string>({ title, type, className, register, errors }: IInput<TField>) => {
    return (
        <>
            <label className="form__section-label">
                <p className="form__section-text">{title}</p>
                <input className={className} {...register} type={type} />
            </label>
            <small className="form__section-error">{errors}</small>
        </>

    )
}

export default Input