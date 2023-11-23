import React from 'react'
import Image from './Image';
import Icon from './Icon';
export default function Video() {
    return (
        <div className='px-1 md:grid md:grid-cols-[20%,1fr] '>
            <div className='md:grid md:grid-cols-1 place-items-center md:p-5'>
                <div className='md:grid md:grid-cols-1 mb-3'>
                    <Image img="https://www.learninglinks.org.au/wp-content/uploads/2016/09/Successful-Study-Skills_Learning-Links-716x584.png?theia_smart_thumbnails_file_version=2" />
                    <Image img="https://www.learninglinks.org.au/wp-content/uploads/2016/09/Successful-Study-Skills_Learning-Links-716x584.png?theia_smart_thumbnails_file_version=2" />
                </div>
                <div className='flex justify-between px-1 md:w-full md:grid md:grid-rows-2 md:grid-cols-3 gap-2'>
                    <Icon text="Cam" icon="fa-solid fa-video" />
                    <Icon text="Mic" icon="fa-solid fa-microphone" />
                    <Icon text="Share" icon="fa-solid fa-share" />
                    <Icon text="Chat" icon="fa-solid fa-comment" />
                    <Icon text="Leave" icon="fa-solid fa-arrow-right" />
                </div>
            </div>
            <div className='md:p-4 '>
                {/* <img className='rounded-md md:w-full' src="https://www.shutterstock.com/image-vector/youtube-web-video-player-modern-260nw-484814197.jpg" alt="" /> */}
                <iframe className='rounded-md md:w-full md:h-full' src="https://www.youtube.com/embed/LwCRRUa8yTU?si=TKmrG3uOC1GVAxYC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    )
}
