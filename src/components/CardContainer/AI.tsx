"use client"
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";


const AI = () => {
  return (
        <CardContainer className="inter-var flex">
            <CardBody className="bg-gradient-to-l from-cyan-100 to-red-100 hover:bg-gradient-to-l hover:from-cyan-200 hover:to-red-200 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600"
                >
                Artificial Intelligence
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                <Image
                    src='/ai-club-logo.jpg'
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                />
                </CardItem>
                <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2"
                >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempora iusto nulla repellat commodi laudantium officiis asperiores consequuntur sequi eius!
                </CardItem>
            </CardBody>
        </CardContainer>
  )
}

export default AI