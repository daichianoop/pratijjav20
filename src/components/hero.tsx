import React from 'react'
import styles from "@/styles/hero.module.css"

const Hero = () => {
  return (
    <>
      <div className={styles["hero-container"]}>
        <h1 className={styles["heading1"]}>20th Edition of</h1>
        <img src="/building.png" className={styles["hero-image"]} alt="" />
      </div>
    </>
  )
}

export default Hero
