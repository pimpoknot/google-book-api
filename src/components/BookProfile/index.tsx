import { BookDetailsContainer, ArrowBack,BookCover } from './style'
import Image from 'next/image'
import Link from "next/link";
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

interface Props {
    image: string;
    title: string;
}


export function BookProfile(props: Props) {
    return (
        <BookDetailsContainer>
            <section>
                <ArrowBack>
                    <Link href="/">
                        <a>
                            <Image height={16} width={16} src={"/img/Back.svg"} alt={"Voltar"} />
                        </a>
                    </Link>
                </ArrowBack>
                <BookCover>
                    <Image width={160}height={230} src={props.image} alt={props.title} />
                </BookCover>
            </section>
        </BookDetailsContainer>
    )
}