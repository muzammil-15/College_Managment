import React from 'react';
import youtube from '../assets/youtube.png'

function Documentary() {
    return (
        <div className="flex flex-col items-center m-10">
            <h1 className="text-3xl font-bold mb-4">Documentary</h1>
            <div className="w-full md:w-2/3 lg:w-full xl:w-5/6 h-[60vh]">
                <iframe
                    title="Documentary Video"
                    src="https://www.youtube.com/embed/your_video_id"
                    className="w-full h-80 md:h-96 lg:h-full mt-4"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default Documentary;
