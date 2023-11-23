import React, { useState, useEffect } from 'react';
import "../App.css";
import Button from './Button';
import Video from './Video';
import Classroom from './Classroom';
import WhiteBoard from './WhiteBoard';
import SlideShow from './SlideShow';
import Document from './Document';

export default function Body() {
    const [navToggle, setNavToggle] = useState(false);
    const [component, setComponent] = useState('Videos');
    useEffect(() => {
        const handleResize = () => {
            // Set navToggle to true on small screens, false on large screens
            setNavToggle(window.innerWidth < 768);
        };

        // Run on mount
        handleResize();

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (<>
        <div className='grid grid-div'>
            <div id="nav-bar" className=' min-h-[95vh]'>
                <input id="nav-toggle" className=' ' type="checkbox" checked={navToggle} onClick={() => setNavToggle(!navToggle)} />
                <div id="nav-header" className={`hidden sm:flex`}><img id="nav-title" width="50px" src="https://cdn-icons-png.flaticon.com/128/4926/4926550.png" alt="" /><label className='flex active:opacity-20' htmlFor="nav-toggle"><span id="nav-toggle-burger"></span></label>
                    <hr />
                </div>
                <div id="nav-content">
                    <div className="nav-button"><i className="fas fa-regular fa-bell"></i><span>Notification</span></div>
                    <div className="nav-button"><i className="fas fa-regular fa-clock"></i><span>Time</span></div>
                    <hr />
                    <div className="nav-button"><i className="fas fa-regular fa-eye"></i><span>View</span></div><hr />
                    <hr />
                    <div className="nav-button"><i className="fas fa-regular fa-id-badge"></i><span>Contact</span></div>
                    <hr />
                    <div className="nav-button"><i className="fas fa-chart-line"></i><span>Trending</span></div>
                    <hr />
                    <div className="nav-button"><i className="fas fa-fire"></i><span>Challenges</span></div>
                    <hr />
                    <div className="nav-button"><i className="fas fa-magic"></i><span>Spark</span></div>
                    <hr />
                    <div id="nav-content-highlight"></div>
                </div><input id="nav-footer-toggle" type="checkbox" />
            </div>
            <div className='pt-1'>
                <div style={{ background: "#eeedf3" }} className='grid grid-cols-2 grid-rows-2 sm:mx-3 mx-1 my-1 px-2.5 py-1.5 rounded-lg sm:rounded-full sm:flex sm:justify-between'>
                    <Button text="Classroom" icon="fa-solid fa-house-user" setComponent={setComponent} selected={component} />
                    <Button text="Whiteboard" icon="fa-solid fa-chalkboard"setComponent={setComponent} selected={component}/>
                    <Button text="Videos" icon="fa-solid fa-video" setComponent={setComponent} selected={component}/>
                    <Button text="Slide Show" icon="fa-solid fa-tv" setComponent={setComponent} selected={component}/>
                    <Button text="Documents" icon="fa-regular fa-file" setComponent={setComponent} selected={component}/>
                </div>
                {component == "Videos" ? <Video/> : ""}
                {component == "Classroom" ? <Classroom/> : ""}
                {component == "Whiteboard" ? <WhiteBoard/> : ""}
                {component == "Slide Show" ? <SlideShow/> : ""}
                {component == "Documents" ? <Document/> : ""}
            </div>
        </div>
    </>
    )
}
