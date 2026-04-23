import React, { useState, useEffect } from 'react'

const HOMEKEY =' ➧ HOME ';
const BLOGKEY = '➧ MY BLOGS';
const ABOUTKEY = '➧ ABOUT ME';
const Navbar = ( 
  {
    changedPage, style, offset
  }
) =>{

  return (
    <>
    <div className="navbar" style={style} >
    <label className="link"  onClick={()=>{
        changedPage(1);
     }}><a href='#homepage' > {HOMEKEY} </a></label>
     <label className="link"   onClick={()=>{
        changedPage(2);
     }}> <a href='#blog'>{BLOGKEY}</a> </label>
     <label className="link"    onClick={()=>{
        changedPage(3);
     }} > <a href='#aboutme'>{ABOUTKEY}</a> </label>
   
    </div>

    </>
  );
};

export default Navbar;