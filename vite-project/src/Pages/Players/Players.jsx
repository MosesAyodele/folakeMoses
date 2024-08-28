import React from 'react'
import "./Players.css"

const Players = () => {
  return (
    <div className='players-container'>
      <div className='player-header'>
        <h2 style={{color: "#90C4E2", fontSize: "30px", fontFamily: "Tahoma"}}>PLAYERS</h2>
        <p style={{fontSize: "13px", fontFamily: "Arial"}}>BROUGHT TO YOU BY   <img src="./cat.png" alt=""  style={{width: "30px", height: "30px"}}/></p>
      </div>
      <div className='playersBody-container'>
        <div className='goalkeepers-container'>
        <h2 style={{color: "#90C4E2", fontSize: "30px", fontFamily: "Tahoma"}}>GOALKEEPERS</h2>
        <section>
            <div>
            <img src="./cartson.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <h3>SCOTT CARSON</h3>
            </div>
            <div>
            <img src="./edi.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <h3>EEDERSON</h3>
            </div>
            <div>
            <img src="./stefan.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <h3>STEFAN ORTERGA</h3>
            </div>
        </section>
        </div>
        <div className='defenders-container'>
        <h2 style={{color: "#90C4E2", fontSize: "30px", fontFamily: "Tahoma"}}>DEFENDERS</h2>
        <section>
            <div>
            <img src="./akanji.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <p>MANUEL AKANJI</p>
            </div>
            <div>
            <img src="./ake.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <p>NATHAN AKE</p>
            </div>
            <div>
            <img src="./cancelo.webp" alt=""  style={{width: "100%", height: "70%"}}/>
                <p>JOAO CANCELO</p>
            </div>
            <div>
            <img src="./dias.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <p>RUBEN DIAS</p>
            </div>
        </section>
        <article>
            <div>
            <img src="./josko.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <p>GVARDIOL</p>
            </div>
            <div>
            <img src="./rico.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <p>RICO LEWIS</p>
            </div>
            <div>
            <img src="./john.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <p>JOHN STONES</p>
            </div>
            <div>
            <img src="./walker.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <p>KYLE WALKER</p>
            </div>
        </article>
        </div>
        <div className='midfielders-container'>
        <h2 style={{color: "#90C4E2", fontSize: "30px", fontFamily: "Tahoma"}}>MIDFIELDERS</h2>
        <section>
            <div>
            <img src="./bob.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <p>OSCAR BOBB</p>
            </div>
            <div>
            <img src="./kelvin.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <p>KELVIN DE BRUYNE</p>
            </div>
            <div>
            <img src="./kalvin.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <p>KALVIN PHILIPS</p>
            </div>
            <div>
            <img src="./jack.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <p>JACK GREALISH</p>
            </div>
        </section>
        <article>
            <div>
            <img src="./kovasic.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <p>MATEO KOVASIC</p>
            </div>
            <div>
            <img src="./nunes.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <p> NUNES</p>
            </div>
            <div>
            <img src="./doku.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <p>JEREMY DOKU</p>
            </div>
            <div>
            <img src="./rodri.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <p>RODRIGO</p>
            </div>
        </article>
        <article>
            <div>
            <img src="./savinho.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <h3>SAVINHO</h3>
            </div>
            <div>
            <img src="./phil.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <h3>PHIL FODEN</h3>
            </div>
            <div>
            <img src="./silver.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <h3>BERNARDO</h3>
            </div>
            <div>
            <img src="./jamrs.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <h3>JAMES MCATEE</h3>
            </div>
        </article>
        </div>
        <div className='attackers-container'>
        <h2 style={{color: "#90C4E2", fontSize: "30px", fontFamily: "Tahoma"}}>ATTACKERS</h2>
        <section>
            <div>
            <img src="./aloboy.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <h3>JULIAN ALVAREZ</h3>
            </div>
            <div>
            <img src="./erling.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <h3>ERLING HAALAND</h3>
            </div>
        </section>
        </div>
        <div className='manager-container'>
        <h2 style={{color: "#90C4E2", fontSize: "30px", fontFamily: "Tahoma"}}>MANAGER</h2>
        <section>
            <div>
            <img src="./pepp.webp" alt=""  style={{width: "100%", height: "70%"}}/>
            <h3>PEP GUARDIOLA</h3>
            </div>
        </section>
        </div>
      </div>
    </div>
  )
}

export default Players
