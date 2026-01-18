import React from 'react'

export default function Alert(props) {
    const Capetalize = (text)=>{
const Text = text.toLowerCase();
return Text.charAt(0).toUpperCase()+Text.slice(1);
    }
  return (
    <div style={{height:'55px', marginTop:"60px"}}>{
   props.alert && <div className={`alert alert-${props.alert.type} d-flex align-items-center mx-1`} role="alert">
  <div>
    <strong>{Capetalize(props.alert.type)}</strong> : {props.alert.msg}
  </div>
</div>}
</div>
  )
}
