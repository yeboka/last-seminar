import React, { useEffect } from 'react';
import './App.css'

interface HeaderProps {
    name: string;
    setName: (value: string) => void
}

const Header: React.FC<HeaderProps> = ({name, setName}) => {

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
