import React from 'react'

type IType = 'text' | 'number' | 'email' | 'file'
interface IProps {
  id: string
  name: string
  type: IType
  value: string
  placeholder?: string
  className?: string
  style?: React.CSSProperties
  onChange?: <T>(event: React.ChangeEvent<T>) => void
}

export const Input: React.FC<IProps> = ({
  id,
  name,
  type = 'text',
  onChange,
  value = '',
  placeholder = ' ',

  className,
  ...rest
}) => {
  return (
    <>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value}
        {...rest}
      />
    </>
  )
}
