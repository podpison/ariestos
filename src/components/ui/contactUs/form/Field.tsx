import cn from 'classnames';
import { useRef, useEffect, useState } from 'react';

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

const gradientLineDefaultSize = 40; //px-5
const inputPaddings = 40;

export const Field: React.FC<Props> = ({ error, label, name, onChange, touched, value, type, as = 'input' }) => {
  const inputRef = useRef<any>(null);
  const inputTextSpanRef = useRef<HTMLSpanElement>(null);
  const [gradientLineWidth, setGradientLineWidth] = useState(40);

  let isError = touched && error;

  const errorClassesHelper = (defaultClasses: string, errorClasses: string, notErrorClasses?: string) => {
    if (notErrorClasses) {
      return cn(defaultClasses, isError ? errorClasses : notErrorClasses);
    } else {
      return cn(defaultClasses, isError && errorClasses);
    }
  };

  let inputClasses = errorClassesHelper('bg-transparent border-b mt-2 px-5 focus:outline-none', 'text-error border-b-error', 'border-b-[#565656] text-primary-title')

  useEffect(() => {
    let spanOffsetWidth = inputTextSpanRef.current?.offsetWidth;
    let inputOffsetWidth = inputRef.current?.offsetWidth;

    if (inputRef.current && inputTextSpanRef.current && spanOffsetWidth !== undefined) {
      if (spanOffsetWidth < gradientLineDefaultSize && gradientLineWidth > gradientLineDefaultSize) {
        setGradientLineWidth(gradientLineDefaultSize);
      } else if (spanOffsetWidth >= gradientLineDefaultSize) {
        if (spanOffsetWidth < inputOffsetWidth - inputPaddings - 5) { // inputOffsetWidth - 35 due to paddings
          setGradientLineWidth(spanOffsetWidth);
        } else if ((spanOffsetWidth > inputOffsetWidth - inputPaddings - 5) && inputOffsetWidth !== spanOffsetWidth) {
          let textClientWidth = inputRef.current?.clientWidth;
          setGradientLineWidth(textClientWidth - gradientLineDefaultSize);
        }
      };
    }
  }, [inputRef.current, inputTextSpanRef.current, value]);

  return <div className='flex flex-col mt-10'>
    <label className={errorClassesHelper('mx-5', 'text-error')} htmlFor={name}>
      <h6>{label}*</h6>
    </label>
    <div className='relative flex flex-col w-full'>
      {as === 'input'
        ? <input
          className={inputClasses}
          id={name}
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          ref={inputRef}
        />
        : <textarea
          className={cn('resize-none h-52', inputClasses)}
          id={name}
          name={name}
          onChange={onChange}
          value={value}
          ref={inputRef}
        />
      }
      <span className="absolute invisible opacity-0" ref={inputTextSpanRef}>{value}</span>
      <div className='liner-agadint-bg h-[3px] absolute -bottom-px left-5' style={{ width: `${gradientLineWidth}px` }} />
    </div>
    {isError ? (
      <p className='text-error mt-2 text-[14px] ml-auto'>{error}</p>
    ) : null}
  </div>
};