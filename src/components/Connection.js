import React from 'react';
import './connection.css';

function Connection () {
    
    return (
        <div className = 'connection'>
            <div className = 'connection-content'>
                <div className = 'connection-title'>Напишите нам и мы вам обязательно ответим</div>
                <form class = 'connection-form' action='https://formspree.io/f/xeqbpwzd' method='post'>
                    <input type="text" className = 'connection-input' placeholder="Имя" />
                    <input type="email" className = 'connection-input' placeholder="E-mail" />
                    <textarea name="two" className = 'connection-input connection-textarea' placeholder="Сообщение" required />
                    <input className = "connection-button" type="submit" name="buttonForm" value="Отправить" />
                </form>
            </div>
        </div>
    )

    }


export default Connection
