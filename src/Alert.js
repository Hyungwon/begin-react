function Alert(){
  const alert = () => {
    window.alert('Alert');
  }

  return (
    <button onClick={alert}> Click alert </button>
  )
}

export default Alert;