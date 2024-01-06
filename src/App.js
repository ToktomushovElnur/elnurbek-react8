import React from 'react';
import { useState, useEffect} from 'react';
import './index.css';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Section />
            <Footer />
        </div>
    );
};

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1>Мой Сайт</h1>
                <ul className="nav-links">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>
        </nav>
    );
};
function Section(){
    const [form, setForm] = useState({
        firstName: 'Barbara',
        lastName:'Johnson',
        phone:'+996500425556'
    });
    return(
        <div className="size">
            <label>
                First name:
                <input value={form.firstName} onChange={e =>
                    setForm({
                        ...form,
                        firstName: e.target.value
                    })
                }/>
            </label>
            <label>
                Last name:
                <input value={form.lastName} onChange={e =>
                    setForm({
                        ...form,
                        lastName: e.target.value
                    })
                }/>
            </label>
            <label>
                Numbers :
                <input value={form.phoneNumber} onChange={e => {
                    setForm({
                        ...form,
                        phoneNumber: e.target.value
                    })
                }}/>
            </label>
            <p>
                {form.firstName}{''}
                {form.lastName}{''}
                {''}({form.phoneNumber})
            </p>
        </div>
    )
}
const AnimatedHeaderWithEffect = () => {
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const handleFocus = () => {
            setIsFocused(true);
        };

        const handleBlur = () => {
            setIsFocused(false);
        };

        const inputElement = document.getElementById('animatedInput');

        inputElement.addEventListener('focus', handleFocus);
        inputElement.addEventListener('blur', handleBlur);

        return () => {
            inputElement.removeEventListener('focus', handleFocus);
            inputElement.removeEventListener('blur', handleBlur);
        };
    }, []);

    return (
        <div>
            <h1 className={isFocused ? 'focused' : ''}>Анимированный Заголовок</h1>
            <input id="animatedInput" type="text" placeholder="Фокус!" />
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Мой Сайт. Все права защищены.</p>
        </footer>
    );
};

export default App;
