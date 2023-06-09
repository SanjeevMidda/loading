import React from 'react'

function Blob({color, animation}) {

    let styles = {
        backgroundColor: color,
        animation: animation,
    }

  return (
    <div className="blob" style={styles}></div>
  )
}

export default Blob