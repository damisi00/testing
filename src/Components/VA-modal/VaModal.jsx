import React from 'react'
import './Va1.css';
import CloseButton from '../../assets/close-square.png';
import TalkingMan from '../../assets/talking.png';
// import MobileNav from './MobileNav';
// import TaskSideBar from './TaskSideBar';

const VaModal = (props) => {
    const fName = 'Michael';

  return (
    <div>
        <main className='task-layout'>
            {/* <MobileNav /> works for top bar on mobile & desktop*/}

            
            {/* <TaskSideBar /> */}
            <section className='va-main' {...props}>
                <a href='/' className='cancel-button' onClick={props.onClose} >
                    <img src={CloseButton} alt='close button' />
                </a>
                <div className='calling-img'>
                    <img src={TalkingMan} alt='talking man' />
                </div>
                <div className='talking-text'>
                    <h4>Hello, my name is {fName} and I am your virtual assistant.</h4>
                    <p>I would make sure you do not forget your tasks by giving you a call.</p>
                </div>
                <div className='talking-btns'>
                    <button className='remind-me'>Remind me</button>
                    <button className='no-thanks'>No, Thanks</button>
                </div>
            </section>
        </main>
    
        

    </div>
  )
}

export default VaModal