"use client"
import { faqs } from "@/assets/Data";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { FiMinus, FiPlus } from "react-icons/fi";
import React from "react";

export default function Faqs() {
  return (
    <main className='container mt-20'>
        <section className='flex flex-col gap-16 items-center justify-center'>
            <h2 className='text-2xl font-semibold capitalize text-colorGray'>frequently asked questions</h2>
            <article className='grid xl:grid-cols-2 grid-cols-1 gap-8'>
                {faqs.map((item, id) => {
                    return (
                    <Accordion key={id} allowMultiple>
                        <AccordionItem className='bg-transparent shadow-none border border-textGray rounded-md p-4'>
                            {({ isExpanded }) => (
                                <>
                                <h2>
                                    <AccordionButton className="flex justify-between items-center">
                                        <Box  className='text-textGray leading-5 text-[15px] text-start'>
                                            {item.question}
                                        </Box>
                                        {isExpanded ? (
                                            <FiMinus className='text-textGray' />
                                        ) : (
                                            <FiPlus className='text-textGray' />
                                        )}
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} className='text-textGray text-[14px] mt-2 leading-5 font-normal'>
                                    {item.answer}
                                </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    </Accordion>
                    );
                })}
            </article>
        </section>
    </main>
  );
}
