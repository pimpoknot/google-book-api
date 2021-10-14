import { InputBox, Input } from './style'
import Image from 'next/image'
import SearchImage from '../../../public/img/search.svg'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'


interface SearchFormProps {
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleFormSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
    value: string;
    placeholder: string;
  }

export function InputSearch (props: SearchFormProps) {


    return (
        <InputBox>
        <Image  src={SearchImage}/>
            <Input  
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.handleInputChange}
                onSubmit={props.handleFormSubmit}
            />
        </InputBox>
    )
}