import style from './Modal.module.css'

import React, { useEffect } from 'react'


const Modal = ({largeImageURL, onToggleModal}) => {
    useEffect(() => {
        window.addEventListener('keydown', onHandleEscapeClick)
        return () => window.removeEventListener('keydown', onHandleEscapeClick)
    })
    const onHandleEscapeClick = (e) => e.code === "Escape" && onToggleModal();
    const onOverlayClick = (e) => e.target === e.currentTarget && onToggleModal();
    return (
        <div className={style.Overlay} onClick={onOverlayClick}>
            <div className={style.Modal}>
                <img src={largeImageURL} alt="" />
            </div>
        </div>
    );
}

export default Modal;
// class Modal extends Component {
//     state ={}
//     componentDidMount() {
//         window.addEventListener('keydown', this.onHandleEscapeClick)
//     }
//     componentWillUnmount() {
//         window.removeEventListener('keydown', this.onHandleEscapeClick)
//     }
    
//     onHandleEscapeClick = (e) => e.code === "Escape" && this.props.onToggleModal();
    
//     onOverlayClick = (e) => e.target === e.currentTarget && this.props.onToggleModal();
    
//     render() {
//         return (
//             <div className={style.Overlay} onClick={this.onOverlayClick}>
//                 <div className={style.Modal}>
//                     <img src={this.props.largeImageURL} alt="" />
//                 </div>
//             </div>
//         )
//     }
// }

// export default Modal;