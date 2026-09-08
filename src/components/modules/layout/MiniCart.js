import React from 'react'

export default function MiniCart({IsShowMiniCart, setIsShowMiniCart}) {
  return (
    <div className={`absolute left-0 top-15 p-6 bg-Gray-10 border border-Gray-30 rounded-lg transition ${IsShowMiniCart ? "opacity-100 visible" : "opacity-0 invisible"}`}>MiniCart</div>
  )
}
