import cn from 'classnames';

type Props = {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent) => void
  touched: boolean | undefined
  error: string | undefined
  type?: React.HTMLInputTypeAttribute
  as?: 'textarea' | 'input'
}

export const Field: React.FC<Props> = ({ error, label, name, onChange, touched, value, type, as = 'input' }) => {
  let isError = touched && error;

  const errorClassesHelper = (defaultClasses: string, errorClasses: string, notErrorClasses?: string) => {
    if (notErrorClasses) {
      return cn(defaultClasses, isError ? errorClasses : notErrorClasses);
    } else {
      return cn(defaultClasses, isError && errorClasses);
    }
  }

  let inputClasses = errorClassesHelper('bg-transparent border-b-2 mt-2 focus:outline-none', 'text-error border-b-error', 'border-b-[#565656] text-primary-title')

  return <div className='flex flex-col mt-10'>
    <label className={errorClassesHelper('', 'text-error')} htmlFor={name}>
      <h6>{label}*</h6>
    </label>
    {as === 'input'
      ? <input
        className={inputClasses}
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
      />
      : <textarea
        className={cn('resize-none h-52', inputClasses)}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
      />
    }
    {isError ? (
      <p className='text-error mt-2 text-[14px] ml-auto'>{error}</p>
    ) : null}
  </div>
};