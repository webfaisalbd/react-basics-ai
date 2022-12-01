import React, { useState } from 'react'
import Faq from './Faq';

import { faqsData } from './mydata'

const Faqs = () => {
    const [faqs, setFaqs] = useState(faqsData);
    return (

        <main>
            <section>
                <h1 style={{textAlign: "center"}}>FAQs</h1>
                {faqs.map((faq)=> (
                    <Faq {...faq} key={faq.id} />
                ) )}
            </section>
        </main>
    )
}

export default Faqs