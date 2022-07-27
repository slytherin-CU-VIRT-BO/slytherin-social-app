import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className='container'>
            &copy;{new Date().getFullYear()} by Slytherin House
        </div>
    </footer>
  )
}
