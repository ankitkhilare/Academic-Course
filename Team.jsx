import React from 'react'
import "./team.css"
import Back from "../common/back/Back"
import TeamCard from './TeamCard'
function Team() {
  return (
    <>
    <Back title="team"/>
     <section className='team padding'>
        <div className="container grid">
            <TeamCard/>
        </div>
     </section>
    </>
  )
}

export default Team
