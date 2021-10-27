import './App.css';
import React, { useState, useEffect } from 'react'
import Searchbar from './components/Searchbar/Searchbar';

import {getPictures} from './services/api.js'
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';

const App = () => {
  const [picture, setPicture] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [largeImageURL, setLargeImageURL] = useState("")
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    if (page > 1) {
      morePictures()
    }
  }, [page])
  const onHandleChange = (e) => {
    setSearch(e.target.value)
  }
  const onHandleSubmit = (e) => {
    e.preventDefault()
    setPage(1)
    firstSearch()
    setTimeout(() => {
      scroll()
    }, 600); 
   }
  const onHandleMorePicture = (e) => {
    setPage(prev=>(prev + 1))
 }
const morePictures = () => {
    onToggleLoader()
    getPictures(search, page).
    then(data=>setPicture(prev=>([...prev, ...data]))).finally(onToggleLoader())
    setTimeout(() => {
      scroll()
    }, 600);
 }
const firstSearch = () => {
    onToggleLoader()
    getPictures(search, page).
    then(data=>setPicture(data)).finally(onToggleLoader())
 }
const scroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
 }
const onToggleModal = (e) => {
    setIsOpenModal((prev) => (!prev))
 }
const onModalImageUrl = (e) => {
    setLargeImageURL(e.target.id)
    onToggleModal()    
 }
const onToggleLoader = () => {
   setLoader((prev) =>(!prev))
 }
  return (
    <>
      <Searchbar 
        onHandleSubmit={onHandleSubmit}
        onHandleChange={onHandleChange}
        search={search}
      />
      {loader && <Loader/>}
      <ImageGallery pictures={picture} onToggleModal={onModalImageUrl}/>
      {!!picture.length  && <Button getMorePictures={onHandleMorePicture}/>}
      {isOpenModal && <Modal largeImageURL={largeImageURL} onToggleModal={onToggleModal}/>}
    </>
  );
}

export default App;



