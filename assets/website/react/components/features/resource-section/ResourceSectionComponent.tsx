import React from "react";
import {Fade, Slide} from "react-awesome-reveal";
import {HTMLMarkupRender} from "../../widgets/HTMLMarkupRender";

export function ResourceSectionComponent(props: {title?: string, content?: string, thumbnails?: string[]}) {

    return <div className='flex'>
        <aside className="space-y-6 xl:basis-1/2 content-center">
            <Fade duration={1000} triggerOnce cascade>
                <h3 className="text-4xl font-semibold text-primary">{props.title}</h3>
                <p className="font-montserrat-sans text-white w-3/5">
                    <HTMLMarkupRender rawContent={props.content ?? ''}/>
                </p>
            </Fade>
        </aside>
        <aside className="xl:basis-1/2 relative">
            <figure className="w-1/2 aspect-square absolute z-10 rounded-sm overflow-hidden">
                <Slide direction='left' triggerOnce className='w-full h-full' delay={0}>
                    <img src={props.thumbnails?.[0] ?? ''} className="w-full h-full object-cover"/>
                </Slide>
            </figure>
            <figure className="w-[62.5%] top-[55%] left-1/4 z-0 aspect-video absolute rounded-sm overflow-hidden">
                <Slide direction='up' triggerOnce className='w-full h-full' delay={300}>
                    <img src={props.thumbnails?.[1]} className="w-full h-full object-cover"/>
                </Slide>
            </figure>
            <figure className="w-[55%] top-2/12 left-[45%] z-20 aspect-video absolute rounded-sm overflow-hidden">
                <Slide direction='right' triggerOnce className='w-full h-full' delay={600}>
                    <img src={props.thumbnails?.[2]} className="w-full h-full object-cover"/>
                </Slide>
            </figure>
            <div className="w-1/2 aspect-square"></div>
            <div className="w-1/2 aspect-video"></div>
        </aside>
    </div>
}
