import React from 'react'
import { Feature } from '../../components';
import './whatgpt3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin section__round' id='wgpt3'>
        <div className='gpt3__whatgpt3-feature'>
            <Feature title="W czego składa się nasza ofera?" text=""/>
        </div>
        <div className='gpt3__whatgpt3-heading'>
            <h3 className='gradient__text__normal'>
ZRB Semax oferuje szeroki wachlarz usług, co pozwala na kompleksowe działanie w ramach jednej firmy. Dzięki temu Klient ma dostęp do różnorodnych usług, które są świadczone w ramach naszej współpracy.</h3>
        </div>
        <div className='gpt3__whatgpt3-container'>
            <Feature title="USŁUGI ELEKTRYCZNE" text="○ Pomiary elektryczne \n○ Usuwanie awarii elektrycznych \n○ Instalacje elektryczne \n○ Montowanie instalacji oświetlenia LED"/>
            <Feature title="USŁUGI REMONTOWE" text="○ Malowanie i tapetowanie\n○ Układanie glazury\n○ Wykonywanie prac posadzkarskich\n○ Kompleksowe remonty łazienek\n○ Wykonywanie ścian działowych oraz sufitów podwieszanych z płyt G-K\n○ Kempleksowa realizacja usług remontowych"/>
            <Feature title="USŁUGI BUDOWLANE" text="○ Prace murarskie oraz tynkarskie\n○ Likwidacja barier architektonicznych\n○ Łazienki dla niepełnosprawnych (PEFRON)"/>
        </div>
    </div>
  )
}

export default WhatGPT3