import React from 'react'
import "./TeamNews.css"
import { FaArrowRightLong } from "react-icons/fa6";

const TeamNews = () => {
  return (
    <div className='team-container'>
      <div className='team-wrapper'>
        <div className="team-holder">
        <section>
        <div className='team-one'>
           <section > 
           <img src="./Gvsrdiol.jpeg" alt="" style={{width: "100%", height: "50%" }}/> 
           <p>Gvardiol enjoying New York experience ahead of AC Milan clash</p>
           <p style={{fontSize: "15px", fontWeight: "600", fontSize: "17px"}}>MEN'S TEAM</p>
           </section>
           <section>
            <img src="./pepball.jpeg" alt="" style={{width: "100%", height: "50%" }}/>
            <p>Pep calls Bobb 'electric' in the one-on-one and praises his all-round performance. #mcfc</p>
           <p style={{fontSize: "15px", fontWeight: "600", fontSize: "17px"}}>MEN'S TEAM</p>
           </section>
        </div>
        <div className='team-two'>
            <section>
                <img src="./players.jpeg" alt="" style={{width: "100%", height: "45%", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}/>
                <p> New York experience ahead of AC Milan clash</p>
           <p style={{fontSize: "15px", fontWeight: "600", fontSize: "10px"}}>PICTURE SPECIAL</p>
            </section>

            <section>
            <img src="./haaland.jpeg" alt="" style={{width: "100%", height: "45%",backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}/>
            <p> New York experience ahead of AC Milan clash</p>
           <p style={{fontSize: "15px", fontWeight: "600", fontSize: "10px"}}>MEN'S TEAM</p>

            </section>
            <section>
            <img src="./acmilan.jpeg" alt="" style={{width: "100%", height: "45%",backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}/>
            <p>New York experience ahead of AC Milan clash</p>
           <p style={{fontSize: "15px", fontWeight: "600", fontSize: "10px"}}>MEN'S TEAM</p>

            </section>
            <section>
            <img src="./foden.jpeg" alt="" style={{width: "100%", height: "45%",backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}/>
            <p> New York experience ahead of AC Milan clash</p>
           <p style={{fontSize: "15px", fontWeight: "600", fontSize: "10px"}}>CLUB NEWS</p>

            </section>
        </div>
        <div className='team-three'>
            <section>
            <img src="kickoff.jpeg" alt="" style={{width: "100%", height: "45%", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}/>
                <p style={{fontSize: "15px", fontWeight: "100"}}> New York experience ahead of AC Milan clash</p>
            </section>

            <section>
            <img src="pepgad.jpeg" alt="" style={{width: "100%", height: "45%", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}/>
                <p style={{fontSize: "15px", fontWeight: "100"}}> New York experience ahead of AC Milan clash</p>
            </section>

            <section>
                  <img src="./alvarez.jpeg" alt="" style={{width: "100%", height: "45%", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}/>
                <p style={{fontSize: "15px", fontWeight: "100"}}> New York experience ahead of AC Milan clash</p>
            </section>
            <div></div>
        </div>
        </section>

           <div className='fixtures'>
            <section className='live'> </section>
            <section className='score'></section>
          </div>
     </div>
     <div className='line-break'>
        <div></div>
        <section> MORE NEWS   <FaArrowRightLong /></section>
        <div></div>
     </div>
   </div>
</div>
  )
}

export default TeamNews



        //  background-position: center;
        //     background-size: contain;
        //     background-repeat: no-repeat; 