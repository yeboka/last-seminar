import React, { useEffect } from 'react';
import './App.css'
import { locale } from './App';

interface HeaderProps {
    name: string;
    setName: (value: string) => void
}

const Header: React.FC<HeaderProps> = ({name, setName}) => {
  
    function some () {
        let fromBack: locale = "ru"
    console.log(fromBack);
    }

    useEffect(() => {
        setName("Nuridin");
    }, [])

  return (
    <>
      <div>
        <h3>HEADER</h3>
        <p>hello {name}</p>
      </div>
    </>
  )
}

export default Header
