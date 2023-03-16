import React from 'react'

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="header_content">
                        <div className="header_section">
                            <h2>Hello, I Am</h2>
                            <h1>Ivin Varghese</h1>
                            <p>work correctly both with client-side routing <br/> and a non-root public URL.</p>
                            <div className="header_buttons">
                                <a href="header" className="btn btn-outline">
                                    Hire Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <img src={require("../assets/powell-bg.png")} alt="" className="image" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header