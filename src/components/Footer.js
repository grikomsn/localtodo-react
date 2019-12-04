import './Footer.scss'

import React from 'react'

export default function Footer() {
  function resetAndReload() {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <footer>
      <button type="reset" onClick={resetAndReload}>
        Reset and reload
      </button>

      <br />

      <small>
        <a href="https://github.com/grikomsn/localtodo-react">
          View source on GitHub
        </a>
      </small>
    </footer>
  )
}
