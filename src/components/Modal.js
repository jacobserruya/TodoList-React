import React, { useState } from "react"
import Card from "./card"

function Modal(props) {

        function hideModal (e) {
                let target =e.target
                if(target.id=="modal")  /*so quero q desapareca quando clicar fora do card*/
                props.onHideModal()
           }

        
          

    return (

        <div id = "modal" onClick={hideModal} className={props.show?"modal":"modal hide"}>
            <Card className="cardModal">
                {props.children}   {/*isso faz que eu possa passar as propiedades dele dentro da tag
                do component */}    
            </Card>
            </div>

    )


}


export default Modal