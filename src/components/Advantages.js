import React from 'react';
import './advantages.css';

function Connection () {
    
    return (
<div className = 'advantages'>
<div className = 'advantages-content'>            
        <div className = 'advantages-title'>What makes our brand different</div>
        <div className = 'advantage-content'>
            <div className = 'advantage'>
                <img className = 'advantage-image' src="./images/label-1.png"  alt = 'Картинка' />
                <div className = 'advantage-title'>
                        Next day as standard
                </div>
                <div className = 'advantage-text'>
                        Order before 3pm and get your order the next day as standard
                </div>   
            </div>            
            <div className = 'advantage'>
                    <img className = 'advantage-image' src="./images/label-2.png"  alt = 'Картинка' />
                    <div className = 'advantage-title'>
                            Made by true artisans
                    </div>
                    <div className = 'advantage-text'>
                            Handmade crafted goods made with real passion and craftmanship
                    </div>   
                </div>
                <div className = 'advantage'>
                        <img className = 'advantage-image' src="./images/label-3.png"  alt = 'Картинка' />
                        <div className = 'advantage-title'>
                                Unbeatable prices
                        </div>
                        <div className = 'advantage-text'>
                                For our materials and quality you won’t find better prices anywhere
                        </div>   
                    </div>
                    <div className = 'advantage'>
                            <img className = 'advantage-image' src="./images/label-4.png"  alt = 'Картинка' />
                            <div className = 'advantage-title'>
                                    Recycled packaging
                            </div>
                            <div className = 'advantage-text'>
                                    We use 100% recycled to ensure our footprint is more manageable
                            </div>   
                        </div>     
        </div>            
</div>
</div>
    )

    }


export default Connection